<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8332 5.34169L14.6582 4.16669L9.99984 8.82502L5.3415 4.16669L4.1665 5.34169L8.82484 10L4.1665 14.6584L5.3415 15.8334L9.99984 11.175L14.6582 15.8334L15.8332 14.6584L11.1748 10L15.8332 5.34169Z"
      :fill="fill"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CloseIcon',
  props: {
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
    fill: {
      type: String,
      default: '#757575',
    },
  },
});
</script>
