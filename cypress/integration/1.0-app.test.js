describe("Checks that Pokedex is been displayed within the app", () => {
  it("Checks the Pokedex image is been displayed", () => {
    cy.visit("http://localhost:3000");
    cy.location("pathname").should("eq", "/");
    cy.get("container").should("be.visible");
  });
});
