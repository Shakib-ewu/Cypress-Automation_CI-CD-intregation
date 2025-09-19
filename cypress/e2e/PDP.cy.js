 /*describe("Verifying PDP Feature", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.scrollTo(0, 2000)
        cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true})
        cy.get('#autocomplete-0-input').type('MORPHLITE W'); // search items
        cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]").click({force:true});
        cy.wait(7000)
        cy.xpath("//img[@alt='MORPHLITE M']").click({force:true});
        cy.wait(5000)
    })


    it('should verify product details with sezzzle text', () => {
        cy.xpath("//div[contains(text(),'MERRELL')]").should('contain.text', "MERRELL");
        cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]").should('be.visible');
        cy.xpath("//div[normalize-space()='80.00']").should('be.visible');
        cy.xpath("//*[name()='path' and contains(@d,'M0 0H75V20')]").should('be.visible').invoke('css', { backgroundColor: 'red', opacity: 0.1 }); // Red highlight with 50% opacity
        cy.log('Sezzle visible')
      });
    

      it('should verify images and zoom functionality', () => {
        // Verify images and zoom functionality for VARIANT:BLACK WHITE
        cy.xpath("(//img[contains(@alt,'MORPHLITE')])[4]").should('be.visible').click();  //wrong
        cy.xpath("(//img[contains(@alt,'MORPHLITE M')])[3]").then($elements => {
            expect($elements.length).to.be.at.least(1).and.to.be.at.most(15);
            for (let i = 6; i < Math.min($elements.length, 10); i++) {
                cy.wrap($elements[i])
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
            }
        });
        cy.wait(3000)
        // Verify images and zoom functionality for VARIANT:MORPHLITE W
        cy.xpath("(//img[contains(@alt,'MORPHLITE')])[3]").click({force:true});
        cy.xpath("(//img[contains(@alt,'MORPHLITE')])[3]").should('be.visible');
        cy.xpath("(//img[contains(@alt,'VARIANT:BLACK GREY')])[6]").then($elements => {
            expect($elements.length).to.be.at.least(1).and.to.be.at.most(15);
            for (let i = 6; i < Math.min($elements.length, 10); i++) {
                cy.wrap($elements[i])
                    .scrollIntoView()
                    .should('be.visible')
                    .click();
            }
        });
    });
    
    let initialPrice;

it('should verify size selection, ATC with before and after membership discount', () => {
    // Click on the dropdown to open it
    cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[2]/div[5]/div[1]/div[1]/div[1]").should('be.visible')
    //cy.xpath("(//a[normalize-space()='Size Chart'])[1]").click({force:true})
    cy.get(".justify-start.items-start.flex.my-4.flex-wrap.gap-4").should('be.visible')

      

       cy.xpath("(//button[contains(@type,'submit')])[1]").click({force:true})
       cy.xpath("(//div)[119]").click({force:true})
        cy.wait(6000)
        cy.xpath("(//button[contains(@type,'submit')])[1]").click({force:true})
       
       

        cy.xpath("//span[normalize-space()='80.00']").invoke('text').then((text) => {
          initialPrice = parseFloat(text.trim());
          cy.log('Initial Price: ' + initialPrice);
          expect(initialPrice).to.equal(80.00); // Ensure the initial price is correct
        });
        // Add the membership badge (adjust the selector to your membership badge button)
        cy.wait(3000)
        cy.xpath("(//button[@type='submit'])[3]").click({force:true})
        cy.wait(4000)
    
        // Verify the discounted price after adding membership
        cy.xpath("//span[normalize-space()='72.00']").invoke('text').then((text) => {
          const discountedPrice = parseFloat(text.trim());
          const expectedDiscountedPrice = parseFloat((initialPrice * 0.9).toFixed(2)); // Round to 2 decimal places
          cy.log('Discounted Price: ' + discountedPrice);
          cy.log('Expected Discounted Price: ' + expectedDiscountedPrice);
          expect(discountedPrice).to.be.closeTo(expectedDiscountedPrice, 0.01); // Ensure the discounted price is 10% less
          cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click()
        });
    });
    

  it('should verify add to cart with size selection', () => {
    cy.xpath("//button[@type='submit']").click({ force: true })
    cy.contains('Select a size').should('be.visible');

    cy.xpath("(//button[contains(@type,'submit')])[1]").click({force:true})
    cy.xpath("(//div)[119]").click({force:true})
     cy.wait(6000)
     cy.xpath("(//button[contains(@type,'submit')])[1]").click({force:true})
     cy.wait(4000)

    cy.xpath("//span[normalize-space()='80.00']").invoke('text').then((text) => {
      initialPrice = parseFloat(text.trim());
      cy.log('Initial Price: ' + initialPrice); 
      expect(initialPrice).to.equal(80.00); // Ensure the initial price is correct
    });
    // Add the membership badge (adjust the selector to your membership badge button)
    cy.get("form[class='w-full h-max'] button[type='submit']").click({force:true})
    cy.wait(4500)

    // Verify the discounted price after adding membership
    cy.xpath("//span[normalize-space()='72.00']").invoke('text').then((text) => {
      const discountedPrice = parseFloat(text.trim());
      const expectedDiscountedPrice = parseFloat((initialPrice * 0.9).toFixed(2)); // Round to 2 decimal places
      cy.log('Discounted Price: ' + discountedPrice);
      cy.log('Expected Discounted Price: ' + expectedDiscountedPrice);
      expect(discountedPrice).to.be.closeTo(expectedDiscountedPrice, 0.01); // Ensure the discounted price is 10% less
      cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click()
    });
    
  });

  it('should verify wishlsit functionality for button and icon', () => {
    cy.xpath("(//button[contains(@class,'flex items-center justify-center w-[30px] h-[30px]')])[1]").click({force:true});
    cy.xpath("(//a[normalize-space()='LOGIN'])[1]").click({force:true})
    cy.wait(3000)
    cy.get("input[placeholder='Email Address']").type('ve4dfffbgfg09897ggsot82fdf226@sparkroi.com');
    cy.get("input[placeholder='Password']").type('123456789');
    cy.get("button[type='submit']").click();
    cy.wait(3000)
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    cy.wait(4000)
    // New product link
    cy.xpath("//button[@aria-label='search-open-close-trigger']//*[name()='svg']").click({force:true})
    cy.get('#autocomplete-1-input').type('MORPHLITE W'); // search items
    cy.xpath("(//*[name()='svg'][@class='aa-SubmitIcon cursor-pointer'])[1]").eq(0).click({force:true});
    cy.wait(5000)
    cy.get('.rb-product-thumb > .mix-blend-multiply').eq(0).click({force:true});   //wrong
    cy.wait(3000)
    cy.xpath("(//button[contains(@class,'flex items-center justify-center w-[30px] h-[30px]')])[1]").click({force:true});
    cy.wait(2000)
    cy.log("Removing product from wishlist")
   // cy.xpath("(//button[contains(@class,'flex items-center justify-center w-[30px] h-[30px]')])[1]").click({force:true});
    //checking other varinats wishlist
    cy.xpath("(//img[contains(@alt,'MORPHLITE')])[3]").click({force:true});
    cy.wait(4000)
    cy.xpath("(//button[contains(@class,'flex items-center justify-center w-[30px] h-[30px]')])[1]").click({force:true});

  });
    
    
     
    
      it('should verify quantity selection for multiple items', () => {
        const desiredQuantity = 6; // Change this to desired quantity (up to 4)
      
        // Locate the quantity input and initial check
        cy.xpath("//input[contains(@type,'number')]").should('have.value', '1');
      
        // Loop to increase/verify quantity
        for (let i = 1; i < desiredQuantity; i++) {
          cy.xpath("(//button[contains(@class,'h-[33px] w-[33px] p-2.5 px-2 bg-black text-white rounded-md flex items-center justify-center')])[1]").click({ force: true }); // Increase button
          cy.xpath("//input[contains(@type,'number')]").should('have.value', String(i + 1)); // Verify quantity after increase
        }
      
        // Verify "add" button enabled (if applicable)
        cy.xpath("//body/main[@role='main']/div/div/div/div/div/div[1]/button[1]").should('not.be.disabled');
      
        // Decrease quantity back to 1 (optional)
        for (let i = desiredQuantity; i > 1; i--) {
          cy.xpath("(//button)[8]").click({ force: true }); // Decrease button (assuming same button)
          cy.xpath("//input[contains(@type,'number')]").should('have.value', String(i - 1)); // Verify quantity after decrease
        }
      });
     
    
      it("Verifying Description, Details and FAQ blocks", () => {
        cy.xpath("(//div[contains(@role,'button')])[10]").should('be.visible').click({force:true})
       // cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[2]/div[6]/div[1]/div[2]/div[1]/p[1]").should('be.visible')
        cy.xpath("(//*[name()='svg'])[18]").click({force:true})

        // For Details Block
        cy.xpath("(//div[contains(@role,'button')])[11]").click({force:true})
        cy.xpath("//div[contains(@class,'w-96 h-fit')]").scrollIntoView().should('be.visible').click()
        cy.xpath("(//*[name()='svg'])[19]").click({force:true})

        // For FAQ Block
        cy.xpath("(//div[contains(@role,'button')])[12]").click({force:true})
        cy.xpath("(//div)[152]").click({force:true})
        cy.xpath("/html[1]/body[1]/main[1]/div[1]/div[2]/div[6]/div[3]/div[2]/div[1]/div[2]/p[1]").should('exist')
        cy.xpath("(//div)[152]").click({force:true})
        cy.xpath("(//*[name()='svg'])[21]").click({force:true})

        cy.xpath("(//div[contains(@role,'button')])[10]").click({force:true})
        cy.xpath("(//div)[12]").click({force:true})
        cy.xpath("(//div)[22]").click({force:true})
        cy.xpath("(//*[name()='svg'])[21]").click({force:true})


      });
      
    
     

      it("Verify Review section", () => {
        const reviewTitleSelector = "(//div[contains(@class,'text-center text-black [@media(min-width:1921px)]:text-[32px] text-[28px] font-extrabold font-Mulish uppercase leading-10')])[1]";
        const noReviewsTextSelector = "(//p[contains(@class,'text-[clamp(12px,1.5vw,32px)] text-center my-10 text-[#848484]')][normalize-space()='No reviews found for this product'])[2]";
        // Scroll to the Review section (assuming it's around 900px from the top)
        cy.scrollTo(0, 900);
        // Verify Review title
        cy.xpath(reviewTitleSelector).should('have.text', 'Reviews & Comments');
        // Verify "No reviews found" message (optional)
        cy.xpath(noReviewsTextSelector).should('have.text', 'No reviews found for this product');
      });
      

  it("Verifying You Might Also Like block and button", () => {
    const productSelector = "//a[contains(@class, 'no-underline 2xl:leading-[28.8px] 2xl:text-[19px] font-Mulish font-semibold leading-5 not-italic text-base md:text-[19px] text-black text-left truncate uppercase') or @class='no-underline 2xl:leading-[28.8px] 2xl:text-[19px] font-Mulish font-semibold leading-5 not-italic text-base md:text-[19px] text-black text-left truncate uppercase']";
    // Scroll to the "You Might Also Like" section (assuming it's around 1300px from the top)
    cy.scrollTo(0, 1300);
    // Verify first "MERRELL" product
    cy.xpath(productSelector + "[1]").should('be.visible');   //wrong
    // Verify second "MERRELL" product (optional)
    cy.xpath(productSelector ).should('be.visible');
    cy.xpath("(//button[contains(@class,'justify-center items-center rounded-lg text-center text-sm leading-[120%] lg:text-base lg:leading-[120%] font-semibold uppercase whitespace-nowrap font-Mulish cursor-pointer lg:flex hidden xl:text-[14px] 2xl:text-[14px] py-2 px-6 xl:py-3 xl:px-7 2xl:py-4 2xl:px-9 primary-btn bg-black text-white hover:no-underline w-auto border border-black hover:text-black hover:border hover:border-black hover:bg-white transform transition-colors duration-300 lg:flex hidden xl:text-[14px] 2xl:text-[14px] py-2 px-6 xl:py-3 xl:px-7 2xl:py-4 2xl:px-9')])[1]")
      .click({ force: true })
      cy.wait(3000)
      cy.get('h1').should('have.text', 'Shoes ')
      cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    



  });
      
    /*  it.skip("Verifying Recently Viewed section (if present)", () => {
        cy.scrollTo(0, 2000);
        cy.wait(2000);
      
        cy.xpath("(//div[@class='text-left text-black font-Mulish text-xl lg:text-[30px] xl:text-[30px] 2xl:text-[32px] font-extrabold leading-[120%] '])[1]")
          .then(($el) => {
            if ($el.length) {
              console.log("Recently Viewed section found. Verifying elements...");
      
              // Proceed with verification steps (using assertions)
              cy.wrap($el).should('be.visible'); // Verify title visibility
              cy.get("(//div[contains(@class,'rounded-lg w-full [@media(min-width:1921px)]:w-full')])[7]").should('be.visible'); // Verify product element
              cy.xpath("//a[contains(@type,'button')]").click({ force: true }); // Click "View All" button
      
            } else {
              console.log("Recently Viewed section not found. Skipping verification.");
              // You can also return here to stop further execution within the then block
              return;
            }
          });
      });*/
      
      
      
//})


