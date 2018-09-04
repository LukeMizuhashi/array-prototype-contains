// This makes array.contains(thing)? return a boolean.
Array.prototype.contains = function(item) {
  return this.indexOf(item) >= 0;
};

