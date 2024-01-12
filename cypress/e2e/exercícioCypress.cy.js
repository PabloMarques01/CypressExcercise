describe('Funcionalidade Login', () => {

  beforeEach( () => {
    // Ir até á página
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })

  it('Login com credenciais válidas', () => {

    // Encontrar o Username e digitar uma credencial válida
    cy.get("[placeholder='Username']").type("standard_user")

    // Encontrar a Password e digitar uma credencial válida
    cy.get("[placeholder='Password'").type("secret_sauce")

    // Encontrar o botão Login e clicar
    cy.get('.btn_action').click()

    // Assertion na URL
    cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html")
  })

  it('Login com username inválido', () => {
    // Encontrar o Username e digitar uma credencial inválida
    cy.get("#user-name").type("Juca")

    // Encontrar a Password e digitar uma credencial válida
    cy.get("#password").type("secret_sauce")

    // Encontrar o botão Login e clicar
    cy.get('.btn_action').click()

    // Assertion da mensagem de erro
    cy.get('[data-test="error"]').should("be.visible")
    .and("exist")
  })

  it('Login com senha inválida', () => {
    // Encontrar o Username e digitar uma credencial válida
    cy.get("[placeholder='Username']").type("standard_user")

    // Encontrar a Password e digitar uma credencial inválida
    cy.get("#password").type("tomané")

    // Encontrar o botão Login e clicar
    cy.get('.btn_action').click()

    // Assertion da mensagem de erro
    cy.get('[data-test="error"]').should("be.visible")
    .and("exist")
  })

  it('Login com username vazio', () => {
   
    // Encontrar a Password e digitar uma credencial válida
    cy.get("#password").type("tomané")

    // Encontrar o botão Login e clicar
    cy.get('.btn_action').click()

    // Assertion da mensagem de erro
    cy.get('[data-test="error"]').should("be.visible")
    .and("exist")
  })

  it('Login com senha vazia', () => {
    // Encontrar o Username e digiar uma credencial válida
    cy.get("#user-name").type("standard_user")

    // Encontrar o botão Login e clicar
    cy.get('.btn_action').click()

    // Assertion da mensagem de erro
    cy.get('[data-test="error"]').should("be.visible")
    .and("exist")
  })
})

describe('Add to cart', () => {

    	beforeEach( () => {
        // Ir até á pagina
        cy.visit('https://www.saucedemo.com/v1/index.html')

        // Encontrar o Username e digitar uma credencial válida
        cy.get("[placeholder='Username']").type("standard_user")

        // Encontrar a Password e digitar uma credencial válida
        cy.get("[placeholder='Password'").type("secret_sauce")

        // Encontrar o botão Login e clicar
        cy.get('.btn_action').click()
      })

  it('Adicionar um item ao carrinho', () => {
    // Clicar no botão ADD TO CART
    cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()

    // Assertion para perceber se o botão mudou para REMOVE
    cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').contains("REMOVE")

    // Assertion para perceber se o carrinho ficou com o número de itens adicionados
    cy.get('.fa-layers-counter').should("be.visible")
  })

  it('Remover um item ao carrinho', () => {
    // Clicar no botão ADD TO CART
    cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()

    // Clicar no botão REMOVE
    cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()

    //Assertion para perceber se o botão mudou para ADD TO CART
    cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').contains("ADD TO CART")

    // Assertion para perceber se o carrinho voltou a ficar vazio
    cy.get('.fa-layers-counter').should("not.exist")
  })
})

describe('Checkout', () => {
  it('Fazer um checkout', () => {// Ir até á pagina
  cy.visit('https://www.saucedemo.com/v1/index.html')

  // Encontrar o Username e digitar uma credencial válida
  cy.get("[placeholder='Username']").type("standard_user")

  // Encontrar a Password e digitar uma credencial válida
  cy.get("[placeholder='Password'").type("secret_sauce")

  // Encontrar o botão Login e clicar
  cy.get('.btn_action').click()

  // Clicar no botão ADD TO CART
  cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()
  
  // Abrir o carrinho
  cy.get('.fa-layers-counter').click()

  // Clicar em Checkout
  cy.xpath('//*[@id="cart_contents_container"]/div/div[2]/a[2]').click()

  // Encontrar o campo First Name e preencher com um nome 
  cy.get('#first-name').type('Paulo')

  // Encontrar o campo Last Name e preencher com um nome
  cy.get('#last-name').type('Marques')

  // Encontrar o campo ZIP/Postal Code e preencher com um código postal
  cy.get('#postal-code').type('6300-811')

  // Clicar no botão CONTINUE
  cy.xpath('//*[@id="checkout_info_container"]/div/form/div[2]/input').click()

  // Clicar no botão FINISH
  cy.xpath('//*[@id="checkout_summary_container"]/div/div[2]/div[8]/a[2]').click()
  })
})