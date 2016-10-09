import React as 'React'
import Parse

function sortSteps(listofsteps) {
    var ranksteps = []
    for(var i = 0; i < listofsteps.length; i++) {
	if(listofsteps[i].isActive) {
	    ranksteps.add({"Step_Name":listofsteps[i].Step_Name,
			   "Step_Rank":(listofsteps[i].Ease*listofsteps[i].Ease)+(listofsteps[i].Effectiveness*listofsteps[i].Effectiveness)});
	}
    }
    var kmin = 0;
    var jmin = 10000;
    for(var k = 0; k<ranksteps.length-1; k++) {
	kmin = k;
	for(var j = 0; j< ranksteps.length; j++) {
	    if(ranksteps[j].Step_Rank < ranksteps[kmin].Step_Rank) {
		jmin = j;
	    }
	}

	if(jMin != k) {
	    var temp = ranksteps[k];
	    ranksteps[k] = ranksteps[jmin];
	    ranksteps[jmin] = temp;
	}
    }
    return ranksteps;
}

function getDescription(step_name){
    var Steps = Parse.Object.extend("Steps");
    var query = new Parse.Query(Users);
    query.equalto("Step_Name",step_name);
    query.find({
	success: function(results) {
	    alert("Found correct step");
	    var desc = results.Description;
	}
    });
    return desc;
}

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

    //now add habits for the user
    var Habits = Parse.Object.extends("Habits");
    var sleep = new Habits();
    var diet = new Habits();
    var fitness = new Habits();

    //set these habits
    sleep.set("Habit_Name","Sleep");
    diet.set("Habit_Name","Diet");
    fitness.set("Habit_Name","Fitness");
    sleep.set("User_ID",userid);
    diet.set("User_ID",userid);
    fitness.set("User_ID",userid);
    sleep.set("isActive",true);
    diet.set("isActive",true);
    fitness.set("isActive",true);

    //save these
    sleep.save(null, {
	success: function(results) {
	    alert("Saved sleep object for user with" + userid);
	}
	error: function(results) {
	    alert("Could not save sleep object for user with " + userid);
	}
    });
    diet.save(null, {
	success: function(results) {
	    alert("Saved diet habit for user with " + userid);
	}
	error: function(results) {
	    alert("Could not save diet habit for user with " + userid);
	}
    });
    fitness.save(null, {
	success: function(results) {
	    alert("Saved fitness object for user with id" + userid);
	}
	error: function(results) {
	    alert("Failed to save fitness object for user with id " + userid);
	}
    });
    
    generateSteps(userid);
    return userid;
}

//populates steps into steps table for user with userid
function generateSteps(userid) {

//create objects for each step
    var Steps = Parse.Object.extend("Steps");
    var soda = new Steps();
    var iceCream = new Steps();
    var redMeat = new Steps();
    var meals = new Steps();
    var fruit = new Steps();
    var vegetables = new Steps();
    var water = new Steps();
    var jog = new Steps();
    var pushup = new Steps();
    var situp = new Steps();
    var squat = new Steps();
    var elevator = new Steps();
    var bike = new Steps();
    var walk = new Steps();
    var swim = new Steps();
    var caffeine = new Steps();
    var earlynight = new Steps();
    var earlymorn = new Steps();
    var nap = new Steps();
    
    //populate these objects
    soda.set("Step_Name","soda");
    iceCream.set("Step_Name","ice cream");
    redMeat.set("Step_Name","red meat");
    meals.set("Step_Name","meals");
    fruit.set("Step_Name","fruit");
    vegetables.set("Step_Name","vegetables");
    water.set("Step_Name","water");
    jog.set("Step_Name","jog");
    pushup.set("Step_Name","pushup");
    situp.set("Step_Name","situp");
    squat.set("Step_Name","squat");
    elevator.set("Step_Name","elevator");
    bike.set("Step_Name","bike");
    walk.set("Step_Name","walk");
    swim.set("Step_Name","swim");
    caffeine.set("Step_Name","caffeine");
    earlynight.set("Step_Name","earlynight");
    earlymorn.set("Step_Name","earlymorn");
    nap.set("Step_Name","nap");

    soda.set("User_ID",userid);
    iceCream.set("User_ID",userid);
    redMeat.set("User_ID",userid);
    meals.set("User_ID",userid);
    fruit.set("User_ID",userid);
    vegetables.set("User_ID",userid);
    water.set("User_ID",userid);
    jog.set("User_ID",userid);
    pushup.set("User_ID",userid);
    situp.set("User_ID",userid);
    squat.set("User_ID",userid);
    elevator.set("User_ID",userid);
    bike.set("User_ID",userid);
    walk.set("User_ID",userid);
    swim.set("User_ID",userid);
    caffeine.set("User_ID",userid);
    earlynight.set("User_ID",userid);
    earlymorn.set("User_ID",userid);
    nap.set("User_ID",userid);

    soda.set("isActive",true);
    iceCream.set("isActive",true);
    redMeat.set("isActive",true);
    meals.set("isActive", true);
    fruit.set("isActive",true);
    vegetables.set("isActive",true);
    water.set("isActive",true);
    jog.set("isActive",true);
    pushup.set("isActive",true);
    situp.set("isActive",true);
    squat.set("isActive",true);
    elevator.set("isActive",true);
    bike.set("isActive",true);
    walk.set("isActive",true);
    swim.set("isActive",true);
    caffeine.set("isActive",true);
    earlynight.set("isActive",true);
    earlymorn.set("isActive",true);
    nap.set("isActive",true);

    soda.set("Ease",3);
    iceCream.set("Ease",3);
    redMeat.set("Ease",3);
    meals.set("Ease",3);
    fruit.set("Ease",3);
    vegetables.set("Ease",3);
    water.set("Ease",3);
    jog.set("Ease",3);
    pushup.set("Ease",3);
    situp.set("Ease",3);
    squat.set("Ease",3);
    elevator.set("Ease",3);
    bike.set("Ease",3);
    walk.set("Ease",3);
    swim.set("Ease",3);
    caffeine.set("Ease",3);
    earlynight.set("Ease",3);
    earlymorn.set("Ease",3);
    nap.set("Ease",3);

    soda.set("Effectiveness",3);
    iceCream.set("Effectiveness",3);
    redMeat.set("Effectiveness",3);
    meals.set("Effectiveness",3);
    fruit.set("Effectiveness",3);
    vegetables.set("Effectiveness",3);
    water.set("Effectiveness",3);
    jog.set("Effectiveness",3);
    pushup.set("Effectiveness",3);
    situp.set("Effectiveness",3);
    squat.set("Effectiveness",3);
    elevator.set("Effectiveness",3);
    bike.set("Effectiveness",3);
    walk.set("Effectiveness",3);
    swim.set("Effectiveness",3);
    caffeine.set("Effectiveness",3);
    earlynight.set("Effectiveness",3);
    earlymorn.set("Effectiveness",3);
    nap.set("Effectiveness",3);

    soda.set("Habit_Name","Diet");
    iceCream.set("Habit_Name","Diet");
    redMeat.set("Habit_Name","Diet");
    meals.set("Habit_Name","Diet");
    fruit.set("Habit_Name","Diet");
    vegetables.set("Habit_Name","Diet");
    water.set("Habit_Name","Diet");
    jog.set("Habit_Name","Fitness");
    pushup.set("Habit_Name","Fitness");
    situp.set("Habit_Name","Fitness");
    squat.set("Habit_Name","Fitness");
    elevator.set("Habit_Name","Fitness");
    bike.set("Habit_Name","Fitness");
    walk.set("Habit_Name","Fitness");
    swim.set("Habit_Name","Fitness");
    caffeine.set("Habit_Name","Sleep");
    earlynight.set("Habit_Name","Sleep");
    earlymorn.set("Habit_Name","Sleep");
    nap.set("Habit_Name","Sleep");

    soda.set("Description","Do not drink any soda");
    iceCream.set("Description","Do not eat any ice cream");
    redMeat.set("Description", "Do not eat any red meat");
    meals.set("Description","Eat three meals a day");
    fruit.set("Description","Eat three pieces of fruit a day");
    vegetables.set("Description","Eat vegetables with each meal today");
    water.set("Description","Drink at least 6 cups of water today");
    jog.set("Description","Jog at least twenty minutes today");
    pushup.set("Description","Do 10 pushups whenever you use the restroom today");
    situp.set("Description","Do at least three sets of 25 situps today");
    squat.set("Description","Do at least three set of 30 squats today")l;
    elevator.set("Description","Do not use the elevator today");
    bike.set("Description", "Ride your bike for any commutes longer than 2 miles today");
    walk.set("Description","Walk any commute less than two miles today");
    swim.set("Description","Swim at least twenty minutes today");
    caffeine.set("Description","Do not drink caffeine after 4pm today");
    earlynight.set("Description","Go to bed before midnight tonight");
    earlymorn.set("Description","Wake up before 8 tomorrow");
    nap.set("Description","Do not nap at all today");

    soda.save(null, {
	success: function(soda) {
	    alert("Saved");
	},
	error: function(soda) {
	    alert("Error saving");
	}
    });
    iceCream.save(null, {
	success: function(iceCream) { },
	error: function(iceCream) {
	    alert("Error saving");
	}
    });
    redMeat.save(null, {
	success: function(redMeat) {
	    alert("Saved");
	},
	error: function(redMeat) {
	    alert("Error saving");
	}
    });
    meals..save(null, {
	success: function(meals) {
	    alert("Saved");
	},
	error: function(meals) {
	    alert("Error saving");
	}
    });
    fruit.save(null, {
	success: function(fruits) {
	    alert("Saved");
	},
	error: function(fruits) {
	    alert("Error saving");
	}
    });
    vegetables.save(null, {
	success: function(vegetables) {
	    alert("Saved");
	},
	error: function(vegetables) {
	    alert("Error saving");
	}
    });
    water.save(null, {
	success: function(water) {
	    alert("Saved");
	},
	error: function(water) {
	    alert("Error saving");
	}
    });
    jog.save(null, {
	success: function(jog) {
	    alert("Saved");
	},
	error: function(jog) {
	    alert("Error saving");
	}
    });
    pushup.save(null, {
	success: function(pushup) {
	    alert("Saved");
	},
	error: function(pushup) {
	    alert("Error saving");
	}
    });
    situp.save(null, {
	success: function(situp) {
	    alert("Saved");
	},
	error: function(situp) {
	    alert("Error saving");
	}
    });
    squat.save(null, {
	success: function(squat) {
	    alert("Saved");
	},
	error: function(squat) {
	    alert("Error saving");
	}
    });
    elevator.save(null, {
	success: function(elevator) {
	    alert("Saved");
	},
	error: function(elevator) {
	    alert("Error saving");
	}
    });
    bike.save(null, {
	success: function(bike) {
	    alert("Saved");
	},
	error: function(bike) {
	    alert("Error saving");
	}
    });
    walk.save(null, {
	success: function(walk) {
	    alert("Saved");
	},
	error: function(walk) {
	    alert("Error saving");
	}
    });
    swim.save(null, {
	success: function(swim) {
	    alert("Saved");
	},
	error: function(swim) {
	    alert("Error saving");
	}
    });
    caffeine.save(null, {
	success: function(caffeine) {
	    alert("Saved");
	},
	error: function(caffeine) {
	    alert("Error saving");
	}
    });
    earlynight.save(null, {
	success: function(earlynight) {
	    alert("Saved");
	},
	error: function(earlynight) {
	    alert("Error saving");
	}
    });
    earlymorn.save(null, {
	success: function(earlymorn) {
	    alert("Saved");
	},
	error: function(earlymorn) {
	    alert("Error saving");
	}
    });
    nap.save(null, {
	success: function(nap) {
	    alert("Saved");
	},
	error: function(nap) {
	    alert("Error saving");
	}
    });
}

function setHabitinactive(userid,habitname) {
    var Habits = Parse.Object.extend("Habits");
    var query = new Parse.Query(Habits);
    query.equalto("Habit_Name",habitname);
    query.equalto("User_ID",userid);
    query.find({
	success: function(results) {
	    results.set("isActive",false);
	    results.save(null, {
		success: function(results) {
		    alert("successfully set step inactive");
		}
	    });
	}
    });
}

function setStepinactive(userid,stepname) {
    var Steps = Parse.Object.extend("Steps");
    var query = new Parse.Query(Habits);
    query.equalto("Step_Name",stepname);
    query.equalto("User_ID",userid);
        query.find({
	success: function(results) {
	    results.set("isActive",false);
	    results.save(null, {
		success: function(results) {
		    alert("successfully set habit inactive");
		}
	    });
	}
    });
}

//update a step with user feedback
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

