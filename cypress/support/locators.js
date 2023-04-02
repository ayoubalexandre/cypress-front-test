//Elementos das páginas para interação

const locators = {
    HOME: {
        XP_MENU_TRIGGER: "//button[@class='vr-menu-trigger vr-menu-trigger--open']",
        XP_MENU_PRA_VOCE: "//a[@href='/onde-aceita.htm']"
    },
    PRA_VOCE: {
        XP_BTN_ONDE_USAR_CARTAO: "//a[contains (@href, '#rede-credenciada') and normalize-space(text()) = 'Onde usar o meu cartão']",
        XP_MODAL_MAPA: "//div[@id='map']"
    }   
}

export default locators;