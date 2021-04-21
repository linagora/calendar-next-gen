import { CalendarEventObject } from 'dav-parser';

export default interface EventNotification extends CalendarEventObject {
  id: string;
  title: string;
  start: Date | string;
  end: Date | string;
}
