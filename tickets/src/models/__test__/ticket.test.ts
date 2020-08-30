import { Ticket } from '../ticket';

it('implements optimistic concurrency control', async (done) => {
  // Create an instance of a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 8989,
    userId: '123',
  });

  // Save the ticket to the db

  await ticket.save();
  //fetch the ticket twice

  const firstFetch = await Ticket.findById(ticket.id);
  const secondFetch = await Ticket.findById(ticket.id);
  // make two separate changes to the tickets we fetched

  firstFetch!.set({ price: 10 });
  secondFetch!.set({ price: 15 });
  // save the first fetched ticket

  await firstFetch!.save();
  //save the second fetched ticket and expect an error
  try {
    await secondFetch!.save();
  } catch (error) {
    return done();
  }

  throw new Error('Should not reach this point');
});

it('increments the version number on multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'sdfsa',
    price: 25,
    userId: 'sdfs',
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
