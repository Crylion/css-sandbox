import Vue from 'vue';
import Vuex from 'vuex';
import ROUTE from '../model/route.enum';
import SCREEN_CONSTRAINT from '../model/screenConstraint.enum';

Vue.use(Vuex);

export interface AppState {
  router: ROUTE;
  screenConstraint: SCREEN_CONSTRAINT;
}

export default new Vuex.Store({
  state: {
    router: ROUTE.CONTENT_CUBE
  } as AppState,
  mutations: {
    goTo: (state: AppState, newValue: ROUTE) => {
      state.router = newValue;
    },
    updateScreenConstraint: (state: AppState, newValue: SCREEN_CONSTRAINT) => {
      state.screenConstraint = newValue;
    }
  },
  actions: {
  },
  getters: {
  },
  devtools: true,
});
