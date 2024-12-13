export const getLoader = (state) => state.loader;

export const getAllBonds = (state) => state.bonds;

export const getSortBonds = (state) => {
    console.log("getSortBonds");

    return state.sortBonds;
};
