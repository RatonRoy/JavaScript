const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
console.log(numArray);


// closure 

function closureDemo () {
    let x = 10;
    function anotherFunction() {
        let y = 20; 
        console.log('Sum : ' + (x + y));
    }
    return anotherFunction; 
}

const returnFunc = closureDemo();
console.log(returnFunc);
console.log(returnFunc());

// IIFE 

(function selfInvoke() {
    console.log("Hello world");
}())

const sum = function () {
    return 10 + 20 ; 
}(); 
console.log(sum);

/* call(), apply(), and bind method  */

const parentObj = {
    firstName : 'ABC', 
    age : 28, 
    job : 'student', 
    childObj : {
        firstName : 'def', 
        value : function() {
            console.log('My Name is ' + this.firstName);
        }
    }
}
parentObj.childObj.value();
// call method refer this to the parentObj 

parentObj.childObj.value.call(parentObj);


const karim = {
    name : 'karim rahman', 
    dob : 1986, 
    age : function(currentAge) {
        console.log(this.name + ' age is ' + (currentAge - this.dob));
    }
}

const rahim = {
    name : 'rahim rahman', 
    dob : 1996, 
}
karim.age.call(rahim, 2022);

// call() and bind() method take unlimited arguments but first argument must refer to the object of the this keyword. 

// apply() method only take two arguments first is an object references and second is argument array. 

const millon = {
    name : 'millon rahman', 
    dob : 1986, 
    age : function(currentAge, msg) {
        console.log( msg + this.name + ' age is ' + (currentAge - this.dob));
    }
}

const kisor = {
    name : 'kisor rahman', 
    dob : 1996, 
}

millon.age.apply(kisor, [2020, ' Hello everyOne '])

    
