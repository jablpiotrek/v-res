<template>
  <div :class="`reservation reservation${showTooltip ? '--highlight' : ''}`">
    <div class="reservation__area"
    @click="openReservationTooltip(id)"
    @mouseover="reveal()"
    @mouseleave="hide()"
  >
      <span class="reservation__id">{{ `#${id}` }}</span>
      <span class="reservation__from-to"> {{ time }} </span>
    </div>
    <details-tooltip
      :id="this.id"
      v-if="showTooltip"
    />
  </div>
</template>

<script>
import format from 'date-fns/format';

import { mapState, mapMutations, mapGetters } from 'vuex';

import DetailsTooltip from '@/components/DetailsTooltip.vue';

export default {
  name: 'Reservation',
  components: { DetailsTooltip },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      revealed: false,
    };
  },
  computed: {
    ...mapState(['reservationTooltip']),
    ...mapGetters(['noReservationTooltip', 'reservationById']),
    showTooltip() {
      return this.id === this.reservationTooltip;
    },
    time() {
      const { from, to } = this.reservationById(this.id);

      return `${format(from, 'HH:mm')} - ${format(to, 'HH:mm')}`;
    },
  },
  methods: {
    ...mapMutations(['openReservationTooltip']),
  },
};
</script>

<style lang="scss" scoped>
  .reservation {
    @include flexColumn;

    position: relative;
    height: 100%;

    &__area {
      @include flexCenterCenter;
      @include flexColumn;
      @include border($secondary, 2px);
      @include hatch($secondary);
      @include transition(border-width);

      width: 100%;
      height: 100%;
      background-position: center;
      box-sizing: border-box;
      border-radius: $small;
      cursor: pointer;

      &:hover,
      &:active {
        border-left-width: $regular;
        border-right-width: $regular;
      }
    }

    &__id,
    &__from-to {
      padding: $v-small;
      background: $white;
      color: $secondary;
    }

    &__id {
      font-size: $medium;
    }

    &--highlight {
      @include shadow;
    }

    &__from-to {
      font-size: $desc-text;
      font-weight: $fontWeightBold;
    }

    &__overlay {
      @include transition(background-color);

      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $overlay;
      pointer-events: none;

      &--revealed {
        background-color: transparent;
      }
    }
  }
</style>
