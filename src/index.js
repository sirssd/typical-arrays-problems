
exports.min = function min (array) {
  if(typeof array != 'object' || array.length == 0) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if(typeof array != 'object' || array.length == 0) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if(typeof array != 'object' || array.length == 0) return 0;
  let sum = array.reduce((res, item) => {
    return res += item
  }, 0);
  return sum/array.length;
}
