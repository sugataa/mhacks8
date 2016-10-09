var React                   = require('react')
var getRadioOrCheckboxValue = require('../lib/radio-value')

var SurveyFields = React.createClass({

  renderOptions: function(type, name, value, index) {
    var isChecked = function() {
      if (type == 'radio') return value == this.props.fieldValues[name]

      if (type == 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

      return false
    }.bind(this)

    return (
      <label key={index}>
        <input type={type} name={name} value={value} defaultChecked={isChecked()} /> {value}
      </label>
    )
  },

  render: function() {
    return (
      <div>
        <h2>Survey Question</h2>
        <ul className="form-fields">
          <li className="radio">
            <span className="label">Age</span>
            {['18-26', '27-38', '39-50', '51-62'].map(this.renderOptions.bind(this, 'radio', 'age'))}
          </li>
          <li className="checkbox">
            <span className="label">Favorite Colors</span>
            {['Blue', 'Red', 'Orange', 'Green'].map(this.renderOptions.bind(this, 'checkbox', 'colors'))}
          </li>
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
          </li>
	  <li className="radio">
	    <span className="label">How often do you drink soda?</span>
            {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','soda'))}
          </li>
	  <li className="checkbox">
            <span className="label">How often do you eat iced cream</span>
            {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','iced cream'))}
          </li>
          <li className="radio">
	    <span className="label">How often do you eat red meat</span>
	    {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','red meat'))}
          </li>
	  <li className="checkbox">
	    <span className="label">How often do you eat three meals</span>
	    { ["Every day","Most days","A few times a week", "About once a week", "Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','meals'))}
	  </li>
	  <li className="radio">
	    <span className="label">How often do you eat three pieces of fruit</span>
	    {["Every day","Most days","A few times a week", "About once a week", "Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','fruit'))}
	  </li>
	  <li className="radio">
	    <span className="label">How frequently do you eat vegetables?</span>
	    { ["With all of my meals", "With most of my meals", "With about half of my meals", "With less than half of my meals", "With almost none of my meals"]].map(this.renderOptions.bind(this, 'checkbox','vegetables'))}
	  </li>
	  <li className="radio">
	    <span className="label">How often do you drink at least 6 cups of water in a day?</span>
	    {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','water'))}
	  </li>
	  <li className="radio">
	    <span className="label">How frequently do you jog at least 20 minutes in a day?</span>
	    {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','jog'))}
	  </li>
	  <li className="radio">
	    <span className="label">How frequently do you do twenty pushups more than 3 times a day?</span>
	    {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','pushup'))}
	  </li>
	  <li className="radio">
	    <span className="label">How frequently do you do thirty situps more than 3 times a day?</span>
	    {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','situp'))}
	  </li>
	  <li className="radio">
	    <span className="label">How frequently do you do twenty five squats more than 3 times a day?</span>
	    {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','squat'))}
	 </li>
	 <li className="radio">
	   <span className="label">How often do you use elevators</span>
	   {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','elevator'))}
	 </li>
	 <li className="radio">
	   <span className="label">How often do you bike your longer commutes?</span>
	   {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','bike'))}
	 </li>
	 <li className="radio">
	   <span className="label">How often do you walk your shorter commutes and errands?</span>
	   {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','walk'))}
	 </li>
	 <li className="radio">
	   <span className="label">How frequently do you swim for at least twenty minutes?</span>
	   {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','swim'))}
	 </li>
	 <li className="radio">
	   <span className="label">How frequently do you drink caffeine after 4pm?</span>
	    {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','caffeine'))}
	 </li>
	 <li className="radio">
	   <span className="label">"How frequently do you go to bed before midnight?</span>
	   {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','earlynight'))}
         </li>
	 <li className="radio">
	   <span className="label">How frequently do you wake up before 8?</span>
	   {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','earlymorn'))}
	 </li>
	 <li className="radio">
	   <span className="label">How frequently do you take naps?</span>
	   {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','nap'))}
	 </li>
	 <li className="radio">
	   <span className="label">How frequently do you use your computer or phone before bed?</span>
	   {["At least once a day","Most days","A few times a week","About once a week","Less than once a week"].map(this.renderOptions.bind(this, 'checkbox','nap'))}
	 </li>
        </ul>
      </div>
    )
  },

  nextStep: function() {
    // Get values via querySelector
    var age    = document.querySelector('input[name="age"]:checked')
    var colors = document.querySelectorAll('input[name="colors"]')

    var data = {
      age    : getRadioOrCheckboxValue(age),
      colors : getRadioOrCheckboxValue(colors)
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = SurveyFields