import type EventNotification from '../domain/entity/EventNotification';
import type NotificationRepositoryInterface from '../domain/notification.repository.interface';
import notificationHttp from './http/notification.http';
import notificationStore from './store/notification.store';

class EventNotificationRepository implements NotificationRepositoryInterface {
  public async fetchEventNotifications(userId: string): Promise<EventNotification[]> {
    notificationStore.setIsLoading(true);

    try {
      const eventNotifications = await notificationHttp.getEventNotifications(userId);

      notificationStore.setEventNotifications(eventNotifications);

      notificationStore.setIsLoading(false);

      return eventNotifications;
    } catch (err) {
      console.error(err);
    }

    notificationStore.setIsLoading(false);

    return [];
  }
}

export default new EventNotificationRepository();
