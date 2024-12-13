import { getBonds } from "../moex/api";

export const actBonds = async (context) => {
    context.commit("mutLoader", true);
    context.commit("mutBonds", await getBonds());
    context.commit("mutDivisionBonds", false);
    context.commit("mutSortBonds");

    context.commit("mutLoader", false);
};
