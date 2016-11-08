debugger;
var Gwhendalyn = function(season) {
  this.season = season
}

var filledOut = new Gwhendalyn([])

Gwhendalyn.prototype.gardenTime = function() {
  debugger;
  if (this.season.includes("55-65 degrees")) {
    this.season = "Winter";
  } else if (this.season.includes("")) {
    this.season = "Spring";
  } else if (this.season.includes("frar")) {
    this.season = "Fall";
  } else if (this.season.includes("ryry")) {
    this.season = "Summer";
  } else {
    alert("Fill Out the survey!");
  }
}


$(document).ready(function() {
  debugger;
  var temperature = $("#temperature").val();
  var space = $("#space").val();
  var eating = $("#eating").val();
  var time = $("#time").val();

  $("#survey").submit(function(event) {
    event.preventDefault();
  });
});
