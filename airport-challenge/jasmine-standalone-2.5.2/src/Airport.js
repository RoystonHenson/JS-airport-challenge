
Airport = function(weather) {
  this._planesArray = [];
  this.weather = weather;
};

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy()) {
    throw new Error("Cannot land: stormy weather!");
  } else {
    this._planesArray.push(plane);
    plane.isLanded = true
  }
};

Airport.prototype.takeOff = function(plane) {
  if (this.weather.isStormy()){
    throw new Error("Cannot take off: stormy weather!")
  } else {
    removeItem(this._planesArray, plane)
    plane.isLanded = false
  }
};

function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
            }
    }
}
