const todo = new Todo();
const getInputValue = document.getElementById("getTodoInput");
const todoListContainer = document.getElementsByClassName("add-todo-list")[0];

const resetTodoListContainer = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const resetInput = () => {
    getInputValue.value = '';
}

const renderTodoList = () => {
    if (!todo.getTodo().length) {
        todoListContainer.innerText = 'No Todo List to Display'
    }
    todo.getTodo().map((todo) => {
        const LI = document.createElement("li");
        const DIV = document.createElement("div");
        const INPUT = document.createElement("input");
        const SPAN = document.createElement("span");
        LI.style.marginBottom = '16px'
        DIV.classList.add("input-box");
        INPUT.type = "text";
        SPAN.classList.add("cross-icon");
        INPUT.setAttribute("disabled", '');
        INPUT.setAttribute("onKeyUp", "onInputEdit(event)")
        SPAN.innerText = 'X';
        INPUT.value = todo.value;
        INPUT.setAttribute("id", todo.id);
        SPAN.setAttribute('id', todo.id);
        DIV.appendChild(INPUT);
        DIV.appendChild(SPAN);
        LI.appendChild(DIV);
        todoListContainer.appendChild(LI);
    })
}

const addTodo = () => {
    const todoValue = getInputValue.value;
    if (!todoValue) {
        alert("Please Enter A Valid Todo");
        return;
    }
    todo.addTodo(todoValue);
    resetTodoListContainer(todoListContainer);
    renderTodoList()
}

const removeTodo = (event) => {
    if (event && event.target.id && event.target.nodeName === 'SPAN') {
        todo.deleteTodo(event.target.id);
        resetTodoListContainer(todoListContainer);
        renderTodoList()
    }

}

const updateTodo = (event) => {
    const id = event.target.id;
    if (!id) return;
    const getTodoElement = document.getElementById(id);
    getTodoElement.removeAttribute("disabled");
}

const onInputEdit = (event) => {
    if (event.key !== 'Enter') {
        return;
    }
    const value = event.target.value;
    const id = event.target.id;
    todo.editTodo(id, value);
    resetTodoListContainer(todoListContainer)
    renderTodoList();
}

(function () {
    renderTodoList()
}())