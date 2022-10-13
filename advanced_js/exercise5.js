// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const forEachUsernames = [];
array.forEach(player => forEachUsernames.push(`${player.username}!`));
console.log('forEachUsernames', forEachUsernames);

//Create an array using map that has all the usernames with a "?" added to each of the usernames
const mapUsernames = array.map(player => `${player.username}?`);
console.log('mapUsernames', mapUsernames);

//Filter the array to only include users who are on team: red
const filterTeamRedPlayers = array.filter(player => player.team === "red");
console.log('filterTeamRedPlayers', filterTeamRedPlayers);

//Find out the total score of all users using reduce
const reduceTotalScore = array.reduce(
  (accumulator, player) => {return accumulator + player.score},
  0);
console.log('reduceTotalScore', reduceTotalScore);


// (1), what is the value of i?
"The current index of the array item"
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

const newArray2 = arrayNum.map((num, i) => num * 2);
console.log("newArray2", newArray2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const allItems = array.map(player => {
  const newItems = player.items.map(item => `${item}!`);
  player.items = newItems;
  return player;
});
console.log("allitems", allItems);
