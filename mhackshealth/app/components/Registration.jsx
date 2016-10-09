var React         = require('react')
var AccountFields = require('./AccountFields')
var Confirmation  = require('./Confirmation')
var Success       = require('./Success')
var SurveyFields  = require('./SurveyFields')
var assign        = require('object-assign')
import { Navigation } from 'react-router'

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

var avoidancesurveychoices = ["At least once a day","Most days","A few times a week","About once a week","Less than once a week"]
var dailyfrequencysurveychoices = ["Every day","Most days","A few times a week", "About once a week", "Less than once a week"]

var dietsurvey = new ReactSurveyModel({
    title: "Healthy Diet Habits", showProgressBar: "bottom", goNextPageAutomatic: true, showNavigationButtons:
    pages: [
	{questions: [
	    { type: "radiogroup", name: "soda",title: "How often do you drink soda?",choices: avoidancesurveychoices },
	]}
	{questions: [
	    { type: "radiogroup", name: "ice cream",title: "How often do you eat iced cream?",choices: avoidancesurveychoices },
	]}
	{questions: [
	    { type: "radiogroup", name: "red meat",title: "How often do you eat red meat?",choices: avoidancesurveychoices },
	]}
	{questions: [
	    { type: "radiogroup", name: "meals", title: "How often do you eat three meals", choices: dailyfrequencysurveychoices}
	]}
	{questions: [
	    { type: "radiogroup", name: "fruit", title: "How often do you eat three pieces of fruit", choices: dailyfrequencysurveychoices}
	]}
	{questions: [
	    { type: "radiogroup", name: "vegetables", title: "How frequently do you eat vegetables", choices: ["With all of my meals", "With most of my meals", "With about half of my meals", "With less than half of my meals", "With almost none of my meals"]}
	]}
	{questions: [
	    { type: "radiogroup", name: "water", title: "How often do you drink at least 6 cups of water in a day?" choices: avoidancesurveychoices}
	]}
    ],
});

//ReactDOM.render(<ReactSurvey model={survey} />, document.getElementById("surveyElement"));


var exercisesurvey = new ReactSurveyModel({
    title:"Healthy Exercise Habits", showProgressBar: "bottom", goNextPageAutomatically: true, showNavigationButtons:
    pages: [
	{ questions: [
	    { type:"radiogroup", name:"jog", title:"How frequently do you jog at least 20 minutes in a day?", choices: dailyfrequencychoices}
	]}
	{ questions: [
	    {type :"radiogroup", name:"pushup", title:"How frequently do you do twenty pushups more than 3 times a day?", choices: dailyfrequencychoices}
	]}
	{ questions: [
	    {type :"radiogroup", name:"situp", title:"How frequently do you do thirty situps more than 3 times a day?", choices: dailyfrequencychoices}
	]}
	{ questions: [
	    {type :"radiogroup", name:"squat", title:"How frequently do you do twenty five squats more than 3 times a day?", choices: dailyfrequencychoices}
	]}
	{ questions: [
	    {type: "radiogroup", name:"elevator", title:"How often do you use elevators?", choices:avoidancesurveychoices}
	]}
	{questions: [
	    {type: "radiogroup", name:"bike", title:"How many days do you bike your longer commutes?", choices:dailyfrequencychoices}
	]}
	{questions: [
	    {type: "radiogroup", name:"walk", title:"How often do you walk your shorter commutes and errands?", choices:dailyfrequencychoices}
	]}
	{questions: [
	    {type: "radiogroup", name:"swim", title:"How frequently do you swim for at least twenty minutes?", choices:dailyfrequencychoices}
	]}
    ],
});

var sleepsurvey = new ReactSurveyModel({
    title:"Healthy Sleep Survey", showProgressBar: "bottom", goNextPageAutomatically:true, showNavigationButtons:
    pages: [
	{ questions: [
	   {type: "radiogroup", name:"caffeine", title:"How frequently do you drink caffeine after 4pm?", choices:dailyfrequencysurveychoices}
	]}
	{questions: [
	    {type: "radiogroup", name:"earlynight", title:"How frequently do you go to bed before midnight?", choices:dailyfrequencysurveychoices}
	]}
	{questions: [
	    {type: "radiogroup", name:"earlymorn", title:"How frequently do you wake up before 8?", choices:dailyfrequencysurveychoices}
	]}
	{questions: [
	    {type: "radiogroup", name:"nap", title:"How frequently do you take naps?", choices:avoidancesurveychoices}
	]}
	{questions: [
	    {type: "radiogroup", name:"screens", title:"How frequently do you use your computer or phone before bed?", choices:dailyfrequencysurveychoices}
	]}
    ],

    //now add data from survey to database using addStepEase
    
});



var Registration = React.createClass({
  getInitialState: function() {
    return {
      step : 1
    }
  },

  saveValues: function(field_value) {
    return function() {
      fieldValues = assign({}, fieldValues, field_value)
    }.bind(this)()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  submitRegistration: function() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
  },

  goToDashboard: function() {
    
    this
      .transitionTo('/survey')
  },

  showStep: function() {

    ReactDom.render(<ReactSurvey model={survey} />, document.getElementById("surveyelement"));
    switch (this.state.step) {
      case 1:
        return <AccountFields fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 2:
        return <SurveyFields fieldValues={fieldValues}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 3:
        return <Confirmation fieldValues={fieldValues}
                             previousStep={this.previousStep}
                             submitRegistration={this.submitRegistration} />
      case 4:
        return <Success fieldValues={fieldValues} />
    }
  },

  render: function() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }
})

module.exports = Registration