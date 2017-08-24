var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log("each item of ingredients by useing while");
var i = 0;
while ( i < ingredients.length) {
	console.log(ingredients[i]);
	i++;
}

console.log("each item of ingredients by using for");
for (var o=0; o<ingredients.length; o++) {
	console.log(ingredients[o]);
}
console.log("each item of ingredients backwards");
for (var p=ingredients.length-1; p>=0; p--) {
	console.log(ingredients[p]);
}

