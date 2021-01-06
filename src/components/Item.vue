<template>
  <div class="item">
    <span class="item__name"> {{name}} </span>
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
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Reservation from '@/components/Reservation.vue';

import getHours from 'date-fns/getHours';
import differenceInHours from 'date-fns/differenceInHours';

export default {
  name: 'Item',
  components: { Reservation },
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

    &__reservations {
      display: grid;
      grid-template-rows: 1;
            grid-template-columns: repeat(8, 1fr);
      width: 100%;
      list-style: none;
      padding-left: 0;
      border: 1px solid black;
    }

    &__reservation {
      grid-row: 1;
      border: 1px solid red;
    }
  }
</style>
