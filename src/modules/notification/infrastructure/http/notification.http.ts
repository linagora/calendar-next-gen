import { getInbox } from 'dav-client/lib/api/calendars';
import davClient from '../../../core/infrastructure/http/core.http.dav.client';
import type EventNotification from '../../domain/entity/EventNotification';

class EventNotificationHTTPClient {
  async getEventNotifications(userId: string): Promise<EventNotification[]> {
    const inboxItems = await getInbox(davClient)(userId);

    return inboxItems.map(inboxItem => inboxItem.events).flat();
  }
}

export default new EventNotificationHTTPClient();
