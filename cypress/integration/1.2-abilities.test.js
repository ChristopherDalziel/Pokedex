describe("Checks correct abilities data is displayed", () => {
  it("Switches Pokedex on", () => {
    cy.get(".pokedex--onButton").click();
  });
});
