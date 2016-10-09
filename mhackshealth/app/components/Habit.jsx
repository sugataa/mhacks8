import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

var divStyle = {
};

export default () => (
  <div id="wrapper">
    <div id="logo_container">
      <div className="pulse_off"><img src="http://dev.mundomediainc.com/design/brendan/projects/Mogenio/images/login_pulse.png" /></div>
      <div id="logo"><img src="http://dev.mundomediainc.com/design/brendan/projects/Mogenio/images/login_logo.png" /></div>
    </div>
    <div className="white_box">
      <Link><div style={divStyle} className="login_button_big toggle_btn" id="trigger"><a href="https://sugataa.github.io/dragndrop/">Nutrition</a></div></Link>
      <Link><div style={divStyle} className="login_button_big toggle_btn" id="trigger"><a href="https://sugataa.github.io/dragndrop/">Exercise</a></div></Link>
      <Link><div style={divStyle} className="login_button_big toggle_btn" id="trigger"><a href="https://sugataa.github.io/dragndrop/">Sleep</a></div></Link>
    </div>
  </div>
)