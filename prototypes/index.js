const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.filter(cat => cat.color === 'orange').map(kitty => kitty.name);
    return result;

    // Annotation:
    // Filter through to find cats with orange as their color, map to just return the 
    // names.
  },

  sortByAge() {
    // Sort the kitties by their age
    let sortedKitties = [...kitties]
    const result = sortedKitties.sort((a, b) => {
      return b.age - a.age;
    });
    return result;

    // Annotation:
    // To sort the kitties from youngest to oldest, use the subtraction operator
    // This does not actually subtract one from the other, but orders them from
    // least to greatest.
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    let sortedKitties = [...kitties]
    const result = sortedKitties.map((cat) => {
      cat.age += 2
      return cat
    })
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((obj, currentClub) => {
      currentClub.members.forEach(person => {
        if (!obj[person]) {
        obj[person] = []
      } 
        obj[person].push(currentClub.club)
     })
  
        return obj;
    }, {});
    return result;

    // Annotation:
    // Use reduce because we are creating an object.  Use forEach to look at each
    // person in the members array.  If there is no key with that person's name
    // set the key and set its initial value to an empty array.  For every key
    // push in the current club value, because it will correspond to the person.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => {
      // create studentsPerInstructor variable
      // assign it to mod.students / mod.instructors
      // return an object with the mod number and studentsPerInstructor
    let studentsPer = mod.students / mod.instructors
    return {mod: mod.mod, studentsPerInstructor: studentsPer}
        });
    return result;

    // Annotation:
    // We are returning an array of the same length, with some changes.
    // We map over the array and create a variable that will
    // house the average of students per instructor, named as such.
    // I then need to return an object.  I hardcode the key names and use dot notation to access the value of mod to be inserted into the value.  
    // I then hardcode studentsPerInstructor to set the key
    // and set my value equal to the variable I created.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {

    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.reduce((arr, currCake) => {
      let cake = {flavor: currCake.cakeFlavor,
      inStock: currCake.inStock}
      arr.push(cake)
        return arr;
        }, [])
    return result;

    // Annotation:
    // We need to create 2 properties on each object in our returned array.  
    // We do this using reduce because we can create an object and set properties
    // on it.  Using object literals we can set our values with hardcoded keys.
    // Then we just need to push each new object into the final array
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
      return result;

    // Annotation:
    // After filtering for cakes that have an inStock value greater than zero, 
    // we can just return the filtered array
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => {
      acc += cake.inStock
    return acc;
    }, 0);
    return result;

    // Annotation:
    // Reduce lets us return a new data type.  We sum up the total cakes and 
    // return the accumulated value.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((arr, current) => {
      current.toppings.forEach((topping) => {
        if (arr.indexOf(topping) === -1) {
      arr.push(topping)
        }
      })
      return arr;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((obj, currentCake) => {
      currentCake.toppings.forEach((topping) => {
        if (!obj[topping]) {
      obj[topping] = 0
      }
      obj[topping] ++  
    })
      return obj;
    }, {})
    return result;

    // Annotation:
    // We need reduce because we are going to create a new array from objects.
    // Iterating over the toppings array with forEach, we ask if something does 
    // exist in our array, and if it does not, we push it in.  This makes sure 
    // we don't get duplicates.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(room => room.program === "FE");
    return result;

    // Annotation:
    // Filter through the array and check to see if the program key holds
    // values that are equal to 'FE'.  
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((obj, current) => {
      if (current.program === 'FE') {
        obj.feCapacity += current.capacity
      } else {
      obj.beCapacity += current.capacity
    }
    return obj;
      }, {feCapacity: 0,
          beCapacity: 0});
    return result;

    // Annotation:
    // Use reduce becuase the length of the array will be different from the dataset.
    // Set up the reduce so that the initial value of the returned object sets the base
    // count of FE and BE to 0.  This way, we won't overwrite the value each time.
    // Then, we check to see if the current program is equal to FE/BE and if so, add
    // to the accumulated value in the returned object.
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {
      return a.capacity - b.capacity
    });
    return result;

    // Annotation:
    // Look into the classrooms array and sort the capacity property from least
    // to greatest.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((sum, currentBrewery) => {
      sum += currentBrewery.beers.length
    return sum;
    }, 0);
    return result;

    // Annotation:
    // Let's use reduce becuase we are getting a sum of the total beers.  
    // Looks at the length of the beers property on each iteration and add that to // the accumulator.
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map((brewery) => {
      return {name: brewery.name, beercount: brewery.beers.length}
    });
    return result;

    // Annotation:
    // We are returning an array of the same length, but with some changes, so
    // we use .map.  When we return the desired array of objects, we hardcode the
    // property names and use dot notation to access the values.
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((array, currentBrewery) => {
      array = array.concat(currentBrewery.beers)
      return array;
    }, []).sort((a, b) => {
      return a.abv - b.abv
    }).pop();
    return result;

    // Annotation:
    // 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map((instructor) => {
      let matchingCohort = cohorts.find((cohort) => {
      return cohort.module === instructor.module
    })
      let numberOfStudents = matchingCohort.studentCount
      return { name: instructor.name, studentCount: numberOfStudents }
    });
    return result;

    // Annotation:
    // Our instructor array is the length that we want to return after
    // our extraction, so we reach for map.  Then we will iterate over 
    // the cohorts array to find the module that matches the module in
    // in our instructors array and save that to a varaible.  
    // From the matching cohort's student count, we save that value to
    // a variable so that when we set up our object literal at the end 
    // of our map, we can access the values easier.
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((obj, cohort) => {
      let keyNames = `cohort${cohort.cohort}`
      let teachersPerMod = instructors.reduce((sum, teacher) => {
        sum += teacher.module === cohort.module
        return sum;
    }, 0)
      let average = cohort.studentCount / teachersPerMod
      obj[keyNames] = average
        return obj;
    }, {});
    return result;

    // Annotation:
    // We are making a new object, so we need to reduce.  To set the
    // key names, we use a template literal with interpolation to create
    // a varaible that we can insert into the returned obj using bracket
    // notation.  To get the number of teachers per mod, we need to 
    // get a number.  To get this connection, we reduce again and 
    // increment the sum when the module numbers match.  The average 
    // that we want to return is saved to a variable so we can 
    // dynamically set it to the value of the returned object.
    // We set it equal to the student counts from the cohorts array 
    // and divide it by the teachers per mod variable.
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = instructors.reduce((obj, instructor) => {
      obj[instructor.name] = []
      instructor.teaches.forEach((subject) => {
        cohorts.forEach((cohort) => {
          if (cohort.curriculum.includes(subject)) {
            if (!obj[instructor.name].includes(cohort.module)) {
            obj[instructor.name].push(cohort.module)
            }
          }
        })
      })
      return obj;
    }, {});
    return result;

    // Annotation:
    // We want an object, so we reduce.  The instructor names are the keys that
    // we want to use so it makes sense to iterate over the instructors first.  
    // We set up the keys using bracket notation and set the value to an empty     // array.  Then, we look at each instance of instructor accessed via reduce
    // and for each subject in the teaches array, we will check against the
    // cohorts array to see if the cohort curriculum includes the same subject
    // that matches what each instructor teaches.  If the value of the keys
    // does not include the matching cohort module, then push the value into the
    // array that is the value of the object keys.  Then return the object.
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = Object.keys(bosses).map((boss) => {
      const sidekickLoyalty = sidekicks.reduce((sum, sidekick) => {
        if (sidekick.boss === bosses[boss].name) {
          sum += sidekick.loyaltyToBoss
        }
        return sum;
      }, 0)
      return { bossName: bosses[boss].name, sidekickLoyalty: sidekickLoyalty }
    });
    return result;

    // Annotation:
    // Our array of boss objects (that was returned from Object.keys) is as // long as we want our returned array to be, so we can use map.  
    // Inside our map, we need to sum up the value of sidekicks who are loyal
    // to their bosses, hence reduce.  If the sidekick's boss property is 
    // equal to the name of the boss, we can add the sum for the loyalty of
    // each sidekick.  Then we return an object literal that references those
    // values with hardcoded keys.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = Object.keys(constellations).reduce((array, constellationKey) => {
      constellations[constellationKey].stars.forEach((starName) => {
        stars.forEach((starInstance) => {
          if (starInstance.name === starName) {
            array.push(starInstance)
          }
        })
      })
      return array;
    }, []);
    return result;

    // Annotation:
    // We use object.keys to access the keys in the constellations object, then 
    // we can reference those keys dynamically to get the stars array.  Use a 
    // forEach over that array to access the starNames in that array.  Then,
    // from the stars array, we use forEach to look at each star(starInstance) and 
    // check to see if the starInstance name is equal to starName.  If it is, 
    // push it into our array to be returned.
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = stars.map((star) => {
      return star.constellation
    })
    return result;

    // Annotation:
    // Hmmmm, this one was confusing.  Mostly becuase of the 'answer' that 
    // was given.  But, actually, pretty simple.  Map over the stars and
    // return the constellation values.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((sum, character) => {
      character.weapons.forEach((weapon) => {
        sum += weapons[weapon].damage
      })
      return sum;
    }, 0);
    return result;

    // Annotation:
    // We are returning a number, so we need reduce.  By reducing, we have access
    // to the weapons array that we can forEach over.  As well, because each 
    // of 'weapon' will be a string, we can reference it in our weapons object via
    // bracket notation, then can use dot notation to get to the damage value.  
    // We can then sum up the values and return them.
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};



module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts
};