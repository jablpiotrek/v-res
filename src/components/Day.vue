<template>
  <div class="day">
    <span class="day__date">{{ formattedDate }}</span>
    <ul class="day__items">
      <li class="day__item" v-for="item in items" :key="item.id">
        <item :name="item.name" :id="item.id" :specs="item.spec"/>
      </li>
    </ul>
  </div>
</template>

<script>
import format from 'date-fns/format';

import Item from '@/components/Item.vue';

export default {
  name: 'Day',
  components: { Item },
  props: {
    date: {
      required: true,
      type: Date,
    },
    items: {
      required: true,
      type: Array,
    },
  },
  computed: {
    formattedDate() {
      return format(this.date, 'EEEE, dd.MM.yyyy');
    },
  },
};
</script>
