<template>
  <div class="item">
    <span class="item__name"> {{ name }} </span>
    <div class="item__bar">
      <ul class="item__reservations" :style="reservationsGrid">
        <li
          class="item__reservation"
          v-for="res in reservations"
          :key="res.id"
          :style="{gridColumn: calculateResColumn(res.from, res.to)}"
        >
          <reservation
            :id="res.id"
          />
        </li>
        <div v-if="isToday" class="item__time-mark">
          <span class="item__clock" v-if="isFirst">
            <span class="item__clock-time">
              12:34
            </span>
            <corner-down-left-icon class="item__clock-arrow" size="2x"></corner-down-left-icon>
          </span>
        </div>
      </ul>
      <div class="item__hours">
        <span
          :class="`item__hour item__hour${hour.mark ? '--full' : ''}`"
          v-for="(hour, key) in hours" :key="key"
        >
          {{ hour.mark ? hour.time: '' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Reservation from '@/components/Reservation.vue';

import getHours from 'date-fns/getHours';
import addMinutes from 'date-fns/addMinutes';
import startOfHour from 'date-fns/startOfHour';
import isSameMinute from 'date-fns/isSameMinute';
import format from 'date-fns/format';
import differenceInHours from 'date-fns/differenceInHours';

import { CornerDownLeftIcon } from 'vue-feather-icons';

export default {
  name: 'Item',
  components: { Reservation, CornerDownLeftIcon },
  data() {
    return {
      dayLength: 8,
      dayStep: 0.25,
      dayStart: 10,
    };
  },
  props: {
    id: {
      reuired: true,
      type: String,
    },
    name: {
      reuired: true,
      type: String,
    },
    specs: {
      default: () => {},
      type: Object,
    },
    day: {
      required: true,
      type: Date,
    },
    isToday: {
      required: false,
      default: false,
      type: Boolean,
    },
    isFirst: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters(['dayItemReservations']),
    reservations() {
      const { day, id } = this;

      return this.dayItemReservations(day, id);
    },
    reservationsGrid() {
      const { dayLength, dayStep } = this;
      return {
        gridTemplateColumns: `repeat(${dayLength / dayStep}, 1fr)`,
      };
    },
    hours() {
      const {
        dayLength: length, dayStart: start, dayStep: step, day,
      } = this;
      const hours = [];

      for (let hour = start; hour <= start + length; hour += step) {
        const time = addMinutes(day, hour * 60);

        hours.push({
          time: format(time, 'HH:mm'),
          mark: isSameMinute(time, startOfHour(time)),
        });
      }

      return hours;
    },
  },
  methods: {
    calculateResColumn(from, to) {
      const hourStart = getHours(from);
      const length = differenceInHours(to, from);

      const startColumn = 1 + (hourStart - this.dayStart) / this.dayStep;
      const endColumn = startColumn + length / this.dayStep;

      return `${startColumn}/${endColumn}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: $medium;

    &__reservations {
      @include border($gray-dark);
      @include hatch($gray-dark, $white, 135deg);

      position: relative;
      display: grid;
      grid-template-rows: 1;
      grid-template-columns: repeat(8, 1fr);
      grid-gap: 1px;
      width: 100%;
      height: $bar-height;
      list-style: none;
      padding-left: 0;
      margin-bottom: $small;
    }

    &__name {
      @include transition(border-color);

      width: 80px;
      margin-bottom: $big;
      padding-left: $small;
      border-left: $small solid $white;
    }

    &__reservation {
      grid-row: 1;
    }

    &__bar {
      @include flexColumn;
      width: 100%;
      padding: 0 15px;
    }

    &__hours {
      display: flex;
      justify-content: space-between;
      margin: $small -15px;
    }

    &__hour {
      font-size: $desc-text;
      width: 30px;
      text-align: center;
      position: relative;

      &::after {
        content: '';
        right: 11.5px;
        top: -6px;
        width: 2px;
        height:12px;
        border-left: 1px solid $gray-dark;
        position: absolute;
      }

      &--full {
         &::after {
          height: 4px;
         }
      }
    }

    &__time-mark{
      height: $bar-height - $small;
      left: 0;
      top: 0;
      border: 2px solid $secondary;
      position: absolute;
      width: calc(18% - 6px);
      background-color: $secondaryTransparent;
      pointer-events: none;
    }

    &__clock {
      position: absolute;
      right: -33px;
      top: -30px;
      padding: $v-small $regular;
      background-color: $secondary;
      border-radius: $small;
    }

    &__clock-time {
      color: $white;
      font-weight: $fontWeightBold;
    }

    &__clock-arrow {
      position: absolute;
      top: 16px;
      right: 4px;
      color: $secondary;
    }

    &:hover,
    &active {
      .item__name {
        border-color: $secondary;
      }
    }
  }
</style>
