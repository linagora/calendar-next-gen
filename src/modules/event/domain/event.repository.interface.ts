import { ChangeParticipationOptions } from 'dav-client/lib/api/calendars';

export default interface EventRepositoryInterface {
  changeParticipation({ event, eventPath, partstat, attendeeEmail }: ChangeParticipationOptions): Promise<void>;
}
