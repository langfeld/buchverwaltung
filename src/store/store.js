import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

        flacheliste: false,
        admin: true,

    },
    mutations: {

        // Buch-Ansicht umschalten
        ansichtUmschalten(state, payload) {
            state.flacheliste = payload.flacheliste
        },

    }
});