import React, { Component } from 'react';

const scheduleDataMock = [
  {
    day: 'Tuesday',
    date: 'November 7th',
    title: `Let's Do the Destiny 2 Again (also "Whishing I could Super Savage.")`,
    activity: 'Destiny 2 / Final Fantasy XIV',
    color: '#468FDC',
    image: `https://i.imgur.com/mA0GI2D.jpg`,
  },
  {
    day: 'Wednesday',
    date: 'November 8th',
    title: `AVLN'S (Community Votes) Whatever Wednesdays`,
    activity: 'Final Fantasy XIV / Destiny 2',
    color: '#4C1485',
    image: `https://i.imgur.com/i9ZmnLb.jpg`,
  },
  {
    day: 'Thursday',
    date: 'November 9th',
    title: `Didn't We Do All This on the PS4 Already? #305`,
    activity: 'Destiny 2',
    color: '#842E8F',
    image: `https://i.imgur.com/KIumonZ.jpg`,
  },
  {
    day: 'Friday',
    date: 'November 10th',
    title: `Freeform Friday, Song Requests, and Shenanigans`,
    activity: 'Final Fantasy XIV / TBD',
    color: '#383468',
    image: `https://i.imgur.com/HlZ2sI3.jpg`,
  },
];

const withScheduleData = (WrappedComponent) => {
  return class extends Component {
    state = {
      scheduleData: [],
    };

    componentDidMount() {
      //Here we should make a fetch request to get the dynamic schedule data
      //cloning mock data into state for now
      const scheduleData = scheduleDataMock.slice();
      this.setState({scheduleData});
    }

    render() {
      return (
        <WrappedComponent {...this.props} scheduleData={this.state.scheduleData} />
      );
    }
  }
}

export default withScheduleData;
