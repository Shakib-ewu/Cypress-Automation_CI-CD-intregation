describe("Verifying Language Switcher", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        //cy.wait(4000)
        cy.get('.items-center> .flex > .text-black').eq(4).click({force:true})
       // cy.get("div[class='text-black text-sm 2xl:text-[14px] font-extrabold font-Mulish leading-[120%]']").click({force:true})
        cy.wait(2000)
    })

    it("Verifying Hero Banner", () => {
       

      cy.xpath(
        '/html[1]/body[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]',
      ).click({force: true});
      cy.get('h1').should('have.text', 'All-departments');
      cy.get(
        'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
      ).click();
    });
  

  function clickButtonMultipleTimes(buttonSelector, clickCount) {
    for (let i = 0; i < clickCount; i++) {
      // Ensure the button is visible and click it
      cy.xpath(buttonSelector).click({ force: true });
      // Optionally, add a small wait to allow for any animation or transition
      cy.wait(500);
    }
  }

  it('Verify Shop Now button for Trending section', () => {
    cy.scrollTo(0,1500);
    cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/button[1]").click({force: true});
    cy.wait(5000);
    cy.get('h1').should('have.text', 'Shoes ');
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click();
    cy.wait(4000);
    cy.scrollTo(0, 2000);
    clickButtonMultipleTimes("(//button[@aria-label='Next'])[1]", 6);
    clickButtonMultipleTimes("(//button[@aria-label='Previous'])[1]", 3);
  });

  it("Sale Banner for women,kid and Men", () => {
    cy.scrollTo(0,1200)
    cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/span[1]").click({force: true});
    cy.wait(2000)
    cy.get('h1').should('have.text',"Shoes ")
    cy.get('body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',).click();  //clicking hompage
    cy.wait(3000)
    cy.scrollTo(0,1200)
    cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/span[1]").click({force: true});
    cy.wait(2000)
    cy.get('h1').should('have.text','Accessories ')
    cy.get('body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',).click();  //clicking hompage
    cy.wait(3000)
    cy.scrollTo(0,1200)
    cy.get('[aria-label="3 / 3"] > .aspect-auto > .category > .text-center').click({force: true});
    cy.get('h1').should('have.text','Shoes ')
  })  


  /*it("Verifying Bulk ATC", () => {
    cy.scrollTo('center')
    cy.xpath(
      "/html[1]/body[1]/main[1]/div[1]/div[8]/div[1]/div[1]/div[1]/div[1]/button[1]",
    ).click({force: true});
    cy.xpath("(//button[normalize-space()='ÉPUISÉ - PASSER'])[1]").click({force:true})
    cy.wait(5000)
    cy.xpath("(//div)[69]").click({force:true})
    cy.xpath("//button[contains(text(),'AJOUTER AU PANIER')]").click()
    cy.wait(3000)
    cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click()

    //cy.get('.mt-auto > :nth-child(4) > a > .w-full').click()


  })
    */


  it("Verifying video dection", () => {

    cy.scrollTo(0, 2800) 
    cy.get('.relative > .flex > .font-extrabold').contains('MAGASINER POUR ENFANTS').should('exist')
    cy.get('.\\[\\&\\>a\\.transition\\]\\:text-\\[14px\\] > .inline-flex')
      .click({ force: true });
    cy.get('h1').should('have.text', 'All-departments')
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()


  })

  it("Verify Shop Now button for Nike section", () => {
    cy.scrollTo(0, 4500)
    cy.wait(5000)
    cy.get(".container >.w-auto").eq(0).click({ force: true })
    cy.get('h1').should('have.text', 'All-departments')
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click() //home-page
    cy.wait(5000)
    cy.scrollTo(0, 4500)
    clickButtonMultipleTimes("(//button[@aria-label='Next'])[2]", 6);
    clickButtonMultipleTimes("(//button[@aria-label='Previous'])[2]", 3);
  })


  it("Verify Shop Now button for Converse section", () => {
    cy.scrollTo(0, 5500)
    cy.wait(5000)
    //cy.get(':nth-child(1) > :nth-child(1) > .bg-\[\#F5F5F5\].w-full > .\[\@media\(max-width\:1921px\)\]\:max-w-\[1920px\] > .container > .w-auto')
    cy.get(".container >.w-auto").eq(1).click({ force: true })
    cy.get('h1').should('have.text', 'All-departments')
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click() //home-page
    cy.wait(5000)
    cy.scrollTo(0, 5500)
    clickButtonMultipleTimes("(//button[@aria-label='Next'])[4]", 6);
    clickButtonMultipleTimes("(//button[contains(@aria-label,'Previous')])[6]", 3);



  })

  

it("Highlited collection section verification", () => {

  cy.scrollTo(0,6000)
  cy.xpath("//a[@class='no-underline text-center text-white text-[19px] font-black leading-7 font-Mulish'][normalize-space()='$4.95 LIVRAISON']").click({ force: true })
  cy.get('.faq-banner-heading').should('have.text', 'questions fréquemment posées')
 // cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

  //cy.wait(5000)
 

  cy.scrollTo('bottom')
  cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/a[2]").click({ force: true })
  cy.get('h3').contains('GUIDE DES TAILLES')
  //cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

  cy.scrollTo('bottom')
  cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[2]").click({ force: true })
  cy.get('.hero-banner').contains('Localisateur de magasin')
  //cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()


  cy.scrollTo('bottom')
  cy.xpath("(//a[contains(@class,'no-underline text-center text-white text-[19px] font-black leading-7 font-Mulish')][normalize-space()='FREE RETURNS'])[1]")
  .click({ force: true })
  cy.get('.boxContainer > .text-black').should('have.text', 'Retour')
  cy.get('.p-0 > .py-4').click()

  //cy.wait(5000)
  

  
})

  it("Instagram section verification", () => {
    cy.scrollTo("bottom");
    cy.get(
      '[style="min-height: 100px; position: relative;"] > .container > .text-black'
    ).should("have.text", "SUIVEZ-NOUS SUR INSTAGRAM");
    //cy.get('.text-blue').click({force:true})

    cy.get("div[id='KHWHNUVMmnqbaVF2EHOLc'] button:nth-child(1)")
      .should("be.visible")
      .click({ force: true });
    cy.get(".p-0 > .text-black").should("have.text", "ACHETER CE LOOK");
    cy.get(".absolute > .bg-black").click({force:true});
    //cy.get('[data-carousel-next="true"]').click()
    //cy.get('[data-carousel-next="true"]').click()
    // cy.get('[data-carousel-next="true"]').click()
    for (let i = 0; i < 4; i++) {
      cy.get('[data-carousel-next="true"]').click({force:true});
    }
    cy.log("All slider completed");

    for (let i = 0; i < 5; i++) {
      cy.get('[data-carousel-prev="true"]').click();
    }
    cy.log("All slider completed");

    cy.get("a[class='w-full h-full flex rb-product-thumb']").click({
      force: true,
    }); //a[class='w-full h-full flex rb-product-thumb']
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click({force:true})
});

 /* it('Verifying static feature section & Membership ATC', () => {
    cy.scrollTo(0,2800);
   // cy.xpath("(//h1[normalize-space()='DEVENEZ MEMBRE RUBINO'])[1]").should('have.text', 'DEVENEZ MEMBRE RUBINO')
   cy.wait(2000); // Wait for 2 seconds (adjust as necessary)
   cy.xpath("//button[contains(@type,'submit')]")
     .should('be.visible')
     .click({ force: true });
   
    cy.wait(4000)
    cy.log("ATC visible")
    cy.get('.cart-line-quantity > .flex-row > :nth-child(3) > .cursor-pointer').click({ force: true })
    cy.get("button[type='submit']").eq(0).click({ force: true })
    cy.xpath("(//h3[normalize-space()='Votre panier est vide'])[1]").should('have.text', 'Votre panier est vide')
    cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click()
    cy.xpath("(//a[normalize-space()='Afficher plus de détails'])[1]").click({ force: true })
  })*/



it('Verifying footer sections', () => {
  cy.scrollTo("bottom");
  cy.get('[href="/fr/privacy-policy/"]').click({ force: true })
  cy.wait(5000)

  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
  cy.get('[href="/fr/terms-conditions/"]').click({ force: true })
  cy.wait(4000)

  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
  cy.get('[href="https://cdn.shopify.com/s/files/1/0078/2191/8285/files/RUBINO_B211_FINAL_SIG_5_17_2024_translated_formatted.pdf?v=1717080226"]').click({ force: true })
  // FAQ, ONLINE RETURNS, SIZE GUIDE
  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
  cy.get(':nth-child(2) > .text-zinc-800').click({ force: true })
  cy.wait(4000)
  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
  cy.get(':nth-child(3) > .text-zinc-800').click({ force: true })
  cy.wait(4000)
  cy.get('.p-0 > .py-4').click()
  cy.get(':nth-child(4) > .text-zinc-800').click({ force: true })
  cy.wait(4000)
  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

  //about,store,career,contact

  cy.get('.grid> :nth-child(1) > .text-black').click({ force: true })
  cy.get('.grid> :nth-child(2) > .text-black').click({ force: true })
  cy.get('.grid> :nth-child(3) > .text-black').click({ force: true })
  cy.get('.grid > :nth-child(4)> .text-black').click({ force: true })

  cy.on("window:confirm", (t) => {
    expect(t).to.contains('Know your location')
  })
  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()





})



it("Verifying Women's section",()=>{
  cy.get('.items-center> .flex > .text-black').eq(0).click({ force: true })
  cy.get('[href="/fr/products/women/all-brands/shoes/"]').contains('Chaussures').click()  //shoes
  cy.get('h1').should("have.text", "Chaussures pour femmes ")
  cy.wait(4000)


  cy.get('.items-center> .flex > .text-black').eq(0).click({ force: true })
  cy.get('[href="/fr/products/women/?winterized=water%252520resistant"]').click() // water resistant  ALL DEPARTMENTS
  cy.wait(4000)
  cy.get('h1').should("have.text", "All-departments")    //wrong
  cy.wait(4000)

  cy.get('.items-center> .flex > .text-black').eq(0).click({ force: true })
  cy.get(':nth-child(4) > .text-sm').eq(0).click({ force: true }) //view all brands
  cy.get('h3').contains('MARQUES')
  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage
  

})
it('Nav menu items (Men) with random selector',()=>{

  const selectors = [
      '.tbl-section-items-wrap > .h-full > :nth-child(1) > [href="/fr/products/men/"]',
      '[href="/fr/products/men/?style=casual"]',
      '[href="/fr/products/men/converse/"]',
      '[href="/fr/products/men/birkenstock/"]',
      '[href="/fr/products/men/all-brands/sandals/"]'
      
    ];
    
    // Function to select a random selector
    function getRandomSelector() {
      const randomIndex = Math.floor(Math.random() * selectors.length);
      return selectors[randomIndex];
    }

    const randomSelector = getRandomSelector();

    cy.get('.items-center> .flex > .text-black').eq(1).click({force:true})
    // Use Cypress to get and click the random element
    cy.get(randomSelector).click({force:true});

})

it("Verifying Kid's section",()=>{
  cy.get('.items-center> .flex > .text-black').eq(2).click({force:true})
  cy.get('[href="/fr/products/kids/?collections=kids-best-sellers"]').click()  //All
  cy.get('h1').should("have.text","Enfants")
  cy.wait(4000)

  cy.get('.items-center> .flex > .text-black').eq(2).click({force:true})
  cy.get('[href="/fr/products/kids/all-brands/winter-boots?collections=kids-best-sellers"]').click()  //Winter boots
  cy.get('h1').should("have.text","Bottes d'hiver pour enfants ")
  cy.wait(4000)

  cy.get('.items-center> .flex > .text-black').eq(2).click({force:true})
  cy.get('[href="/fr/products/toddlers?collections=kids-best-sellers"]').click()  //Toddlers
  cy.get('h1').should("have.text","Tout-petits")
  cy.wait(4000)

  cy.get('.items-center> .flex > .text-black').eq(2).click({force:true})
  cy.get(':nth-child(4) > .font-light').click() // Cribs all
  cy.wait(4000)

  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage

})

it("Verifying Accessories's section",()=>{
    
  cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
  cy.get('[href="/fr/products/shoes-care-&-insoles/"]').click()  //Shoe care & insole
  cy.get('h1').should("have.text","Produits d'entretien et semelles")
  cy.wait(4000)

  cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
  cy.get('[href="/fr/products/women/all-brands/accessories/?style=cap&style=hat&style=beanie"]').click()  //Caps and hats
  cy.get('h1').should("have.text","Accessoires pour femmes ")
  cy.wait(4000)

  cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
  cy.get('[href="/fr/products/men/all-brands/accessories/?style=backpacks&style=crossbody&style=duffel%252520bags&style=fanny%252520packs"]').click()  //Bags
  cy.get('h1').should("have.text","Accessoires pour hommes ")
  cy.wait(4000)

  cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
  cy.get('[href="/fr/products/all-departments/all-brands/accessories/?style=lunch%2520box"]').click()  //Lunch boxes
  cy.get('h1').should("have.text","Accessories ")
  cy.wait(4000)



  cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
  cy.get('[href="/fr/products/all-departments/all-brands/accessories/?style=pencil%2520case"]').click() // Pencil cases
  cy.get('h1').should("have.text","Accessories ")
  cy.wait(4000)

  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage

})


it('Verifying Sales Button',()=>{
  cy.get(':nth-child(5) > .mega-menu-trigger-sibling > .flex-col').click()
  cy.get('h1').should('have.text','Ventes')
  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage
})

it('Verifying Brands Button',()=>{
  cy.get(':nth-child(6) > .mega-menu-trigger-sibling > .flex-col').click()
  cy.get('.\\[\\@media\\(max-width\\:1921px\\)\\]\\:max-w-\\[1920px\\] > .flex-col > .uppercase')
  .contains('MARQUES')
  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage
})

/*
it.skip('Cart Drawer Tests', () => {
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
    cy.scrollTo("bottom");
    cy.wait(2000)
    cy.get("button[type='submit']").contains('AJOUTER AU PANIER').click({force:true})
    cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click() // cart delete icon
    
    cy.scrollTo("topRight");
    cy.wait(4000)
    cy.xpath("//span[@class='flex items-center justify-center w-max h-max relative isolate']//*[name()='svg']").click();  
    cy.xpath("/html[1]/body[1]/aside[1]/main[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/a[1]/div[1]").click({force:true})
    cy.wait(4000)

    cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[1]/p[1]/div[1]/span[1]/a[1]").click({force:true})
    
    
     // cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click().should('be.visible'); // Adjust the selector as necessary

    });*/


})
