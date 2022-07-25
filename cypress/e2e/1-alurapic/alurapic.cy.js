describe('Login & Registry of user on AluraPic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')
    })
  
    it('verify validation message', () => {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('verify invalid email message', () => {
        cy.contains('a', 'Register now').click();
        cy.get(':nth-child(1) > .form-control').type('leandro');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verify invalid email message', () => {
        cy.contains('a', 'Register now').click();
        cy.get(':nth-child(1) > .form-control').type('leandro');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verify invalid password message', () => {
        cy.contains('a', 'Register now').click();
        cy.get(':nth-child(4) > .form-control').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it.only('login success', () => {
      cy.login('flavio', '123');
      cy.contains('a', '(Logout)').should('be.visible');
    })

    it.only('login fail', () => {
      cy.login('jaqueline','1234');
      cy.on('windows:alert', (str) => {
        expect(str).to.equal('Invalid user name or password');
      })
    })

})