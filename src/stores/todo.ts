import { defineStore } from "pinia";

type TodoItem = {
    task: string;
    completed: boolean;
};

type TodoState = {
    todos: TodoItem[];
    currentTask: string;
};


export const useTodoStore = defineStore({
    id: "todos",
    state: (): TodoState => ({
        todos: [],
        currentTask: "",
    }),
    getters: {
        completed: (state) => state.todos.filter(todo => todo.completed),
        active: (state) => state.todos.filter(todo => !todo.completed),
    },
    actions: {
        submitTodo() {
            if (!this.currentTask.length) {
                return alert("Your Input is Empty");
            }
            this.todos.push({
                task: this.currentTask,
                completed: false,
            });
            this.currentTask = ""
        },
        removeTodo(index: number) {
            console.log(index)
            this.todos.splice(index, 1);
        }
    },
})