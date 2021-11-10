/// <reference types="cypress" />

describe("Test Home page title", () => {

    beforeEach(()=>{
        cy.visit("/");
    })
    
    it("should click the button", () => {
      cy.get("a").contains("FidZulu").should("have.length",1);
    });

    it("should have a button that says explore bikes", () =>{
        cy.get(".btn").contains("Explore Bikes").should("have.length",1);
    });

    it("should have a button that says explore Books", () =>{
        cy.get(".btn").contains("Explore Books").should("have.length",1);
    });

    it("should have a button that says explore DVDs", () =>{
        cy.get(".btn").contains("Explore DVDs").should("have.length",1);
    });

    it("should be able to view bikes list (more than 1)", () =>{
        cy.wait(1000);
        cy.get(".btn").contains("Explore DVDs").click();
        cy.wait(1000);
        cy.get(".card-body").should("have.length.at.least",2);
    });

    it("should be able view details of the first bike", () =>{
        cy.wait(1000);
        cy.get(".btn").contains("Explore DVDs").click();
        cy.wait(2000);
        cy.get(".btn").contains("View Details").each((btn) =>{
            cy.wait(500);
            cy.wrap(btn).click();
            cy.wait(1000);
            cy.get('.list-group-item-dark').contains("Product Details")
            cy.wait(500);
        });
    });

    it("should be able to navigate via nav drop down", () =>{
        cy.wait(2000);
        cy.get('#id01').click();
        cy.wait(2000);
        cy.get('.dropdown-menu > [routerlink="/products/classA/bike"]').click();
        cy.wait(2000);
        cy.get(".card-body").should("have.length.at.least",2);
        cy.get('div').contains('Mamba Bikes');
    })

    
  })