describe('squared', function() {
  it("returns a square array of arrays", function() {
    expect(squared("don't compare yourself to others, compare yourself to the person you were yesterday"))
      .to.eql(["dontcompa", "reyoursel", "ftoothers", "compareyo", "urselftot", "hepersony", "ouwereyes", "terday"]);
  });
});
