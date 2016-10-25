describe("Airport", function() {
  var airport;
  var airplane;
  var planesarray;

  beforeEach(function() {
    airport = new Airport();
    airplane = new Airplane();
    planesarray = [];
  });

it("should be able to land a plane", function() {
  airport.land(airplane);
  expect(airport.planesarray).toContain(true);

});
});
