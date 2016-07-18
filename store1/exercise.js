var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?
function woop () {
  console.log(store1['2015-01-08'][0][1])
}
woop();
// How would you access how many 'Mint Wafers' were sold on January 7th?

var storeIt = 0;
function find(){
	var thing = store1['2015-01-07'];
	//if(thing[0][0])
	for (key in thing){
		if(thing[key][0] === 'Mint Wafers') {
	storeIt=key;
	break;

		}
	}
	if(storeIt !== 0){
		console.log("We sold ", thing[storeIt][2], " Mint Wafers on Jan 8")
	} else {
		console.log("We sold no Mint Wafers Jan 8")
	}
}
find()

// Produce an array of the date keys in store1's data.

	console.log(Object.keys(store1))

  ---------------OR--------------

  arr= [];
  for( key in store1){
  	arr.push(key)
  }
  console.log(arr)
// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.

var arr = [];
for (var key of store1['2015-01-08']) {
	arr.push(key[0])
}
console.log(arr)

-------------OR---------------------------
candyNames = [];
for( var i=0;i<store1['2015-01-08'].length;i++){
	candyNames.push(store1['2015-01-08'][i][0])
}
console.log(candyNames)


// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?

var count= 0;
for (var key of store1['2015-01-10']) {
	count += key[2]
}
console.log(count)

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.

console.log(Object.keys(store1))


// Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.

var dates=[];
var data =[];
for(key in store1){
	dates.push(key)
}

console.log(data)
for(var i=0;i<dates.length;i++){
	console.log("Data for ", dates[i], ": ", store1[key])
}

// Use a loop to calculate the total number of candies sold at store1.

candySold = 0;
for(var key in store1){
	for(var i =0;i<store1[key].length;i++) {
		candySold+=store1[key][i][2]
	}
}
console.log(candySold)

// In the previous exercise, where did you have to initialize the counter variable? Why?

"Outside of the loops so that the counter variable would not get reset in each loop iteration."

// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.

candyArr = [];
for(var key in store1){
	for(var i =0;i<store1[key].length;i++) {
		candyArr.push(store1[key][i][2])
	}
}
console.log(candyArr)
