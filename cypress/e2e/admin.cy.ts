import { deleteFoodsByName } from "../../src/services/foodsApi";

describe("Admin", () => {
  beforeEach(() => {
    // clean up previous run
    deleteFoodsByName("BBQ Ribs");
  });

  it("should run validation and submit a new Food and display it on the menu page", () => {
    // navigate to the home page
    cy.visit("http://127.0.0.1:5173/");

    // click the admin link
    cy.findByRole("link", { name: /admin/i }).click();

    // test onBlur validation
    cy.findByLabelText("Name").focus().blur();
    cy.findByText("Name is required");
    cy.findByLabelText("Description").focus().blur();
    cy.findByText("Description is required");
    cy.findByLabelText("Price").focus().clear().blur();
    cy.findByText("Price is required");
    cy.findByLabelText("Image filename").focus().blur();
    cy.findByText("Image filename is required");

    // enter food data
    cy.findByLabelText("Name").type("BBQ Ribs");
    cy.findByLabelText("Description").type("Tangy and sweet");
    cy.findByLabelText("Price").clear().type("22.99");
    cy.findByLabelText("Image filename").type("ribs.jpg");
    cy.findByLabelText("Dinner").check();

    // submit the form
    cy.findByRole("button", { name: /save/i }).click();

    // verify the food is displayed on the menu page
    cy.findByRole("link", { name: /home/i }).click();
    cy.findByRole("heading", { name: "BBQ Ribs" });
  });
});
