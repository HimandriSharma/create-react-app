const cypress = require("cypress")

describe('My First Test', () => {
    it('visit localhost', () => {
      cy.visit('http://localhost:3000/')
    })
  })