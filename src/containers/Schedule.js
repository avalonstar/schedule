import React, { Component } from 'react';

import Footer from '../components/Schedule/Footer';
import Card from '../components/Schedule/Card';

import withScheduleData from './withScheduleData';

class Schedule extends Component {
  render() {
    const { scheduleData } = this.props;
    return (
      <div className="scheduleWrapper">
        <div className="scheduleContentWrapper">
          {scheduleData.map((event, index) => {
            return (
              <Card
                key={event.day}
                day={event.day}
                date={event.date}
                title={event.title}
                activity={event.activity}
                color={event.color}
                image={event.image}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withScheduleData(Schedule);
