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
    <div
      v-if="isLoading"
      class="cal-notification-popover__loading"
    >
      <c-spinner class="cal-notification-popover__loading__spinner" />
      <h4 class="cal-notification-popover__loading__title c-h4">
        Loading event notifications...
      </h4>
      <p class="cal-notification-popover__loading__subtitle c-p c-p--secondary">
        We will notify you when something arrives.
      </p>
    </div>
    <div
      v-if="!isLoading && !error && !eventNotifications.length"
      class="cal-notification-popover__empty"
    >
      <empty-box-icon class="cal-notification-popover__empty__icon" />
      <h4 class="cal-notification-popover__empty__title c-h4">
        No event notifications yet!
      </h4>
      <p class="cal-notification-popover__empty__subtitle c-p c-p--secondary">
        We will notify you when something arrives.
      </p>
    </div>
    <div
      v-if="!isLoading && !error && eventNotifications.length"
      class="cal-notification-popover__content"
    >
      <template
        v-for="(eventNotification, index) in eventNotifications"
        :key="eventNotification.href"
      >
        <cal-notification-item
          :notification-item="eventNotification"
          @yes="handleChangeParticipation(eventNotification.href)(Partstat.ACCEPTED)"
          @maybe="handleChangeParticipation(eventNotification.href)(Partstat.TENTATIVE)"
          @no="handleChangeParticipation(eventNotification.href)(Partstat.DECLINED)"
        />
        <hr
          v-if="index !== eventNotification.length - 1"
          class="cal-notification-popover__content__separator"
        >
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Partstat } from 'dav-client/types/EventPartstat';
import CalNotificationItem from './CalNotificationItem.vue';
import ErrorIcon from '../../../../core/presentation/icons/ErrorIcon.vue';
import EmptyBoxIcon from '../../../../core/presentation/icons/EmptyBoxIcon.vue';
import CButton from '../../../../core/presentation/components/CButton.vue';
import CSpinner from '../../../../core/presentation/components/CSpinner.vue';
import EventNotification from '../../../domain/entity/EventNotification';

export default defineComponent({
  name: 'CalNotificationPopover',
  components: {
    CalNotificationItem,
    ErrorIcon,
    CButton,
    CSpinner,
    EmptyBoxIcon,
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
    const handleChangeParticipation = (eventHref: string) => (partstat: Partstat) => {
      ctx.emit('change-participation', { eventHref, partstat });
    };

    const handleReloadNotifications = () => {
      ctx.emit('reload-notifications');
    };

    return {
      handleChangeParticipation,
      handleReloadNotifications,
      Partstat,
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
      margin-bottom: 12px;
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

  .cal-notification-popover__loading {
    .cal-notification-popover__loading__spinner {
      margin-bottom: 12px;
    }

    .cal-notification-popover__loading__title {
      margin-bottom: 12px;
      max-width: 240px;
      text-align: center;
    }

    .cal-notification-popover__loading__subtitle {
      margin-bottom: 16px;
      max-width: 240px;
      text-align: center;
    }
  }

  .cal-notification-popover__empty {
    .cal-notification-popover__empty__icon {
      margin-bottom: 12px;
    }

    .cal-notification-popover__empty__title {
      margin-bottom: 12px;
      max-width: 240px;
      text-align: center;
    }

    .cal-notification-popover__empty__subtitle {
      margin-bottom: 16px;
      max-width: 240px;
      text-align: center;
    }
  }

  .cal-notification-popover__content {
    width: 100%;
    height: 350px;

    .cal-notification-popover__content__separator {
      border: none;
      border-top: 1px solid #e0e0e0;
      margin: 0;
    }
  }
}
</style>
