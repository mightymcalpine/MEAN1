

// module.exports = {
//   area: function() {},
//   circumference: function() {}
// };


module.exports.area = function(r) {
  return Math.PI * Math.pow(r, 2);
};
module.exports.circumference = function(r) {
  return 2 * Math.PI * r;
};

// module.exports = [];
