describe('Testes de Login com Usuário Inválido', () => {
  
    beforeEach(() => {
      // Executa antes de cada teste para garantir que a página de login seja acessada
      cy.visit('http://localhost:5400/');
    });
  
    it('Deve falhar o login com usuário inválido e exibir mensagens de erro', () => {
      // Preenche o campo Nome
      cy.get('input[name="name"]').type('Usuário Inválido');
  
      // Preenche o campo E-mail (inválido)
      cy.get('input[name="email"]').type('email_invalido@email.com');
  
      // Preenche o campo Telefone
      cy.get('input[name="phone"]').type('11999999999');
  
      // Preenche o campo Cidade de Nascimento
      cy.get('input[name="birthCity"]').type('São Paulo');
  
      // Preenche o campo Data de Aniversário
      cy.get('input[name="birthDate"]').type('1990-05-15'); // Formato YYYY-MM-DD
  
      // Seleciona uma empresa no seletor de empresas
      cy.get('select[name="search_name_input"]').select('Empresa XYZXYZ');
  
      // Clica no botão de login
      cy.get('button[type="submit"]').click();
  
      // Verifica se a URL ainda é a página de login (indicando falha de login)
      cy.url().should('include', '/login');
  
      // Verifica se a mensagem de erro sobre o usuário inválido é exibida
      cy.get('.error-message').should('contain', 'Usuário ou credenciais inválidas');
  
      // Verifica que o login não redirecionou para o dashboard ou outra página
      cy.url().should('not.include', '/dashboard');
    });
  });