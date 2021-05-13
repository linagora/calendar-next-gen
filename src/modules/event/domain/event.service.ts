import { Partstat } from 'dav-client/types/EventPartstat';
import User from '../../user/domain/entity/User';
import { buildAttendeeEmailFromUserEmail } from '../utils/email';
import { buildEventPathFromEventIdAndUserId, getEventURIFromHref } from '../utils/event';
import Event from './entity/Event';
import EventRepositoryInterface from './event.repository.interface';

class EventService {
  constructor(protected eventRepository: EventRepositoryInterface) {}

  public async changeParticipation({ event, user, partstat }: { event: Event, user: User, partstat: Partstat }): Promise<void> {
    const eventPath = buildEventPathFromEventIdAndUserId(getEventURIFromHref(event.href), user.id);
    const attendeeEmail = buildAttendeeEmailFromUserEmail(user.preferredEmail);

    return this.eventRepository.changeParticipation({ event, eventPath, partstat, attendeeEmail });
  }
}

export default EventService;
