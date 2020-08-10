import React from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header content='create new event' />
      <Form>
        <Form.Field>
          <input type='text' placeholder='event title' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='category' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='discription' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='city' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='venue' />
        </Form.Field>
        <Form.Field>
          <input type='date' placeholder='date' />
        </Form.Field>
        <Button type='submit' floated='right' positive content='submit' />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          content='cancel'
        />
      </Form>
    </Segment>
  );
}
