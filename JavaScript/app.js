//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//-------------------------------------------------------------
//Event listeners
todoButton.addEventListener('click' , addTodo)
todoList.addEventListener('click', deleteCheck)


//-------------------------------------------------------------
//Functions
//To do adder function
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');
    //Create li
    const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
    //Create Check Button
    const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add('check-button');
        todoDiv.appendChild(checkButton);
    //Create Delete Button
    const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-button');
        todoDiv.appendChild(deleteButton);
    //Append to list
    todoList.appendChild(todoDiv)
    //Clear todo input value
    todoInput.value = '';
}

    //DeleteCheck function
    function deleteCheck(event){
      const item = event.target; 
       //delete todo
       if (item.classList[0] === 'delete-button'){
           const todo = item.parentElement;
           //Animation
           todo.classList.add('delete-drop');
            todo.addEventListener('transitionend', deleteElement);
            function deleteElement(){
            todo.remove();
            }
       }
       //Check Mark
       if (item.classList[0] === 'check-button'){
            const todo = item.parentElement;
            todo.classList.toggle('completed');
       }
    }