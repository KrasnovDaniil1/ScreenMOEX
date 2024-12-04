<script setup>
const columnsRus = {
    ISIN: "Номер",
    SHORTNAME: "Название",
    LOTVALUE: "Номинал",
    COUPONPERIOD: "Период",

    COUPONVALUE: "Купон",
    ACCRUEDINT: "НКД",
    expireYears: "Осталось лет",
    price: "Цена",
    couponCount: "Купонов",
    // NEXTCOUPON: "Следующий купон",
    BUYBACKDATE: "Дата оферты",
    MATDATE: "Дата выкупа",
    yearProfit: "Доходность",
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
                <tr v-for="column in columnsRus" :key="column">
                    <td v-for="column in columnsRus" :key="column">
                        {{ column }}
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
        th,
        td {
            padding: 10px;
            text-align: center;
        }
        thead {
            background: var(--color-4);
        }
        tbody > tr:nth-child(2n) {
            background: var(--color-5);
        }
    }
}
</style>
