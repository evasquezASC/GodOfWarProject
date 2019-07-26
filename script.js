$("button").click(function(){
 var questionOne=$(".Ato1").val();
 var questionTwo=$(".Ato2").val();
if (questionOne ==="hothead" && questionTwo<=25){
  $("body").append("<img src =https://cdn.ndtv.com/tech/gadgets/kratos_god_of_war.jpg?output-quality=80>");
  $("body").append("<p>You are Kratos. The God of War himself, you can control your own fate and you don't listen to what anyone says: however, from time to time you like to be compassionate to those who share a special connection towards you.</p>");

} else if (questionOne==="kind" && questionTwo<=15) {
$("body").append("<img src =https://vignette.wikia.nocookie.net/poohadventures/images/b/b5/GodOfWarAtreus.png/revision/latest?cb=20180618191627>");
  $("body").append("<p> If you got this that means you are really kind and compassionate to those around you! You strive to help and always be there for others.</p>");
  
} else if (questionOne==="smart" && questionTwo>=40) {
$("body").append("<img src =https://pbs.twimg.com/media/DfHGwNfX0AArYDV.jpg>");
  $("body").append("<p> If you got this that means you are smart and you like proving your friends wrong!</p>");
}
});