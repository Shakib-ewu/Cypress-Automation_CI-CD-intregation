describe("Verifying Cart Drawer French", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        //cy.wait(4000)
        cy.get('.items-center> .flex > .text-black').eq(4).click({force:true})
        //cy.get("div[class='text-black text-sm 2xl:text-[14px] font-extrabold font-Mulish leading-[120%]']").click({force:true})
        cy.wait(2000)
    })


    it('Cart Drawer Tests', () => {
        cy.get('header').within(() => {
            cy.xpath("//span[@class='flex items-center justify-center w-max h-max relative isolate']//*[name()='svg']").click(); // Adjust the selector as necessary
          });
          // Verify the presence of "Your Bag" text
          cy.contains('VOTRE PANIER').should('be.visible');
          cy.get('.flex-1').within(() => {
            cy.contains("On dirait que vous n’avez encore rien ajouté, commençons !").should('be.visible');
            cy.contains('Continuer vos achats').should('be.visible').and('not.be.empty');
          });

          cy.get('.flex-col > .h-full').click({force:true})
          cy.scrollTo(0,3000);
          cy.wait(2000)
          cy.xpath("//span[normalize-space()='AJOUTER AU PANIER']").click({force:true})
          cy.wait(3000)
          cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']",{timeout:10000}).click({force:true}) // cart delete icon
          
          cy.scrollTo("topRight");
          cy.wait(4000)
          cy.xpath("//span[@class='flex items-center justify-center w-max h-max relative isolate']//*[name()='svg']").click();  
          cy.xpath("/html[1]/body[1]/aside[1]/main[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/a[1]/div[1]").click({force:true})
          cy.wait(4000)

          cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[2]/div[1]/span[1]/a[1]").click({ force: true });
          ///html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[2]/div[1]/span[1]/a[1]
          
           // cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click().should('be.visible'); // Adjust the selector as necessary

          });

    })