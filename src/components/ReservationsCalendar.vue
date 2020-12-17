<template>
  <div class="reservations-calendar">
    <h2>{{`${startDate} - ${endDate}`}}</h2>
    <div class="reservations-calendar__days">
      <day v-for="(day, index) in days" :key="index" :date="day" :items="items"/>
    </div>
  </div>
</template>

<script>
import Day from '@/components/Day.vue';

import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

export default {
  name: 'ReservationsCalendar',
  components: { Day },
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1', specs: {} },
        { id: 2, name: 'Item 2', specs: {} },
        { id: 3, name: 'Item 3', specs: {} },
      ],
      weekStart: 1607900400000,
      dateFormat: 'dd/MM/yyyy',
    };
  },
  computed: {
    startDate() {
      return format(this.weekStart, this.dateFormat);
    },
    endDate() {
      return format(addDays(this.weekStart, 6), this.dateFormat);
    },
    days() {
      const start = this.weekStart;
      const end = addDays(start, 6);

      return eachDayOfInterval({ start, end });
    },
  },
};
</script>
