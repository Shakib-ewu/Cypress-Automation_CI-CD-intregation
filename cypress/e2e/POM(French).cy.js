/*import Frenchpage from '../PageObjects/FrenchPages';

describe("Verifying Language Switcher", () => {
    const frenchpage = new Frenchpage();
  
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('/');
      frenchpage.acceptCookies();
      frenchpage.openLanguageSwitcher();
    });
  
    it("Verifying Hero Banner", () => {
      frenchpage.clickHeroBanner();
      cy.wait(5000);
      cy.get('.h-full > .text-center').contains('SALE');
  
      frenchpage.navigateToFrenchPage();
      frenchpage.navigateToSlide(2);
      frenchpage.clickProductInCarousel(0);
  
      frenchpage.navigateToFrenchPage();
      frenchpage.navigateToSlide(3);
      frenchpage.clickProductInCarousel(0);
  
      frenchpage.navigateToFrenchPage();
      frenchpage.navigateToSlide(4);
      frenchpage.clickProductInCarousel(0);
  
      frenchpage.navigateToFrenchPage();
    });

    it.only("Verify Shop Now button for Trending section", () => {
        const frenchpage = new Frenchpage();
        frenchpage.clickShopNowbutton();
        frenchpage.verifySaleText();
        frenchpage.navigateToFrenchPage();
        cy.wait(5000);
        cy.scrollTo(0, 1000);
        frenchpage.clickNextButtonMultipleTimes(6);
        cy.scrollTo(0, 1000);
        frenchpage.clickPreviousButtonMultipleTimes(3);
      });

      it("Carosoul slider", () => {
        const frenchpage = new Frenchpage();
        frenchpage.scrollToSlider();
        frenchpage.verifySliderTitle();
        frenchpage.clickShopNowButton();
        cy.wait(5000);
        frenchpage.verifyProductTitle();
        frenchpage.navigateToFrenchPage();
    });
  });*/