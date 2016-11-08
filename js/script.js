
//FRONT-END LOGIC
$(document).ready(function(){
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
