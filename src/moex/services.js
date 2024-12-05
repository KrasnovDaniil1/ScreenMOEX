export const convertArrayToObject = (arr, columns) => {
    let obj = {};
    columns.forEach((col, index) => (obj[col] = arr[index]));
    return obj;
};

export const mergeObjectToObject = (securities, markets, key) => {
    let data = [];
    securities.forEach((securitie) => {
        markets.forEach((market) => {
            if (securitie[key] == market[key]) {
                data.push({
                    ...securitie,
                    ...market,
                });
            }
        });
    });
    return data;
};

export const removeDuplicate = (data, key) => {
    let k = data[0];
    return data.filter((item) => {
        if (item[key] != k[key]) {
            k = item;
            return item;
        }
    });
};

export const nullPrice = (arr) => {
    for (let v of arr) {
        if (v !== null && !isNaN(v) && isFinite(v)) {
            return v;
        }
    }
    return null;
};

// export const checkFullData = (obj) => {
//     for (let key in obj) {
//         if (obj[yearProfit] === null || isNaN(v) || isFinite(v)) {
//             return false;
//         }
//     }
//     return true;
// };

export const columnsRus = {
    ISIN: "Номер",
    SHORTNAME: "Название",
    LOTVALUE: "Номинал",
    COUPONPERIOD: "Купоны раз в",
    COUPONVALUE: "Купон",

    expireYears: "Осталось лет",
    price: "Цена",
    couponCount: "Осталось купонов",
    ACCRUEDINT: "НКД",

    expireNextCoupon: "Купон через",
    // BUYBACKDATE: "Дата оферты",
    // MATDATE: "Дата выкупа",
    yearProfit: "Доходность (годовая)",
};

// export const columnsRus = {
//     LISTLEVEL: {
//         title: "Листинг",
//         sort: false,
//     },
//     ISIN: {
//         title: "Тикет",
//         sort: false,
//     },
//     SHORTNAME: {
//         title: "Название",
//         sort: false,
//     },
//     LOTVALUE: {
//         title: "Номинал",
//         sort: true,
//     },
//     COUPONPERIOD: {
//         title: "Период выплат",
//         sort: true,
//     },
//     COUPONVALUE: {
//         title: "Купон",
//         sort: true,
//     },
//     ACCRUEDINT: {
//         title: "НКД",
//         sort: true,
//     },
//     price: {
//         title: "Цена",
//         sort: true,
//     },
//     couponCount: {
//         title: "Ост. купонов",
//         sort: true,
//     },
//     expireNextCoupon: {
//         title: "Дней до купона",
//         sort: true,
//     },
//     expireDate: {
//         title: "Дата погашения",
//         sort: true,
//     },
//     yearProfit: {
//         title: "Доходность",
//         sort: true,
//     },

//     // SECTYPE: "SECTYPE",
//     // INSTRID: "INSTRID",
//     // FACEUNIT: "FACEUNIT",
//     // CURRENCYID: "CURRENCYID",
//     // LISTLEVEL: "LISTLEVEL",
// };

// 1 - Акция обыкновенная
// 2 - Акция привилегированная
// 3 - Государственные облигации
// 4 - Региональные облигации
// 5 - Облигации центральных банков
// 6 - Корпоративные облигации
// 7 - Облигации МФО
// 8 - Биржевые облигации
// 9 - Паи открытых ПИФов
// A - Паи интервальных ПИФов
// B - Паи закрытых ПИФов
// C - Муниципальные облигации
// D - Депозитарные расписки
// E - Бумаги иностранных инвестиционных фондов (ETF)
// F - Ипотечный сертификат
// G - Корзина бумаг
// H - Доп. идентификатор списка
// I - ETC (товарные инструменты)
//
// https://www.moex.com/s1467?utm_source=www.moex.com&utm_term=sectype

export const SecType = {
    /**
     * Акция обыкновенная
     */
    Stock: "1",
    /**
     * Акция привилегированная
     */
    StockPriv: "2",
    /**
     * Государственные облигации
     */
    BondGov: "3",
    /**
     * Региональные облигации
     */
    BondReg: "4",
    /**
     * Облигации центральных банков
     */
    BondCB: "5",
    /**
     * Корпоративные облигации
     */
    BondCorp: "6",
    /**
     * Облигации МФО
     */
    BondMfo: "7",
    /**
     * Биржевые облигации
     */
    BondExchange: "8",
    /**
     * Муниципальные облигации
     */
    BondMunicipal: "C",
};

export const SecTypeList = [
    //{ type: SecType.Stock, name: 'Акция обыкновенная' },
    //{ type: SecType.StockPriv, name: 'Акция привилегированная' },
    { type: SecType.BondGov, name: "Государственные облигации " },
    { type: SecType.BondReg, name: "Региональные облигации " },
    { type: SecType.BondCB, name: "Облигации центральных банков " },
    { type: SecType.BondCorp, name: "Корпоративные облигации " },
    { type: SecType.BondMfo, name: "Облигации МФО" },
    { type: SecType.BondExchange, name: "Биржевые облигации" },
    { type: SecType.BondMunicipal, name: "Муниципальные облигации" },
];
