import { ref } from 'vue';
import type EventNotification from '../domain/entity/EventNotification';
import EventNotificationService from '../domain/notification.service';
import eventNotificationRepository from '../infrastructure/notification.repository';
import eventNotificationStore from '../infrastructure/store/notification.store';

const eventNotificationService = new EventNotificationService(eventNotificationRepository);

export default function useEventNotifications(userId: string) {
  const isLoading = ref<boolean>(false);
  const eventNotifications = ref<EventNotification[]>([]);

  eventNotificationStore.subscribeToEventNotifications(({ eventNotifications: newEventNotifications, isLoading: newIsLoading }) => {
    eventNotifications.value = newEventNotifications;
    console.log('eventNotifications', eventNotifications.value);

    isLoading.value = newIsLoading;
  });

  eventNotificationService.fetchEventNotifications(userId);

  return {
    eventNotifications,
    isLoading
  }
}
