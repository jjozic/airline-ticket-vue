import Vuex from 'vuex';
import Vue from 'vue';

import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bgColor: '#7EFBC5',
    fontSize: 15,
    fontColor: '#000000',
    passengerName: 'Max Mustermann',
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
});
