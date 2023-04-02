/// reference types="cypress"/>

import commands from '../../support/commands'
import messages from '../../support/messages'
import locators from '../../support/locators'

beforeEach(() => {
    cy.acessarSite()
})

describe('Validacoes menu pra voce', () => {
    it('Clicar menu pra voce na home', () => {
        cy
            .xpath(locators.HOME.XP_MENU_TRIGGER)
            .click()
        cy
            .xpath(locators.HOME.XP_MENU_PRA_VOCE)
            .click()
        cy
            .title()
            .should('be.equal', messages.TITULO.PRA_VOCE)
    })
})