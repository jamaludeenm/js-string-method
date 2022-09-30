 
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
let part = str.substring(16, 23);
console.log(part);
}

//JavaScript String substring
{
let str = "Apple, Banana, Kiwi";
let part = str.substring(0, 13);
console.log(part);
}

//JavaScript String substr
{
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
console.log(part);
}

//js replace ()

function touch(){
	let text=document.getElementById('tag').innerHTML;
	document.getElementById('tag').innerHTML=text.replace("black","white");
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
let padded = text.padStart(4,"x");
console.log(padded);
}

//JavaScript String padEnd
{
let text = "5";
let padded = text.padEnd(4,"x");
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
let char = text.charCodeAt(7);
console.log(char);
}