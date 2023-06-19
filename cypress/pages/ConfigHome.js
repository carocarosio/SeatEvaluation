class ConfigHome {

navigateHome() {
    cy.visit("https://configurador.seat.es/seat-cc/configurator/LIVE/003/DEFAULT/es/car-selector"  );
}

acceptCookies() {
    cy.clearCookies();
    if (cy.get("[id=onetrust-policy]").should("exist")) {
      cy.get("#onetrust-accept-btn-handler").click();
    }

}

}

export default ConfigHome