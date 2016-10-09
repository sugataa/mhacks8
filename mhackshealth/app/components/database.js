import React as 'React'
import Parse

function getUser(userid) {
    var Users = Parse.Object.extend("Users");
    var query = new Parse.Query(Users);
    query.equalTo("User_ID",userid);
    query.find({
	success: function(results) {
	    alert("successfully retrieved a result");
	    var ret = results;
	}
    });
    return ret;
}

function getSteps(userid) {
    var Steps = Parse.object.extend("Steps");
    var query = new Parse.Query(Steps);
    query.equalTo("User_ID",userid);
    var ret = []
    query.find({
	success: function(results) {
	    alert("Successfully retrieved "+ results.length + " results");
	    for(var i = 0; i < results.length; i++) {
		ret.push(results[i]);
	    }
	}
    });
    return ret;
}

//adds a user and returns their User_ID
function addUser(username) {
    var Users = Parse.Object.extend("Users");
    var query = new Parse.Query(Users);
    query.find({
	success: function(results) {
	    maxid = 0;
	    var userid = results.length;
	}
    });
    var user = new Users();
    user.set("User_ID":userid);
    user.set("username":username);

    user.save(null, {
	success: function(user) {
	    alert('New object created with ID ' + user.id);
	}
	error: function(user) {
	    alert('Failed to save User with ID ' + user.id);
	}
    });
    return userid;
}

function updateStep(userid,stepname,ease) {
    var Steps = Parse.Object.extend("Steps");
    var query = new Parse.Query(Steps);
    query.equalTo("stepname",stepname);
    query.equalTo("User_ID",userid);
    query.find({
	success: function(results) {
	    results.set("Ease", (results.Ease+ease)/2);
	    results.set("Effectiveness", (results.Effectivness+Results.Ease)/2);
	    results.save(null, {
		success: function(results) {
		    alert("Successfully updated Step with ID " + results.ID);
		},
		error: function(results) {
		    alert("Could not update Step with ID " + results.ID);
		}
	    });
	}
    });
}

