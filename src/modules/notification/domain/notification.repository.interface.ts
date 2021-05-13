import type EventNotification from './entity/EventNotification';

export default interface NotificationRepositoryInterface {
  fetchEventNotifications(userId: string): Promise<EventNotification[]>;
  deleteEventNotification(eventHref: string): Promise<void>;
}
