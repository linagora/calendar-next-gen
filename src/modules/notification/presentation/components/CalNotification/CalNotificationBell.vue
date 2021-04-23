<template>
  <div class="cal-notification-bell">
    <notifications-icon />
    <div
      v-if="shouldDisplayBadge"
      class="cal-notification-bell__badge"
    />
  </div>
</template>

<script lang="ts">
import NotificationsIcon from '../../../../../modules/core/presentation/icons/NotificationsIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CalNotificationBell',
  components: { NotificationsIcon },
  props: {
    shouldDisplayBadge: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.cal-notification-bell {
  position: relative;
  cursor: pointer;

  .cal-notification-bell__badge {
    background: #ff3737;
    border: 1px solid #ffffff;
    position: absolute;
    top: 0;
    right: 1px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }
}
</style>
