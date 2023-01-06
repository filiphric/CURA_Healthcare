// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// // -- This is a parent command --
// cy.request({
//   method: 'POST',
//   url: '/profile.php#login',
//   form: true,
//   body: {
//     user: {
//       username: 'John Doe',
//       password: 'ThisIsNotAPassword',
//     },
//   },
// });
// // to prove we have a session
// cy.getCookie('cypress-session-cookie').should('exist');

// cy.visit('/');
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
