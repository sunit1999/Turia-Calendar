import React, { Component } from 'react';

import Calendar from './Calendar/Calender_component';
import './App.css';

const events = [{
  id: 1,
  color: '#fd3153',
  from: '2021-05-20T00:00:00+00:00',
  to: '2021-05-20T02:40:00+00:00',
  title: 'Seeing family',
}, {
  id: 2,
  color: '#1ccb9e',
  from: '2021-05-20T03:00:00+00:00',
  to: '2021-05-20T04:00:00+00:00',
  title: 'Holiday',
}, {
  id: 3,
  color: '#F480A8',
  from: '2021-05-20T05:00:00+00:00',
  to: '2021-05-20T06:01:00+00:00',
  title: 'Jet skiing',
}, {
  id: 4,
  color: '#fda256',
  from: '2021-05-20T18:00:00+00:00',
  to: '2021-05-20T19:30:00+00:00',
  title: 'Dinner',
}, {
  id: 5,
  color: '#8281fd',
  from: '2021-05-20T21:00:00+00:00',
  to: '2021-05-20T23:00:00+00:00',
  title: 'Doctors',
}, {
  id: 6,
  color: '#8281fd',
  from: '2021-05-22T21:00:00+00:00',
  to: '2021-05-22T23:00:00+00:00',
  title: 'Hangout',
}];

class App extends Component {

  state = events;

  render() {
    return (
        <div className="App">
          <Calendar events={events} />
        </div>
    );
  }
}


export default App;
