const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      {'A': 'Ben'}, 
      {'B': 'CardiB'}, 
      {'C': 'CardiB'}, 
      {'D': 'Paul'}
    ];
    return result;

    // Annotation:
    // In the creation phase, there are 3 variables declared and are undefined at this point.
    // ON line 7, there is a function that is stored in global memory.  The nested function will be skipped for now.  On line 28 we declare the changePerson function. 
    // During the execution phase, the variables previously declared are assigned their respective values.  Then we move down to the changePerson function invocation.  
    // In the creation phase of changePerson, we store in local memory the function beaufityPerson and its definition.  In the execution phase of changePerson, on line 8 we assess the conditional, because personA is not in local memory, we traverse up the scope chain and find the value 'Paul' and compares that to the string of " Paul".  Because 'person' is not declared inside the function scope, we look to the global scope and there is also, no 'person' variable declared.  As such, a VAR variable of person is declared globally and has a value of "CArdiB" because it is being executed not created.  
    // Then we have the invocation of beautifyPerson.  During its creation phase, not much happens, so we move to the execution phase.  Item number 1 for logA, personB is not in local memory for this function so it goes up the scope chain to 'changePerson' but it doesn't know what personB is, so when looking in the global space, personB is 'Ben'.
    // We then execute the conditional, personB is being checked to see if it includes a substring with "B".  Knowing that personB includes this letter, we execute the block statement.  PersonB is reassigned with the value of person.  Person is not in the local memory of 'beautifyPerson'.  changePerson does not have a declaration of person, so we look in the global space where person has been assigned the value of 'CardiB'.  PersonC is assingned the value of PersonB, personB does not have a declaration of an assigned value within beautify person, so we go up the scope chain to changePerson., which also does not have a declaration for this variable.  The global scope contains a declaration of personB which is assigned to be the value of personC.  The 2nd console.log should print the value of personC, which is 'CardiB'.  
    // After exiting the function, we reassign the value of personC to the value of personA, which at this point is "Paul".  Then, the 3rd log, personB, will log 'CardiB'.
    // The final log will be for the value of personC, which is "Paul".
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [{'A': 75}, {'B': 64}, {'C': 64}, {'D': 30}];
    return result;

    // Annotation:
    // We declare a global variable and a numberFunction during the creation phasec
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
    {'A': 'Yo'}, 
    {'B': 'Hey'},
    {'C': 'Hey'},
    {'D': 'Hello'}
    ];
    return result;

    // Annotation:
    // We declare a global variable and set it equal to "Hello".  When the greetingFunction is invoked, a functionally
    // scoped variable is declared and set equal to "yo".  Inside the if block, the newly declared, functionally scopred variable is not visible when logA is called, and so LogA is "yo".  Upon invocation of the newPhrase function, the functionally scoped variable just under the greetingFunction declaration is reassigned to 'Hey'.  Upon completion of newPhrase, logC is still looking for the functionally scoped variable's value, and logC is still 'hey'.  LogD is logged after all functions have run and looks to the globally scoped variable at the top of the exercise, which is still its initial value, 'hello'.
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [
    {'A': 'hi'},
    {'B': 'welcome'},
    {'C': 'welcome'},
    {'D': 'howdy'}
    ];
    return result;

    // Annotation:
    // We declare a global variable and set it equal to 'howdy'.  We declare a function and skip down to where 
    // it is called.  Inside the function, we declare a functionally scoped variable and set it equal to 'hi'.  
    // Inside that function, the if block, though it does evaluate to a truthy value, the newly declared variable 
    // is not visible outside the conditional, so logA returns 'hi'.  A new const is declared and inside that 
    // function, greeting is reassigned and the log is inside the function, so logB returns 'welcome'.  When 
    // newGreeting finishes running, logC returns the the reassignment of 'hi' from the functionally scoped 
    // variable, which is 'welcome'.  After all functions have finished, logD looks into the global scope, finds
    // the global variable of greeting, and returns 'howdy'.
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = [
    {'C': 'Brittany'},
    {'A': 'Nathaniel'},
    {'B': 'Nathaniel'},
    {'D': 'Brittany'}
    ];
    return result;

    // Annotation:
    // 
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = [
    {'A': 'Spot'},
    {'B': 'Spot'},
    {'C': 'Biscuit'},
    {'D': 'Biscuit'},
    {'E': 'Biscuit'}
    ];
    return result;

    // Annotation:
    // We declare a global variable and set it equal to 'Spot'.  Upon invocation of the petDog function, we log
    // dog, which looks outward and finds the global variable, logA returns 'Spot'.  The if block evaluates to true but the contents 
    // are contained inside the block scope.  When the rollOver function is invoked, dog is still pointing to the
    // global variable and is still equal to "Spot" when logB runs.  after the global variable has been reassigned
    // to 'Biscuit', logC returns 'Biscuit'.  LogD still points to the same reassignment of the global variable
    // and returns 'Biscuit'.  As well, after all functions have run, logE still points to the same variable.
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit();

    // Log D: fruit

    const result = [
    {'A': 'reference error'},
    {'B': 'mango'},
    {'C': 'mango'},
    {'D': 'apple'}
    ];
    return result;

    // Annotation:
    // We declare a global variable and set it equal to 'apple'.  We declare a function, and when it runs, the
    // first if block runs and a new functionally scoped variable is declared and set equal to 'mango'.  However, when we try to run logA, because we are block scoped and have not declared our const variable, our return is
    // in the Temporal Dead Zone and returns a reference error.  LogB, still inside the 1st if block, returns 'mango'.  When we logC, we are still inside function scope, and so VAR fruit leaks out of the if block into 
    // function scope.  Upon completion of all functions, logD points to the global variable and returns 'apple'.
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    };

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    };

    fn1();

    const result = [
    {'A': 4},
    {'D': 9},
    {'E': 10},
    {'B': 9},
    {'C': 4}
    ];
    return result;

    // Annotation:
    // We declare a global variable and set it equal to 4.  Upon entering the function fn1, when we logA, we get 4.  When we enter the // if block, we declare a block scoped variable and set it equal to 9, so when we run the fn2 function, we pass in 9 as the  
    // argument.  When we logD, it evaluates to 9, the passed in value.  Num is then reassigned to num + 1 and logE returns 10.
    // To finish the fn1 function, we declare a new const variable and set it equal to num, which is still 9, because we are block
    // scoped, and thusly logB returns 9.  After fn1 is finished running, newNum (an undeclared variable) takes the value of num from the function scope, and logC
    // returns 4.
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = [
    {'A': 75},
    {'B': 0},
    {'C': 75},
    {'D': 80},
    {'A': 55},
    {'B': 0},
    {'C': 55},
    {'E': 55}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = [
    {'A': 'ketchup sandwich'},
    {'D': 'gouda'},
    {'B': undefined},
    {'C': 'not a mediocre sandwich'},
    {'E': 'not a mediocre sandwich'},
    {'F': 'National Treasure'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = [
    {'A': 7},
    {'B': 7}
    ];
    return result;

    // Annotation:
    // We declare a global variable and set it equal to 10.  When we run foo, because num > 5, we reassign the global variable to 7.
    //  Then, after we exit the function, we log the variable again, and it is still equal to 7.
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = [
    {'A': 95},
    {'B': 90},
    {'C': 90}
    ];
    return result;

    // Annotation:
    // 
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = [
    {'A': 5},
    {'B': 6},
    {'C': 'reference error'},
    {'D': 6}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = [
    {'E': 'Pam'},
    {'A': 'Pam'},
    {'B': 'Pam'},
    {'C': 'Louisa'},
    {'D': 'Louisa'},
    {'F': 'Louisa'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [
    {'B': 'flipflop'},
    {'A': 'undefined'},
    {'C': 'flipflop'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;