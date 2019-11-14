class Desserts {
    constructor(type, calories) {
        this.type = type;
        this.calories = calories;
    }
}

class IceCream extends Desserts {
    constructor(type, calories, flavor, scoops) {
super(type, calories); 
        this.flavor = flavor;
        this.scoops = scoops;
    }

    includeSpoon() {
        console.log('Here is your spoon!');
        document.getElementById('spoon').appendChild(document.createTextNode('Here is your spoon!'));
    } 
}

const vanillaIceCream = new IceCream('Ice Cream', 340, 'Vanilla', 3);
console.log(vanillaIceCream);

const values = Object.values(vanillaIceCream)
const ICE_CREAM_DISPENSER = document.getElementById('ice-cream');
ICE_CREAM_DISPENSER.appendChild(document.createTextNode(values));

vanillaIceCream.includeSpoon();

