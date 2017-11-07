import React from 'react';

import './footer.css';

const Footer = () => (
  <div className="footer">
    <div className="thisWeek">
      <p className="thisWeekText"><i className="thisWeekIcon">icon</i> <span className="thisWeekTitle">This Week on Avalonstar</span> for the week of <span className="thisWeekDate">November 6th</span>.</p>
    </div>
    <div className="channelCTA">
      <p className="channelCTAText">twitch.tv/avalonstar</p>
    </div>
  </div>
);

export default Footer;
