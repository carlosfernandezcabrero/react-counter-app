describe('Pruebas sobre la APP', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('debe mostrar por defecto el valor 0 en el contador', () => {
    cy.get('[data-test-id=counter-value]').should('have.text', '0')
  })

  it('debe incrementar el valor en 1 cuando se pulsa el botón Increment', () => {
    cy.get('[data-test-id=btn-increment]').click()
    cy.get('[data-test-id=counter-value]').should('have.text', '1')
  })

  it('debe decrementar el valor en 1 cuando se pulsa el botón Decrement', () => {
    cy.get('[data-test-id=btn-decrement]').click()
    cy.get('[data-test-id=counter-value]').should('have.text', '-1')
  })

  it('debe resetear el valor en 1 cuando se pulsa el botón Reset', () => {
    cy.get('[data-test-id=btn-reset]').click()
    cy.get('[data-test-id=counter-value]').should('have.text', '0')
  })
})
