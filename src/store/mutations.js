import { SortNum } from "../moex/sort";

export const mutBonds = (state, data) => {
    state.bonds = data;
};

export const mutLoader = (state, status) => {
    state.loader = status;
};

export const mutDivisionBonds = (state) => {
    let trueInformation = [];
    let falseInformation = [];
    for (let item of state.bonds) {
        if (
            item.yearProfit === null ||
            isNaN(item.yearProfit) ||
            !isFinite(item.yearProfit) ||
            item.yearProfit < 0
        ) {
            falseInformation.push(item);
        } else {
            trueInformation.push(item);
        }
    }
    state.trueInformation = trueInformation;
    state.falseInformation = falseInformation;
};

export const mutSortBonds = (
    state,
    sort = {
        sortBonds: "yearProfit",
        sortListing: 1,
        sortBy: "up",
        sortData: "all",
    }
) => {
    let data = [];
    if (sort.sortData == "all") {
        data = state.bonds.filter((item) => {
            return item.LISTLEVEL == sort.sortListing;
        });
    } else if (sort.sortData == "full") {
        data = state.trueInformation.filter((item) => {
            return item.LISTLEVEL == sort.sortListing;
        });
    } else if (sort.sortData == "incomplete") {
        data = state.falseInformation.filter((item) => {
            return item.LISTLEVEL == sort.sortListing;
        });
    }
    console.log("mutSortBonds", state.bonds);

    state.sortBonds = SortNum(data, sort.sortBonds, sort.sortBy);
};
