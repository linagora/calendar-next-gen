import { changeParticipation, BASE_PATH as CALENDARS_BASE_PATH } from 'dav-client/lib/api/calendars';
import type { ChangeParticipationOptions } from 'dav-client/lib/api/calendars';
import davClient from '../../../core/infrastructure/http/core.http.dav.client';

class EventNotificationHTTPClient {
  async changeParticipation({ event, eventPath, partstat, attendeeEmail }: ChangeParticipationOptions): Promise<void> {
    await changeParticipation(davClient)({ event, eventPath: eventPath.replace(CALENDARS_BASE_PATH, ''), partstat, attendeeEmail });
  }
}

export default new EventNotificationHTTPClient();
