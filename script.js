'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sund'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanched object literals
  openingHours,

  // Method
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Method
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// // Split and join
// console.log('a+very+nice+string'.split('+'));

// const [firstName, lastName] = 'Isaac Rendon'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitaliztion = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// // const capitaliztion = function (name) {
// //   const names = name.split(' ');
// //   const newNames =
// //   const namesUpper = names.replace((names[0], names[0].toUpperCase()));
// //   console.log(namesUpper);
// // };

// capitaliztion('jessica ann smith davis');
// capitaliztion('isaac rendon');

// // PAdding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('Isaac'.padStart(25, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(12313123123123));
// console.log(maskCreditCard('123123123123123'));

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed...';
// console.log(message2.repeat(5));
// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'plane'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing email
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replacing
// const priceGB = '288,97P';
// const priceUS = priceGB.replace('P', '$').replace(',', '.');
// console.log(priceUS);

// const announcment =
//   'All passangers come to boarding door 23, Boarding door 23!';
// console.log(announcment.replaceAll('door', 'gate'));
// console.log(announcment.replace(/door/g, 'gate'));

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo'));
// {
//   console.log('Part of the new Airbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('welcome aboard');
//   }
// };
// checkBaggage('I have a laptop, some food, and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(4, 7);

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -2));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat :(');
//   } else {
//     console.log('You got lucky :D');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).





GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no duplicates)

// // console.log(gameEvents);

// // const events = new Set();

// // for (const [, value] of gameEvents) {
// //   events.add(value);
// // }

// // console.log(events);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair.
// //  So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Print the following string to the console:
// // "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(
//   `An event happend, on average every ${90 / gameEvents.size} minutes`
// );

// // 4. Loop over the events and log them to the console, marking whether it's in the first half
// //  or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL

// for (const [key, event] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF] ${key}: ${event}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${event}`);
//   }
// }

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct :D'],
//   [false, 'try again'],
// ]);

// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const rest = new Map();
// rest.set('name', 'Cassariano');
// rest.set(1, 'Sarasota, Florida');
// console.log(rest.set(2, 'Venice, Florida'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'test');
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// console.log(orderSet);

// console.log(new Set('Isaac'));

// console.log(orderSet.size);

// console.log(orderSet.has('Pasta'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const stafUniqiue = new Set(staff);
// console.log(stafUniqiue);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('isaacrendon').size);

//////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!


BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
 and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")

// // for (const [goal, player] of game.scored.entries()) {
// //   console.log(`Goal ${goal + 1}: ${player}`);
// // }

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages,
// //   you can go check if you don't remember)

// // const oddsValues = Object.values(game.odds);
// // console.log(oddsValues);

// // let oddSum = 0;

// // for (const odd of oddsValues) {
// //   oddSum += odd;
// // }

// // console.log(oddSum / oddsValues.length);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw").
// //  HINT: Note how the odds and the game objects have the same property names 😉

// // console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// // console.log();
// // console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// console.log(Object.entries(game.odds));
// console.log(game.team1);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// //Proerty VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object values
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// // WITH opetional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sund'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(` On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Isaac', email: 'hello@isaac.io' }];

// console.log(users[0]?.name ?? 'User array empty');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}}`);
// }

// ///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data.
 So here are your tasks:






TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeeper and the others are field players.
// // For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers')
// //  with all the remaining 10 field players
// const [gk, fieldPlayers] = game.players;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players.
// // So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// // and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');

// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win.
// // Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// // const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
//   // numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// OR assingment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assingment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// console.log('---- OR ----');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Isaac');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Isaac');
// console.log(7 && 'Isaac');

// console.log('Hello' && 23 && null && 'Isaac');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // 1) Destructuring

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 3);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('Mushroom', 'Onion', 'Spinach', 'Cheese');

// restaurant.orderPizza('mushroom');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Arrat
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Isaac';
// const letters = [...str, '', 'S'];
// console.log(letters);
// console.log(...str);

// // Real world example
// const ingredients = [
//   //   prompt("let's make pasta! Ingredient 1? "),
//   //   prompt("let's make pasta! Ingredient 2? "),
//   //   prompt("let's make pasta! Ingredient 3? "),
// ];
// // console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {
//   foundingYear: 1998,
//   ...restaurant,
//   founder: 'Guiseppe',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Cassariano';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '23:30',
//   address: '11304 parkside pl',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: '11304 parkside pl',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Defualt values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching Variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
