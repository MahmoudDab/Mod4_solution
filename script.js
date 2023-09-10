(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i][0].toLowerCase(); // Get the first letter

    // Use a single function to determine the greeting
    var greeting = determineGreeting(firstLetter, names[i]);

    // Output the greeting to the console
    console.log(greeting);
  }

  function determineGreeting(firstLetter, name) {
    if (firstLetter === 'j') {
      return "Good Bye " + name;
    } else {
      return "Hello " + name;
    }
  }
})();
