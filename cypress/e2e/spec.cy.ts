/* eslint-disable no-undef */

import { NumericalOperations } from "../../page-objects/number-pad/numericalOperations";

const calOps = new NumericalOperations();

describe('verify numerical operations between two single digits', () => {

  beforeEach('redirect to calculator home page', () => {
    cy.visit('https://sparkling-malasada-58f412.netlify.app/');
    calOps.step_click_AC_btn();
  })


  it('verify multiplication', () => {
    calOps.step_multiplicate_singleDigits("5", "8");
  })

  it('verify subtraction', () => {
    calOps.step_subtract_singleDigits("8", "5")
  })

})
