describe('lista de produtos', () => {
    // Antes de cada teste, visitar a página de produtos
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/'); // Substitua pela URL da sua página de produtos
      cy.login('standard_user', 'secret_sauce');
    });
   
        // listagem de produtos

        it('should display a list of products', () => { 
          cy.login('standard_user', 'secret_sauce');
            // Verifica se a lista de produtos está visível
            cy.wait(6000);
            cy.get('.inventory_list').should('be.visible');
            // Verifica se há produtos na lista
            cy.get('#item_4_img_link').should('have.length.greaterThan', 0);
          });
        
      });
      

  


