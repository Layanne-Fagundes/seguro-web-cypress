describe('remover produto', () => {

    beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
	});
  it('Deve adicionar mais de um item ao carrinho', () => {
    // Adiciona o primeiro item ao carrinho
    cy.removeItem('Sauce Labs Backpack');
  
    // Adiciona o segundo item ao carrinho
    cy.removeItem('Sauce Labs Bike Light');
    
    // Verificar se os itens foram adicionados ao carrinho
    cy.get('.shopping_cart_badge').should('have.text', '2');
  });
});
