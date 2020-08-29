describe("Checks the correct data is displayed to the screen", () => {
  it("Checks screen is displayed", () => {
    cy.get(".pokedex--screen").should("be.visible");
  });

  it("Checks that default Pokemon name is displayed", () => {
    cy.get(".pokedex--screen__name")
      .should("be.visible")
      .should("have.text", "bulbasaur");
  });

  it("Checks the default Pokemon # is displayed", () => {
    cy.get(".pokedex--screen__pokeNumber")
      .should("be.visible")
      .should("have.text", "#001");
  });

  it("Checks the default Pokemons sprite is displayed", () => {
    cy.get(".pokedex--screen__sprite")
      .should("be.visible")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      );
  });

  it("Checks the default Pokemons shiny sprite is displayed", () => {
    cy.get(".pokedex--shinyButton").click();

    cy.get(".pokedex--screen__sprite")
      .should("be.visible")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
      );
  });
});
