<script setup>
import Table from "../components/Table.vue";
import SortPanel from "../components/SortPanel.vue";

import { SortNum } from "../moex/sort";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const bonds = computed(() => store.getters.getSortBonds);
</script>

<template>
    <section>
        <SortPanel />
        <Table :bonds="bonds" />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
}
</style>
