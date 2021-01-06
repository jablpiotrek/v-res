<template>
  <div class="reservation" @click="toggleTooltip">
    <span class="reservation__id">{{ `#${id}` }}</span>
    <details-tooltip
      :id="this.id"
      v-if="showTooltip"
    />
  </div>
</template>

<script>
import DetailsTooltip from '@/components/DetailsTooltip.vue';

export default {
  name: 'Reservation',
  components: { DetailsTooltip },
  data() {
    return {
      showTooltip: false,
    };
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  methods: {
    toggleTooltip() {
      this.showTooltip = !this.showTooltip;
    },
  },
};
</script>

<style lang="scss" scoped>
  .reservation {
    position: relative;
    display: flex;
    flex-direction: column;
  }
</style>
