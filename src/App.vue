<template>
  <div id="app" class="app">
    <router-view/>
    <transition name="app__overlay-transition">
      <div v-if="showOverlay" class="app__overlay"></div>
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
      return false;
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
    padding: 0 $medium;

    &__overlay {
      background: $overlay;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: $high;

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
