<script setup>
import Table from "../components/Table.vue";
import { SortNum } from "../moex/sort";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const bonds = computed(() => store.getters.getTrueInformation);
</script>

<template>
    <section>
        <Table :bonds="SortNum(bonds, 'yearProfit')" />
    </section>
</template>
