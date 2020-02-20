module.exports = function towelSort (matrix) {
  let sorted = [];
  if (arguments.length !== 1 || matrix == []) {
    return sorted;
  }
  for (let count = 0; count < matrix.length; count += 1) {
    sorted = (count % 2 === 0) ? sorted.concat(matrix[count]) : sorted.concat(matrix[count].reverse());
  }
return sorted;
}
