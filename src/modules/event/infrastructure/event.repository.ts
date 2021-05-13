import type { ChangeParticipationOptions } from 'dav-client/lib/api/calendars';
import type EventRepositoryInterface from '../domain/event.repository.interface';
import eventHTTP from './http/event.http';

class EventRepository implements EventRepositoryInterface {
  public async changeParticipation({ event, eventPath, partstat, attendeeEmail }: ChangeParticipationOptions): Promise<void> {
    return eventHTTP.changeParticipation({ event, eventPath, partstat, attendeeEmail });
  }
}

export default new EventRepository();
