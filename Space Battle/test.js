
alert('oh hai!');

const yourAnswer =prompt('You Want a Battle?');
let action = null;

while(action !== 'stop'){
    action =  prompt("What do you want to do now, type Stop to stop ", "Space Battle")
}



// Space Ship Characteristics
let spaceShip = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
}

// Alien Ship Characteristics
let alienShipOne = {
    hull: (Math.random() * (6 - 3 +1)) + 3,
    firepower:(Math.random() * (4 - 2 + 1)) + 2,
    accuracy:(Math.random() * (.8 - .6 + 1)) + .6,
}

let alienShipTwo = {
    hull: (Math.random() * (6 - 3 +1)) + 3,
    firepower:(Math.random() * (4 - 2 + 1)) + 2,
    accuracy:(Math.random() * (.8 - .6 + 1)) + .6,
}

let alienShipThree = {
    hull: (Math.random() * (6 - 3 +1)) + 3,
    firepower:(Math.random() * (4 - 2 + 1)) + 2,
    accuracy:(Math.random() * (.8 - .6 + 1)) + .6,
}

let alienShipFour = {
    hull: (Math.random() * (6 - 3 +1)) + 3,
    firepower:(Math.random() * (4 - 2 + 1)) + 2,
    accuracy:(Math.random() * (.8 - .6 + 1)) + .6,
}

let alienShipFive = {
    hull: (Math.random() * (6 - 3 +1)) + 3,
    firepower:(Math.random() * (4 - 2 + 1)) + 2,
    accuracy:(Math.random() * (.8 - .6 + 1)) + .6,
}

let alienShipSix = {
    hull: (Math.random() * (6 - 3 +1)) + 3,
    firepower:(Math.random() * (4 - 2 + 1)) + 2,
    accuracy:(Math.random() * (.8 - .6 + 1)) + .6,
}


// Initiate the first attack

const firstAttack = => {
    if (spaceShip.hull >= 3 && spaceShip.hull <= 6) {
        console.log('target reached');
    
    }else if (spaceShip.accuracy <= 0.8){
        console.log('target destroyed')

    }else if (spaceShip.firepower >= 2 && spaceShip.firepower <= 4){
        console.log('The target is completly destroyed');
    }else (alienShipOne.hull = 20 && alienShipOne.firepower = 5 && alienShipOne.accuracy = 0.7){
        console.log('Aliens Win!');
        
    } 
}


for(let spaceShip.hull >= 3){

}
