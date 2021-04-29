import type EventNotification from '../domain/entity/EventNotification';
import type NotificationRepositoryInterface from '../domain/notification.repository.interface';
import notificationHttp from './http/notification.http';
import notificationStore from './store/notification.store';

class EventNotificationRepository implements NotificationRepositoryInterface {
  public async fetchEventNotifications(userId: string): Promise<EventNotification[]> {
    notificationStore.setError(null);
    notificationStore.setIsLoading(true);

    try {
      const eventNotifications = await notificationHttp.getEventNotifications(userId);

      notificationStore.setEventNotifications(eventNotifications);
      notificationStore.setIsLoading(false);

      return eventNotifications;
    } catch (error) {
      console.error(error);

      notificationStore.setError(error);
    }

    notificationStore.setIsLoading(false);

    return [];
  }
}

export default new EventNotificationRepository();
