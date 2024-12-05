import { createStore } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
    bonds: [],
    favorites: [],
    falseInformation: [],
    trueInformation: [],
    loader: true,
};

const store = createStore({
    state,
    getters,
    actions,
    mutations,
});

export default store;
