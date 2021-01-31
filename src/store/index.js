import Vue from 'vue';
import Vuex from 'vuex';

import isSameDay from 'date-fns/isSameDay';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservations: [
      {
        id: '9871234791',
        itemId: '1',
        from: 1607958000000,
        to: 1607965200000,
        name: 'Foo Bar',
        telephone: '123456789',
        extraInfo: '',
      },
      {
        id: '9871234790',
        itemId: '1',
        from: 1607943600000,
        to: 1607950800000,
        name: 'Foo Bar',
        telephone: '123456789',
        extraInfo: '',
      },
      {
        id: '9871234789',
        itemId: '1',
        from: 1607936400000,
        to: 1607943600000,
        name: 'Foo Bar',
        telephone: '123456789',
        extraInfo: '',
      },
      {
        id: '9871234788',
        itemId: '2',
        from: 1608026400000,
        to: 1608051600000,
        name: 'Foo Bar',
        telephone: '123456789',
        extraInfo: '',
      },
      {
        id: '9871234787',
        itemId: '3',
        from: 1608372000000,
        to: 1608400800000,
        name: 'Foo Bar',
        telephone: '123456789',
        extraInfo: '',
      },
      {
        id: '9871234786',
        itemId: '2',
        from: 1608289200000,
        to: 1608292800000,
        name: 'Foo Bar',
        telephone: '123456789',
        extraInfo: '',
      },
      {
        id: '9871234785',
        itemId: '2',
        from: 1608303600000,
        to: 1608310800000,
        name: 'Foo Bar',
        telephone: '123456789',
        extraInfo: '',
      },
    ],
    items: [
      { id: '1', name: 'Item 1', specs: {} },
      { id: '2', name: 'Item 2', specs: {} },
      { id: '3', name: 'Item 3', specs: {} },
    ],
    reservationTooltip: '',
  },
  mutations: {
    openReservationTooltip(state, reservationId) {
      state.reservationTooltip = reservationId;
    },
    closeReservationTooltip(state) {
      state.reservationTooltip = '';
    },
  },
  actions: {
  },
  getters: {
    dayItemReservations: (state) => (day, itemId) => (state.reservations
      .filter((reservation) => isSameDay(day, reservation.from))
      .filter((reservation) => (reservation.itemId === itemId))),
    reservationById: (state) => (reservationId) => (state.reservations
      .find((reservation) => (reservation.id === reservationId))),
  },
});
