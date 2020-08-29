describe("Checks the correct stats data is displayed", () => {
  it("Checks stats for default Pokemon are displayed", () => {
    cy.get(".pokedex--data__stats__button").click();

    cy.get(".pokedex--data__stats")
      .should("be.visible")
      .should(
        "have.text",
        "hp: 45attack: 49defense: 49special-attack: 65special-defense: 65speed: 45"
      );
  });
});
