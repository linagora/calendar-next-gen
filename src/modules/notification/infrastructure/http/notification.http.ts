import { getInbox, deleteEvent, BASE_PATH as CALENDARS_BASE_PATH } from 'dav-client/lib/api/calendars';
import davClient from '../../../core/infrastructure/http/core.http.dav.client';
import type EventNotification from '../../domain/entity/EventNotification';

class EventNotificationHTTPClient {
  public async getEventNotifications(userId: string): Promise<EventNotification[]> {
    const inboxItems = await getInbox(davClient)(userId);

    return inboxItems
      .map(inboxItem => inboxItem.events.map(event => ({
        href: inboxItem.href,
        event: { ...event },
      })))
      .flat()
      .map(rawEventNotification => ({
        ...rawEventNotification.event,
        href: rawEventNotification.href,
      }));
  }

  public async deleteEventNotification(eventHref: string): Promise<void> {
    await deleteEvent(davClient)(eventHref.replace(CALENDARS_BASE_PATH, ''));
  }
}

export default new EventNotificationHTTPClient();
