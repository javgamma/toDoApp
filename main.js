
 
    const container = document.createElement('div');
    container.id = 'todo-container';
    container.style.width = '400px';
    container.style.margin = '0 auto';
    container.style.padding = '20px';
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '8px';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.4)';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.display = 'flex'
    container.style.flexDirection = 'column'
    container.style.justifyItems = 'center'
    container.style.alignContent = 'center'

   
    const header = document.createElement('h2');
    header.textContent = 'Cosas por hacer';
    header.style.textAlign = 'center';
    header.style.display = " flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    header.style.gap = "15px";

    const img = document.createElement("img");
    img.src = "https://img.icons8.com/plasticine/100/task-completed.png";
    img.alt = "task-completed";
    img.style.width = "50px"
    header.appendChild(img);

   
    const form = document.createElement('form');
    form.id = 'todo-form';
    form.style.display = 'flex';
    form.style.marginBottom = '20px';


    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'todo-input';
    input.placeholder = 'Pon una tarea aquí';
    input.style.flex = '1';
    input.style.padding = '10px';
    input.style.marginRight = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '4px';


    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.textContent = 'Añadir';
    addButton.style.padding = '10px 20px';
    addButton.style.border = 'none';
    addButton.style.borderRadius = '8px';
    addButton.style.backgroundColor = '#28a745';
    addButton.style.color = 'white';
    addButton.style.cursor = 'pointer';
    addButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

    
    const clearButton = document.createElement('button');
    clearButton.type = 'button';
    clearButton.textContent = 'Limpiar';
    clearButton.id = 'clear-button';
    clearButton.style.padding = '10px 20px';
    clearButton.style.border = 'none';
    clearButton.style.borderRadius = '8px';
    clearButton.style.backgroundColor = '#dc3545';
    clearButton.style.color = 'white';
    clearButton.style.cursor = 'pointer';
    clearButton.style.marginLeft = '10px';
    clearButton.style.width = '100px';
    clearButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';


    form.appendChild(input);
    form.appendChild(addButton);


    const todoList = document.createElement('ul');
    todoList.id = 'todo-list';
    todoList.style.listStyleType = 'none';
    todoList.style.padding = '0';


    container.appendChild(header);
    container.appendChild(form);
    container.appendChild(clearButton);
    container.appendChild(todoList);

    
    document.body.appendChild(container);

    form.addEventListener('submit', addTask);
    clearButton.addEventListener('click', clearTasks);



function addTask(event) {
    event.preventDefault();

    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Por favor, ingresa una tarea valida');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const taskItem = document.createElement('li');
    taskItem.style.display = 'flex';
    taskItem.style.justifyContent = 'space-between';
    taskItem.style.padding = '10px';
    taskItem.style.borderBottom = '1px solid #ccc';

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = '#dc3545';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '4px';
    deleteButton.style.padding = '5px 10px';
    deleteButton.style.cursor = 'pointer';

    deleteButton.addEventListener('click', () => {
        todoList.removeChild(taskItem);
    });

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    todoList.appendChild(taskItem);
    input.value = '';
}


function clearTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
}
