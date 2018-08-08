const team = {
    _players: [{
            firstName: "Varun",
            lastName: "Singh",
            age: 13,
        },
        {
            firstName: "Paul",
            lastName: "Hirsch",
            age: 12
        },
        {
            firstName: "Fred",
            lastName: "Forlet",
            age: 14
        }
    ],
    _games: [{
            opponent: "Titans",
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: "Georgia Tech",
            teamPoints: 30,
            opponentPoints: 35
        },
        {
            opponent: "Broncos",
            teamPoints: 40,
            opponentPoints: 33
        },
    ],
    
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
  addPlayer(playerObj) {
    let player = {
      firstName: playerObj.firstName,
      lastName: playerObj.lastName,
      age: playerObj.age
    };
    
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    
    this.games.push(game);
  }
};

team.addPlayer({firstName: "Steph", lastName: "Curry", age: 28});
team.addPlayer({firstName: "Lisa", lastName: "Leslie", age: 44});
team.addPlayer({firstName: "Bugs", lastName: "Bunny", age: 76});

team.addGame("Crusaders", 21, 19);

console.log(team.players);
console.log(team.games);