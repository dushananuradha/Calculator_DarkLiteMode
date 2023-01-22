/**
 * This class includes all the number and symbol buttons of number pad 
 */

/// <reference types="cypress" />

let firstNumber: string, secondNumber: string;

export class NumericalOperations {
    private btn_AC: string = "//div[contains(text(), 'AC')]";
    private btn_equal: string = "//div[contains(text(), '=')]";
    private btn_multiplication: string = "//div[contains(text(), 'x')]";
    private btn_subtract: string = "//div[contains(text(), '-')]";
    private btn_add: string = "//div[contains(text(), '+')]";

    /**
     * 
     * @param val1 : first clicked number
     * @param val2 : second clicked number
     */

    public input_twoSingleDigits(val1: string, val2: string) {
        firstNumber = "//div[contains(text(), '" + val1 + "')]";
        secondNumber = "//div[contains(text(), '" + val2 + "')]";

    }

    /**
     * User should be able to perform multiplication of two single digits
     * @param value1 - input value_first clicked number
     * @param value2 - input value_second clicked number
     */
    public step_multiplicate_singleDigits(value1: string, value2: string,) {

        this.input_twoSingleDigits(value1, value2);
        cy.xpath(firstNumber).click();
        cy.xpath(this.btn_multiplication).click();
        cy.xpath(secondNumber).click();
        cy.xpath(this.btn_equal).click();
    }

    /**
     * User should be able to perform multiplication of two single digits
     * @param value1 - input value_first clicked number
     * @param value2 - input value_second clicked number
     */
    public step_subtract_singleDigits(value1: string, value2: string,) {

        this.input_twoSingleDigits(value1, value2);
        cy.xpath(firstNumber).click();
        cy.xpath(this.btn_subtract).click();
        cy.xpath(secondNumber).click();
        cy.xpath(this.btn_equal).click();
    }

    /**
     * User should be able to perform addition of two single digits
     * @param value1 - input value_first clicked number
     * @param value2 - input value_second clicked number
     */
    public step_add_singleDigits(value1: string, value2: string,) {

        this.input_twoSingleDigits(value1, value2);
        cy.xpath(firstNumber).click();
        cy.xpath(this.btn_add).click();
        cy.xpath(secondNumber).click();
        cy.xpath(this.btn_equal).click();
    }

    /**
     * User should be able to click on AC button to clear type space
     */
    public step_click_AC_btn(){
        cy.xpath(this.btn_AC).click();
    }

}