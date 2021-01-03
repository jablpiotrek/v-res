<template>
  <div class="home">
    <reservations-calendar
      :items="items"
      :weekStart="weekStart"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ReservationsCalendar from '@/components/ReservationsCalendar.vue';

export default {
  name: 'Home',
  components: {
    ReservationsCalendar,
  },
  data() {
    return {
      weekStart: 1607900400000,
    };
  },
  computed: {
    ...mapState(['items']),
  },
};
</script>
