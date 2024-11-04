// Cypress E2E test for the Home page starting from step 8

describe("Home Page - E2E Test from Step 8", () => {
  beforeEach(() => {
    // Visit the Home page where the process starts from step 8
    cy.visit("/");
  });

  it("should go through the steps starting from step 8, filling data, and moving to the next step", () => {
    // Verify we start at step 8 (Insurance Form)
    cy.contains("Subscription plan").should("exist");

    // Fill in some data on the Insurance form
    cy.get('[data-test-id="pricing-panel-1"]') // Assuming input fields exist
      .click();

    cy.get('[data-test-id="addon-panel-0"]') // Assuming input fields exist
      .click();

    cy.get(`[data-test-id="card-number-input"]`).type("1234567890123456");
    cy.get(`[data-test-id="expiry-date-input"]`).type("12/23");
    cy.get(`[data-test-id="cvc-input"]`).type("123");

    // Click on the "Next" button
    cy.get(`[data-test-id="button-next"]`).click();

    // Verify the next step (Subscription Form) is displayed
    cy.contains("Device management").should("exist");

    // Fill in some data on the Device form
    cy.get('input[data-test-id="device-type-input-0"]').type("GPS Tracker");

    cy.get('div[data-test-id="device-toggle-0"]').click();

    cy.get('input[data-test-id="device-serial-input-0"]').type("SN123456789");

    // Click on the "Next" button
    cy.contains("Next").click();

    // Verify the next step (EasyAccess Form) is displayed
    cy.contains("EasyAccess").should("exist");
  });
});
