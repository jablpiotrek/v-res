<template>
  <div id="app">
    <router-view/>
    <div @click="closeReservationTooltip" v-if="showOverlay" class="app__overlay"></div>
  </div>
</template>

<script>
import hotkeys from 'hotkeys-js';

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['reservationTooltip']),
    showOverlay() {
      return !!this.reservationTooltip;
    },
  },
  methods: {
    ...mapMutations(['closeReservationTooltip']),
  },
  mounted() {
    hotkeys('esc,enter', () => {
      this.closeReservationTooltip();
    });
  },
};

</script>

<style lang="scss" scoped>
  .app {
    &__overlay {
      background: rgba(41, 41, 41, 0.4);
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
    }
  }
</style>
