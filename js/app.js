let randomize = function(){
    return Math.floor(Math.random() * 70)
  }
  
  // Think about modularizing hit point functions into a single function, so that randomized/critical hits can occur
  
  // 1. Declare hit point variables
  // Small damage, medium damage, large damage
  
  // 2. Decalre attacks for single enemies & multiple enemies
  
  // 3. Create skills

  // 4. Create a way to randomize the boss' moves
 

  // Small Hit function   

  let smallHit = function(){ 
    //  Declare a variable for how many points will be taken from the player 
    this.points -= 2;
    let smallDamage = Math.floor(Math.random () * 7) 
    return smallDamage
  }

  // Medium Hit function  
  
  let medHit = function(){
  //  Declare a variable that subtracts from the mana points?
      this.points = this.points - 3;
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
    
}

  // Boss attacks

  // Attack that damages all members of party
  let lightningOrb = {

      // This move does medium damage, so medDamage method here
        medHit()
      // Attack all the members of the party

  }


  
  // Pseudo code instructions

  // Have a state that the player starts in e.g. health and power stats, mana etc
  // Create the stats for the villains
  // As the heroes are attacking, the enemy needs to take hits, there may also be a chance that the attack misses
  // Update the heroes' state
  // Take away the health stats of whoever has been attacked

  // Boss random attacks
  // Have a move that deals heavy damage