describe("Airport", function() {
  var airport;
  var airplane;
  var weather;

  beforeEach(function() {
    weather = new Weather();
    airport = new Airport(weather);
    airplane = new Airplane();
  });

  it("should be able to land a plane", function() {
    spyOn(weather, 'random').and.returnValue(0.1)
    airport.land(airplane);
    expect(airport._planesArray).toContain(airplane);
  });

  it("should be able to take off", function() {
    spyOn(weather, 'random').and.returnValue(0.1)
    airport.takeOff(airplane);
    expect(airport._planesArray).not.toContain(airplane);
  });

  it("should prevent planes landing when stormy", function(){
    spyOn(weather, 'random').and.returnValue(0.8)
    expect(function(){airport.land(airplane)}).toThrow(new Error("Cannot land: stormy weather!"))
  });

  it("should prevent planes taking off when stormy", function(){
    spyOn(weather, 'random').and.returnValue(0.8)
    expect(function(){airport.takeOff(airplane)}).toThrow(new Error("Cannot take off: stormy weather!"))
  });
});
