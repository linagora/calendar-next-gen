<template>
  <section class="cal-notification-item">
    <h2 class="cal-notification-item__title">
      {{ notificationItem.title || 'No title' }}
    </h2>
    <p class="cal-notification-item__info">
      {{ notificationItem.start ? formatDate(notificationItem.start) : 'Unknown date' }}
    </p>
    <p class="cal-notification-item__info">
      From: {{ notificationItem.extendedProps.organizer || 'Anonymous' }}
    </p>
    <div
      v-show="!clickedPartstatButton"
      class="cal-notification-item__participation-buttons"
    >
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
    <p
      v-show="clickedPartstatButton"
      class="cal-notification-item__participation-message"
    >
      <template v-if="clickedPartstatButton === 'yes'">
        <done-icon
          :width="20"
          :height="20"
          fill="#27ae60"
        />
        <span>You will attend this event.</span>
      </template>
      <template v-else-if="clickedPartstatButton === 'maybe'">
        <question-icon
          :width="20"
          :height="20"
          fill="#f2994a"
        />
        <span>You may attend this event.</span>
      </template>
      <template v-else-if="clickedPartstatButton === 'no'">
        <close-icon
          :width="20"
          :height="20"
          fill="#ff3737"
        />
        <span>You will not attend this event.</span>
      </template>
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import DoneIcon from '../../../../core/presentation/icons/DoneIcon.vue';
import QuestionIcon from '../../../../core/presentation/icons/QuestionIcon.vue';
import CloseIcon from '../../../../core/presentation/icons/CloseIcon.vue';
import { formatDate } from '../../../../core/utils/date';
import EventNotification from '../../../domain/entity/EventNotification';

export default defineComponent({
  name: 'CalNotificationItem',
  components: { DoneIcon, QuestionIcon, CloseIcon },
  props: {
    notificationItem: {
      type: Object as PropType<EventNotification>,
      required: true,
    },
  },
  emits: ['yes', 'maybe', 'no'],
  setup(props, ctx) {
    const clickedPartstatButton = ref<string | null>(null);

    const handleClickParticipationButton = (participationStatus: 'yes' | 'maybe' | 'no') => {
      ctx.emit(participationStatus);

      clickedPartstatButton.value = participationStatus;
    };

    return {
      clickedPartstatButton,
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

  .cal-notification-item__participation-message {
    color: $black;
    font-size: 12px;
    margin: 4px 0 0 0;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 4px;
    }
  }
}
</style>
