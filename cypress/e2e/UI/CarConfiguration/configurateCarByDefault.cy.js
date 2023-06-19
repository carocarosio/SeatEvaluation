
import ConfigHome from "../../../pages/ConfigHome";
const home = new ConfigHome

describe("validate cars configuration by default", () => {
  
  beforeEach(() => {
  home.navigateHome()
  home.acceptCookies()
  });

  
  it("Validate download configuration link was created", () => {
    cy.setDefaultCar() // llamo a una funcion que setea por defecto un IBIZA_FR_XS 
    expect(cy.get("span.configuration-key")).to.not.be.empty; // has a key assigned
    cy.get("div.more a").should("have.attr", "href"); //the link to download was generated succesfully
    cy.get("div.more a").click();//download the configuration
  });

  it("Validate that the file was downloaded successfully ", () => {
    cy.readFile("./cypress/downloads/IBIZA_FR_XS.pdf"); // si parametrizo modelo cambiar el nombre del archivo
  });

});
