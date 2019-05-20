/* @requires mapshaper-polygon-dissolve2 */


// Newest version, with gap and overlap repair
api.dissolve2 = function(layers, dataset, opts) {
  layers.forEach(internal.requirePolygonLayer);
  T.start();
  var nodes = internal.addIntersectionCuts(dataset, opts);
  T.stop('Add cuts');
  return layers.map(function(lyr) {
    return internal.dissolvePolygonLayer2(lyr, dataset, opts);
  });
};
