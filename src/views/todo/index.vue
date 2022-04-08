<script lang="ts" setup>
import { computed, ref } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../../stores/todo';

const todoStore = useTodoStore();
const { submitTodo, removeTodo } = todoStore;
const { todos, currentTask } = storeToRefs(todoStore);
const filter = ref('all');

const todoList = computed(() => filter.value === 'completed' ? todoStore.completed : filter.value === 'active' ? todoStore.active : todos.value)

</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-5 m-auto">
                <div class="row">
                    <div class="col-12">
                        <form @submit.prevent="submitTodo">
                            <div class="mb-3">
                                <label
                                    for="inputTodo"
                                    class="form-label fw-bold text-dark"
                                >Input To Do</label>
                                <input
                                    autocomplete="off"
                                    placeholder="input your to do"
                                    type="text"
                                    class="form-control"
                                    id="inputTodo"
                                    v-model="currentTask"
                                />
                            </div>
                            <button type="submit" class="btn btn-dark">save</button>
                        </form>
                    </div>
                    <div class="col-12 mt-5 text-dark">
                        You"re Gonna? {{ currentTask }}
                        <div class="nav nav-pills align-items-center mb-3 mt-5 filter">
                            <div class="me-4 fw-bold">Filter</div>
                            <br />
                            <a
                                href="#"
                                class="nav-link"
                                :class="{ active: filter === 'all' }"
                                @click.prevent="filter = 'all'"
                            >All</a>
                            <a
                                href="#"
                                class="nav-link"
                                :class="{ active: filter === 'active' }"
                                @click.prevent="filter = 'active'"
                            >Active</a>
                            <a
                                href="#"
                                class="nav-link"
                                :class="{ active: filter === 'completed' }"
                                @click.prevent="filter = 'completed'"
                            >Done</a>
                        </div>
                        <ul class="list-group">
                            <li
                                v-for="(todo, index) in todoList"
                                :key="index"
                                class="list-group-item"
                            >
                                <div class="d-flex align-items-center">
                                    <input type="checkbox" v-model="todo.completed" />
                                    <span
                                        class="mx-2 flex-grow-1"
                                        :class="{ done: todo.completed }"
                                    >{{ todo.task }}</span>
                                    <button class="btn btn-danger" @click="removeTodo(index)">X</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.filter a {
    appearance: none;
    background-color: transparent;
    border: none;
    color: black;
    border-radius: 4px;
}
.filter a.active {
    background-color: salmon;
    color: black;
    font-weight: bold;

}

.done {
    text-decoration: line-through;
}


</style>