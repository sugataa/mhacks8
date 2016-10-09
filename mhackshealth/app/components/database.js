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
    })
    
