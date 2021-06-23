//Introduction to Classes


//Object style

// let halley = {
//     _name: 'Halley',
//     _behavior: 0,

//     get name() {
//         return this._name;
//     },

//     get behavior() {
//         return this._behavior;
//     },

//     incrementBehavior() {
//         this._behavior++;
//     }
// }

//class style 

class Dog {
    constructor(name){
        this._name = name;
        this._behavior = 0;
    }

    get name(){
        return this._name;
    }

    get behavior(){
        return this._behavior;
    }

    incrementBehavior(){
        this._behavior++;
    }
}

const pudo = new Dog('Jake');

console.log(pudo._name)

const halley =  new Dog('Halley');
console.log(halley.name);
console.log(halley.behavior);
halley.incrementBehavior();
console.log(halley.name);
console.log(halley.behavior);

/*
Inside of the constructor() method, we use the this keyword. 
In the context of a class, this refers to an instance of that class. 
In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument
*/

//Dog instances

class Surgeon{
    constructor(name, department){
        this._name = name;
        this._department = department;
        this._numberOfSurgeries= 0;
        this._remainingVacationDays = 20;
    }

    get name(){
        return this._name;
    }

    get department(){
        return this._department;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }


    get numberOfSurgeries(){
        return this._numberOfSurgeries;
    }

    takeVacationDays(daysOff){
        this._remainingVacationDays -= daysOff;
    }


    set numberOfSurgeries(num){
        this._numberOfSurgeries = num;
    }



    incrementNumOfSurgeries(){
        this._numberOfSurgeries++;
    }
}

const David = new Surgeon('David', 'USC');

console.log(David.numberOfSurgeries, 'number of surgeries')

David,numberOfSurgeries = 10;

console.log(David.numberOfSurgeries);





//Methods

//Class method and getter syntax is the same as it is for objects 
//except you can not include commas between methods.



const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

surgeonJackson.takeVacationDays(6);

console.log(surgeonJackson.remainingVacationDays);


console.log(surgeonRomero.name);

surgeonRomero.takeVacationDays(3);

console.log(surgeonRomero.remainingVacationDays);

//Inheritance part1









