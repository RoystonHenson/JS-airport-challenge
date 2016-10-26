function Weather() {
}

Weather.prototype.isStormy = function() {
  return (this.random() > 0.7);
}

Weather.prototype.random = function() {
  return Math.random();
}
