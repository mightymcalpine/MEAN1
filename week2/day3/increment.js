module.exports = increment;

function increment(step) {
  let count = 0;
  function add() {
    count += step;
    return count;
  }
  return add;
}
