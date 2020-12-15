<template>
  <div class="day">
    <span :class="`day__date ${showDate ? 'day__date--show' : ''}`">{{ formattedDate }}</span>
    <div>
      DAILY_RES
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format';

export default {
  name: 'Day',
  props: {
    date: {
      required: true,
      type: Date,
    },
    showDate: {
      required: true,
      type: Boolean,
    },
  },
  computed: {
    formattedDate() {
      return format(this.date, 'EEEE, dd.MM.yyyy');
    },
  },
};
</script>

<style lang="scss" scoped>
  .day {
    &__date {
      display: none;
      &--show {
        display: block;
      }
    }
  }
</style>
