<template>
  <section class="cal-notification-item">
    <h2 class="cal-notification-item__title">
      {{ notificationItem.title || 'No title' }}
    </h2>
    <p class="cal-notification-item__info">
      {{ notificationItem.start ? formatDate(notificationItem.start) : 'Unknown date' }}
    </p>
    <p class="cal-notification-item__info">
      From: {{ notificationItem.organizerCN || 'Anonymous' }}
    </p>
    <div class="cal-notification-item__participation-buttons">
      <button
        class="cal-notification-item__participation-buttons__yes"
        @click="handleClickParticipationButton('yes')"
      >
        Yes
      </button>
      <button
        class="cal-notification-item__participation-buttons__maybe"
        @click="handleClickParticipationButton('maybe')"
      >
        Maybe
      </button>
      <button
        class="cal-notification-item__participation-buttons__no"
        @click="handleClickParticipationButton('no')"
      >
        No
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { formatDate } from '../../../../core/utils/date';
import EventNotification from '../../../domain/entity/EventNotification';

export default defineComponent({
  name: 'CalNotificationItem',
  props: {
    notificationItem: {
      type: Object as PropType<EventNotification>,
      required: true,
    },
  },
  emits: ['yes', 'maybe', 'no'],
  setup(props, ctx) {
    const handleClickParticipationButton = (participationStatus: 'yes' | 'maybe' | 'no') => {
      ctx.emit(participationStatus);
    };

    return {
      handleClickParticipationButton,
      formatDate,
    };
  },
});
</script>

<style lang="scss">
@import '../../../../core/presentation/styles/_variables';

.cal-notification-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;

  .cal-notification-item__title {
    color: $black;
    font-size: 14px;
    margin: 0 0 4px 0;
  }

  .cal-notification-item__info {
    color: $secondary-text;
    font-size: 14px;
    margin: 0 0 4px 0;
  }

  .cal-notification-item__participation-buttons {
    .cal-notification-item__participation-buttons__yes, .cal-notification-item__participation-buttons__maybe, .cal-notification-item__participation-buttons__no {
      padding: 4px 8px;
      border-radius: 8px;
      margin-right: 8px;
      border: none;
      font-size: 12px;
      color: $white;
      font-weight: 500;
      cursor: pointer;
      outline: none;
    }

    .cal-notification-item__participation-buttons__yes {
      background: #27ae60;
    }

    .cal-notification-item__participation-buttons__maybe {
      background: #f2994a;
    }

    .cal-notification-item__participation-buttons__no {
      background: #ff3737;
    }
  }
}
</style>
