<template>
  <div class="item">
    <span class="item__name"> {{name}} </span>
    <ul class="item__reservations">
      <li class="item__reservation" v-for="res in reservations" :key="res.id">
        <reservation
          :from="res.from"
          :to="res.to"
          :id="res.id"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Reservation from '@/components/Reservation.vue';

export default {
  name: 'Item',
  components: { Reservation },
  props: {
    id: {
      reuired: true,
      type: Number,
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
  },
};
</script>

<style lang="scss" scoped>
  .item {
    display: flex;
  }
</style>
