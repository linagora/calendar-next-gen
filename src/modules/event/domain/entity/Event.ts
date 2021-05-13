import type { CalendarEventObject } from 'dav-parser';

export interface Event extends CalendarEventObject {
  href: string;
}

export default Event;
