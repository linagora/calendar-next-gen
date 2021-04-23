<template>
  <div class="c-popover">
    <div
      v-show="shouldDisplayContent"
      ref="contentEl"
      class="c-popover__content"
    >
      <slot name="content" />
    </div>
    <div
      ref="actionEl"
      class="c-popover__action"
      @click="togglePopover"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent, PropType } from 'vue';
import { createPopper, Instance as PopperInstance } from '@popperjs/core';

export default defineComponent({
  name: 'CPopover',
  props: {
    placement: {
      type: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
      default: 'bottom',
    },
  },
  setup(props) {
    const contentEl = ref<HTMLDivElement>();
    const actionEl = ref<HTMLDivElement>();
    const popper = ref<PopperInstance>();
    const shouldDisplayContent = ref<boolean>(false);

    const togglePopover = () => {
      shouldDisplayContent.value = !shouldDisplayContent.value;

      popper.value?.update();
    };

    const handleClickAway = (e: MouseEvent) => {
      if (!contentEl.value || !actionEl.value) return;

      const targetElement = e.target as HTMLElement;

      if (contentEl.value.contains(targetElement) || actionEl.value.contains(targetElement)) return;

      shouldDisplayContent.value = false;
    };

    onMounted(() => {
      if (!contentEl.value || !actionEl.value) return;

      popper.value = createPopper(actionEl.value, contentEl.value, { placement: props.placement, strategy: 'fixed' });

      document.addEventListener('click', handleClickAway);
    });

    onUnmounted(() => {
      popper.value?.destroy();

      document.removeEventListener('click', handleClickAway);
    });

    return {
      contentEl,
      actionEl,
      togglePopover,
      shouldDisplayContent,
    };
  },
});
</script>
