var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "Study javaScript",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "Study javaScript!",
    "eat healthy!"
];
var todosLength  = todos.length;

// for  (var i=0; i < todosLength; i++) {
//     console.log(todos[i], i);
// }

// var counterOne = 0;
// while( counterOne < 10) {
//     console.log("while", counterOne);
//     counterOne++;
// }

// var counterTwo = 10;
// do {
//     console.log("do while", counterTwo)
//     counterTwo--;
// } while(counterTwo > 0);

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);