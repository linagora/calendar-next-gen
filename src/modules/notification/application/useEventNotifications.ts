import { ref } from 'vue';
import type EventNotification from '../domain/entity/EventNotification';
import EventNotificationService from '../domain/notification.service';
import eventNotificationRepository from '../infrastructure/notification.repository';
import eventNotificationStore from '../infrastructure/store/notification.store';

const eventNotificationService = new EventNotificationService(eventNotificationRepository);

export default function useEventNotifications(userId: string) {
  const error = ref<Record<string, unknown> | null>(null);
  const isLoading = ref<boolean>(false);
  const eventNotifications = ref<EventNotification[]>([]);

  eventNotificationStore.setIsLoading(isLoading.value);

  eventNotificationStore.subscribeToEventNotifications(({ eventNotificationList, loading, error: storeError }) => {
    eventNotifications.value = eventNotificationList;
    isLoading.value = loading;
    error.value = storeError;
  });

  eventNotificationService.fetchEventNotifications(userId);

  return {
    eventNotifications,
    isLoading,
    error,
  };
}
