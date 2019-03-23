/**
 * 
 * 
 * Statements and Operators
 * 
 * All men are mortal
 * Socrates is a man.
 * Therefore, socrates is mortal.
 * 
 */

const mortals = ['man', 'animals', 'plants'];
const listObject = {
    'pen': 'object',
    'house': 'object',
    'Socrates': 'man',
    'Dogs': 'animals',
    'trees': 'plants'
}

const isMortals = mortals.find(list => list == listObject.Socrates);
function socrates() {
    if (isMortals) {
        return 'Socratres is imortal';
    } else {
        return 'Socratres is not imortal';

    }
}
console.log(socrates())


/**
 * 
 * This cake is either vanilla or chocolate.
 * This cake is not chocolate.
 * Therefore, this cake is vanilla.
 * 
 */

const cake1 = 'vanilla';
const cake2 = 'chocolate';
function verifyCake(cake) {
    let cakes = ['vanilla', 'chocolate'];
    const cakeFind = cakes.findIndex(cak => cak == cake);
    if(cakeFind == 0) {
        console.log(`this cake is not ${cakes[1]}, therefore, this cake is ${cakes[0]}`)
    } else {
        console.log(`this cake is not ${cakes[0]}, therefore, this cake is ${cakes[1]}`)
 
    }
    
}
verifyCake(cake1);