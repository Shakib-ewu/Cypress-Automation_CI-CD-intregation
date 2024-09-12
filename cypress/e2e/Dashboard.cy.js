import 'cypress-mochawesome-reporter/register';

describe('Verifying Homepage', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/');
    cy.get("button[class='p-0 m-0 block md:inline-flex w-full']")
      .contains('accept')
      .click();
    cy.wait(4000);
  });
  it('Verifying Hero Banner', () => {
    //cy.wait(6000)
    /* cy.get('.swiper-slide-active > .relative > .absolute').click()
    //cy.get('h1').contains('SALE')
    cy.wait(5000)
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    cy.get('.swiper-pagination > :nth-child(2)').click()
    cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click({force:true})
   // cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - CONVERSE')
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    cy.get('.swiper-pagination > :nth-child(3)').click()
    cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click({force:true})
    //cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - BIRKENSTOCK')
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    cy.get('.swiper-pagination > :nth-child(4)').click()
    cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click({force:true})
   // cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - NATIVE')
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click() */

    //nav menu first item new changes
    cy.xpath(
      '/html[1]/body[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]',
    ).click({force: true});
    cy.get('h1').should('have.text', 'All-departments');
    cy.go('back', { timeout: 30000 });

    /*cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click(); */
  });

  it('Brand Scroller verification', () => {
    cy.get('.brand-container > :nth-child(1) > .swiper').should('be.visible');

    // Verify and click "Shop Now" button for Crocs
    /*cy.get('.swiper-slide-active > .w-full').eq(1).scrollIntoView().should('be.visible').click({ force: true });
    cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - CROCS');
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click();
    cy.wait(5000);
 
    // Verify and click "Shop Now" button for Converse
    cy.get(".swiper-slide-next > .w-full").eq(1).scrollIntoView().should('be.visible').click({ force: true });
    cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - CONVERSE');
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click();
    cy.wait(5000);
 
    // Verify and click "Shop Now" button for Nike
    cy.get('[aria-label="3 / 10"] > .w-full').scrollIntoView().should('be.visible').click({ force: true });
    cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - NIKE');
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click();
    cy.wait(5000);
 
    // Verify and click "Shop Now" button for Puma
    cy.get('[aria-label="4 / 10"] > .w-full').scrollIntoView().should('be.visible').click({ force: true });
    cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - PUMA');
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click();
    cy.wait(5000);
 
    // Verify and click "Shop Now" button for Adidas
    cy.get('[aria-label="5 / 10"] > .w-full').scrollIntoView().should('be.visible').click({ force: true });
    cy.get('.h-full > .text-center').contains('ALL DEPARTMENTS - ADIDAS');
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click();
    cy.wait(5000);
 
    // Verify brand scroller navigation
    //cy.scrollTo('bottom')
  cy.scrollTo(0, 500) 
  cy.xpath("//button[@aria-label='left-slide-button']//*[name()='svg']", { timeout: 10000 }).should('be.visible').click({ force: true });
  cy.xpath("//button[@aria-label='right-slide-button']//*[name()='svg']", { timeout: 10000 }).should('be.visible').click({ force: true });
 
    // Verify brand scroller auto-scroll
    cy.wait(10000); // Observe auto-scroll for 10 seconds
    cy.get('.brand-container > :nth-child(1) > .swiper').should('be.visible');*/

    // Verify brand logos are clickable and lead to correct pages
    const brands = [
      {selector: '[aria-label="6 / 14"] > .w-full', label: 'Vans'},
      {selector: '[aria-label="2 / 14"] > .w-full', label: 'Adidas'},
      {selector: '[aria-label="4 / 14"] > .w-full', label: 'New Balance'},
      {selector: '[aria-label="5 / 14"] > .w-full', label: 'Puma'},
      /*  { selector: '[aria-label="5 / 10"] > .w-full', label: 'Adidas' },
        { selector: '[aria-label="6 / 10"]> .w-full', label: 'Dr Martens' },
        { selector: '[aria-label="7 / 10"]> .w-full', label: 'Sorel' },
        { selector: '[aria-label="8 / 10"]> .w-full', label: 'Ugg' },
        { selector: '[aria-label="9 / 10"]> .w-full', label: 'The North Face' },
        { selector: '[aria-label="10 / 10"]> .w-full', label: 'Pajar' },  */
    ];

    brands.forEach((brand) => {
      cy.get(brand.selector, {timeout: 10000}).each(($el) => {
        cy.wrap($el)
          .scrollIntoView({duration: 1000}) // Adjust duration as needed
          .click({force: true});
      });

      cy.get('h1').contains(`${brand.label}`);
      cy.wait(4000);
      cy.get(
        'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
      ).click();

      cy.xpath("//button[@aria-label='right-slide-button']//*[name()='svg']", {
        timeout: 10000,
      })
        .scrollIntoView({duration: 1000}) // Adjust duration as needed
        .then(($arrow) => {
          if ($arrow.is(':visible')) {
            // Click the right arrow
            cy.wrap($arrow).click({force: true});
            cy.wait(1000); // Add a small wait for the dropdown to appear
          }
        });

      cy.wait(4000);
    });
  });



  function clickButtonMultipleTimes(buttonSelector, clickCount) {
    for (let i = 0; i < clickCount; i++) {
      // Ensure the button is visible and click it
      cy.xpath(buttonSelector).click({force: true});
      // Optionally, add a small wait to allow for any animation or transition
      cy.wait(500);
    }
  }

  it('Sale Banner for women,kid and Men', () => {
    cy.scrollTo(0, 1200);
    cy.xpath(
      '/html[1]/body[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/span[1]',
    ).click({force: true});
    cy.wait(2000);
    cy.get('h1').should('have.text', 'Shoes ');
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click(); //clicking hompage
    cy.wait(3000);
    cy.scrollTo(0, 1200);
    cy.xpath(
      '/html[1]/body[1]/main[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/span[1]',
    ).click({force: true});
    cy.wait(2000);
    cy.get('h1').should('have.text', 'Accessories ');
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click(); //clicking hompage
    cy.wait(3000);
    cy.scrollTo(0, 1200);
    cy.get(
      '[aria-label="3 / 3"] > .aspect-auto > .category > .text-center',
    ).click({force: true});
    cy.get('h1').should('have.text', 'Shoes ');
  });

  it('Verify Shop Now button for Trending section', () => {
    cy.scrollTo(0, 1500);
    cy.xpath(
      '/html[1]/body[1]/main[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/button[1]',
    ).click({force: true});
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

  /* it('Verifying Bulk ATC', () => {
    cy.scrollTo('center');
    cy.xpath(
      "/html[1]/body[1]/main[1]/div[1]/div[8]/div[1]/div[1]/div[1]/div[1]/button[1]",
    ).click({force: true});
    cy.xpath("(//button[normalize-space()='SOLD OUT - SKIP'])[1]").click({
      force: true,
    });
    cy.wait(5000);
    cy.xpath('(//div)[69]').click({force: true});
    cy.xpath("/html[1]/body[1]/aside[1]/main[1]/div[2]/div[1]/div[1]/div[2]/form[1]/button[1]").click();
    cy.wait(3000);
    cy.get(
      "button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']",
    ).click();

    //cy.get('.mt-auto > :nth-child(4) > a > .w-full').click()
  });
  */

  it('Verifying video dection', () => {
    cy.scrollTo('center');
    cy.get('.relative > .flex > .font-extrabold')
      .contains('SHOP FOR KIDS')
      .should('exist');
    cy.get(
      '.\\[\\&\\>a\\.transition\\]\\:text-\\[14px\\] > .inline-flex',
    ).click({force: true});
    cy.get('h1').should('have.text', 'All Products');
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click();
  });

  it('Verify Shop Now button for Nike section', () => {
    cy.scrollTo(0, 4500);
    cy.wait(5000);
    cy.get('.container >.w-auto').eq(0).click({force: true});
    cy.get('h1').should('have.text', 'Nike');
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click(); //home-page
    cy.wait(4000);
    cy.scrollTo(0, 4500);
    clickButtonMultipleTimes("(//button[@aria-label='Next'])[2]", 6);
    clickButtonMultipleTimes("(//button[@aria-label='Previous'])[2]", 3);
  });

  it('Verify Shop Now button for Converse section', () => {
    cy.scrollTo(0, 5500);
    cy.wait(5000);
    //cy.get(':nth-child(1) > :nth-child(1) > .bg-\[\#F5F5F5\].w-full > .\[\@media\(max-width\:1921px\)\]\:max-w-\[1920px\] > .container > .w-auto')
    cy.get('.container >.w-auto').eq(1).click({force: true});
    cy.get('h1').should('have.text','Vans');
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click(); //home-page
    cy.wait(5000);
    cy.scrollTo(0, 5500);
    clickButtonMultipleTimes("(//button[@aria-label='Next'])[4]", 10);
    clickButtonMultipleTimes(
      "(//button[contains(@aria-label,'Previous')])[6]",
      3,
    );
  });

  it('Highlited collection section verification', () => {
    cy.scrollTo(0, 6000);
    cy.xpath(
      '/html[1]/body[1]/main[1]/div[1]/div[11]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[2]',
    ).click({force: true});
    cy.get('.faq-banner-heading').should(
      'have.text',
      'frequently asked questions',
    );
    // cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

    //cy.wait(5000)

    cy.scrollTo('bottom');
    cy.xpath(
      "(//a[@class='no-underline text-center text-white text-[19px] font-black leading-7 font-Mulish'][normalize-space()='SIZE GUIDE'])[1]",
    ).click({force: true});
    cy.get('h3').contains('SIZE GUIDE');
    //cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

    cy.scrollTo('bottom');
    cy.xpath(
      "(//a[@class='no-underline text-center text-white text-[19px] font-black leading-7 font-Mulish'][normalize-space()='STORE LOCATOR'])[1]",
    ).click({force: true});
    cy.get('.hero-banner').contains('STORE LOCATOR');
    //cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

    cy.scrollTo('bottom');
    cy.xpath(
      "(//a[contains(@class,'no-underline text-center text-white text-[19px] font-black leading-7 font-Mulish')][normalize-space()='FREE RETURNS'])[1]",
    ).click({force: true});
    cy.get('.boxContainer > .text-black').should('have.text', 'Returns');
    cy.get('.p-0 > .py-4').click();

    //cy.wait(5000)
  });

  it('Instagram section verification', () => {
    cy.scrollTo('bottom');
    cy.get(
      '[style="min-height: 100px; position: relative;"] > .container > .text-black',
    ).should('have.text', 'FOLLOW US ON INSTAGRAM');
    //cy.get('.text-blue').click({force:true})

    cy.get("div[id='KHWHNUVMmnqbaVF2EHOLc'] button:nth-child(1)")
      .should('be.visible')
      .click({force: true});
    cy.get('.p-0 > .text-black').should('have.text', 'SHOP THIS LOOK');
    cy.get('.absolute > .bg-black').click();
    //cy.get('[data-carousel-next="true"]').click()
    //cy.get('[data-carousel-next="true"]').click()
    // cy.get('[data-carousel-next="true"]').click()
    for (let i = 0; i < 4; i++) {
      cy.get('[data-carousel-next="true"]').click();
    }
    cy.log('All slider completed');

    for (let i = 0; i < 5; i++) {
      cy.get('[data-carousel-prev="true"]').click();
    }
    cy.log('All slider completed');

    cy.get("a[class='w-full h-full flex rb-product-thumb']").click({
      force: true,
    }); //a[class='w-full h-full flex rb-product-thumb']
  });

  it('Verifying static feature section & Membership ATC', () => {
    cy.scrollTo(0, 2800);
    cy.wait(2000);
    cy.xpath("//button[@type='submit']", {timeout: 10000})
      .should('be.visible')
      .click({force: true}); ///html[1]/body[1]/main[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[4]/form[1]/button[1]
    cy.wait(4000);
    cy.log('ATC visible');
    cy.get(
      '.cart-line-quantity > .flex-row > :nth-child(3) > .cursor-pointer',
    ).click({force: true});
    cy.get("button[type='submit']").eq(0).click({force: true});
    cy.get('h3').should('have.text', 'Your cart is empty');
    cy.get(
      "button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']",
    ).click();
    cy.xpath(
      '/html[1]/body[1]/main[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[5]/a[1]',
    ).click({force: true});
    cy.wait(3000);
    cy.xpath("//button[@type='submit']").click({force: true});
  });

  it('Verifying footer sections', () => {
    cy.scrollTo(0, 7000);
    cy.xpath("//a[normalize-space()='Privacy Policy']").click({force: true});
    cy.wait(4000);
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click();
    cy.xpath("//a[normalize-space()='Terms & Conditions']").click({
      force: true,
    });
    cy.wait(4000);

    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click();
    cy.get(
      '[href="https://cdn.shopify.com/s/files/1/0078/2191/8285/files/RUBINO_B211-_FINAL_SIG_5-17-2024.pdf?v=1717080222"]',
    ).click({force: true});
    // FAQ, ONLINE RETURNS, SIZE GUIDE
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click();
    cy.get(':nth-child(2) > .text-zinc-800').click({force: true});
    cy.wait(4000);
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click();
    cy.get(':nth-child(3) > .text-zinc-800').click({force: true});
    cy.wait(4000);
    cy.get('.p-0 > .py-4').click();
    cy.get(':nth-child(4) > .text-zinc-800').click({force: true});
    cy.wait(4000);
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click();

    //about,store,career,contact

    cy.get('.grid> :nth-child(1) > .text-black').click({force: true});
    cy.get('.grid> :nth-child(2) > .text-black').click({force: true});
    cy.get('.grid> :nth-child(3) > .text-black').click({force: true});
    cy.get('.grid > :nth-child(4)> .text-black').click({force: true});

    cy.on('window:confirm', (t) => {
      expect(t).to.contains('Know your location');
    });
    cy.get(
      'body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
    ).click();
  });
});
