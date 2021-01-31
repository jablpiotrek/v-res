<template>
  <div :class="`reservation ${highlight ? 'reservation--highlight' : ''}`">
    <span class="reservation__id" @click="openReservationTooltip(id)">{{ `#${id}` }}</span>
    <details-tooltip
      :id="this.id"
      v-if="showTooltip"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

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
  computed: {
    ...mapState(['reservationTooltip']),
    showTooltip() {
      return this.id === this.reservationTooltip;
    },
    highlight() {
      return this.showTooltip;
    },
  },
  methods: {
    ...mapMutations(['openReservationTooltip']),
  },
};
</script>

<style lang="scss" scoped>
  .reservation {
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;

    &--highlight {
      z-index: 100;
    }
  }
</style>
