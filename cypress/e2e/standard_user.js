///<reference types="cypress"/>
describe('this is standard user login', () => {
    it(' to login standard user ', () => {
        cy.visit("https://www.saucedemo.com/",{timeout:10000})
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
    });

    it('to add all item to cart', () => {
        cy.wait(600)
        cy.visit("https://www.saucedemo.com/",{timeout:10000})
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

        //***********to add item number 4 index 3 (this command for add one item in Group inside div)*************
        // cy.get('div#inventory_container').find('.btn').eq(3).click()

        //***********to select all item i should add it inside array ********
        let numberOfExpectedItem=6//number of item
        for(let i=0;i<numberOfExpectedItem;i++){
           let myNewArray=cy.get('div#inventory_container').find(".btn").eq(i).click()
        }

    
    
        
    });

    it('add first 3 item ', () => {
        cy.wait(600)
        cy.visit("https://www.saucedemo.com/",{timeout:10000})
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
            //homework 1 8-6-2023
        //add first 3 item 
        let numberOfExpectedItem=6//number of item
        for(let i=0;i<numberOfExpectedItem;i++){
              if(i==3){
                break;
            }
           let myNewArray=cy.get('div#inventory_container').find(".btn").eq(i).click()
         
        }
    });

    it('add item one and next item dont add to the end item', () => {

        cy.wait(600)
        cy.visit("https://www.saucedemo.com/",{timeout:10000})
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
            //homework 1 8-6-2023
        //add first 3 item 
        let numberOfExpectedItem=6//number of item
        for(let i=0;i<numberOfExpectedItem;i++){
            //if i want to start from second item i will change if to (i%2==1) 
           if(i%2==0){
           let myNewArray=cy.get('div#inventory_container').find(".btn").eq(i).click()
        }}


    });

    //lesson 11

    
    it('add all item using {multiple:true}', () => {

        cy.wait(600)
        cy.visit("https://www.saucedemo.com/",{timeout:10000})
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        //it's work just when using class 
        cy.get('button.btn_inventory').click({multiple:true})
        }


    );



    
});