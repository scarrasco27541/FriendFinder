// generated by /generate

var friends = [];
for (var f=0;f<10;f++) {
  var scores = [];
  for (var s=0;s<2;s++) {
	  scores.push(  Math.floor(Math.random() * 5) + 1   );
  }
  friends.push( { name:"Friend " + f
		, icon: "http://icons.iconarchive.com/icons/icons8/windows-8/128/Numbers-"+f+"-icon.png"
		, scores:scores } );
}

/*
const friendsArray = [{"name":"Fred","scores":[4,3,2,3,1,3,3,4,2,3]},{"name":"Bob","scores":[1,4,1,1,3,3,2,2,1,2]},{"name":"Ginny","scores":[1,4,5,1,5,2,4,3,3,5]},{"name":"George","scores":[5,4,5,4,4,3,5,5,3,2]},{"name":"Harry","scores":[4,2,2,1,1,1,2,2,3,5]},{"name":"Hermione","scores":[5,3,2,3,5,2,3,1,2,5]},{"name":"Beth","scores":[5,5,2,5,5,5,3,2,2,5]},{"name":"Jane","scores":[3,3,4,3,1,5,5,2,4,3]},{"name":"Susan","scores":[1,4,5,3,5,5,2,5,5,4]},{"name":"James","scores":[4,4,5,5,4,4,4,2,4,4]}];
*/

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;