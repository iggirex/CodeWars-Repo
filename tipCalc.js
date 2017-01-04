Write a function, calculateTip(amount, rating) which calculates how much you need to tip based on the total amount of the bill and the service.
You need to consider the following ratings:
Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive. If an unrecognised rating is input, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  console.log(amount, rating);
  switch(rating.toLowerCase()){
  case "excellent" : return Math.ceil(amount * .20);
  case "great" : return Math.ceil(amount * .15);
  case "good" : return Math.ceil(amount * .10);
  case "poor" : return Math.ceil(amount * .05);
  case "terrible" : return 0;
  default : return "Rating not recognised";
  }
}
