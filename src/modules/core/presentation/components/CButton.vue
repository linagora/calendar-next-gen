<template>
  <button
    :class="`c-button c-button--${variant}`"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CButton',
  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary'>,
      default: 'primary',
    },
  },
});
</script>

<style lang="scss">
@import '../styles/_variables';

.c-button {
  outline: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;

  &.c-button--primary {
    background: $primary;
    color: $white;

    &:hover {
      background: $primary-dark;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
