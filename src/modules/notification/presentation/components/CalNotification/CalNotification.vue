<template>
  <c-popover>
    <template #content>
      <cal-notification-popover
        :event-notifications="eventNotifications"
        :is-loading="isLoading"
        :error="error"
        @reload-notifications="handleReloadNotifications"
      />
    </template>
    <cal-notification-bell :should-display-badge="!!error || eventNotifications.length > 0" />
  </c-popover>
</template>

<script lang="ts">
import useEventNotifications from '../../../application/useEventNotifications';
import { defineComponent } from 'vue';
import CPopover from '../../../../core/presentation/components/CPopover.vue';
import CalNotificationPopover from './CalNotificationPopover.vue';
import CalNotificationBell from './CalNotificationBell.vue';

export default defineComponent({
  name: 'CalNotification',
  components: {
    CPopover,
    CalNotificationPopover,
    CalNotificationBell,
  },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { fetchEventNotifications, eventNotifications, isLoading, error } = useEventNotifications(props.userId);

    const handleReloadNotifications = () => {
      fetchEventNotifications();
    };

    return {
      handleReloadNotifications,
      eventNotifications,
      isLoading,
      error,
    };
  },
});
</script>
