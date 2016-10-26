describe("Airplane", function() {
  var airport;
  var airplane;
  var weather;

  beforeEach(function() {
    weather = new Weather();
    airport = new Airport(weather);
    airplane = new Airplane();
    spyOn(weather, 'random').and.returnValue(0.1);
  });

  it("should know if it has landed", function() {
    airport.land(airplane);
    expect(airplane.isLanded).toEqual(true);
  });

  it("should know if it is in the air", function() {
    airport.land(airplane);
    airport.takeOff(airplane);
    expect(airplane.isLanded).toEqual(false);
  });
});
