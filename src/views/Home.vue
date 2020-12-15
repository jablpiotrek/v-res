<template>
  <div class="home">
    <reservations-calendar/>
  </div>
</template>

<script>
import ReservationsCalendar from '@/components/ReservationsCalendar.vue';

export default {
  name: 'Home',
  components: {
    ReservationsCalendar,
  },
};
</script>
