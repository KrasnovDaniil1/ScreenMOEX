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
    console.log(state.falseInformation);
};
