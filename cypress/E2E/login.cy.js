describe('login', () => {

	beforeEach(() => {
		cy.visit('https://www.saucedemo.com/v1/');
		cy.login('standard_user', 'secret_sauce');
	});

	it('should login successfully with correct credentials', () => {

		Cypress.Commands.add('login', (username, password) => {
		// Digita um nome  correto
		cy.get('[data-test="username"]').type('standard_user');
		// Digita a senha correta
		cy.get('[data-test="password"]').type('secret_sauce');
		// Clica no botão de login
		cy.get('#login-button').click();
		// Verifica se foi redirecionado para a página de dashboard
		
		cy.wait(6000);
	  });
	});
});