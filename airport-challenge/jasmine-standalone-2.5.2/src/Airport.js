
Airport = function() {
  this._planesArray = [];
};
Airport.prototype.land = function(plane) {
  this._planesArray.push(plane);
};
