import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

var divStyle = {
  MinWidth: '100%'
};

export default () => (
  <div id="wrapper">
    <div id="logo_container">
      <div className="pulse_off"><img src="http://dev.mundomediainc.com/design/brendan/projects/Mogenio/images/login_pulse.png" /></div>
      <div id="logo"><img src="http://dev.mundomediainc.com/design/brendan/projects/Mogenio/images/login_logo.png" /></div>
    </div>
    <div className="white_box">
      <a href="http://tympanus.net/Development/DragDropInteractions/modal.html" activeClassName='active' style={divStyle} className="login_button_big toggle_btn" id="trigger">Nutrition</a>
      <a href="http://tympanus.net/Development/DragDropInteractions/modal.html" activeClassName='active' style={divStyle} className="login_button_big toggle_btn" id="trigger">Nutrition</a>
      <a href="http://tympanus.net/Development/DragDropInteractions/modal.html" activeClassName='active' style={divStyle} className="login_button_big toggle_btn" id="trigger">Nutrition</a>
      <Link activeClassName='active' to='/step/nutrition'><div style={divStyle} className="login_button_big toggle_btn" id="trigger">Nutrition</div></Link>
      <Link activeClassName='active' to='/step/exercise'><div style={divStyle} className="login_button_big toggle_btn" id="trigger">Exercise</div></Link>
      <Link activeClassName='active' to='/step/sleep'><div style={divStyle} className="login_button_big toggle_btn" id="trigger">Sleep</div></Link>
    </div>
  </div>
)