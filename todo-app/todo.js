class Todo {
    constructor() {
        this.todos = [];
    }

    getId() {
        return parseInt(Math.random() * 1000).toString();
    }

    getTodo() {
        return this.todos
    }

    addTodo(value) {
        const id = this.getId();
        this.todos.push({ id, value });
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    editTodo(idToUpdate, valueToUpdate) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === idToUpdate) {
                return { id: idToUpdate, value: valueToUpdate }
            }
            return todo;
        })
    }

    isEmpty() {
        return this.todos.length === 0
    }
}