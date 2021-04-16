import type EventNotification from './entity/EventNotification';
import type NotificationRepositoryInterface from './notification.repository.interface';

class EventNotificationService {
  constructor(protected notificationRepository: NotificationRepositoryInterface) {}

  fetchEventNotifications(userId: string): Promise<EventNotification[]> {
    return this.notificationRepository.fetchEventNotifications(userId);
  }
}

export default EventNotificationService;
