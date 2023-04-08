
<script setup lang="ts">
    import {ref} from "vue"
    import useTodoStore from "../stores/todos"
    const store = useTodoStore();
    const props = defineProps(["name", "id"]);

    let hover = ref(false);

    function remove() {
        store.remove(props.id);
    }
</script>

<template>
    <div @mouseover="hover = true" @mouseleave="hover = false">
        <h1>{{ props.name }}</h1>
        <h4 v-show="hover" @click="remove" class="minus">remove</h4>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .minus{
        margin-left: 1rem;
        border: 2px solid black;
        border-radius: 1rem;
        padding: 0.2rem;
    }

</style>