import { createStore } from "vuex";

const store = createStore({
    state: {
        url: "",
        modal: false,
    },
    mutations: {
        setUrl: (state, data) => {
            state.url = data
            console.log(data)
        },
        openModal: (state) => {
            state.modal = true;
            console.log(state.modal)
        },
        closeModal: (state) => {
            state.modal = false;
            console.log(state.modal)
        }
    }
});





export default store;
