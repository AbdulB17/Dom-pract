const todoPane = document.getElementById('todo-pane');

function createElement(title) {
  // Create the text node with the variable 'title'.
  
    const textNode = document.createTextNode(title);

  // Create a new list item element to contain the text node.
  
    const li = document.createElement("li");
    
  
  // Add the text node to the list item element.
  //document.createTextNode(title);
  li.appendChild(textNode);
  // Return the new element.
  return li;
}

const newElement = createElement('This is the title');

// Insert newElement into the unordered list with id 'todo-pane'.
todoPane.appendChild(newElement);
