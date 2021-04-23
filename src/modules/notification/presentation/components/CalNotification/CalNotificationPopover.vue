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
import { defineComponent, ref } from 'vue';
import CalNotificationItem from './CalNotificationItem.vue';

export default defineComponent({
  name: 'CalNotificationPopover',
  components: {
    CalNotificationItem,
  },
  emits: ['change-participation'],
  setup(props, ctx) {
    const notificationItems = ref([
      {
        id: 0,
        title: 'Stupefy',
        start: new Date().setHours(12),
        organizerCN: 'Tuan Le Cong (tlcong@linagora.com)',
      },
      {
        id: 1,
        title: 'Avada Kedavra',
        start: new Date().setHours(10),
        organizerCN: 'Thao Nguyen Linh (tnlinh@linagora.com)',
      },
      {
        id: 2,
        title: 'Expelliarmus',
        start: new Date().setHours(9),
        organizerCN: 'Renaud Boyer (rboyer@linagora.com)',
      },
      {
        id: 3,
        title: 'Expecto Patronum',
        start: new Date().setHours(8),
        organizerCN: 'Huy Ta Quoc (htquoc@linagora.com)',
      }
    ]);

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
