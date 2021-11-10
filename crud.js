
const todoList = [];

function render(){
    let html = "";
    for (const item of todoList) {
        html += `<li>${item} 
                    <button class="delete"
                        id="${todoList.indexOf(item)}"
                        onclick="deleteTodo(this)">delete
                    </button>
                    <button class="update"
                        id="${todoList.indexOf(item)}"
                        onclick="updateTodo(this)">update
                    </button>
                    
                </li>`
    }
    document.getElementById("list").innerHTML = html;
}

function addTodo(newTodo){
    //console.log(newTodo);
    todoList.push(newTodo.value);
    render();
    newTodo.value ="";
}

function deleteTodo(toDoToDelete){
    //console.log(toDoToDelete.id);
    todoList.splice(toDoToDelete.id, 1);
    render();
}

function updateTodo(item){
    let html = document.getElementById("editar-todo");
    
    //cambiar la función del boton o cambiar
    html.value = todoList[item];
    
    document.getElementById('edit-box').style.display = 'block';
    self = this;
    
    function save(changes) {
        document.getElementById('save-edit').onsubmit 

        let list = html.value;
        if (list) {
            // Edit value
            self.list.splice(item, 1, list.save(changes));
            
            // Display the new list
            self.render();
            // Hide fields
            CloseInput();
          }
    }
    
}

render();

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }

