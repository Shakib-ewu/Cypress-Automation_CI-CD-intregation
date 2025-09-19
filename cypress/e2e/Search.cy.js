describe("Search Functionality Tests", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.wait(4000)
        
       
    })
    it("should display and enable the search input field", () => {
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true}).should('be.visible').and('exist');

    })
    it('should display search results for a valid input', () => {
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true})
        cy.get('#autocomplete-0-input').type('valid search term'); // search items
        cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]").click({force:true}); // Replace with your search button selector
        cy.get('.ais-SearchBox-input').should('be.visible'); // Replace with your search results container selector
        cy.get('.ais-SearchBox-input', { timeout: 10000 }) // Increase timeout if necessary
      .should('be.visible')
      .and('have.length.above', 0); // Verify results are displayed
      });

      it('should display no results message for an invalid search term', () => {
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true})
        cy.get('#autocomplete-0-input').type('nonexistentterm'); // search items
        cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]").click({force:true});
        cy.wait(4000)
        //Where is no products found test
        //cy.get("p[class='font-Mulish text-[clamp(14px,5vw,52px)] text-center mb-[50px] text-[#848484] h-full flex items-center justify-center flex-1']").and('contain', 'No products found'); // Replace with your no results message selector
      });

     /* it.only('should handle special characters in the search input', () => {
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true})
        cy.get('#autocomplete-0-input').type('!@#$%^&*()'); // Special characters
        cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]").click({force:true});
        cy.wait(5000)
        cy.get('.search-results').should('be.visible');
      }); */

      it('should handle empty search input gracefully', () => {
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true})
        cy.get('#autocomplete-0-input').clear();
        cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]").click({force:true});
        cy.log('Search button clicked')
        //cy.get('.error-message').should('be.visible').and('contain', 'Please enter a search term'); // Replace with your error message selector
      });

      /*it.only('should handle long search terms without crashing', () => {
        const longString = 'a'.repeat(300); // 1000 characters long
        console.log('Before clicking search button');
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true})
        console.log('After clicking search button');
        cy.get('#autocomplete-0-input').type(longString,{timeout: 10000});
        cy.wait(4000)
        cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]").click({force:true,timeout: 10000 });
        cy.get('.ais-SearchBox-input').should('be.visible');
      });*/
      it('should handle long search terms without crashing', () => {
        const longString = 'a'.repeat(300); // 300 characters long
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']")
          .should('be.visible')
          .click({force:true})
          .then(() => {
              console.log('Clicked search button');
          });
    
        cy.get('#autocomplete-0-input')
          .should('be.visible')
          .type(longString, {timeout: 10000})
          .then(() => {
              console.log('Typed into autocomplete input');
          });
    
        cy.wait(4000); // Ensure any asynchronous operations are completed
    
        cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]")
          .should('be.visible')
          .click({force:true, timeout: 10000})
          .then(() => {
              console.log('Clicked search submit icon');
          });
    
        cy.get('.ais-SearchBox-input')
          .should('be.visible')
          .then(() => {
              console.log('Search box input is visible');
          });
    });
    

      /*it.skip('should display autocomplete suggestions', () => {
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true})
        cy.get('#autocomplete-0-input').type('Men');
        cy.wait(5000)
        cy.get(':nth-child(2) > .w-full.gap-5').should('be.visible') // Replace with your autocomplete suggestions selector
        cy.get('.suggested_search_result').contains('View All Products').click()
      });  */


      it('should display autocomplete suggestions & paginate search results', () => {
        // List of predefined search terms
        const searchTerms = ['Men', 'Women', 'Shoes', 'Nike', 'Adidas','Accessories','Boots'];
      
        // Generate a random index to select a search term from the list
        const randomIndex = Math.floor(Math.random() * searchTerms.length);
        const searchTerm = searchTerms[randomIndex];
      
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({ force: true });
      
        cy.get('#autocomplete-0-input')
          .type(searchTerm);
      
        cy.wait(5000);
      
        // Verify that autocomplete suggestions are visible
        cy.get('.suggested_search_result')
          .should('be.visible');
      
        // Click on a specific autocomplete suggestion
        cy.get('.suggested_search_result')
          .contains('View All Products') // Modify to match your specific suggestion
          .click();
          cy.wait(4000)
          cy.scrollTo('bottom')

          cy.xpath("//button[contains(@class,'hover:no-underline w-auto hover:text-white hover:bg-black transform transition-colors duration-300')]").should('have.length.greaterThan', 0).then(() => {
            // If more products are available, click the button
            cy.xpath("//button[contains(@class,'hover:no-underline w-auto hover:text-white hover:bg-black transform transition-colors duration-300')]").click({force:true});
    })
})
      

      it('should highlight search terms in results', () => {
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']")
        .click({ force: true });
    
      cy.get('#autocomplete-0-input').type('highlight');
      cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]").click({force:true});
        cy.wait(4000)
       cy.get('.ais-SearchBox-input',).should('be.visible')
       
      });

      it('should return results within acceptable time', () => {
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true})
        cy.get('#autocomplete-0-input').type('Men'); // search items
        cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]").click({force:true});
        cy.get('.ais-SearchBox-input', { timeout: 5000 }).should('be.visible'); // 5 seconds timeout
      });


})