<template>
  <section class="cal-notification-popover">
    <div
      v-show="error"
      class="cal-notification-popover__error"
    >
      <error-icon class="cal-notification-popover__error__icon" />
      <h4 class="cal-notification-popover__error__title c-h4">
        Something went wrong!
      </h4>
      <p class="cal-notification-popover__error__subtitle c-p c-p--secondary">
        Try reloading the notifications and see it it fixes the problem.
      </p>
      <c-button @click="handleReloadNotifications">
        Reload
      </c-button>
    </div>
    <div v-show="!error">
      <template
        v-for="(eventNotification, index) in eventNotifications"
        :key="eventNotification.id"
      >
        <cal-notification-item
          :notification-item="eventNotification"
          @yes="handleChangeParticipation(eventNotification.id)('yes')"
          @maybe="handleChangeParticipation(eventNotification.id)('maybe')"
          @no="handleChangeParticipation(eventNotification.id)('no')"
        />
        <hr
          v-if="index !== eventNotification.length - 1"
          class="cal-notification-popover__separator"
        >
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CalNotificationItem from './CalNotificationItem.vue';
import ErrorIcon from '../../../../core/presentation/icons/ErrorIcon.vue';
import CButton from '../../../../core/presentation/components/CButton.vue';
import EventNotification from '../../../domain/entity/EventNotification';

export default defineComponent({
  name: 'CalNotificationPopover',
  components: {
    CalNotificationItem,
    ErrorIcon,
    CButton,
  },
  props: {
    eventNotifications: {
      type: Array as PropType<EventNotification[]>,
      default: () => [],
    },
    error: {
      type: Object,
      default: null,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change-participation', 'reload-notifications'],
  setup(props, ctx) {
    const handleChangeParticipation = (eventId: string) => (participationStatus: 'yes' | 'maybe' | 'no') => {
      ctx.emit('change-participation', { eventId, participationStatus });
    };

    const handleReloadNotifications = () => {
      ctx.emit('reload-notifications');
    };

    return {
      handleChangeParticipation,
      handleReloadNotifications,
    };
  },
});
</script>

<style lang="scss">
@import '../../../../core/presentation/styles/_variables';

.cal-notification-popover {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 5%), 0 0 20px 0 rgb(0 0 0 / 15%);
  border-radius: 8px;
  padding: 4px 0;
  width: 305px;
  min-height: 350px;
  max-height: 350px;
  overflow-y: auto;
  background: $white;

  .cal-notification-popover__error {
    .cal-notification-popover__error__icon {
      margin-bottom: 16px;
    }

    .cal-notification-popover__error__title {
      margin-bottom: 12px;
      max-width: 240px;
      text-align: center;
    }

    .cal-notification-popover__error__subtitle {
      margin-bottom: 16px;
      max-width: 240px;
      text-align: center;
    }
  }

  .cal-notification-popover__separator {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 0;
  }
}
</style>
