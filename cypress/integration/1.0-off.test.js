describe("Checks that the Pokedex is displayed on load as expected", () => {
  it("Checks the Pokedex image is been displayed", () => {
    cy.visit("http://localhost:3000");
    cy.location("pathname").should("eq", "/");
    cy.get(".pokedex").should("be.visible");
  });

  it("Checks the 'on' button is present", () => {
    cy.get(".pokedex--onButton").should("be.visible");
  });

  it("Checks the tutorial button is present", () => {
    cy.get(".tutorial--button").should("be.visible");
  });

  it("Checks the screen display is 'off'", () => {
    cy.get(".pokedex--screen__off").should("be.visible");
  });
});
