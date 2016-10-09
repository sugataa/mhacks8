var React = require('react')
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

var Success = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Thanks for registering {this.props.fieldValues.name}!</h2>
      <ul className="form-fields">
        <li className="form-footer">
          <Link activeClassName='active' to='/'><div className="login_button_big toggle_btn" id="trigger">Get started!</div></Link>
        </li>
      </ul>
      </div>
    )
  }
})

module.exports = Success