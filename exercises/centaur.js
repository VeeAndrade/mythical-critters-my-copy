class Centaur {
  constructor(name,breed){
    this.name = name
    this.breed = breed
    this.standing = true 
    this.activityCounter = 0
    this.cranky = false
    this.standing = true 
    this.layingDown = false
  }
  shoot(){
    this.activityCounter++;
    if (this.activityCounter >= 3 || this.layingDown == true) {
      this.cranky = true;
      return 'NO!'
    } else {
      this.cranky = false;
      return 'Twang!!!'
    }
  }
  run(){
    this.activityCounter++;
    if (this.activityCounter >= 3 || this.layingDown == true) {
      this.cranky = true;
      return 'NO!'
    } else {
      this.cranky = false;
      return 'Clop clop clop clop!!!'
    }
  }
  sleep(){
    if (this.layingDown == true) {
      this.cranky = false 
      this.activityCounter = 0
      return 'ZZZZ'
    } else {
      return 'NO!'
    }
  }
  layDown(){
    this.standing = false
    this.layingDown = true
  }
  standUp(){
    this.standing = true
    this.layingDown = false
  }
  drinkPotion(){
    if (this.cranky == false){
      this.cranky = true 
    }
    else if (this.layingDown == false) {
      this.cranky = false 
      this.activityCounter = 0
    } else {
      this.cranky = true 
      return 'Not while I\'m laying down!'
    }
  }
}
module.exports = Centaur