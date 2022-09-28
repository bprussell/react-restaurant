import { deleteFoodsByName } from "../../src/services/foodsApi";

describe("Admin", () => {
  it("should submit a new Food and display it on the menu page", async () => {
    await deleteFoodsByName("BBQ Ribs");
    cy.visit("http://127.0.0.1:5173/");
    cy.findByRole("link", { name: /admin/i }).click();
    cy.findByLabelText("Name").type("BBQ Ribs");
    cy.findByLabelText("Description").type("Tangy and sweet");
    cy.findByLabelText("Price").clear().type("22.99");
    cy.findByLabelText("Image filename").type("ribs.jpg");
    cy.findByLabelText("Dinner").check();
    cy.findByRole("button", { name: /save/i }).click();
    cy.findByRole("link", { name: /home/i }).click();
    cy.findByRole("heading", { name: "BBQ Ribs" });
  });
});
