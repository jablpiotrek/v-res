<template>
  <div>
    <h2>{{`${startDate} - ${endDate}`}}</h2>
    <item
      v-for="(item, index)  in items"
      :name="item.name"
      :id="item.id"
      :key="item.id"
      :specs="item.specs"
      :week-start="weekStart"
      :show-dates="index === 0"
    />
  </div>
</template>

<script>
import Item from '@/components/Item.vue';

import format from 'date-fns/format';
import addDays from 'date-fns/addDays';

export default {
  name: 'ReservationsCalendar',
  components: { Item },
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
  },
};
</script>
