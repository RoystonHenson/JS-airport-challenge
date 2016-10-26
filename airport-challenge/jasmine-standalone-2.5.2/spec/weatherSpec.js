describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("is stormy", function() {
    spyOn(weather, 'random').and.returnValue(0.8)
    expect(weather.isStormy()).toEqual(true)
  });

  it("is not stormy", function(){
    spyOn(weather, 'random').and.returnValue(0.1)
    expect(weather.isStormy()).toEqual(false)
  })

});
