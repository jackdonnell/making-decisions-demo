/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let kenobiAttack = 20
let anakinAttack = 30

if (anakinAttack > kenobiAttack) {
    console.log("Anakin has a better attack than Kenobi")
} else if (kenobiAttack > anakinAttack) {
    console.log("Kenobi has a better attack than Anakin")
} else {console.log("Anakin and Kenobi have an equal atttack" )
}

let kenobiHealth = 100
let kenobiDefense = 100
let anakinHealth = 100
let anakinDefense = 100

if (kenobiHealth > anakinAttack) {
    kenobiHealth -= anakinAttack
    console.log(`Kenobi\'s health is now ${kenobiHealth}`)
} else { 
    console.log("Kenobi was slain.")
}

for (i=0; i<5; i++){
    let damage = anakinAttack - kenobiDefense
    kenobiHealth -= damage
    console.log(`Kenobi\`s health is now ${kenobiHealth}`)
}

while (kenobiHealth > 0) {
    let damage = anakinAttack - kenobiDefense
    kenobiHealth -= damage
    if (kenobiHealth > 0) {
        console.log(`Kenobi\`s health is now ${kenobiHealth}`)
} else {console.log("Kenobi was slain.")}
    }
