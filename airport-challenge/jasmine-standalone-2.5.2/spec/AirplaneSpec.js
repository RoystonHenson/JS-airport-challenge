describe("Airplane", function() {
  var airport;
  var airplane;

  beforeEach(function() {
    airport = new Airport();
    airplane = new Airplane();
  });

  it("should know if it has landed", function() {
    airport.land(airplane);
    expect(airplane.isLanded).toEqual(true);
  });

  it("should know if it is in the air", function() {
    airport.takeOff(airplane);
    expect(airplane.isLanded).toEqual(false);
  });
});
