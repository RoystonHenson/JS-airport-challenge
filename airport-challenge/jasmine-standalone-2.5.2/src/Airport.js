var DEFAULT_CAPACITY = 5;

Airport = function(weather, capacity) {
  this._planesArray = [];
  this.weather = weather || new Weather();
  this.capacity = capacity || DEFAULT_CAPACITY;
};

Airport.prototype.land = function(plane) {
  if (this._planesArray.length >= this.capacity) {
    throw new Error("Cannot land: airport is full!");
  }

  else if (this.weather.isStormy()) {
    throw new Error("Cannot land: stormy weather!");
  }

  else {
    this._planesArray.push(plane);
    plane.isLanded = true;
  }
};

Airport.prototype.takeOff = function(plane) {
  if (this._planesArray.length < 1) {
    throw new Error("Cannot take off: airport is empty!");
  }

  else if (this.weather.isStormy()){
    throw new Error("Cannot take off: stormy weather!");
  }

  else {
    removeItem(this._planesArray, plane);
    plane.isLanded = false;
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
