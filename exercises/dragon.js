class Dragon {
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.hungryCounter = 0;
  }
  eat(){
    this.hungryCounter ++
    if(this.hungryCounter >= 3)
    this.hungry = false;
  }
}

module.exports = Dragon;