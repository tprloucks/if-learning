/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong (longString){
  longString = "That's a long string!"
  if (longString.length >= 20){
    return longString
  }
}

function isItMedium (mediumString){
  mediumString = "That's a regular sized string!"
  if (mediumString.length >= 10 <= 20){
    return mediumString
  }
}

function isItShort (shortString){
  shortString = "That's a small string!"
  if (shortString.length < 10 ){
    return shortString
  }
  else{
    return "That's not a small string!"
  }
}

function howLongIsMyString (questionString){
  if (questionString.length > 20){
    return "thats a long string!"
  }
  if (questionString.length >= 10 <= 20){
    return "That's a regular sized string!"
  }
  if (questionString.length < 10){
    return "Thats a small string!"
  }
}

function instructorHeight (instructor){
  if (instructor === "Colin"){
    return 62;
  }
  if (instructor === "Mesuara"){
    return 69;
  }
  else{
    return "I don't know that instructor!"
  }
}




/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}