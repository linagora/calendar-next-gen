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
import { defineComponent, PropType } from 'vue';
import type User from '../../../../user/domain/entity/User';
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
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  setup(props) {
    const { fetchEventNotifications, eventNotifications, isLoading, error } = useEventNotifications(props.user.id);

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
