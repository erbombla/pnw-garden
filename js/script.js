var answer;

var Season = function(as, bs, cs){
  this.aCount = as
  this.bCount = bs
  this.cCount = cs
}

var theCounts = new Season([], [], [])

function sortIt(i){
  debugger;
  if (i === "a") {
    theCounts.aCount.push(i)
  } else if (i === "b") {
    theCounts.bCount.push(i)
  } else if (i === "c") {
    theCounts.cCount.push(i)
  }
}

Season.prototype.makeAChoice = function(){
  debugger;
  if (this.aCount.length === 2) {
    answer = "Spring";
    return answer;
  } else if (this.bCount.length === 2) {
    answer = "Summer";
    return answer;
  } else if (this.cCount.length === 2) {
    answer = "Fall";
    return answer;
  } else {
    answer = "Everything"
  }
}

// User End Logic! ------------->
$(document).ready(function() {
  debugger;


  $("#survey").submit(function(event) {
    debugger;
    event.preventDefault();
    var temperature = $("input:radio[name=temp]:checked").val();
    sortIt(temperature);
    var eating = $("input:radio[name=eat]:checked").val();
    sortIt(eating);
    var time = $("input:radio[name=time]:checked").val();
    sortIt(time);

    theCounts.makeAChoice();

    if (answer === "Spring") {
      $("#answerHere").text("You will enjoy gardening in the Spring the most!")
    } else if (answer === "Summer") {
      $("#answerHere").text("You will enjoy gardening in the Summer the most!")
    } else if (answer === "Fall") {
      $("#answerHere").text("You will enjoy gardening in the Fall the most!")
    } else if (answer === "Everything") {
      $("#answerHere").text("You will enjoy gardening any time of the year!")
    }

    theCounts.aCount = [];
    theCounts.bCount = [];
    theCounts.cCount = [];


  });

  //FRONT-END for veg-season-page
    $("#spring-click").click(function() {
      $("#summer").hide();
      $("#autumn").hide();
      $("#winter").hide();
      $("#spring").show();
    });
    $("#summer-click").click(function() {
      $("#spring").hide();
      $("#autumn").hide();
      $("#winter").hide();
      $("#summer").show();
    });
    $("#autumn-click").click(function() {
      $("#summer").hide();
      $("#spring").hide();
      $("#winter").hide();
      $("#autumn").show();
    });
    $("#winter-click").click(function() {
      $("#summer").hide();
      $("#autumn").hide();
      $("#spring").hide();
      $("#winter").show();
    });
});
