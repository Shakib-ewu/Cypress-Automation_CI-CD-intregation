class CartDrawerPage {
    acceptCookies() {
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click();
    }

    openCartDrawer() {
        cy.xpath("//span[@class='flex items-center justify-center w-max h-max relative isolate']//*[name()='svg']").click();
    }

    verifyCartDrawerIsEmpty() {
        cy.contains('YOUR BAG').should('be.visible');
        cy.get('.flex-1').within(() => {
            cy.contains("Looks like you haven't added anything yet, let's get you started!").should('be.visible');
            cy.contains('Continue shopping').should('be.visible').and('not.be.empty');
        });
    }

    addItemToCart() {
        cy.get('.flex-col > .h-full').click({ force: true });
        cy.scrollTo("bottom");
        cy.xpath("//button[@type='submit']").contains(' ADD TO CART').click({ force: true });
    }

    deleteItemFromCart() {
        cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click();
    }

    navigateToTopRight() {
        cy.scrollTo("topRight");
        cy.wait(4000);
    }

    clickFirstItemInCart() {
        cy.xpath("//span[@class='flex items-center justify-center w-max h-max relative isolate']//*[name()='svg']").click({ force: true });
        cy.xpath("/html[1]/body[1]/aside[1]/main[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/a[1]/div[1]").click({ force: true });
        cy.wait(4000);
    }

    navigateToBreadcrumbLink() {
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[2]/p[1]/div[1]/span[1]/a[1]").click({ force: true });
    }
}

export default CartDrawerPage;
