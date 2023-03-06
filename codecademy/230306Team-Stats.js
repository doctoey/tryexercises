const team = { //step 1
  _players :[ //step 2-3
    {firstname: "toey",
    lastname: "javasung",
    age: 17},
    {firstname: "mtro",
    lastname: "wangpaole",
    age: 27},
    {firstname: "huzs",
    lastname: "liwaner",
    age: 37}
  ], 

  _games :[//step 2 , 4
    {opponent: "Chelsea",
    teamPoints: 3,
    opponentPoints: 2},
    {opponent: "ManU",
    teamPoints: 1,
    opponentPoints: 3},
    {opponent: "Liver",
    teamPoints: 0,
    opponentPoints: 2}
    ], 

get players() {   //step 5
    return this._players;
  },

get games() {   //step 6
    return this._games;
  },

addPlayer: function(firstName, lastName, age) { //step 7
    const newPlayer = {firstName: firstName,
                   lastName: lastName,
                   age: age};
    this._players.push(newPlayer);
  },
  
  addGame: function(opponentName, teamPoints, opponentPoints) { //step 9
    const newGame = {opponent: opponentName,
                    teamPoints: teamPoints,
                    opponentPoints: opponentPoints};
    this._games.push(newGame);
  },
};
team.addPlayer('Bugs', 'Bunny', 76); //step 8
team.addGame('Titans', 100, 98); //step 10

console.log(team.players);

console.log(team.games);
