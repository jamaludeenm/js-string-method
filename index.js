 
//js string method

//JavaScript String Length

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log(length);

//Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

//JavaScript String slice
{
let str = "im the only one superrr one";
let part = str.substring(8, 4);
console.log(part);
}

//JavaScript String substring
{
let str = "Apple, Banana, Kiwi";
let part = str.substring(3, 13);
console.log(part);
}

//JavaScript String substr
{
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
console.log(part);
}

//js replace ()

function touch(){
	let text=document.getElementById('tag').innerHTML;
	document.getElementById('tag').innerHTML=text.replace(/black/g,"white");
}
//replace case insensitive, use a regular expression with an /i flag (insensitive)
//To replace all matches, use a regular expression with a /g flag (global match)

//JavaScript String concat
{
let text1 = "i'm";
let text2 = "good";
let text3 = text1.concat(" ",text2);
console.log(text3);
}

//JavaScript String trim
{	
let text1 = "      trim me!      ";
let text2 = text1.trim();
let trimlength=text2.length;
console.log(trimlength);
}

//JavaScript String padStart
{
let text = "5";
let padded = text.padStart(9,"x");
console.log(padded);
}

//JavaScript String padEnd
{
let text = "5";
let padded = text.padEnd(4,"0");
console.log(padded);
}


// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]


//javaScript String charAt

{
let text = "return position";
let position = text.charAt(7);
console.log(position);
}

//JavaScript String charCodeAt()

{
let text = "return unique code";
let char = text.charCodeAt(6);
console.log(char);
}

//JavaScript String split()
{
let text = "a dt,b,c,d,e,f";
const myArray = text.split(" ");
console.log(myArray[0]);
}

//JavaScript String match
{
	let text = "when will come"
    let res=text.match("ill");
	console.log(res);
}
// JavaScript prototype
{
	function employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employee.prototype.salary = 2000;

const fred = new employee("Fred Flintstone", "Caveman", 1970);
console.log(fred.salary)
}

//JavaScript String repeat
{
	let text = "Hello world!";
let result = text.repeat(2);
console.log(result);
}

//JavaScript String search

{
	let text = "Mr. Blue has a blue house"
let position = text.search("Blue");
console.log(position);
}

//The localeCompare() 
// localeCompare() returns one of 3 numbers indicating the sort order.

// -1 if sorted before
// 1 if sorted after
// 0 if equal

{
	let text1 = "cd";
let text2 = "ab";
let result = text2.localeCompare(text1);
console.log(result);
}