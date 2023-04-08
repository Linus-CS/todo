
<template>
    <input v-model="content" type="text">
    <h1 @click="add">+</h1>
</template>

<script setup lang="ts">
    import useTodoStore from "../stores/todos"
    const store = useTodoStore();

    let content: string;

    function add(){
        store.add(content);
    }
</script>

<style scoped></style>