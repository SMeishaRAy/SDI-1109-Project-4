//Sharon "Meisha" Ray
//SDI 1109 Project 4
//Code Library!

/*
STRING
1. Does a string follow a 123-456-7890 pattern like a phone number?
*/
		
/*
NUMBER
2. Format a number to use a specific number for decimal places as for money: 2.1 --> 2.10. 
*/
	


/*
ARRAY
3. Find the smallest value in an array that is greater than a given number.
*/
	
	console.log(Math.min(785, 8945, 91, 8, 564));

/*STRING
4. Does a string follow an aaa@bbb.ccc pattern like an email address?
*/

/*NUMBER
5. Fuzzy-match a number: is the number above or below a number within a certain percent?
*/

/*ARRAY
6. Find the total value of just the numbers in an array, even if some of the items are not numbers.
*/

/*STRING
7. Is the string a URL? (Does it start with http: or https:?)
*/
	

/*NUMBER
8. Find the number of hours or days difference between two dates.
*/
	//How many days from the day you were born?
		var date1 = new Date(2011, 8, 19); //new Date
        var date2 = new Date(1979, 2, 10);
        var msDif = date1.getTime() - date2.getTime(); // difference in milliseconds
        var msDay = 1000 * 60 * 60 * 24 // milliseconds in one day
        var differentDays = Math.ceil(msDif / msDay);  // difference in days
        	console.log("The difference between September 19, 2011 and the day I was born is " + differentDays + " days.");	
		 		 	
/*ARRAY
9. Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects:
	"a" + [{a:2}, {a:3}, {a:1}]
	--> [{a:1}, {a:2}, {a:3}].
(array.reverse) & (array.sort)

			 or a:3, a:2, a:1*/
			var aNum = ["a:2", "a:3", "a:1"]
			console.log(aNum.sort());/*Prints out a:1, a:3, a:2 in order of a:1, a:2, a:3*/			console.log(aNum.reverse());/*Prints out in reverse*/	
			
/*STRING
10. Title-case a string (split into words, then uppercase the first letter of each word).
*/
//Style-String//

	var word = "javascript rules!";
		console.log(word.toLowerCase());
	console.log(word.toUpperCase());

/*NUMBER
11. Given a string version of a number such as "42", return the values as an actual Number, such as 42.
*/

/*STRING
12. Given a string that is a list of things separated by a given string, as well as another string separator changed to the second: "a,b,c" + "," + "/" --> "a/b/c".
*/

	var string = "a,b,c";
	console.log(string.replace("/"));






