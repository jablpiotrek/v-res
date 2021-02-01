<template>
  <div class="details-tooltip">
    <button type="button" class="details-tooltip__close" @click="closeReservationTooltip">
      <x-circle-icon />
    </button>
    <div class="details-tooltip__row" v-clipboard:copy="id">
      <span class="details-tooltip__property">Res. ID:</span>
      <span class="details-tooltip__value">{{ id }}</span>
      <copy-icon class="details-tooltip__copy"  size="18" />
    </div>
    <div class="details-tooltip__row" v-clipboard:copy="details.name">
      <span class="details-tooltip__property">Name:</span>
      <span class="details-tooltip__value">{{ details.name }}</span>
      <copy-icon class="details-tooltip__copy" size="18" />
    </div>
    <div class="details-tooltip__row" v-clipboard:copy="time">
      <span class="details-tooltip__property">Time:</span>
      <span class="details-tooltip__value">{{ time }}</span>
      <copy-icon  class="details-tooltip__copy"  size="18" />
    </div>
    <div class="details-tooltip__row"  v-clipboard:copy="details.telephone">
      <span class="details-tooltip__property">Telephone:</span>
      <span class="details-tooltip__value">{{ details.telephone }}</span>
      <copy-icon class="details-tooltip__copy" size="18" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import format from 'date-fns/format';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import { XCircleIcon, CopyIcon } from 'vue-feather-icons';

export default {
  name: 'DetailsTooltip',
  components: {
    XCircleIcon,
    CopyIcon,
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
    @include border($secondary, $v-small);

    position: absolute;
    padding: $medium;
    transform: translate(0, -100%);
    left: calc(50% - 120px);
    top: -$medium;
    background: $white;
    width: 240px;
    border-radius: $small;

    &__row {
      border-bottom: 1px solid $gray-dark;
      padding: $small 0;
      cursor: pointer;

      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
      }

      &:hover,
      &:active {
        .details-tooltip__copy {
          display: inline;
        }
      }
    }

    &__property {
      color: $secondary;
      margin-right: $small;
      font-weight: $fontWeightBold;
    }

    &__close {
      @include flexCenterCenter;
      @include paddingMarginClear;
      @extend %button;

      position: absolute;
      right: 0;
      top: 0;
      width: $button-height;
      height: $button-height;
    }

    &__copy {
      color: $secondary;
      margin-bottom: -$small;
      margin-left: $medium;
      display: none;
    }
 }
</style>
