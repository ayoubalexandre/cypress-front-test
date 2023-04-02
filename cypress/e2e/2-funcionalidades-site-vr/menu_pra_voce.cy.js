/// reference types="cypress"/>

import commands from '../../support/commands'
import messages from '../../support/messages'
import locators from '../../support/locators'
import '../../support/commandsNavigation'

beforeEach(() => {
    cy.acessarSite()
})

describe('Validacoes menu pra voce', () => {
    it('Clicar menu pra voce na home', () => {
        cy.acessarMenuPraVoce()
        cy
            .title()
            .should('be.equal', messages.TITULO.PRA_VOCE)
    })
    it('Clicar botão onde usar meu cartao', () => {
        cy.acessarMenuPraVoce()
        cy
            .xpath(locators.PRA_VOCE.XP_BTN_ONDE_USAR_CARTAO)
            .click()
        cy
            .xpath(locators.PRA_VOCE.XP_MODAL_MAPA)
            .should('be.visible')
    })
})