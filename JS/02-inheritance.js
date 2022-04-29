/*
 * Наследование
 *  - extends
 *  - super()
 */

class Hero {
    constructor({name = 'hero', xp = 0} = {}){
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount){
        console.log(`${this.name} получает ${amount} опыта`) // `` - косые скобки 
        this.xp += amount;
    }

}

// const mango = new Hero ({name: 'Mango', xp: 1000})
// console.log(mango)
// mango.gainXp(1000)

class Warrior extends Hero{
    constructor({weapon, ...restProps} = {}){
        super(restProps); // вызов конструктора героя
        

        this.weapon = weapon;
    }

    attack(){
        console.log(`${this.name} атакует используя ${this.weapon}`)
    }
    
}

class Berserk extends Warrior{
    constructor({warcry,...restProps} = {}){
        super(restProps)

        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry)
    }
}

const ajax = new Berserk ({name: 'ajax', xp: 500, weapon: 'axe', warcry: 'waaaaa'})

class Mage extends Hero {
    constructor({spells, ...restProps} = {}){
        super(restProps);

        this.spells = spells;
    }

    cast(){
        console.log(`${this.name} что-то там кастует`)
    }
    
}

console.log(ajax)

const poly = new Mage ('Poly', 1500, ['фаербол'])
console.log(poly)
poly.cast();
poly.gainXp(2000)
    
const mango = new Warrior (  'Mango',  1000, 'alebarda' )
// console.log(mango)

// console.log('Warrior.prototype === mango.__proto__ ->', Warrior.prototype === mango.__proto__)
// console.log("Warrior.prototype.__proto__ === Hero.prototype ->", Warrior.prototype.__proto__ === Hero.prototype)

// console.log(mango.prototype) // undefined
// console.log(mango.__proto__) // Hero {constructor: ƒ}

// console.log(Warrior.prototype) // Hero {constructor: ƒ}
// console.log(Warrior.__proto__)

// console.log(Hero.prototype) // {constructor: ƒ, gainXp: ƒ}
 
mango.attack()