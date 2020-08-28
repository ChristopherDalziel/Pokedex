describe("Checks Pokedex 'on' state is displayed as expected", () => {
  it("Switches Pokedex on", () => {
    cy.get(".pokedex--onButton").click();
  });

  it("Checks 'off' screen has been removed", () => {
    cy.get(".pokedex--screen__off").should("not.exist");
  });

  it("Checks power button now displays 'off'", () => {
    cy.get(".pokedex--onButton").should("have.text", "Off");
  });

  it("Checks shiny button is displayed", () => {
    cy.get(".pokedex--shinyButton")
      .should("be.visible")
      .should("have.text", "S");
  });

  it("Checks Dpad buttons are displayed", () => {
    cy.get(".pokedex--negativeButton")
      .should("be.visible")
      .should("have.text", "-");

    cy.get(".pokedex--positiveButton")
      .should("be.visible")
      .should("have.text", "+");
  });

  it("Checks form input and go button are displayed", () => {
    cy.get(".pokedex--form").should("be.visible");
    cy.get(".pokedex--form__search").should("be.visible");
    cy.get(".pokedex--form__button").should("be.visible");
  });

  it("Checks stats display is shown", () => {
    cy.get(".pokedex--data__stats").should("be.visible");
  });

  it("Checks abilities and stats buttons are displayed", () => {
    cy.get(".pokedex--data__stats__button")
      .should("be.visible")
      .should("have.text", "Stats");

    cy.get(".pokedex--data__abilities__button")
      .should("be.visible")
      .should("have.text", "Abilities");
  });

  it("Checks pokemon selection is displayed", () => {
    cy.get(".pokedex--select").should("be.visible");
  });
});
