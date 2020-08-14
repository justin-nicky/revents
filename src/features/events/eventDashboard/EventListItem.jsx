import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({ event, selectEvent, deleteEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Meta>hosted by {event.hostedBy}</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name='clock outline' />
          {event.date}
          <Icon name='marker' />
          {event.venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>

      <Segment clearing>
        <div>{event.description}</div>

        <Button
          onClick={() => {
            deleteEvent(event.id);
          }}
          floated='right'
          color='red'
          content='delete'
        />
        <Button
          onClick={() => {
            selectEvent(event);
          }}
          floated='right'
          color='teal'
          content='view'
        />
      </Segment>
    </Segment.Group>
  );
}
