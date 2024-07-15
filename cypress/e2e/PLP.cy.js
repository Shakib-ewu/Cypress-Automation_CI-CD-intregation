describe("Verifying PLP", () => {

    beforeEach(() => {
  
      cy.viewport(1920, 1080);
      cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://rubinoshoes.com/products/')
      cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
      cy.wait(4000)
    })


    it("should have a filter section", () => {
        cy.log("Checking filter section visible or not")
        cy.get("div[class='flex items-center gap-x-[30px] gap-y-[10px] flex-wrap']").should('be.visible')
    })

    it('should verify elements existence', () => {
        const elements = [
          { xpath: "//span[normalize-space()='Department']", text: 'Department' },
          { xpath: "//span[normalize-space()='Categories']", text: 'Categories' },
          { xpath: "//span[normalize-space()='Brands']", text: 'Brands' },
          { xpath: "//span[normalize-space()='Color']", text: 'Color' },
          { xpath: "//span[normalize-space()='Size']", text: 'Size' },
          { xpath: "//span[normalize-space()='Occasion']", text: 'Occasion' },
          { xpath: "//span[normalize-space()='Style']", text: 'Style' },
          { xpath: "//span[normalize-space()='Temperature']", text: 'Temperature' },
          { xpath: "//span[normalize-space()='Water proofing']", text: 'Water proofing' },
          { xpath: "//span[normalize-space()='Price']", text: 'Price' },
          { xpath: "//span[normalize-space()='Price sale']", text: 'Price sale' }
        ];
      
        elements.forEach(({ xpath, text }) => {
          cy.xpath(xpath).contains(text).should('be.visible'); // Check if element is visible
        // Check for a specific attribute
          // Add more assertions as needed
        });
      });
      
      
    // Add similar assertions for other filter labels (BRANDS, COLOR, etc.)
      it('should verify options under Department dropdown menu', () => {
        // Define the list of expected options
        const expectedOptions = [
          'WOMEN',
          'MEN',
          'KIDS',
          'TODDLERS',
          'SHOES CARE & INSOLES',
          'CRIBS'
        ];
      
        // Iterate over each option
        expectedOptions.forEach(option => {
          // Open the Department dropdown menu
          cy.xpath("//span[normalize-space()='Department']").click();
      
          // Click on the option
          cy.xpath(`//button[normalize-space()='${option}']`).click({force:true});
      
          // Wait for the option filter to become visible
          cy.contains(option, { timeout: 10000 }).should('be.visible');
      
          // Click outside the dropdown menu to close it
          cy.get('body').click({force:true});
        });
      });
      

    const filterOptions = ['SHOES', 'SANDALS', 'WINTER BOOTS', 'BOOTS', 'ACCESSORIES', 'SLIPPERS', 'RAIN BOOTS'];


    it('should have filter options under CATEGORIES', () => {
        filterOptions.forEach(option => {
            // Click on the "Categories" to open the drop-down menu
            cy.xpath("//span[normalize-space()='Categories']").click();
            
            // Select the filter option dynamically based on the current option
            cy.xpath(`//button[normalize-space()='${option}']`).click();
            
            // Wait for a brief moment to ensure the filter is applied
            cy.get('h3').should('be.visible')
            cy.wait(4000);  // Adjust the wait time as needed
            
            // Verify that the "Clear All Filters" button is visible and click it
            cy.xpath("(//button[normalize-space()='Clear All Filters'])[1]").should('be.visible').click();
            
            // Optionally, wait for a brief moment to ensure filters are cleared
            cy.wait(1000);  // Adjust the wait time as needed
        });
    });
    

    

    const filterOptionsBrands = [
      'ACTON', 'ADIDAS', 'BLONDO', 'BOGS', 'CLARKS', 'CONVERSE', 'DAVID',
      'FILA', 'ITALIAN SHOE', 'KAMIK', 'KEEN', 'LASKA', 'MERRELL', 'NATIVE',
      'PUMA', 'REEBOK', 'RUBINO', 'SOREL', 'TEVA', 'UGG', 'VANS', 'WALTERS'
    ];
    
    it('should have filter options under Brands', () => {
      filterOptionsBrands.forEach(option => {
        // Click on the "Brands" to open the drop-down menu
        cy.xpath("//span[normalize-space()='Brands']").click();
        
        // Scroll to the element containing the current option
        cy.xpath(`//button[normalize-space()='${option}']`).scrollIntoView().should('be.visible').click({ force: true });
        
        // Wait for a brief moment to ensure the filter is applied
        cy.get('h3').should('be.visible');
        cy.wait(2000);  // Adjust the wait time as needed
        
        // Verify that the "Clear All Filters" button is visible and click it
        cy.xpath("(//button[normalize-space()='Clear All Filters'])[1]").should('be.visible').click();
        
        // Optionally, wait for a brief moment to ensure filters are cleared
        cy.wait(1000);  // Adjust the wait time as needed
      });
    });



    const filterOptionsPrice = ['ABOVE 50%', '30% - 50%', '10% - 30%', 'Under 10%'];


    it('should have filter Price Category', () => {
        filterOptionsPrice.forEach(option => {
            // Click on the "Categories" to open the drop-down menu
            cy.xpath("//span[normalize-space()='Price sale']").click();
            
            // Select the filter option dynamically based on the current option
            cy.xpath(`//button[normalize-space()='${option}']`).click();
            
            // Wait for a brief moment to ensure the filter is applied
            cy.get('h3').should('be.visible')
            cy.wait(4000);  // Adjust the wait time as needed
            
            // Verify that the "Clear All Filters" button is visible and click it
            cy.xpath("(//button[normalize-space()='Clear All Filters'])[1]").should('be.visible').click();
            
            // Optionally, wait for a brief moment to ensure filters are cleared
            cy.wait(1000);  // Adjust the wait time as needed
        });
    });
    



    it('should filter products by adjusting the price range slider by position', () => {
      // Open the Price filter section
      cy.xpath("//span[normalize-space()='Price']").click();
      cy.xpath("//div[@aria-label='Lower thumb']").invoke( "attr", "style", "left:200px").click({force:true})
      cy.xpath("//div[@aria-label='Upper thumb']").click({force:true}).invoke( "attr", "style", "right:50px")
      //cy.xpath("//div[@aria-label='Lower thumb']").invoke( "attr", "style", "left:80px").click({force:true})
     // cy.xpath("//div[@aria-label='Upper thumb']").invoke( "attr", "style", "right:100px").click({force:true})

    // cy.xpath("//div[@aria-label='Upper thumb']").trigger('mousemove', { left: 100, right: 0 });

    
     
    });

  
    
    
    



          
    const filterOptionsSortby = ['Alphabetically, Z-A', 'Alphabetically, A-Z', 'Price, Low to High', 'Price, High to Low', 'Oldest','Most relevant','New arrivals'];  
          
    it('verifies Sort By New Arrivals Filters', () => {
      filterOptionsSortby.forEach(option => {
        // Click on the "Brands" to open the drop-down menu
        cy.get("p[class='text-[13px]']").click();
        
        // Scroll to the element containing the current option
        cy.xpath(`//p[normalize-space()='${option}']`).should('be.visible').click({ force: true });  ////p[normalize-space()='Alphabetically, Z-A']
        
        // Wait for a brief moment to ensure the filter is applied
        cy.get('h3').should('be.visible');
        cy.wait(2000);  // Adjust the wait time as needed
        
        // Verify that the "Clear All Filters" button is visible and click it
        //cy.xpath("(//button[normalize-space()='Clear All Filters'])[1]").should('be.visible').click();
        
        // Optionally, wait for a brief moment to ensure filters are cleared
        cy.wait(1000);  // Adjust the wait time as needed
      });
    })
      
    

      



})