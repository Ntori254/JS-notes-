/*
LOGICAL OPERATORS 
> greater than
< less than
>= greater than or equal to
<= less than or equal to
=== equal to
!== not equal to
&& and
|| or
= assign value to variable


Example code:

 const myHeading = document.querySelector('h1');
 myHeading.textContent = 'Hello world!';

 On click button:
 document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
 }


ADDITIONAL EXPLANATIONS:
 null -means absense of value

 document.getElementById(); -get one element by its specific id within the html document. Eg.
                             document.getElementById("page-title");(id = "page-title") in HTML.

 document.getElementByClassName(); -get all content with class name that can be specifies in the ().
                                    eg. document.getElementByClassName("content"); gets all elements with
                                    the class name "content".(class = "content") in HTML.


 document.getElementsByTagName - selects tag names of elememt eg. element a <a></a>
                                    senario used: var links = document.getElementsByTagName("a");
                                 
 document.querySelector(); -Selects elements from html document eg button
                            h1, img, ul, p
                            
 .getAttribute(); -selects attributes inside the img element(tag)
             eg. src, class

 .setAttribute(); - add attributes eg. .setAttribute("class", "pie");
                    In html(<a href ="#" class = "pie"), the class "pie" is added to the attribute.
  
  .className; - edit existing class name. eg. x.className; x.className = "bear";


 
 localStorage.setItem(); -localStorage allows us to store data and retrieve later
                          localStorage's setItem() fucntion to create and store data

 textContent -allows us to change the content selected in the document.querySelector(); 
 
 
 className -assign elements class names 
 to create a function:
 function functionName() {
     function stuffs
 }




IF STATEMENTS

 if(arguments) {
     excecutions
 } else {
     alternatives to the excecutions
 }

 Example:

 let iceCream = 'chocolate';
 if(iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
  } else {
    alert('Awwww, but chocolate is my favorite...');
  }

  Example of conditionals with && (and) || (or) 
  logical operators:
  
  var myAge = 24;

    if (myAge < 18 || myAge > 30 || myAge === 25) {
	    document.write("You aint coming!");
    } else {
	    document.write("You can come, you cool dude");
    }

WHILE LOOPS
var age = 5;

while (age < 10) {
	console.log("Your age is less than 10");
	age++; //adds one to age until the age is 10
}

document.write("You are now over 10");//when age is 10.
this statement is excecuted




FOR LOOPS
1. method 
for (age = 0; age < 10; age++) {
	console.log("Your age is less than 10");
}

document.write("You are now over 10");


2. method, using break:
var links = document.getElementsByTagName("a");

for (i = 0; i < 10; i++) {
	console.log(i);
	if (i === 7) {
		break;
	}
}

console.log("I have broken out of the loop");

 
3. method, using continue
var links = document.getElementsByTagName("a");

for (i = 0; i < 10; i++) {
	if (i === 5 || i === 3) {
		continue;
	}
	console.log(i);
	if (i === 7) {
		break;
	}
}

console.log("I have broken out of the loop");
 

3. Method, giving class name to links via JS loops:

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
	links[i].className = "link" + i;
}



FUNCTIONS

1. method:
function getAverage(a, b) {
	var average = (a + b) / 2;
	console.log(average);
}

getAverage(7, 12);//a=7 and b=12. values passed in the function above
                    now calling the function and it must be outside the
                    function to be called out (its confusing, I know but 
                        it is what is it mate)

function getAverage(a, b, c, d, e, f) {
	var average = (a + b + c + d + e + f) / 2;
	console.log(average);
	return average;
}

var myResult = getAverage(7, 8, 9, 10, 11, 12);

console.log("The average is " + myResult);

- After the average is calculated, the number is returned to the var getAverage
  then its assigned to a new var myResult

- Multiple values can be passed as long as they are assigned. eg c,d,e,f were added
  and assigned values 9,10,11,12

- var myResult = getAverage(7, 8); -is aglobal variable. Can be used anywhere

- var average = (a + b) / 2; //local variable. has local scope that can be 
  only used within its scope. ie within the function



NAN:

isNaN - an argument used in an if statement (or any other consitional statements)
        to check whether a variable or input is not a number.
!NaN - the opposite of the statement above to check whether a var or input 
        is a number.
#Note: Both instances can be used for validation purposed(very useful)
Eg:
var a = 5;
var b = 5;

//double negative
if (isNaN(a)) {
	console.log("that's not a number mate. Its a string");
} else {
	console.log("meaning of life is " + (a + b));
}


\ in string

var myString = 'I\'m a "fun" string';
displays:
 I'm a "fun" string



SPLITTING AND SLICING STRINGS

//slicing
var str = "hello, world";

console.log(str);

var str2 = str.slice(2, 9);

console.log(str2);


//splitting
var tags = "meat, ham, salami, pork, beef, chicken";

var tagsArr = tags.split(",");

console.log(tagsArr);

-After every var tag name eg. meat, it transforms the tags to look 
  like an array.
  The outcome is: ["meat","ham","salami","pork","beef","chicken"]


ARRAYS
To create an array:
  var myArray = [];
To add values to the array created:
  myArray[0] = 25;
  myArray[1] = true;
  myArray[2] = "Hello, I'm Sammy";
To edit content in an array:
  myArray[0] = 20;
To show all the content in the array:
  console.log(myArray);
Methods used in arrays:
  1. myarray.sort();
  2. myArray.reverse();
  3. myArray.length;


OBJECTS
var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object(); //created a blank new onject

-These are the discriptive characteristics of the new object
   that could be put in index: [0],[1] etc. 

myCar.maxSpeed = 50;
myCar.driver = "Sammy";
myCar.drive = function(){
    console.log("now driving");
};

myCar.drive();//calls the method(function)

//console.log(myCar.driver);//returns sammy(as the car driver)

-Another way of creating an object. The {} signify a new object created
var myCar2 = {
    maxSpeed: 70,
    driver: "Sammy",
    drive: function(speed, time){
        console.log(speed * time);
    }
};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3); 


'THIS' KEYWORD
var myCar2 = {
    maxSpeed: 70,
    driver: "Sammy",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
};

-Instead of loging myCar.driver all the time,
 use 'this' instead. For instance there are many drivers and many
 myCar variables, this can be used for anything eg. this.driver, this.speed,
 this.carType etc.
-Keyword 'this' takes ownership of the content in a specific object.

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);



CONSTRUCTOR FUNCTIONS
-Constructor function- creates an object for us
-var myCar = new Car();
-Car above is the name of the new constuctor object(starts with a capital letter)

-This is a constructor funtion:
var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive =  function(speed, time){
        console.log(speed * time); 
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };

}

var myCar = new Car(70, "Sammy");
var myCar2 = new Car(60, "Samuel");
var myCar3 = new Car(50, "Yuri");
var myCar4 = new Car(40, "Aeiou");

myCar.drive(30, 5);
myCar3.logDriver();



DATE OBJECT
-Showing current date/time. Built in Javascript
var myDate = new Date();

console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 60, 15);
var myFutureDate = new Date(2515, 0, 31,10, 60, 15);

console.log(myPastDate);
console.log(myFutureDate);

-Showing different date/time of a birthday and comparison between
  two similar birthdays

var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

-Get the month of the date (0 - 11)
console.log(birthday.getUTCMonth());//0 ie. January

-Get the full year (YYYY)
console.log(birthday.getUTCFullYear());//1985

-Get the date of the month (1 - 31)
console.log(birthday.getUTCDate());//15

-Get the day of the week (0 - 6)
console.log(birthday.getUTCDay());//2 ie. tuesday 

-Get the hour of the date (0 - 23)
console.log(birthday.getHours());//11 but with UTC it's 8

-Get the number of miliseconds since 1st Jan 1970
console.log(birthday.getTime());//used to compare dates

-An example of comparing dates:
=This in javascript shows that the two variables 
  are different disregarding the same content they have.

if(birthday == birthday2){
    console.log("Birthdays are equal");

} else {
    console.log("Birthdays are not equal");
}
**Displays both birthdays are not equal

-Now with using the .getTime() method:
if(birthday.getTime() == birthday2.getTime()){
    console.log("Birthdays are equal");

} else {
    console.log("Birthdays are not equal");
}
**Displays that both birthdays are equal




*/
