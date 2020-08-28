describe("Checks correct abilities data is displayed", () => {
  it("Checks ability heading is displayed ", () => {
    cy.get(".pokedex--data__abilities__button").click();

    cy.get(".pokedex--data__abilities__heading")
      .should("be.visible")
      .should("have.text", "Abilities:");
  });

  it("Checks abilities are displayed for default Pokemon", () => {
    cy.get(".pokedex--data__ability")
      .should("be.visible")
      .should("have.text", "overgrowchlorophyll");
  });
});
