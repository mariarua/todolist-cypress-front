describe('Todo List Compiled', ()=> {
    beforeEach(() => {
        cy.request('DELETE', 'http://localhost:8000/api/tasks/reset')
    });
    it('Page Initial Compiled', () =>{
        cy.visit('http://localhost:3000/');
        cy.contains('Mi lista de tareas');
    })

    it('Page Initial Compiled', () =>{
        cy.visit('http://localhost:3000/');
        cy.get('input[name="input-task"]').type('Nueva tarea');
        cy.get('#form-submit').click();
        cy.get('.label-task').should('contain' , 'Nueva tarea')
    })
})