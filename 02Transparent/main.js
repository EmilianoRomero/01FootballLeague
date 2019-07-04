console.log('Starting javascript...');


//---------------------------------------------------------------------------------------------------------------
//e01 - Define variable and asign it a TEXT value (string => '' or ""); ask to be displayed
var myName = "Emiliano";
console.log(myName);

//e02 - Define a variable and asign it a NUMERICAL value (not string => no '' nor ""). Display.
var emiAge = 44;
console.log(emiAge);

//---------------------------------------------------------------------------------------------------------------
//e03a - Define numerical variable and asign it a value (variables and numerical values NO '' NOR "")
var ignasiAge = 32;
console.log(ignasiAge);

//e03b - Define a function to calculate the age difference. The defined variables, NO '' NOR "".
var ageDiff = (emiAge - ignasiAge);
console.log(ageDiff);

//---------------------------------------------------------------------------------------------------------------
//e04 - Define a reference variable (AGE) and gives it a reference value (AGE LIMIT); 
// defines a variable of the same type (AGE), which would take any given values (CERTAIN PEOPLE'S AGE); 
// defines the COMPARISON TYPE and defines the ACTION TO BE TAKEN (print a message) 
// regarding the results of the applied. 
var referAge = 21;
var givenAge = emiAge;
if (givenAge > referAge) {
    console.log("You are older than 21")
};
if (givenAge < referAge) {
    console.log("You are younger than 21")
};

//e05 - Define a reference variable (IGNASI's AGE) and gives it a reference value (Ignasi's age); 
// defines a variable of the same type (emiAge), which would take any given values (my age); 
// defines the COMPARISON TYPE and defines the ACTION TO BE TAKEN (print a message) 
// regarding the results of the applied. Note that for EQUAL uses "=="
var givenAge = ignasiAge;
if (emiAge < givenAge) {
    console.log("Ignasi is older than you")
};
if (emiAge > givenAge) {
    console.log("Ignasi is younger than you")
};
if (emiAge == ignasiAge) {
    console.log("You have the same age as Ignasi")
};

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//e3-01 - Arrays. Sortieren. Drucken.

//Organise alphabetically.
var mernJuni = ["Ottavia", "Lucas", "Dan", "Babu", "Emiliano"];
mernJuni.sort();
console.log(mernJuni);

//Print 1st element.
console.log(mernJuni[0]);

//Print last element.
console.log(mernJuni[4]);

//Print all the elements of the array using "for". I may define (or not) a variable ("total") 
//which refers to the ".length" property, that defines the length of the array.
//"for" defines the loop and then is indicated: the initial element of the array to be affected;
//"i < total" is the CONDITION that defines up to which element the STEP "i+1" ("i++") is going
//to be applied, therefore, the loop stops there.
//Finally ask for the result of the iteration to be displayed, referring the array's name and
//the elements within [i]. Only "i" would have displayed the numbers asigned to each element
//within the array.
var total = mernJuni.length;
for (i = 0; i < total; i++) {
    console.log(mernJuni[i]);
}

//---------------------------------------------------------------------------------------------------------------
//e3-02 - Looping over an array 
//Exercise 2: Create an array with all the ages of the students in your class. 
//Iterate the array using a while loop, and then print every age in the console.
var ages = [44, 25, 26, 23, 22];
ages.sort();
console.log(ages);
ages.sort((a, b) => a - b);
console.log(ages);
ages.sort((a, b) => b - a);
console.log(ages);

//Why doesn't work with the age values and using just ages? 
//I've tried a lot and I've failed every single time
var i = 0;
while (i <= 4) {
    console.log(ages[i])
    i++
};

//Test to check the difference between using "ages" and "ages[i]"
console.log(ages); //displays ages
//If I use (ages[i]) instead of just (ages) nothing is printed.
//Is it because the i reamains undefined?

////Add a conditional inside the while loop to only print even numbers.
//Change the loop to use a "for" loop instead of a "while" loop.
//Defining the variables: i works only as a position subindex;
//ages[i] refers to the integer o character within the array which takes the place "i".
//
var i = 0;
while (i <= 4) {
    if (ages[i] % 2 == 0) console.log(ages[i]) //even numbers divided by 2 leave no-remainder (rest=0) <- condition!
    i++
};

//---------------------------------------------------------------------------------------------------------------
//e3-03 Write a function which receives an array as a parameter
//and prints the lowest number in the array to the console.

//this is the first approach, but is not a function in itself :P
var ages = [26, 44, 22, 25, 23]; //defines the variable ages as an array
ages.sort((a, b) => a - b); //sort from min to max 
console.log(ages[0]); //display min value (element index=0 from the from min to max values sorted array)

var ages = [26, 44, 22, 25, 23]; //defines the variable ages as an array
var minValue = Math.min.apply(null, ages); //defines the function using Math
console.log(minValue); //displays the value of the function

//---------------------------------------------------------------------------------------------------------------
//e3-04 Write a function which receives an array as a parameter 
//and prints the biggest number in the array to the console.

//just like before, tried this non-function type approach :P
var ages = [26, 44, 22, 25, 23]; //defines the variable ages as an array
ages.sort((a, b) => b - a); //sort from max to min
console.log(ages[0]); //display max value (element index=0 from the from max to min values sorted array)

var ages = [26, 44, 22, 25, 23]; //defines the variable as an array
var maxValue = Math.max.apply(null, ages); //defines the function using Math
console.log(maxValue); //displays the value of the function

//---------------------------------------------------------------------------------------------------------------
//e3-05 Write a function which receives two parameters, an array and an index.  
//The function will print the value of the element at the given position (one-based) to the console.
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
//defines the variable array
var index = 1; //defines the variable index asigning the value 1
var findElement = array.find(item => item.index == 1); { //defines the function using the arr.find method via index
    console.log(array[1]) //the index is used to find the item
};

//---------------------------------------------------------------------------------------------------------------
//e3-06 Write a function which receives an array and only prints the values that repeat:
//var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
//My approach to the situation: two values which repeat have the same value, thus if I substract them I get = 0 =>
// => i(a) - i(b) = 0 <- THIS IS MY CONDITION, requirement to be fulfilled. When this happens so, then I can 
//ask the system to retrieve one of the elements in the array, i(a), i(b) or i(n).
//Before this, it has to perform an operation all along the array. So, the steps would be:
//1) perform the operation (function) through the array, element by element until every single element 
//has gone through the function;
//2) compare every time with the given condition;
//3) based on the result, could 3-a) just continue/do not retrieve any values; 3-b) retrieve the values that satisfy
//the condition and continue performing the search to get the arguments for this function from the remaining elements.
//Elements in the array: 22 => (length = 21; i = 21)

var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
for (var i = 0; i <= array.length; i++) { //i is j+1. Due to the fact that I cannot write a[i] == a[i+1], then 
    for (var j = (i + 1); j <= array.length; j++) { //I create j=i+1 as a linear dependent variable of i.
        if (array[j] == array[i]) { //This way I can perform the comparison I wanted to perform.
            console.log(array[i]);
        }
    }
};

//---------------------------------------------------------------------------------------------------------------
//e3-06.b Write a function which receives an array and only prints only once the values that repeat, 
//even if they repeat more than once:
//var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100, 33];
//var results = [];
//var tripl = [];
//for (var i = 0; i <= array.length; i++) { //i is j+1. Due to the fact that I cannot write a[i] == a[i+1], then 
//    for (var j = (i + 1); j <= array.length; j++) { //I create j=i+1 as a linear dependent variable of i.
//        if (array[j] == array[i]) { //This way I can perform the comparison I wanted to perform.
//            results.push(array[i]);
//        }
//        var tripl = results.sort(); { 
//            for (var h = 0; h <= results.length; h++) {
//                for (var k = (h + 2); k <= results.length; k++) {
//                    if (results[h] == results[k]) {
//                        tripl.push(results[h]);
//                    }
//                }
//            }
//        }
//    }
//};
//console.log(tripl);


//---------------------------------------------------------------------------------------------------------------
//e3-07 Write a simple JavaScript function to join all elements of the following array into a string. 
var myColor = ["Red", "Green", "White", "Black"]; //defining the array;
var myColour = myColor.join(); //defining the function;
console.log(myColour); //printing the argument of it.


//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
//e4-01 Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.
//Strings cannot be treated directly. They must be transformed into arrays, applied the changes and then 
//become strings again.
//Defining the function -->

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);
}

//Applying the function to the string x = 32443 -->
reverseString("32443")

//---------------------------------------------------------------------------------------------------------------
//      1st: applying SPLIT("") method to convert STR into ARR
//      2nd: applying REVERSE() method to invert the order within the ARR created from the STR
//      3rd: applying JOIN() method to convert ARR into STR
//      4th: Return the reversed string
//---------------------------------------------------------------------------------------------------------------

//e4-02 Write a JavaScript function that returns a string in alphabetical order. 
// For example, if x = 'webmaster' then the output should be 'abeemrstw'.  
// Punctuation and numbers aren't passed in the string.
//Defining the function -->

function alphabeticString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.sort();
    var joinArray = reverseArray.join("");
    console.log(joinArray);
}

//Applying the function to the string x = webmaster -->
alphabeticString("webmaster")

//---------------------------------------------------------------------------------------------------------------
//      1st: applying SPLIT("") method to convert STR into ARR
//      2nd: applying SORT() method to order the ARR created from the STR
//      3rd: applying JOIN() method to convert ARR into STR
//      4th: Return the reversed string
//---------------------------------------------------------------------------------------------------------------

//e4-03 Write a JavaScript function that converts the first letter of every word to uppercase.
//For example, if x = "prince of persia" then the output should be "Prince Of Persia".
//Defining the function -->

function uppCase(str) {
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    str = arr.join(" ");
    console.log(str);
}

// Applying the function
uppCase("prince of persia");

//---------------------------------------------------------------------------------------------------------------  
//      1st: applying SPLIT("") method to convert STR into ARR
//      2nd: uppercases 1st letter of each word and SLICEs() from the 2nd letter from every word (substring) on
//      arr now will be the uppercased 1st letter + the sliced portion of the substring
//      JOIN() method makes from the ARR a STR
//      space between "" --> Mandatory! Otherwise capitalizes every single character, 
//      because generates an "p", "r", "i", ... array instead of an "prince", "of", "persia" array.
//---------------------------------------------------------------------------------------------------------------

//e4-04 Write a JavaScript function that finds the longest word in a phrase.
//For example, if x = "Web Development Tutorial", then the output should be "Development".

function findLongestWord(str) {
    var splitString = str.match(/\w[a-z]{0,}/gi);
    var result = splitString[0];
    for (var x = 1; x < splitString.length; x++) {
        if (result.length < splitString[x].length) {
            result = splitString[x];
        }
    }
    return result;
}

//Applying the function
console.log(findLongestWord('Web Development Tutorial'));

//---------------------------------------------------------------------------------------------------------------
//      This FOR loop checks the length of the array element, 
//      comparing it with previous one and finally returning the longest string.

//      MATCH() method retrieves the matches when matching a string against a regular expression.

//      What does /\w[a-z]{0,}/gi exactly mean:
//      /       start regexp
//      \b      match a word boundary
//      (…)     create a capturing group
//      […]     create a class of characters to match one of them
//      a-z     match any character between "a" and "z" ("a", "b", "c", "d", "e" …)
//      A-Z     match any character between "A" and "Z" ("A", "B", "C", "D", "E" …)
//      +       match one or more of a preceding token (see above)
//              match space sign (exactly)
//      \1      match first capturing group
//      \b      match a word boundary
//      /gi     finish regexp and set flags "global" and "case-insensitive"
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
///*JavaScript Exercises 2
//Exercise 1
//Now let's add content to an HTML document instead of writing to the console.
//Write a function called addBands(myBandList) that will list your favorite bands.
//Start with an empty HTML page that contains a level 1 heading "My Favorite Bands"
//and an empty unordered list with ID band-list.
//Your function should use the JavaScript DOM to create list items and add them
//to the unordered list, with one list item for each string in array myBandList.
//For example, if I call:
//  addBands(['Dire Straits', 'Kansas', 'Steely Dan']);
//The function will add three list items to the unordered list.
var myBandList = ['Dire Straits', 'Kansas', 'Steely Dan'];

function addBands(arr) {
    for (var i = 0; i < arr.length; i++) { //runs through "myBandList" and create lists items/nodes in "band-list"
        var liNode = document.createElement("LI"); //creates a new li node
        var textNode = document.createTextNode(arr[i]); // creates the text node for the <li> with ar[i] element
        liNode.appendChild(textNode); //assigns the value of the element (text) to li item/node
        // get the unordered list and add the new li
        document.getElementById("band-list").appendChild(liNode);
        //displayBands;//
        console.log(textNode);
    }
};
addBands(myBandList);

//function addBands(ar) {
// for loop should run through spelling "myBandList" and create list items in "band-list"
//    for (i = 0; i < ar.length; i++) {
//        var item = document.createElement("li"); // creates a <li> element
//        var text = document.createTextNode(ar[i]); // creates the text for this <li> from the array ar[i] element    
//        item.appendChild(text); // assigns text to item
//        document.getElementById("band-list");//‚.appendChild(li); // appends <li> to <ul>     
//    }
//    console.log(text);
//}
//addBands(myBandList);

//---------------------------------------------------------------------------------------------------------------
//Exercise 2
//Write a function called addMultTable(rows, cols) that will create a multiplication
//table like this. Start with an empty HTML page that only contains a level 1 heading.
//Your function should use the JavaScript DOM to insert an HTML table after the heading.
//For example, if I call:
//    addMultTable(4, 8);
//It will create an HTML table with 4 rows
//and 8 columns, and append it after the level 1 heading.
function addMultTable(r, c) {
    var table = "";
    var rows = r;
    var cols = c;
    for (var r = 0; r < rows; r++) {
        table += "<tr>";
        for (var c = 0; c < cols; c++) {
            table += "<td>" + c + "</td>";
        }
        table += "</tr>"
    }
    document.write("<table>" + table + "</table>")
}

addMultTable(4, 8);