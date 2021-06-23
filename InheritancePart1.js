// we need to creat a Cat class but we know that the properties in our cat class
// name and behavior are similar to our Dog class

// Lets say that our cat class looks like this

class Cat{
    constructor(name, usesLitter){
        this._name = name;
        this._usesLitter = usesLitter;
        this._behavior = 0;
    }

    get name(){
        return this._name;
    }

    get usesLitter(){
        return this._usesLitter;
    }

    get behavior(){
        return this._behavior;
    }

    incrementBehavior(){
        this._behavior++;
    }

}

const pancakes = new Cat('pancakes', true);

console.log(pancakes._usesLitter)


class Animal{
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

class HospitalEmployee{
    constructor(name){
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name(){
        return this._name;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        this._remainingVacationDays -= daysOff;
    }

}

class Doctor{
    constructor(name, insurance){
        this._name = name;
        this._remainingVacationDays = 20;
        this._insurance = insurance;
    }
}

class Nurse{
    constructor(name, certifications){
        this._name = name;
        this._certifications = certifications;
        this._remainingVacationDays = 20;
    }
}

//extends keyword makes the methods of the animal class availble inside the cat class

//the super keyword calls the constructor of the parent class. In this case, super(name)
//passes the name argument of the cat class to the constructor of the animal class.
//when the animal constructor runs, it sets this._name = name; for new cat instances.

class CatInherited extends Animal { //extends gives access to all of the parent properties, methods & getters to
    constructor(name, usesLitter){ //child class
        super(name);                    //you must always call super method first on subclass constructors
        this._usesLitter = usesLitter; //otherwise you get a reference error.
    }
}

//so super inherits any variables given a set value within the extended class
//for example notice how we dont have a behavior var in catInherited yet we can accces it when creating
// a catInherited object.

const congress = new CatInherited('congress', true);
congress.incrementBehavior();
console.log(congress.name, 'bjk'); //you need getters to access constructor variables.
console.log(congress.behavior);


class NurseChild extends HospitalEmployee{
    constructor(name, certifications){
        super(name);
        this._certifications = certifications;
    }

    get certifications(){
        return this._certifications;
    }

    addCertification(newCertification){
        this._certifications.push(newCertification);
    }
}


const nurseOlynyk = new NurseChild('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays);


//In addition to the inherited features, 
//child classes can contain their own properties, getters, setters, and methods.

