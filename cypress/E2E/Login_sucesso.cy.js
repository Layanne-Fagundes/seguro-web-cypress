describe('Login com sucesso', () => {

    beforeEach(() => {
		cy.visit('http://localhost:5400/');
    });   
    it('login com sucesso', () => {

    cy.get('input[name="name"]').type('Layanne Fagundes');

    cy.get('input[name="email"]').type('fagundeslayanne@gmail.com');

    cy.get('input[name="phone"]').type('11999999999');

    cy.get('input[name="birthCity"]').type('Rio de Janeiro');
 
    cy.get('input[name="birthDate"]').type('1993-07-16'); // No formato YYYY-MM-DD
 
    cy.get('select[name="name="search_name_input""]').select('Empresa 1');

    cy.get('button[type="submit"]').click();

    // Verifica se a URL foi redirecionada corretamente para o dashboard
    cy.url().should('include', '/dashboard');

    // Verifica se o login foi bem-sucedido através de algum texto na página de destino
    cy.get('h1').should('contain', 'Bem-vinda, Layanne Fagundes');
  });
});