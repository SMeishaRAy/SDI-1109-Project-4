//Author :Sharon "Meisha" Ray
//SDI 1109 Project 4
//September 22, 2011
//My Code Library!

/*STRING
1. Does a string follow a 123-456-7890 pattern like a phone number?
*/
		function checkNum(phone){
		var number = /^(\d{3})[-](\d{3})[-](\d{4})$/; // regEx verifies the format matches.
			if(!phone.match(number)){
				console.log("Your phone number is not valid."); //if it doesn't match, it will print false.
				return false;
				}else { 
					if (phone.match(number)) {
					console.log("Your phone number is valid.");//if it does match, it prints true.
				return true;
				}
				}
				};
				checkNum("123-456-7890");
			
/*STRING
2. Is the string a URL? (Does it start with http: or https:?)
*/
		function checkUrl(url){
		var sites = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 
		// regEx verifies the if the string is a http: or https:
			if(url.match(sites)){
				goodUrl = "Your url is valid."; //if it does have http: or https: in the url, it will print true.
				return goodUrl;
				}else { 
					badUrl = "Your url is not valid.";//if it doesn't have http: or https: in the url, it prints false.
				return badUrl;
				}
			};
				var validUrl = checkUrl("https://www.facebook.com");	
					console.log(validUrl);	
	
 
/*NUMBER
3. Format a number to use a specific number of decimal places as for money: 2.1--->2.10.
*/
			function amount(total){
				var myCost = total.toFixed(2);
				return myCost;
				};
			console.log("$" + amount(2.1));
				 		 	
/*ARRAY
4. Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects:
	"a" + [{a:2}, {a:3}, {a:1}]
	--> [{a:1}, {a:2}, {a:3}].
	(array.sort)*/
			 
			var aNum = [
				 {a:2},
				 {a:3}, 
				 {a:1},
			]
			aNum.sort(function(a,b){
			return a.a-b.a;
			})
			console.log(aNum);
						
/*STRING
5. Title-case a string (split into words, then uppercase the first letter of each word).
*/

	var words = "title case full sail rules!";
	words = words.toLowerCase().replace(/\b[a-z]/g, //regular expression 
	function(letter) {
    return letter.toUpperCase();
	});
	console.log(words); //Displays "Title Case Full Sail Rules!"
	
/*NUMBER
6. Given a string version of a number such as "42", return the values as an actual Number, such as 42.
*/
	var myNum = "42",
		number = function(){
			aNum = parseInt(myNum);
		return myNum;
		}
	console.log("My number is " + number());
	
/*STRING	
7. Does a string follow an aaa@bbb.ccc pattern like an email address?
*/
	function validateEmail(address){
		var email = 
			if(address.indexOf("@")){
				addressGood = "Valid Email."; //if email is valid, prints out valid email
				return addressGood;
				}else{
					addressBad = "Invalid Email."; //if email is invalid, prints out invalid email
					return addressBad;
					}
				};
					var validEmail = validateEmail("");
						console.log(vailidEmail); 
	
	
	


