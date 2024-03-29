describe('Login & Registry of user on AluraPic', () => {

    beforeEach(() => {
      cy.visit('/')
      //mockando uma resposta
      cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
        statusCode: 400
      }).as('stubPost')
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

    it('login success', () => {
      cy.login(Cypress.env('userName'), Cypress.env('password'));
      //utilizando mock
      cy.wait('@stubPost');
      cy.contains('a', '(Logout)').should('be.visible');
    })

    it('login fail', () => {
      cy.login('jaqueline','1234');
      cy.on('windows:alert', (str) => {
        expect(str).to.equal('Invalid user name or password');
      })
    })

    // Para grande volume de dados, utilizar import de json conforme abaixo

    //const usuarios = require('../../fixtures/usuarios.json')
    //usuarios.forEach(usuario => {

      //it(`registra novo usuário ${usuario.userName}`, () => {
        //cy.contains('a', 'Register now').click();
        //cy.get('input[formcontrolname="email"]').type(usuario.email);
        //cy.get('input[formcontrolname="fullname"]').type(usuario.fullName);
        //cy.get('input[formcontrolname="userName"]').type(usuario.userName);
        //cy.get('input[formcontrolname="password"]').type(usuario.password);
        //cy.contains('button', 'Register').click();
      //})

    //})
    

})