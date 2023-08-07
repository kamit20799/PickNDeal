/* Test Case Covered: TC035, TC036, TC037, TC038, TC039, TC040, TC041, 
     TC042, TC043, TC044, TC045, TC046, TC047, TC048, TC049, TC050, TC051, TC052, TC053, TC054*/

import loginObject from "../pageObjects/LogIn";

describe('Adding Profile Details', () => {
    beforeEach(() => {
        cy.visit("user/register");
    })

    const login = new loginObject()

    it('Verify Successful Login', () => {

        let newEmail = "christui+" + Math.random().toString().substr(2, 3) + "@example.com"
        cy.writeFile('Supplier_email.txt', newEmail)
        cy.get(login.suplier_Profile).click()
        cy.SignUp('Christ', 'Sui', newEmail, '8787888787', 'P@ssw0rd', 'P@ssw0rd')

        /*  TC035   */
        cy.login(newEmail, 'P@ssw0rd')
        cy.verifyURL('profile')
        cy.verifyText(login.userProfile, 'Retailer Name')

        /*  TC036   */
        cy.get(login.businessName).type('Open Kart')

        /*  TC037   */
        cy.get(login.service).click()
            .contains('Biscut').click()
        cy.contains('Biscut').should('be.visible')
        
        cy.get(login.service).click()
            .contains('pista').click()
        cy.contains('pista').should('be.visible')
        
        cy.get(login.service).click()
            .contains('Silk').click()
        cy.contains('Silk').should('be.visible')

        cy.get(login.service).click()
            .contains('oreo').click()
        cy.contains('oreo').should('be.visible')
        
        /*  TC038   */
        cy.get(login.removeTag3).click()
        
        cy.get(login.removeTag4).click()
        cy.contains('oreo').should('not.be.enabled')

        /*  TC039   */
        cy.get(login.adress1).type('123 Main Road')
        cy.get(login.adress2).type('Chandigarh')
        cy.contains('Chandigarh bus stand').click()

        /*  TC040   */
        cy.get(login.noofHours).clear().type('10')
        
        /*  TC041   */
        cy.get(login.countryDropdown).click()
        cy.get(login.countryDropdown).type('XYZ');

        /*  TC042   */
        cy.contains(login.noOption).should('be.visible');
        cy.wait(2000)
        cy.get(login.countryDropdown).type('{selectall}India{downarrow}');
        cy.get(login.countryDropdown).type('{enter}');

        /*  TC043   */
        cy.get(login.stateDropdown).click()
        cy.get(login.stateDropdown).type('xyz');

        /*  TC044   */
        cy.contains(login.noOption).should('be.visible');
        cy.wait(2000)
        cy.get(login.stateDropdown).type('{selectall}Chandigarh{downarrow}');
        cy.get(login.stateDropdown).type('{enter}');

        /*  TC045   */
        cy.get(login.cityDropdown).click()
        cy.get(login.cityDropdown).type('xyz');

        /*  TC046   */
        cy.contains(login.noOption).should('be.visible');
        cy.wait(2000)
        cy.get(login.cityDropdown).type('{selectall}Chandigarh{downarrow}');
        cy.get(login.cityDropdown).type('{downarrow}{enter}');

        /*  TC047   */
        cy.get(login.zipCode).type('134114')

        /*  TC048   */
        cy.get(login.dayDropdown).select('Friday')

        /*  TC049   */
        cy.get(login.timeFrom1).type('01:15')
        cy.get(login.timeFrom2).type('02:10')

        cy.get(login.addButton).click()
        cy.get(login.timeFrom3).type('10:15')
        cy.get(login.timeFrom4).type('12:10')

        /*  TC050   */
        cy.get(login.addButton).click()
        cy.get(login.timeFrom5).type('03:15')
        cy.get(login.timeFrom6).type('05:10')

        /*  TC051   */
        cy.get(login.deleteButton).click()
        cy.get(login.deleteButton).click()

        /*  TC052   */
        cy.get(login.about).type('Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Lorem ipsum presents the sample font and orientation ')

        /*  TC053   */
        cy.get(login.imgUpload).attachFile('download.jpg');

        /*  TC054   */
        cy.get(login.submit).click({force: true})

        cy.verifyURL('dashboard')
    })
})