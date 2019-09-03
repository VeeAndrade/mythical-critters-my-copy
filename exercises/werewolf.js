class Werewolf {
  constructor(name, location){
    this.name = name
    this.location = location
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change(){
    if(this.human == true){
      this.hungry = true;
      this.human = false
      this.wolf = true;
    } else {
      this.human = true;
      this.hungry = false
      this.wolf = false;
    }
  }
  eat(victim){
    this.hungry = false;
    victim.alive = false;
    if (this.human == true){
      return 'Can not eat while human'
    } else {
      this.change()
    }
  }
}

module.exports = Werewolf;