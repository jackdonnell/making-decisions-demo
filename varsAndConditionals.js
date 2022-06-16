/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


let backpack = []

backpack.push("lightsaber")
backpack.push("robe" , "food")

// console.log(backpack)

let belt = backpack.shift()
    console.log(belt)

    // console.log(backpack)
backpack.splice(2, 0, "fur coat")

let bag = []

bag.unshift("flint", "blanket", "toothbrush")

backpack.push(bag.slice(0,3))

console.log(backpack)
console.log(bag)
console.log(belt)

for (let i = 0; i < bag.length; i++){
    console.log(bag[i])
}
for (let i = 0; i < 3; i++){
    console.log(backpack[i])
}






let guessMe = 54

while (guessMe < 100) {
    console.log('----------')
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5.  Added 25.')
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log('guessMe is divisible by 3.  Subtracted 27.')
        guessMe -= 27
    } else {
        console.log('Added 3.')
        guessMe += 3
    }
    guessMe += 22
    console.log(`guessMe is now ${guessMe}.`)
}