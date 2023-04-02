/// reference types="cypress"/>

import commands from '../../support/commands'
import messages from '../../support/messages'

beforeEach(() => {
    cy.acessarSite()
})

//validação do acesso ao site da VR
it('Validar site vr', () => {
    cy
        .title()
        .should('be.equal', messages.TITULO)
})