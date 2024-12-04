<script setup>
import Header from "./components/Header.vue";
import Advertising from "./components/Advertising.vue";
import Table from "./components/Table.vue";

import { RouterView } from "vue-router";
</script>

<template>
    <main>
        <Header />

        <section>
            <Advertising />
            <!-- <RouterView /> -->
            <Table />
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
