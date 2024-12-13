<script setup>
import { onMounted, ref, watch } from "vue";

let sortBonds = [
    {
        value: "yearProfit",
        title: "Доходность",
    },
    {
        value: "expireYears",
        title: "Осталось лет",
    },
    {
        value: "COUPONPERIOD",
        title: "Купоны раз в",
    },
    {
        value: "ACCRUEDINT",
        title: "НКД",
    },
    {
        value: "expireNextCoupon",
        title: "Купон через",
    },
];
let sortListing = [
    {
        value: 1,
        title: "Листинг 1",
    },
    {
        value: 2,
        title: "Листинг 2",
    },
    {
        value: 3,
        title: "Листинг 3",
    },
];

let sortBy = [
    {
        value: "up",
        title: "Возрастанию",
    },
    {
        value: "down",
        title: "Убыванию",
    },
];

let sortData = [
    {
        value: "all",
        title: "Все",
    },
    {
        value: "full",
        title: "Полные",
    },
    {
        value: "incomplete",
        title: "Не полные",
    },
];

let sortSelect = ref({
    sortBonds: "yearProfit",
    sortListing: 1,
    sortBy: "up",
    sortData: "all",
});
import { useStore } from "vuex";

const store = useStore();

watch(sortSelect.value, () => {
    store.commit("mutSortBonds", sortSelect.value);
});
</script>

<template>
    <nav>
        <select v-model="sortSelect.sortBonds">
            <option
                v-for="(item, index) of sortBonds"
                :key="index"
                :value="item.value"
            >
                {{ item.title }}
            </option>
        </select>
        <select v-model="sortSelect.sortListing">
            <option
                v-for="(item, index) of sortListing"
                :key="index"
                :value="item.value"
            >
                {{ item.title }}
            </option>
        </select>
        <select v-model="sortSelect.sortBy">
            <option
                v-for="(item, index) of sortBy"
                :key="index"
                :value="item.value"
            >
                {{ item.title }}
            </option>
        </select>
        <select v-model="sortSelect.sortData">
            <option
                v-for="(item, index) of sortData"
                :key="index"
                :value="item.value"
            >
                {{ item.title }}
            </option>
        </select>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    margin-top: 18px;
    display: flex;
    gap: 18px;
    select {
        background: var(--color-4);
        border-radius: 6px;
        padding: 5px;
    }
}
</style>
