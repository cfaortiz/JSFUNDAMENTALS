const robot = {
    _numOfSensors: 15,

    get energyLevel(){
        if(typeof(this._energyLevel) === 'number'){
            return `My current energy level is ${this._energyLevel}`;
        }else{
            return 'System malfunction: cannot retrieve energy level'
        }
    },
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
          return this._numOfSensors;
        } else {
          return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num){
        if( (typeof(num)==='number') && num>=0 ){
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0')
        }
    }
};

robot._model = '1E78V2';
robot._energyLevel = 100;
robot.numOfSensors = 100;
console.log(robot.numOfSensors)


console.log(robot.energyLevel);


//factory functions


const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        _name: name,
        _age: age,
        _energySource: energySource,
        _catchPhrase: catchPhrase,
        scare(){
            console.log(this._catchPhrase);
        }
    }
}

// const ghost = monsterFactory('Casper', 300, 'ectoplasm', 'BOO!');

// console.log(ghost.scare())


// const robotFactory = (model, mobile) => {
//     return {
//         _model: model,
//         _mobile: mobile,
//         beep(){
//             console.log('Beep Boop');
//         }

//     }
// }

// const r2D2 = robotFactory('xyz', true);

// console.log(r2D2._model);

// const monsterFactory = (name, age) => {
//     return{
//         _name: age,
//         _age: age,
//     }
// };

//or short hand which makes it easier,


const robotFactory = (model, mobile) => {
    return{
        model,
        mobile
    }
}


const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preference: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

// const residence = vampire.residence;
// console.log(residence);

const {residence} = vampire;

console.log(residence);

//using destrucor to access nested properties

const {day} = vampire.preference;
console.log(day);


const robot2 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };


  const {functionality} = robot2;

  // now we can use the funcitonality destructor short cut to call methods in that 
  //object

  functionality.beep();

  const robot3 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot3);

console.log(robotKeys[0]);

const robotEntries = Object.entries(robot3)

console.log(robotEntries[0][1]);


//Object.assign coppies second arg into 1st arg so 1st arg gets mutated if they have similar variables
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot3);


console.log(newRobot);


/*

                                Review

The object that a method belongs to is called the calling object.

The this keyword refers the calling object and can be used to access properties of the calling object.

Methods do not automatically have access to other internal properties of the calling object.

The value of this depends on where the this is being accessed from.

We cannot use arrow functions as methods if we want to access other internal properties.

JavaScript objects do not have built-in privacy, rather there are conventions 
to follow to notify other developers about the intent of the code.

The usage of an underscore before a property name means that the original developer did not intend 
for that property to be directly changed.

Setters and getter methods allow for more detailed ways of accessing and assigning properties.

Factory functions allow us to create object instances quickly and repeatedly.

There are different ways to use object destructuring: one way is the property value shorthand and 
another is destructured assignment.

As with any concept, it is a good skill to learn how to use the documentation with objects!

*/




