describe("Airport", function() {
  var airport;
  var airplane;

  beforeEach(function() {
    airport = new Airport();
    airplane = new Airplane;
  });

  it("should be able to land a plane", function() {
    airport.land(airplane);
    expect(airport._planesArray).toContain(airplane);
  });

  it("should be able to take off", function() {
    airport.takeOff(airplane);
    expect(airport._planesArray).not.toContain(airplane);
  });
});
