import React from 'react';

import './card.css';

const CardHeader = ({date, day}) => (
  <div className="cardHeader">
    <div className="cardActions">
      <i className="homeIcon">icon</i>
      <i className="loveIcon">icon</i>
    </div>
    <div className="cardDate">
      <p className="cardDateText">{date}</p>
    </div>
    <div className="cardDay">
      <p className="cardDayText">{day}</p>
      <i className="downIcon">icon</i>
    </div>
  </div>
);

const CardMedia = ({color, image, title}) => (
  <div className="cardMedia" style={{backgroundImage: `url(${image})`}}>
    <div className="mediaOverlay" style={{backgroundColor: color}}></div>
    <div className="mediaContent">
      <p className="mediaContentText">
        {title}
      </p>
    </div>
  </div>
);

const CardFooter = ({activity}) => (
  <div className="cardFooter">
    <p className="activityName">{activity}</p>
    <p className="activity">Activity</p>
  </div>
);

const Card = ({activity, color, date, day, image, title}) => (
  <div className="cardWrapper">
    <CardHeader
      date={date}
      day={day}
    />
    <CardMedia
      color={color}
      image={image}
      title={title}
    />
    <CardFooter
      activity={activity}
    />
  </div>
);

export default Card;
