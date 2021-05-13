import type { Partstat } from 'dav-client/types/EventPartstat';
import User from '../../user/domain/entity/User';
import type Event from '../domain/entity/Event';
import EventService from '../domain/event.service';
import eventRepository from '../infrastructure/event.repository';

const eventService = new EventService(eventRepository);

export default function useEventParticipation(user: User) {
  const changeParticipation = ({ event, partstat }: { event: Event, partstat: Partstat }) => {
    eventService.changeParticipation({ event, user, partstat });
  };

  return {
    changeParticipation,
  };
}
