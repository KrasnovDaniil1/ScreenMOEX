<script setup>
import { columnsRus } from "../moex/services";

defineProps({
    bonds: Array,
});

const level = (item, k) => {
    if (k == "ISIN") {
        if (item.LISTLEVEL == 2) {
            return "yellow";
        } else if (item.LISTLEVEL == 3) {
            return "red";
        } else {
            return "green";
        }
    }
};
</script>

<template>
    <section>
        <table>
            <thead>
                <tr>
                    <th v-for="column in columnsRus" :key="column">
                        {{ column }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in bonds" :key="item.id">
                    <td
                        v-for="(v, k) in columnsRus"
                        :key="k"
                        :class="level(item, k)"
                    >
                        <a
                            :href="`https://www.moex.com/ru/issue.aspx?board=${item.BOARDID}&code=${item[k]}`"
                            target="_blank"
                            v-if="k == 'ISIN'"
                            >{{ item[k] }}</a
                        >
                        <template v-else>{{ item[k] }}</template>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- <table>
            <thead>
                <tr>
                    <th v-for="column in columnsRus" :key="column">
                        {{ column }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <td v-for="(v, k) in columnsRus" :key="k">
                        <a
                            class="text-sky-500"
                            :href="`https://www.moex.com/ru/issue.aspx?board=${item.BOARDID}&code=${item[k]}`"
                            target="_blank"
                            v-if="k == 'ISIN'"
                            >{{ item[k] }}</a
                        >
                        <template v-else>{{ item[k] }}</template>
                    </td>
                </tr>
            </tbody>
        </table> -->
    </section>
</template>

<style lang="scss" scoped>
section {
    width: 100%;
    table {
        width: 100%;
        margin-top: 18px;
        .red {
            color: #ff7584;
        }
        .green {
            color: #2ce39a;
        }
        .yellow {
            color: #ffd450;
        }
        th,
        td {
            padding: 10px;

            text-align: center;
            vertical-align: middle;
        }
        thead {
            background: var(--color-4);
            position: sticky;
            top: 0;
        }
        tbody > tr:nth-child(2n) {
            background: var(--color-5);
        }
    }
}
</style>
