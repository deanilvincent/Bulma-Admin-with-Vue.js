import Vue from 'vue'
import Vuex from 'vuex'

import topandsidebar from './modules/topandsidebar'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    topandsidebar
  }
});

export default store;