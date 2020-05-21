import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log('Task 1:');

/*old  method (It works)
function team2014 (data){
    for (let i=0; i< data.length; i++){
        if ( data[i]['Year'] === 2014 && data[i]['Stage'] === "Final" ){
            // console.log(data[i]['Home Team Name']); 
        console.log(data[i]['Home Team Name'] +' , '+ data[i]['Away Team Name']+ ' , '+ data[i]['Home Team Goals']+ ' , '+ data[i]['Away Team Goals']+ ' , '+ data[i]['Win conditions'] )
        }
    }   
}
team2014 (fifaData); */

const team2014 = fifaData.filter(function(element){
     return (element['Year'] === 2014) && (element['Stage'] === "Final" );
    });  
console.log(team2014);
console.log(team2014[0]['Home Team Name'] + ' , ' + team2014[0]['Away Team Name'] + ' , ' + team2014[0]['Home Team Goals'] + ' , ' + team2014[0]['Away Team Goals'] + ' , ' + team2014[0]['Win conditions'] );



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

console.log('Task 2:');

function getFinals(data){
    const dataFinals = data.filter(function(element){
        return element['Stage'] === "Final";
    });    
    return dataFinals;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years`
 containing all of the years in the dataset */

 console.log('Task 3:');
 function getYears(data) {
    const years = [];
    data.forEach(function(element){       
         years.push(element.Year);
    });    
    console.log(years);
 };
 getYears(getFinals(fifaData));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner 
(home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

// "Home Team Name": "Italy",
//     "Home Team Goals": 2,
//     "Away Team Goals": 1,
//     "Away Team Name": "Czechoslovakia",

console.log('Task 5:');
function getWinners(data) {
    const winHome = data.filter(function(element){
        return element['Home Team Goals'] > element['Away Team Goals']
    });
    const winHome1 = winHome['Home Team Goals'];
    console.log(winHome1);

    const winAway = data.filter(function(element){
        return element['Home Team Goals'] < element['Away Team Goals']
    });
    let winAway1 = winAway['Away Team Goals'];
    console.log(winAway1);

    // let winers = winHome1.concat(winAway1);
    // console.log(winers);
    // return winers;
};

getWinners(getFinals(fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
