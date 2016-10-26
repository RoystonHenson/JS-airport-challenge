
Airport = function() {
  this._planesArray = [];
};

Airport.prototype.land = function(plane) {
  this._planesArray.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  removeItem(this._planesArray, plane)
};

function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
            }
    }
}
