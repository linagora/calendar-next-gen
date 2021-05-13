import { getEventURIFromHref } from '../../event/utils/event';
import type EventNotification from '../domain/entity/EventNotification';
import type NotificationRepositoryInterface from '../domain/notification.repository.interface';
import notificationHTTP from './http/notification.http';
import notificationStore from './store/notification.store';

class EventNotificationRepository implements NotificationRepositoryInterface {
  public async fetchEventNotifications(userId: string): Promise<EventNotification[]> {
    notificationStore.setError(null);
    notificationStore.setIsLoading(true);

    try {
      const eventNotifications = await notificationHTTP.getEventNotifications(userId);

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

  public async deleteEventNotification(eventHref: string): Promise<void> {
    try {
      await notificationHTTP.deleteEventNotification(eventHref);

      const newEventNotifications = notificationStore.getEventNotifications().filter(eventNotification => eventNotification.href !== eventHref);

      notificationStore.setEventNotifications(newEventNotifications);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new EventNotificationRepository();
