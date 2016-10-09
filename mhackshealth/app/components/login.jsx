import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

var divStyle = {
  TextDecoration:'none'
};

export default () => (
  <div id="wrapper">
    <div id="logo_container">
      <div className="pulse_off"><img src="http://dev.mundomediainc.com/design/brendan/projects/Mogenio/images/login_pulse.png" /></div>
      <div id="logo"><img src="http://dev.mundomediainc.com/design/brendan/projects/Mogenio/images/login_logo.png" /></div>
    </div>
    <div className="white_box">
      <div className="username_bgfield">
        <input type="text" className="textfield" placeholder="Username" />
      </div>
      <div className="password_bgfield">
        <input type="text" className="textfield" placeholder="Password" />
      </div>
      <Link activeClassName='active' to='/survey'><div style={divStyle} className="login_button_big toggle_btn" id="trigger">Log In</div></Link>
    </div>
  </div>
)