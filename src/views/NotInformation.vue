<script setup>
import Table from "../components/Table.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const bonds = computed(() => store.getters.getFalseInformation);
</script>

<template>
    <section>
        <Table :bonds="bonds" />
    </section>
</template>
