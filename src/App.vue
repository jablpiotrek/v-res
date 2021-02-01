<template>
  <div id="app">
    <router-view/>
    <transition name="app__overlay-transition">
      <div @click="closeReservationTooltip" v-if="showOverlay" class="app__overlay"></div>
    </transition>
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

<style lang="scss">
  .app {

    &__overlay {
      background: $overlay;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 10;

      &-transition {
        &-enter,
        &-leave-to {
          background-color: transparent;
        }

        &-leave,
        &-enter-to {
          background-color: $overlay;
        }

        &-enter-active,
        &-leave-active {
          @include transition(background-color);
        }
      }
    }
  }
</style>
