import { createStore } from "vuex";

const store = createStore({
    state : {
        url: "http://youtube.com",
        modal: false,
    },
    mutations: {
        setUrl : (state, data ) => {
            state.url = data
        },
        setModal : (state) => {
            state.modal != modal
        }
    }
});





export default store;