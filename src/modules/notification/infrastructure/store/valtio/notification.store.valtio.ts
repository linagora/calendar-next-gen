import { proxy, subscribe } from 'valtio/vanilla';
import EventNotification from '../../../domain/entity/EventNotification';

export interface EventNotificationState {
  eventNotifications: EventNotification[];
  isLoading: boolean;
}

const eventNotificationState = proxy<EventNotificationState>({
  eventNotifications: [],
  isLoading: false
});

export { subscribe };

export default eventNotificationState;
