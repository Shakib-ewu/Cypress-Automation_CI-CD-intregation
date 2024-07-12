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

it("should verify product price before and after adding membership ATC", () => {
    // Scroll to the product area
    cy.scrollTo(0, 2000);

    // Click the "Add To Cart" button
    cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[8]/div[1]/div[1]/div[1]/div[1]/button[1]")
        .click({ force: true });

    // Wait for cart update (consider waiting for a specific element instead)
    cy.wait(3000);

    // Click some element (clarify what this is supposed to do)
    cy.xpath("(//div)[65]").click({ force: true });

    // Click the final "Add To Cart" button
    cy.xpath("//button[normalize-space()='ADD TO CART']")
        .click({ force: true });

    // Wait for the special offer to be visible
    cy.wait(3000)
    cy.xpath("(//div[@class='mb-[8px] w-full text-left lg:text-[13px] lg:font-medium font-Mulish lg:leading-[1.6] text-[#C0722D] text-[13px] md:text-[13px] font-light uppercase leading-[1.6] flex items-center gap-[12px] text-pretty'])[1]")
        .contains('SPECIAL OFFER: -20%')
        .should('be.visible');

    // Extract the initial price
    cy.xpath("//span[normalize-space()='116.00']")
        .invoke('text')
        .then((text) => {
            initialPrice = parseFloat(text.trim());
            cy.log('Initial Price: ' + initialPrice);
            expect(initialPrice).to.equal(116.00); // Ensure the initial price is correct
        });

    // Add the membership badge (adjust the selector to your membership badge button)
    cy.get("form[class='w-full h-max'] button[type='submit']")
        .click({ force: true });

    // Wait for the discount to apply (consider waiting for a specific element instead)
    cy.wait(4000);

    // Extract the membership price
    cy.xpath("//span[normalize-space()='20.00']")
        .invoke('text')
        .then((text) => {
            membershipPrice = parseFloat(text.trim());
            cy.log('Membership Price: ' + membershipPrice);
        });

    // Verify the discounted price after adding membership
    cy.xpath("//span[normalize-space()='104.40']")
        .invoke('text')
        .then((text) => {
            const discountedPrice = parseFloat(text.trim());
            const expectedDiscountedPrice = parseFloat((initialPrice * 0.9).toFixed(2)); // Round to 2 decimal places
            cy.log('Discounted Price: ' + discountedPrice);
            cy.log('Expected Discounted Price: ' + expectedDiscountedPrice);
            expect(discountedPrice).to.be.closeTo(expectedDiscountedPrice, 0.01); // Ensure the discounted price is 10% less

            // Extract and verify the subtotal price
            cy.xpath("//div[normalize-space()='CA$124.40']")
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
                cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/aside[1]/div[1]/section[1]/div[1]/section[1]/div[2]/div[5]/div[2]/div[1]/div[1]/strong[1]").should('be.visible')

        });
});

it.only("should verify product price before and after adding membership ATC when no discount available", () => {
    // Scroll to the product area
    cy.scrollTo(0, 3000);

    // Click the "Add To Cart" button
    cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[8]/div[1]/div[1]/div[1]/div[1]/button[1]")
        .click({ force: true });

    // Wait for cart update (consider waiting for a specific element instead)
    cy.wait(3000);

    // Click some element (clarify what this is supposed to do)
    cy.xpath("(//div)[65]").click({ force: true });

    // Click the final "Add To Cart" button
    //cy.xpath("(//img)[3]").click({force:true})
    cy.wait(2000)
    cy.xpath("(//button[contains(text(),'ADD TO CART')])[1]")
        .click({ force: true });

    // Wait for the special offer to be visible
   /* cy.wait(3000)
    cy.xpath("(//div[@class='mb-[8px] w-full text-left lg:text-[13px] lg:font-medium font-Mulish lg:leading-[1.6] text-[#C0722D] text-[13px] md:text-[13px] font-light uppercase leading-[1.6] flex items-center gap-[12px] text-pretty'])[1]")
        .contains('SPECIAL OFFER: -20%')
        .should('be.visible');*/

    // Extract the initial price
    cy.wait(3000)

    cy.xpath("(//div)[75]").click({ force: true });
    cy.xpath("//button[contains(text(),'ADD TO CART')]").click({ force: true });
    cy.wait(2000)
    cy.xpath("//li[1]//div[2]//div[4]//div[1]//form[1]//button[1]//*[name()='svg']").click({ force: true });
    cy.wait(4000)


    cy.xpath("//span[normalize-space()='116.00']")
        .invoke('text')
        .then((text) => {
            initialPrice = parseFloat(text.trim());
            cy.log('Initial Price: ' + initialPrice);
            expect(initialPrice).to.equal(116.00); // Ensure the initial price is correct
        });

    // Add the membership badge (adjust the selector to your membership badge button)
    cy.get("form[class='w-full h-max'] button[type='submit']")
        .click({ force: true });

    // Wait for the discount to apply (consider waiting for a specific element instead)
    cy.wait(4000);

    // Extract the membership price
    cy.xpath("//span[normalize-space()='20.00']")
        .invoke('text')
        .then((text) => {
            membershipPrice = parseFloat(text.trim());
            cy.log('Membership Price: ' + membershipPrice);
        });

    // Verify the discounted price after adding membership
    cy.xpath("//span[normalize-space()='104.40']")
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
            cy.xpath("//div[normalize-space()='CA$124.40']")
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
                cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/aside[1]/div[1]/section[1]/div[1]/section[1]/div[2]/div[5]/div[2]/div[1]/div[1]/strong[1]").should('be.visible')

        });
});

})
  