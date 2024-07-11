// Modify the code below to set the variables appropriately.

// Get the form by ID from the forms collection.
const form = document.getElementById('todo');
//const form = document.forms.todo; another way of doing it

// Get the todo pane (the 'ul' element).
const todoPane = document.getElementById('todo-pane');
// Get the text input for the title.
const titleInput = falsedocument.getElementById('title');
// Get the priority select element.
const prioritySelect = document.getElementsByTagName('select');
// Get a list of all elements with the 'todo' class.
const allTodos = document.getElementsByClassName('todo');

console.log('form:', form);
console.log('todoPane:', todoPane);
console.log('titleInput:', titleInput);
console.log('prioritySelect:', prioritySelect);
console.log('allTodos:', allTodos);
