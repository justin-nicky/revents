import React, { useState } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvents] = useState(sampleData);
  return (
    <Container>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && <EventForm setFormOpen={setFormOpen} />}
        </Grid.Column>
      </Grid>
    </Container>
  );
}
