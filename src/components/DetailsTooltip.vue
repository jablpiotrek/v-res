<template>
  <div class="details-tooltip">
    <div class="details-tooltip__row">
      <span class="details-tooltip__property">id:</span>
      <span lass="details-tooltip__value">{{ id }}</span>
    </div>
    <div class="details-tooltip__row">
      <span class="details-tooltip__property">Name:</span>
      <span lass="details-tooltip__value">{{ details.name }}</span>
    </div>
    <div class="details-tooltip__row">
      <span class="details-tooltip__property">Time:</span>
      <span lass="details-tooltip__value">{{ time }}</span>
    </div>
    <div class="details-tooltip__row">
      <span class="details-tooltip__property">Telephone:</span>
      <span lass="details-tooltip__value">{{ details.telephone }}</span>
    </div>
    <button type="button" @click="closeReservationTooltip"><x-circle-icon /></button>

    <div class="details-tooltip__overlay">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import format from 'date-fns/format';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import { XCircleIcon } from 'vue-feather-icons';

export default {
  name: 'DetailsTooltip',
  components: {
    XCircleIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['reservationById']),
    time() {
      const { from, to } = this.details;

      return `${format(from, 'HH:mm')} - ${format(to, 'HH:mm')}`;
    },
    duration() {
      const { from, to } = this;
      return formatDistanceStrict(from, to);
    },
    details() {
      return this.reservationById(this.id);
    },
  },
  methods: {
    ...mapMutations(['closeReservationTooltip']),
  },
};
</script>

<style lang="scss" scoped>
 .details-tooltip {
   position: absolute;
   transform: translate(0, -100%);
   left: calc(50% - 90px);
   top: -16px;
   border: 1px solid black;
   background: white;
   width: 180px;
 }
</style>
