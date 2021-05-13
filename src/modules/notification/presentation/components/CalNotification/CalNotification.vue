<template>
  <c-popover>
    <template #content>
      <cal-notification-popover
        :event-notifications="eventNotifications"
        :is-loading="isLoading"
        :error="error"
        @reload-notifications="handleReloadNotifications"
        @change-participation="handleChangeParticipation"
      />
    </template>
    <cal-notification-bell :should-display-badge="!!error || eventNotifications.length > 0" />
  </c-popover>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import useEventNotifications from '../../../application/useEventNotifications';
import useEventParticipation from '../../../../event/application/useEventParticipation';
import type User from '../../../../user/domain/entity/User';
import CPopover from '../../../../core/presentation/components/CPopover.vue';
import CalNotificationPopover from './CalNotificationPopover.vue';
import CalNotificationBell from './CalNotificationBell.vue';
import { Partstat } from 'dav-client/types/EventPartstat';

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
    const { fetchEventNotifications, deleteEventNotification, eventNotifications, isLoading, error } = useEventNotifications(props.user.id);
    const { changeParticipation } = useEventParticipation(props.user);

    const handleReloadNotifications = () => {
      fetchEventNotifications();
    };

    const handleChangeParticipation = ({ eventHref, partstat }: { eventHref: string, partstat: Partstat }) => {
      const event = eventNotifications.value.find(eventNotification => eventNotification.href === eventHref);

      if (!event) return;

      changeParticipation({ event, partstat });

      setTimeout(() => {
        deleteEventNotification(eventHref);
      }, 2000);
    };

    return {
      handleReloadNotifications,
      handleChangeParticipation,
      eventNotifications,
      isLoading,
      error,
    };
  },
});
</script>
