<template>
  <div class="reservation">
    <span class="reservation__id">{{ `#${id}` }}</span>
    <span class="reservation__time">{{ time }}</span>
    <span class="reservation__duration">{{ duration }}</span>
  </div>
</template>

<script>
import format from 'date-fns/format';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';

export default {
  name: 'Reservation',
  props: {
    from: {
      required: true,
      type: Number,
    },
    to: {
      required: true,
      typ: Number,
    },
    id: {
      required: true,
      type: Number,
    },
  },
  computed: {
    time() {
      const { from, to } = this;

      return `${format(from, 'HH:mm')} - ${format(to, 'HH:mm')}`;
    },
    duration() {
      const { from, to } = this;
      return formatDistanceStrict(from, to);
    },
  },
};
</script>

<style lang="scss" scoped>
  .reservation {
    display: flex;
    flex-direction: column;
  }
</style>
