/* eslint-disable no-undef */

import { NumericalOperations } from "../../page-objects/number-pad/numericalOperations";

const numericalOps = new NumericalOperations();

describe('verify numerical operations between two single digits', () => {

  beforeEach('redirect to calculator home page', () => {
    cy.visit('https://sparkling-malasada-58f412.netlify.app/');
    numericalOps.step_click_AC_btn();
  })

  it('verify multiplication', () => {
    numericalOps.step_multiplicate_singleDigits("5", "8");
  })

  it('verify subtraction', () => {
    numericalOps.step_subtract_singleDigits("8", "5")
  })

})
