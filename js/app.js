// Instructions

// Make different classes and split up components - have a page that takes an event listener
// Create a button that will instantiate the screen?
// Warrior types as one class or separate..

// Impleent a game event

// ****Player****
// 1. 3 player types to choose from -  warrior, mage, archer and widcard - Wildcard mechanism needs to be expanded on
// 2. Create a list of moves for each player
// 3. Depending on what move they choose, subtract the mana and if it is health boost, change status of player
// 4. If an attack is chosen, subtract health from the boss


// ****Boss****
// 1. Randomise the moves that the boss will use
// 2. Minus the health of the characters


                      // ***Important notes***
// ******* Regarding boss attack
// If the attack affects all players, attach an object or method to all the players that will inflict damage
//  Boss health -10. If a move is small damage, randomize between 10 & 25




// Useul random number range generator
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomize = function(){
    return Math.floor(Math.random() * 70)
  }
  
  // Think about modularizing hit point functions into a single function, so that randomized/critical hits can occur
  
  // 1. Declare hit point variables
  // Small damage, medium damage, large damage
  
  // 2. Declare attacks for single enemies & multiple enemies
  
  // 3. Create skills

  // 4. Create a way to randomize the boss' move
  
  // 5. Make certain skills only available to certain player classes
 




  // Small Hit function   

  let smallHit = function(){ 
    //  Declare a variable for how many points will be taken from the player 
    // Can be named points or mana or special points(sp)
    this.points -= 2;
    let smallDamage = Math.floor(Math.random () * 7) 
    return smallDamage
  }

  // Medium Hit function  
  
  let medHit = function(){
  //  Declare a variable that subtracts from the mana points?
      this.points -= 3;
      let mediumDamage = Math.floor( Math.random() * 16 ); 
      return mediumDamage;
  //   Previous comment will affect the above return statement
  }

  // Large Hit function  
  
  let largeHit = function(){
      this.points -= 5;
      let largeHit = Math.floor(Math.random () * 25)
      return largeHit;
  }
  
  let criticalHit = function(){
    return Math.floor(Math.random() * 70 )
  }
  
  let testHit = function(){
      this.health += 2;
  }
  
  
  // Healing functions
  
  let midHeal = function(){
    this.health += 7;
  }
  
  //  If player levels up, increase hit point type                 
  // Decalre types of player
  
  // Space Invader

  // Fire based skills
  let fireBarrage = function(){
          // Increase the damage
          this.points -=4;
          let largeHit = Math.floor(Math.random() * 65)
          return largeHit;
  }

  // Lightning based skills
  let voltRage = function(){
        // Increase the damage

  }

  // Hero
  
  let hero = {
    health: 100,
    attack: 40,
    defense: 40,
    agility: 35,
    magic: ()=>{
        // if a certain function exists, then minus the value
        // Declare default value that will be subtracted from
        let magicVal
    },
    points: 80,
    
  //   Hit can be a function that generates the amount
  //   of damage
    slash: smallHit(),
  //   Find a way to take away mana points/drain
    doubleslash: medHit()    
  }

 console.log(hero)
  
  let warrior = {
    health: 100,
    attack: 60,
    defense: 40,
    agility: 40,
    magic: 5,
    points: 80,
  }
  
  let mage = {
        attack: 25,
        defense: 30,
        agility: 30,
        magic: 60,
        points: 80,
  }
  
  let wildcard = {
        attack: randomize(),
        defense: randomize(),
        agility: randomize(),
        magic: randomize(),
        points: 80,
  }

//   Mana Energy depletion
    let manaMinus = {
        // Place this method the players obects

    }

  // Boss attacks

  // Attack that damages all members of party
  let lightningOrb = {

      // This move does medium damage, so medDamage method here
        medHit()
      // Attack all the members of the party

  }

                                // Heavy attack move for boss

  // Gravity attack
  let gravityVortex = {

    largeHit()

  }

  let largeHeal = {

    // Make sure this is an existing method name
    largeHeal()

  }

  

                              // Overpowered moves or the boss
  let orbitalWave = {

    // Deals serious heavy dmage to enemy to the point where they are almost defeated
    // Check if the largeHit() method exists first..

    largeHit()
  }

  // Items....

  let lightPotionHeal = {
    // Depending on character stats, restores min 20 health....
  }

  let medPotionHeal = {
  // Depending on character stats, restores min 40 health..
  }

  let largePotionHeal = {
    // Depending on character stats, restors min 60 health..
  }
  
  // Pseudo code instructions..

  // Have a state that the player starts in e.g. health and power stats, mana etc
  // Create the stats for the villains
  // As the heroes are attacking, the enemy needs to take hits, there may also be a chance that the attack misses
  // Update the heroes' state
  // Take away the health stats of whoever has been attacked

  // Boss random attacks..
  // Have a move that deals heavy damage..