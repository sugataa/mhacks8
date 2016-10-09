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

ReactDom.render(<ReactSurvey model={survey} />, document.getElementById("surveyelement"));

function addStepEase(surveyout, stepname, userid) {
    //var Steps = Parse.Object.extends(key);
    //var step = new Steps();
    //var query = new
    //query.equalTo("User_ID",userid);
    //var i = 0;
    //for (var key in dailyfrequencysurveychoices) {
    //    if(surveyout === key) {
    //        var ret = 5 - i;
    //    }
    //    i = i + 1;
    //}
    //i = 0;
    //for (var key in avoidancesurveychoices) {
    //    if(surveyout === key) {
    //        var ret = i;
    //    }
    //    i = i + 1;
    //}
    //query.equalTo("Step_Name",stepname);
    //query.find({
    //    success: function(results) {
    //        alert("adding new data to step")
    //        results.set("Ease",ret);
    //        results.save(null, {
    //            success: function(results) {
    //                alert("Saved successfully");
    //            },
    //            error: function(results) {
    //                alert("Unable to save successfully");
    //            }
    //         });
    //    }
    //});
    //
    return 0;
}
