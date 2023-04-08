import { ref } from 'vue'
import { defineStore } from 'pinia'

type Todo = { id: number, value: string }

export default defineStore('counter', () => {
  const todos = ref<Array<Todo>>(new Array())
  let id = 1;

  function add(value: string) {
    todos.value.push({ id, value });
    id++
  }

  function remove(id: number) {
    todos.value = todos.value.filter((todo) => todo.id != id);
  }

  return { todos, add, remove }
})
