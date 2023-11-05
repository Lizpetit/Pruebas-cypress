describe("test suite - conjunto de pruebas", () => {

    beforeEach(() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")   
    })

     it("validar que el logo de la pagina sea visible", () => {
        
      cy.get('.orangehrm-login-branding > img').should("be.visible")
    }) 

    it.only("validar que el campo username sea visible", () => {
        
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible")
    }) 

    it.only("validar footer de la pagina", () => {
     
      cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM OS 5.5")
  }) 

  it.only("validar que el boton loggin sea visible ", () => {
     
    cy.get(".oxd-button").should("be.visible")
    
}) 

})