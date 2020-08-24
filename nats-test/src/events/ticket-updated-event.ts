import { Subjects } from './subjects';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: String;
    title: String;
    price: number;
    userId: String;
  };
}
