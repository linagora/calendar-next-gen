<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99941 16.5C10.4977 16.5 10.9017 16.1272 10.9017 15.6673C10.9017 15.2074 10.4977 14.8345 9.99941 14.8345C9.50112 14.8345 9.09717 15.2074 9.09717 15.6673C9.09717 16.1272 9.50112 16.5 9.99941 16.5Z"
      :fill="fill"
    />
    <path
      d="M10 3.5C7.79441 3.5 6 5.15616 6 7.19182H7.80452C7.80452 6.07451 8.78942 5.16549 10 5.16549C11.2106 5.16549 12.1955 6.07451 12.1955 7.19182C12.1955 7.73307 11.9671 8.24194 11.5524 8.62463C11.0106 9.12473 9.40333 10.498 9.38715 10.5119L9.09773 10.7591V13.7705H10.9022V11.4863C11.4002 11.0591 12.402 10.1958 12.8284 9.80234C13.5839 9.10505 14 8.17795 14 7.19184C14 5.15616 12.2056 3.5 10 3.5Z"
      :fill="fill"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuestionIcon',
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
