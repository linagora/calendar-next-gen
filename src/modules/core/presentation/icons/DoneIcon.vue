<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.50016 13.5L4.00016 10L2.8335 11.1667L7.50016 15.8334L17.5002 5.83335L16.3335 4.66669L7.50016 13.5Z"
      :fill="fill"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoneIcon',
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
