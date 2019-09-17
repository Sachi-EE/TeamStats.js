
const team = {
  _players: [
    {
    firstName: 'Ryan',
    lastName: 'Kissinger',
    age: 11  
    },
   { 
    firstName: 'Sachintha',
    lastName: 'Adikaram',
    age: 28
   },
   {
    firstName: 'Kanishka',
    lastName: 'Adikaram',
    age: 31
   }
  ],

  _games: [
    {
      opponent: 'Bronchos',
      teamPoints: 42,
      opponentPoints: 27
    },

    {
      opponent: 'Seahawks',
      teamPoints: 42,
      opponentPoints: 47
    },
    {
      opponent: 'Cowboys',
      teamPoints: 42,
      opponentPoints: 27
    }
  ],

    get players() {
      return this._players;
    },

    get games() {
      return this._games;
    },

    addPlayer(firstName, lastName, age){
      let player = {
        firstName:firstName,
        lastName:lastName,
        age:age
      };
      this._players.push(player);
      
    }
  
};


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lebron', 'James', 31);


const person = {
  firstName: 'Sachi',
  lastName: 'Adikaram',
  age: 28,
  Education: ['Electrical Engineering at University of Central Oklahoma', 'Computer Science at University of Nothern Arizona']
};

console.log(person.Education[1]);