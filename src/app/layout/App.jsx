import React, { useState } from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div>
      <NavBar setFormOpen={setFormOpen} />
      <div style={{ paddingTop: '7em' }}>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </div>
    </div>
  );
}
