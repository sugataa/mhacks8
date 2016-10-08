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
ReactDOM.render(<ReactSurvey model={survey} />, document.getElementById("surveyElement"));


var exercisesurvey
