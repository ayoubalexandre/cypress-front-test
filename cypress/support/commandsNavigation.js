import locators from "./locators"

//Navegação dentro do site VR
Cypress.Commands.add('acessarMenuPraVoce', () => {
        cy
            .xpath(locators.HOME.XP_MENU_TRIGGER)
            .click()
        cy
            .xpath(locators.HOME.XP_MENU_PRA_VOCE)
            .click()
    })