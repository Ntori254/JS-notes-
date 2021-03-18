
var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

//get the month of the date (0 - 11)
console.log(birthday.getUTCMonth());//0 ie. January

//get the full year (YYYY)
console.log(birthday.getUTCFullYear());//1985

//Get the date of the month (1 - 31)
console.log(birthday.getUTCDate());//15

//Get the day of the week (0 - 6)
console.log(birthday.getUTCDay());//2 ie. tuesday 

//Get the hour of the date (0 - 23)
console.log(birthday.getHours());//11 but with UTC it's 8

//Get the number of miliseconds since 1st Jan 1970
console.log(birthday.getTime());//used to compare dates

//example of comparing dates
//This in javascript shows that the two vars are different disregarding the same content they have
if(birthday.getTime() == birthday2.getTime()){
    console.log("Birthdays are equal");

} else {
    console.log("Birthdays are not equal");
}
