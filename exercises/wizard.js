class Wizard {
  constructor({name, bearded = true}){
    this.name = name;
    this.bearded = bearded;
    this.isRested = true;
    this.spellCounter = 0;
  }
  incantation(spell){
    return spell.toUpperCase();
  }
  cast(){
    this.spellCounter ++
    if(this.spellCounter >= 3){
    this.isRested = false
    return 'I SHALL NOT CAST!'
    } else {
      return 'MAGIC BULLET';
    } 
  }
}

module.exports = Wizard