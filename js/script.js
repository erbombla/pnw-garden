debugger;
var When = function(season) {
  this.season = season
}

var filledOut = new When([])

When.prototype.gardenTime = function() {
  if (this.season.includes("55-65 degrees")) {
    this.season = "Winter";
  } else if (this.season.includes("55-65 degrees")) {
    this.season = "Spring";
  } else if (this.season.includes("55-65 degrees")) {
    this.season = "Fall";
  } else if (this.season.includes("55-65 degrees")) {
    this.season = "Summer";
  }
}



$(document).ready(function() {
  event.preventDefault();

  var temperature = $("#temperature").val();
  var space = $("#space").val();
  var eating = $("#eating").val();
  var time = $("#time").val();


});
