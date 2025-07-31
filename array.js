// WEEK 2 - Arrays, Loops, and if Statements
// THEME: Death Stranding - Cargo Scanner

// INTRO: What is an array?
//console.log("Welcome to Week 2: Arrays, Loops, and if Statements.");
//console.log("Let's start by talking about arrays...");

// Arrays are like backpacks — they hold multiple items in one variable.
// ----- <> Create "bag" array w/ a medkit, rope, ladder
//let bag = ["medkit", "rope", "ladder"]
// ----- <> console.log("Initial bag:", bag);
//console.log("initial bag: ", bag)


// Accessing array items
// ----- <> Access medkit
// ----- <> - console.log("First item in bag: ", )
//console.log("First item in bag: ", bag[0])
// ----- <> Access rope
// ----- <> - console.log("Second item in bag:", )
//console.log("Second itme in bag: ", bag[1])


// Adding and removing items
// ----- <> Add "cryptobiote" to bag array
//bag.push("cryptobyte")
// ----- <> View(console.log) bag affter item is added.
//console.log("Bag after push: ", bag)
// ----- <> - console.log("Bag after... :", )

// Remove/use your rope
//bag.splice(1, 1)
// ----- <> View (console.log) bag after item is removed
//console.log("Bag after splice: ", bag)
// ----- <> - console.log("Bag after removing rope:", )

// How many items in the bag?
//console.log("Number of items in the bag: ", bag.length)
// ----- <> console.log("Number of items in bag:", )

// =======================================
// SIDEBAR: Basic for loop practice
//console.log("----------------------------");
//console.log("FOR LOOP PRACTICE");

// Looping from 0 to 4
//for (let i = 0; i<5; i++) {
  //  console.log("i is now ", i)
//}

// Looping through an array
//const tools = ["ladder", "rope", "boots", "bag", "wrench"];
// ----- <> Loop thru tools array
//for (let i = 0; i<tools.length; i++) {
  //  console.log("Tool: ", tools[i])
//}

// =======================================
// SIDEBAR: if statements
//console.log("----------------------------");
//console.log("IF STATEMENT PRACTICE");

//let weather = "rain";
// If "weather" equals "rain"
//if (weather === "rain"){
  //  console.log("Bring a raincoat.")
//}
// ----- <> - console.log("Bring a raincoat.");

//let zero = 0
// If "zero" equals "0"
// "===" vs. "=="


// IF / ELSE IF practice
//let cargoWeight = 80;

// If cargoweight less than 100
// If cargoweight less than 50
// If all is good
//if (cargoWeight > 100) {
  //  console.log("You're overweight")
//} 
//else if(cargoWeight > 50) {
  //  console.log("Getting heavy")
//} 
//else {
  //  console.log("You're good to go!")
//}


// IF / ELSE
//let bootsAreBroken = true;
//if (bootsAreBroken = true) {
  //  console.log("Repair your boots")
//}
//else {
  //  console.log("Boots are okay")
//}


// Part 2
// =======================================
//  MINI-PROJECT: Death Stranding - Cargo Scanner
console.log("----------------------------");
console.log("CARGO SCANNER - MINI PROJECT");

// Inventory of items
const cargo = [
  "medkit",
  "cryptobiote",
  "toxic waste",
  "lost cargo",
  "BB pod",
  "toxic waste"
];
 console.log("cargo start: ", cargo )
// Counters
let safeCount = 0;
let toxicCount = 0;
let valuableCount = 0;

console.log("🔍 Scanning cargo...");

// Loop and logic to scan cargo
// ----- <> Loop / check items
for (let i = 0; i<cargo.length; i++) {
    console.log("Cargo: ", cargo[i])
// ----- <> - If toxic waste add to toxicCount
    if (cargo[i] == "toxic waste") {
        safeCount++;
        console.log("Safe items count:", safeCount);
    } else if (cargo[i] === "toxic waste") {

            console.log("Toxic waste detected");
    } else if (cargo[i] === "lost cargo") {
    console.log("Lost cargo")
} else if(cargo[i] === "BB pod") {
    valuableCount++
    console.log("Valuable cargo is still safe")
  } else {
    console.log("The items are safe at the moment", cargo[i])
}
}
// ----- <> - Else if "lost cargo" OR "BB pod" add to valuableCount
// ----- <> - Else cargo is safe

// Console log the Process


// BONUS: Advice based on results

// =======================================
console.log("----------------------------")
console.log("End of Week 2 Lesson.")
