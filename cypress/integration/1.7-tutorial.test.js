describe("Check all tutorial messages are present when toggled 'on'", () => {
  it("Toggles tutorial 'on", () => {
    cy.get(".tutorial--button").click();
  });

  it("Checks power message", () => {
    cy.get(".tutorial--power")
      .should("be.visible")
      .should("have.text", "Click here to power off →");
  });

  it("Checks shiny message", () => {
    cy.get(".tutorial--shiny")
      .should("be.visible")
      .should("have.text", "Click here to toggle Shiny version →");
  });

  it("Checks search message", () => {
    cy.get(".tutorial--search")
      .should("be.visible")
      .should("have.text", "Search Pokèmon by name or # →");
  });

  it("Checks positive negative Dpad message", () => {
    cy.get(".tutorial--plusMinus")
      .should("be.visible")
      .should("have.text", "← See previous / next Pokèmon");
  });

  it("Checks selection message", () => {
    cy.get(".tutorial--selection")
      .should("be.visible")
      .should("have.text", "← Click tile to display random Pokèmon");
  });

  it("Checks stats abilities button message", () => {
    cy.get(".tutorial--statsAbilities")
      .should("be.visible")
      .should("have.text", "← Toggle between stats / abilities");
  });

  it("Should turn tutorial off", () => {
    cy.get(".tutorial--button").click();
    cy.get("tutorial--power").should("not.exist");
  });
});
