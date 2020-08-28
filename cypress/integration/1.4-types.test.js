describe("Checks the types component displays data as expected", () => {
  it("Checks type 1 from default Pokemon is displayed correctly", () => {
    cy.get(".pokedex--types__0")
      .should("be.visible")
      .should("have.text", "grass");
  });

  it("Checks type 2 from default Pokemon is displayed correctly", () => {
    cy.get(".pokedex--types__1")
      .should("be.visible")
      .should("have.text", "poison");
  });
});
