<template>
  <div class="item">
    <span class="item__name"> {{name}} </span>
    RESERVATIONS
  </div>
</template>

<script>
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
  },
};
</script>
