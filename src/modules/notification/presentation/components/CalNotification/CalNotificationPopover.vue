<template>
  <section class="cal-notification-popover">
    <template
      v-for="(notificationItem, index) in notificationItems"
      :key="notificationItem.id"
    >
      <cal-notification-item
        :notification-item="notificationItem"
        @yes="handleChangeParticipation(notificationItem.id)('yes')"
        @maybe="handleChangeParticipation(notificationItem.id)('maybe')"
        @no="handleChangeParticipation(notificationItem.id)('no')"
      />
      <hr
        v-if="index !== notificationItems.length - 1"
        class="cal-notification-popover__separator"
      >
    </template>
  </section>
</template>

<script lang="ts">
import useEventNotifications from '../../../application/useEventNotifications';
import { defineComponent, ref } from 'vue';
import CalNotificationItem from './CalNotificationItem.vue';

export default defineComponent({
  name: 'CalNotificationPopover',
  components: {
    CalNotificationItem,
  },
  props: {
    userId: String,
  },
  emits: ['change-participation'],
  setup(props, ctx) {
    const application = useEventNotifications(props.userId as string);
    const notificationItems = ref(application.eventNotifications);

    const handleChangeParticipation = (eventId: string) => (participationStatus: 'yes' | 'maybe' | 'no') => {
      ctx.emit('change-participation', { eventId, participationStatus });
    };

    return {
      notificationItems,
      handleChangeParticipation,
    };
  },
});
</script>

<style lang="scss">
@import '../../../../core/presentation/styles/_variables';

.cal-notification-popover {
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 5%), 0 0 20px 0 rgb(0 0 0 / 15%);
  border-radius: 8px;
  padding: 4px 0;
  max-height: 350px;
  overflow-y: auto;
  background: $white;

  .cal-notification-popover__separator {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 0;
  }
}
</style>
