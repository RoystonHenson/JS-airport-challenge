describe("Airport", function() {
  var airport;
  var airplane;

  beforeEach(function() {
    airport = new Airport();
    airplane = new Airplane("1");
  });

it("should be able to land a plane", function() {
  airport.land("1");
  expect(airport._planesArray).toContain("1");
});
});
