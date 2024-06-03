describe("Verifying Language Switcher", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        //cy.wait(4000)
        cy.get('.items-center> .flex > .text-black').eq(4).click({force:true})
        cy.get("div[class='text-black text-sm 2xl:text-[14px] font-extrabold font-Mulish leading-[120%]']").click({force:true})
    })


   /* it('Verifying Language selector',()=>{
        cy.get('.items-center> .flex > .text-black').eq(4).click({force:true})
        cy.get("div[class='text-black text-sm 2xl:text-[14px] font-extrabold font-Mulish leading-[120%]']").click({force:true})

        const slowScroll = (start, end, steps) => {                // For a smooth scroll from top to bottom
            let currentPosition = start;
            const increment = (end - start) / steps;
      
            for (let i = 0; i < steps; i++) {
              cy.wait(500); // Adjust the wait time for a smoother/slower scroll
              currentPosition += increment;
              cy.scrollTo(0, currentPosition);
            }
          };
      
          // Call the slow scroll function
          slowScroll(0, 10000, 20);
          cy.scrollTo('top');
          cy.wait(4000)
          //cy.get('.items-center> .flex > .text-black').eq(4).click({force:true})
          //cy.get("div[class='text-black pb-[10px] text-sm 2xl:text-[14px] font-extrabold font-Mulish leading-[120%]']").click()

        
        
        //cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage
    })*/

    it("Verifying Hero Banner", () => {
       
      //cy.wait(6000)
      cy.get('.swiper-slide-active > .relative > .absolute').click()
      cy.get('.h-full > .text-center').contains('FEMMES - MICHAEL KORS')
      cy.wait(5000)
      cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
      cy.get('.swiper-pagination > :nth-child(2)').click()
      cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click()
      cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - CONVERSE')
      cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
      cy.get('.swiper-pagination > :nth-child(3)').click()
      cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click()
      cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - BIRKENSTOCK')
      cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
      cy.get('.swiper-pagination > :nth-child(4)').click()
      cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click()
      cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - NATIVE')
      cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

      //nav menu first item
      //cy.get('.items-center> .flex > .text-black').eq(0).click({force:true})

  })

  function clickButtonMultipleTimes(buttonSelector, clickCount) {
    for (let i = 0; i < clickCount; i++) {
      // Ensure the button is visible and click it
      cy.xpath(buttonSelector).should('be.visible').click({ force: true });
      // Optionally, add a small wait to allow for any animation or transition
      cy.wait(500);
    }
  }

  it("Verify Shop Now button for Trending section",()=>{
    cy.scrollTo(0, 1000) 
      cy.get("button[type='button']",{timeout:3000}).eq(0).contains('Magasiner').click({force:true})
      cy.wait(5000)
      cy.get('.h-full > .text-center').should('have.text','SALE')
      cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
      cy.wait(5000)
      cy.scrollTo(0, 1000) 
      clickButtonMultipleTimes("(//button[@aria-label='Next'])[1]", 6);
      clickButtonMultipleTimes("(//button[@aria-label='Previous'])[1]", 3);
  })

  it("Carosoul slider",()=>{
    cy.scrollTo(0, 2000) 
    cy.get('h1').contains("SOYEZ PRÊT POUR L'ÉTÉ AVEC MICHAEL KORS").should('exist')
    cy.get("a:contains('Achetez maintenant')").click({force:true})
    cy.wait(5000)
    cy.get("h3").should('have.text','FEMMES - MICHAEL KORS')
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
  })

  it("Verifying Bulk ATC",()=>{
    cy.scrollTo(0, 2500) 
    cy.get("button[data-contentful-field-id='ShopTheLook_button_text']").click({force:true})
    cy.get('form.w-full > .rounded-lg').eq(0).click()
    cy.wait(4000)
    cy.get('form.w-full > .rounded-lg').click()
    cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click()
    cy.log("Checking it's visible on cart drawer ot not")
    cy.xpath("//span[@class='flex items-center justify-center w-max h-max relative isolate']//*[name()='svg']").click();

    //cy.get('.mt-auto > :nth-child(4) > a > .w-full').click()

    
  })

  it("Verifying video dection", () => {

    cy.scrollTo(0, 2800) 
    cy.get('.relative > .flex > .font-extrabold').contains('MAGASINER POUR ENFANTS').should('exist')
    cy.get('.\\[\\&\\>a\\.transition\\]\\:text-\\[14px\\] > .inline-flex')
      .click({ force: true });
    cy.get('.h-full > .text-center').should('have.text', 'ENFANTS')
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()


  })

  it("Verify Shop Now button for Converse section",()=>{
    cy.scrollTo(0, 3000) 
    cy.wait(5000)
    cy.get(".container >.w-auto").eq(0).click({force:true})
    cy.get('.h-full > .text-center').should('have.text','ALL DEPARTMENTS - CONVERSE')
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click() //home-page
    cy.wait(5000)
    cy.scrollTo(0, 4000) 
    clickButtonMultipleTimes("(//button[@aria-label='Next'])[2]", 10);
    clickButtonMultipleTimes("(//button[@aria-label='Previous'])[2]", 3);
     })

     it("Verify Shop Now button for Skechers section",()=>{
      cy.scrollTo(0, 3500) 
      cy.wait(5000)
      //cy.get(':nth-child(1) > :nth-child(1) > .bg-\[\#F5F5F5\].w-full > .\[\@media\(max-width\:1921px\)\]\:max-w-\[1920px\] > .container > .w-auto')
      cy.get(".container >.w-auto").eq(1).click({force:true})
      cy.get('h3').should('have.text','ALL DEPARTMENTS - SKECHERS')
      cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click() //home-page
      cy.wait(5000)
    cy.scrollTo(0, 6000) 
    clickButtonMultipleTimes("/html[1]/body[1]/main[1]/div[1]/div[9]/div[1]/div[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/button[2]", 10);
    clickButtonMultipleTimes("/html[1]/body[1]/main[1]/div[1]/div[9]/div[1]/div[1]/div[5]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/button[1]", 3);

      

       })

       it("Highlited collection section verification" , ()=>{

        cy.scrollTo("bottom") 
        cy.get('.py-4> :nth-child(1)').eq(1).click({force:true})
        cy.get('.boxContainer > .text-black').should('have.text','Retour')
        cy.get('.p-0 > .py-4').click()
       
        cy.wait(5000)
        cy.scrollTo("bottom") 
        cy.get('.py-4> :nth-child(1)').eq(2).click({force:true})
        cy.get('.hero-banner').contains('Localisateur de magasin')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

        cy.wait(5000)
        cy.scrollTo("bottom") 
        cy.get('.py-4> :nth-child(1)').eq(3).click({force:true})
        cy.get('h3').contains('GUIDE DES TAILLES')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

        cy.wait(5000)
        cy.scrollTo("bottom") 
        cy.get('.py-4> :nth-child(1)').eq(0).click({force:true})
        cy.get('.faq-banner-heading').should('have.text','questions fréquemment posées')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
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
    cy.get(".absolute > .bg-black").click();
    //cy.get('[data-carousel-next="true"]').click()
    //cy.get('[data-carousel-next="true"]').click()
    // cy.get('[data-carousel-next="true"]').click()
    for (let i = 0; i < 4; i++) {
      cy.get('[data-carousel-next="true"]').click();
    }
    cy.log("All slider completed");

    for (let i = 0; i < 5; i++) {
      cy.get('[data-carousel-prev="true"]').click();
    }
    cy.log("All slider completed");

    cy.get("a[class='w-full h-full flex rb-product-thumb']").click({
      force: true,
    }); //a[class='w-full h-full flex rb-product-thumb']
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
});

  it('Verifying static feature section & Membership ATC', () => {
    cy.scrollTo("bottom");
    cy.xpath("(//h1[normalize-space()='DEVENEZ MEMBRE RUBINO'])[1]").should('have.text', 'DEVENEZ MEMBRE RUBINO')
    cy.get("button[type='submit']").as('btn').click({ force: true })
    cy.wait(4000)
    cy.log("ATC visible")
    cy.get('.cart-line-quantity > .flex-row > :nth-child(3) > .cursor-pointer').click({ force: true })
    cy.get("button[type='submit']").eq(0).click({ force: true })
    cy.get('h3').should('have.text', 'Votre panier est vide')
    cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click()
  })
it('Verifying footer sections', () => {
  cy.scrollTo("bottom");
  cy.get('[href="/fr/privacy-policy/"]').click({ force: true })
  cy.wait(4000)

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


})