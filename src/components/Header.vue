<script setup>
let menu = [
    {
        title: "Облигации",
        link: "/",
    },
    {
        title: "Корпоративные",
        link: "favorites",
    },
    {
        title: "Избранные",
        link: "corporate",
    },
    {
        title: "Неполные",
        link: "notinforamation",
    },
    {
        title: "FAQ",
        link: "faq",
    },
    {
        title: "Настройки",
        link: "settings",
    },
];
</script>

<template>
    <header>
        <h1>Скринер облигаций MOEX</h1>
        <nav>
            <router-link v-for="(item, i) in menu" :key="i" :to="item.link">
                {{ item.title }}
            </router-link>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 2px solid var(--color-3);
    nav {
        a {
            padding: 5px;
            border-radius: 6px;
            margin-left: 25px;
        }
        .router-link-active {
            background: var(--color-3);
        }
    }
}
</style>
