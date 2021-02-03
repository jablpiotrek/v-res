<template>
  <div class="day">
    <div class="day__header">
      <h3 class="day__date">{{ formattedDate }}</h3>
      <span v-if="isToday" class="day__today-badge">Today</span>
    </div>
    <ul class="day__items">
      <li class="day__item" v-for="(item, index) in items" :key="item.id">
        <item
          :name="item.name"
          :id="item.id"
          :specs="item.spec"
          :day="date"
          :isToday="isToday"
          :isFirst="index === 0"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';

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
    isToday() {
      return isSameDay(this.date, new Date(2020, 11, 14));
    },
  },
};
</script>

<style lang="scss" scoped>
  .day {
    @include border(1px, $gray-light);
    @include transition(border-color);

    padding: $medium;
    margin-bottom: $medium;
    border-radius: $small;

    &__date {
      font-size: $big;
      margin-top: 0;
      margin: 0;
      padding-left: $small;
      border-left: $small solid $white;
    }

    &:hover,
    &:active {
      border-color: $secondary;

      .day__date {
        border-color: $secondary;
      }
    }

    &__items {
      list-style: none;
      padding-left: 0;
    }

    &__header {
      display: flex;
      margin-bottom: $v-big;
      align-items: center;
    }

    &__today-badge {
      margin-left: $big;
      text-transform: uppercase;
      font-weight: $fontWeightBold;
      background-color: $secondary;
      color: $white;
      padding: $small $medium;
      border-radius: $small;
    }
  }
</style>
