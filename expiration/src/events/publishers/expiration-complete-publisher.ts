import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@pdtickets/common';
import { Subscription } from 'node-nats-streaming';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
