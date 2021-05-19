import Vue from 'vue';
import App from './App.vue';
import store from './store';
import SCREEN_CONSTRAINT from './model/screenConstraint.enum';
import { VueHammer } from 'vue2-hammer';
import 'quaternion';

Vue.config.productionTip = false;

// change the threshold for all swipe recognizers
VueHammer.config.pan = {
  threshold: 0
};

Vue.use(VueHammer)

new Vue({
  store,
  render: (h) => h(App),

  created: function () {

    function checkWindowWidth () {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1024 && store.state.screenConstraint !== SCREEN_CONSTRAINT.MOBILE) {
        store.commit('updateScreenConstraint', SCREEN_CONSTRAINT.MOBILE);
      } else if (windowWidth >= 1024 && store.state.screenConstraint !== SCREEN_CONSTRAINT.DESKTOP){
        store.commit('updateScreenConstraint', SCREEN_CONSTRAINT.DESKTOP);
      }
    }

    checkWindowWidth();

    window.addEventListener('resize', () => {
      checkWindowWidth();
    })
  }
}).$mount('#cssSandbox');
