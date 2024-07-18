describe('adicionar produto', () => {

    beforeEach(() => {
		cy.visit('https://www.saucedemo.com/v1/');
    cy.login('standard_user', 'secret_sauce');
	});
  it('Deve adicionar mais de um item ao carrinho', () => {
    // Adiciona o primeiro item ao carrinho
    cy.addItem('Sauce Labs BackPack');
  
    // Adiciona o segundo item ao carrinho
    cy.addItem('Sauce Labs Bike Light');
    
    // Verificar se os itens foram adicionados ao carrinho
    cy.get('.shopping_cart_bagde').should('have.text', 2);
  });
});

