describe("Verifying Membership ATC", () => {

    beforeEach(() => {
  
      cy.viewport(1920, 1080);
      cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('/')
      cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
      cy.wait(4000)
    })

    let initialPrice;
let membershipPrice = 0;



  
it.only("should verify product price before and after adding membership ATC when no discount available", () => {
    // Scroll to the product area
    cy.scrollTo(0, 3000);
    cy.wait(2000);
    cy.get('.max-w-full > .py-\\[30px\\] > .\\[\\@media\\(max-width\\:1921px\\)\\]\\:max-w-\\[1920px\\] > .justify-center').should('be.visible')
    .click({force: true});
    cy.wait(5000)
    cy.xpath("(//div)[68]",{ timeout: 10000 }).click({force: true});
    cy.xpath("(//button[normalize-space()='ADD TO CART'])[1]",{ timeout: 10000 }).click({force: true});
    cy.wait(3000);
    cy.get('.gap-\\[15px\\] > :nth-child(5)',{ timeout: 10000 }).click({force: true});
    cy.wait(2000)
    cy.xpath("/html[1]/body[1]/aside[1]/main[1]/div[2]/div[1]/div[1]/div[2]/form[1]/button[1]",{ timeout: 10000 }).click({force:true});

    cy.wait(3000)
    cy.xpath("(//div)[66]",{ timeout: 10000 }).click({force: true});
    cy.xpath("(//button[contains(text(),'ADD TO CART')])[1]",{ timeout: 10000 }).click({force: true});
    cy.wait(5000)


    // Need to delete birkenstock prod
    cy.xpath("/html[1]/body[1]/aside[1]/main[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[2]/div[5]/div[1]/form[1]/button[1]/*[name()='svg'][1]",{ timeout: 10000 } ).click({force:true})
    cy.wait(8000)
    cy.xpath("/html[1]/body[1]/aside[1]/main[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[2]/div[5]/div[1]/form[1]/button[1]/*[name()='svg'][1]", { timeout: 10000 }).click({force:true})
    cy.wait(8000)



    cy.xpath("//span[contains(@layout,'cart')]")
        .invoke('text')
        .then((text) => {
            initialPrice = parseFloat(text.trim());
            cy.log('Initial Price: ' + initialPrice);
            expect(initialPrice).to.equal(69.99); // Ensure the initial price is correct
        });

    // Add the membership badge (adjust the selector to your membership badge button)
    cy.get("form[class='w-full h-max'] button[type='submit']")
        .click({ force: true });

    // Wait for the discount to apply (consider waiting for a specific element instead)
    cy.wait(6000);

    // Extract the membership price
    cy.xpath("//span[normalize-space()='20.00']")
        .invoke('text')
        .then((text) => {
            membershipPrice = parseFloat(text.trim());
            cy.log('Membership Price: ' + membershipPrice);
        });

    // Verify the discounted price after adding membership
    cy.xpath("//span[normalize-space()='62.99']")
        .invoke('text')
        .then((text) => {
            const discountedPrice = parseFloat(text.trim());
            const expectedDiscountedPrice = parseFloat((initialPrice * 0.9).toFixed(2)); // Round to 2 decimal places
            cy.log('Discounted Price: ' + discountedPrice);
            cy.log('Expected Discounted Price: ' + expectedDiscountedPrice);
            expect(discountedPrice).to.be.closeTo(expectedDiscountedPrice, 0.01); // Ensure the discounted price is 10% less
            
            //checking membership badge
            cy.xpath("(//div[@class='w-max mb-[11px] lg:mb-[21px] bg-[#EBC436] rounded-[4px] p-[6px] text-black font-Mulish text-[11px] md:text-[14px] font-[600] leading-[140%] tracking-[0.2px]'])[1]").should('be.visible')

            // Extract and verify the subtotal price
            cy.xpath("//div[normalize-space()='CA$82.99']")
                .invoke('text')
                .then((text) => {
                    const subtotalPrice = parseFloat(text.trim().replace('CA$', ''));
                    const expectedSubtotal = discountedPrice + membershipPrice;
                    cy.log('Subtotal Price: ' + subtotalPrice);
                    cy.log('Expected Subtotal: ' + expectedSubtotal);
                    expect(subtotalPrice).to.be.closeTo(expectedSubtotal, 0.01); // Ensure the subtotal is correct
                });

                cy.xpath("(//div[@class='w-full h-12 px-9 py-4 bg-black rounded-lg border border-black justify-center items-center gap-2.5 inline-flex'])[1]").click({force:true})
                cy.wait(3000)
                cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[2]/div[1]/span[1]/a[1]").should('be.visible')

        });
});

})
  