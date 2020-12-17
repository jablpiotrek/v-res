<template>
  <div class="item">
    <span class="item__name"> {{name}} </span>
    {{ this.$store.getters.dayItemReservations(day, id) }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Item',
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
  methods: {
    ...mapGetters(['dayItemReservations']),
  },
};
</script>
