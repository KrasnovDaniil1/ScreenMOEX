<script setup>
import Header from "./components/Header.vue";
import Advertising from "./components/Advertising.vue";
import Table from "./components/Table.vue";
import Loader from "./components/Loader.vue";

import { RouterView } from "vue-router";
import { ref, onMounted, computed } from "vue";

import { useStore } from "vuex";
const store = useStore();
const loader = computed(() => store.getters.getLoader);

onMounted(async () => {
    await store.dispatch("actBonds");
});
</script>

<template>
    <main>
        <Header />
        <Loader v-if="loader" />
        <section>
            <Advertising />
            <RouterView />
            <Advertising />
        </section>
    </main>
</template>

<style lang="scss">
main {
    section {
        display: flex;
        // width: 100%;
    }
}
</style>
