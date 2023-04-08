<script setup lang="ts">
    import TodoElement from "./TodoElement.vue" 
    import useTodoStore from "../stores/todos"
    const store = useTodoStore();
</script>

<template>
    <TodoElement v-for="todo in store.todos" :key="todo.id" :name="todo.value" :id="todo.id"/>
</template>

<style scoped></style>