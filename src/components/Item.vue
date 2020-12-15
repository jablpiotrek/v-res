<template>
  <div class="item">
    <span class="item__name"> {{name}} </span>
    <ul class="item__days">
      <li class="item__day" v-for="(day, index) in days" :key="index">
        <day :date="day" :show-date="showDates"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Day from '@/components/Day.vue';
import addDays from 'date-fns/addDays';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

export default {
  name: 'Item',
  components: { Day },
  props: {
    id: {
      reuired: true,
      type: Number,
    },
    name: {
      reuired: true,
      type: String,
    },
    weekStart: {
      required: true,
      type: Number,
    },
    specs: {
      default: () => {},
      type: Object,
    },
    showDates: {
      required: true,
      type: Boolean,
    },
  },
  computed: {
    days() {
      const start = this.weekStart;
      const end = addDays(start, 6);

      return eachDayOfInterval({ start, end });
    },
  },
};
</script>

<style lang="scss" scoped>
  .item {
    display: flex;

    &__days {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
</style>
