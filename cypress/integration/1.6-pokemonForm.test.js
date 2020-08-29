describe("Tests the functionality of the form", () => {
  it("Checks form is visible", () => {
    cy.get(".pokedex--form").should("be.visible");
  });

  it("Searches for a new Pokemon that doesn't exist and displays error", () => {
    cy.get("input[name=pokemon").type("testing");
    cy.get(".pokedex--form__button").click();
    cy.get(".pokedex--screen__error")
      .should("be.visible")
      .should("have.text", "Pokemon not found, Please try again.");
  });

  it("Searches for a new Pokemon", () => {
    cy.get("input[name=pokemon").type("mew");
    cy.get(".pokedex--form__button").click();
    cy.get(".pokedex--screen__name").should("have.text", "mew");
  });
});
