module.exports = function towelSort (matrix) {
  if (!matrix) return []
  if (matrix.length === 0) return []

  var flattened = matrix.reduce((acc, currentValue, currentIndex) => {
    if(currentIndex % 2 === 0) {
      return acc.concat(currentValue)
    } else {
      return acc.concat(currentValue.reverse())
    }
  }, []);

  return flattened
}
