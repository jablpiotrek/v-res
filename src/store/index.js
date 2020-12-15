import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservations: [
      {
        id: 9871234789,
        item: 'Item A',
        from: 1607936400,
        to: 1607943600,
        name: 'Foo Bar',
        telephone: '123456789',
        extraInfo: '',
      },
      {
        id: 9871234788,
        item: 'Item B',
        from: 1608026400,
        to: 1608051600,
        name: 'Foo Bar',
        telephone: '123456789',
        extraInfo: '',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
