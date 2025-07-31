// Death Stranding: Cargo Check - JS Homework
// A lesson in arrays, loops, push/pop, and basic logic
// -------------------------------------------

// STEP 0: Set Up Your Gear
// Each item has a weight (kg)
const ladder = 10;
const climbingAnchor = 5;
const medKit = 8;
const containerRepairSpray = 7;
const lostCargo = 30;
const specialFuel = 20;
const cryptobiotes = 3;

// ----- <> console.log("Step 0: Gear weights ready.")
console.log("Step 0: Gear weights ready.");
// -------------------------------------------
// STEP 1: Create a Cargo Array "cargoItems"
let cargoItems = [
    { name: "ladder", weight: ladder },
    { name: "climbingAnchor", weight: climbingAnchor },
    { name: "medKit", weight: medKit },
    { name: "containerRepairSpray", weight: containerRepairSpray },
    { name: "lostCargo", weight: lostCargo },
    { name: "specialFuel", weight: specialFuel },
    { name: "cryptobiotes", weight: cryptobiotes }
  ];
// ----- <> console.log("Step 1: Cargo loaded.", cargoItems)
console.log("Step 1: Cargo Loaded.", cargoItems);
// -------------------------------------------
// STEP 2: Total Cargo Weight
let totalWeight = 0;
// Loop it! (cargoItems)
for (let item of cargoItems) {
    totalWeight += item.weight;
}
// ----- <> console.log("Step 2: Total weight is " + totalWeight + "kg")
console.log("Step 2: Total weight is " + totalWeight + "kg");

// -------------------------------------------
// STEP 3: Check If You're Overweight (if/else and a for loop inside?)
const maxWeight = 100;
while (totalWeight > maxWeight) {
    let dropped = cargoItems.pop();
    totalWeight -= dropped.weight;
    console.log("Dropped item due to overweight:", dropped.name);
}
// Max weight is 100kg. If you're over, drop the last item.
// You may need to "pop" it off
console.log("Step 3: Weight after the drop is " + totalWeight + "kg");
console.log("Remainig Cargo Items:", cargoItems)

// -------------------------------------------
// STEP 4: Rearranged Cargo by Weight
let rearrangedCargo = [];
// Manually sort from heaviest to lightest
// Create Array "rearrangedCargo"
rearrangedCargo = cargoItems.sort((a, b) => b.weight - a.weight);
// You may need to "push" items one by one

// ----- <> console.log("Step 4: Rearranged cargo (heavy to light):", rearrangedCargo)
console.log("Step 4: Rearranged cargo (heavy - light):", rearrangedCargo)

// -------------------------------------------
// STEP 5: You Fell Off a Cliff
// If item > 5, you fell off a Cliff and the item is now broken. 
// No need to carry broken items!
let safeCargo = rearrangedCargo.filter(item => item.weight <= 5);
console.log("Step 5: After the cliff fall, safe cargo:", safeCargo);

// -------------------------------------------
// STEP 6: Quick Scan
// Console.log to find the length of items
console.log("Step 6: Quick scan of the remaining items:", safeCargo.length);

// -------------------------------------------
// STEP 7: Check for Ladder
let hasLadder = safeCargo.some(item => item.name === "ladder");
// Did you still have a ladder? 
// You may want to check your array if it "includes" it
console.log("Step 7: Do you still have a ladder with you?", hasLadder)

// -------------------------------------------
// BONUS: What was the heaviest item?
let heavy = cargoItems.reduce(
    (prev, curr) =>
    prev.weight > curr.weight ? prev:curr
);
// Need to check the "math.max" for this..
console.log("Bonus: The heaviest item was:", heavy.name, "at", heavy.weight + "kg");

// -------------------------------------------
// Final Message

console.log("Keep going, Sammy Porter Bridges. You can do this.");
