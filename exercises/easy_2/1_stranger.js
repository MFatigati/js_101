function greetings(nameArr, idObject) {
  let fullName = "";
  nameArr.forEach(function(x) {
    fullName = fullName + x + " "; // could have just used .join(" ")
  });
  fullName = fullName.trimEnd();

  console.log(
    `Well met, ${fullName}, it's not every day I see a ${idObject.occupation} who has achieved the title of ${idObject.title}.`
  );

}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

/*
Create a function that takes 2 arguments, an array and an object. The array will contain
2 or more elements that, when combined with adjoining spaces, will produce a person's name.
The object will contain two keys, "title" and "occupation", and the appropriate values. 
Your function should return a greeting that uses the person's full name, and mentions 
the person's title.

P
  INPUT
    -array with 2 more more elements that form a name when joined with spaces
    -object with two keys, "title" and "occupation", and their values
  OUTPUT
    -log a greeting to console that uses full name, plus the values for their title and occupation.
  RULES
  -
E

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

D
  Array will need to be turned into a string.
  Store name in a variable
  Template literal will allow putting variable and object values directly in the string

A
Extract a person's name, title and occupation, and put this into a greeting.

Declare a variable set to an empty string.
Iterate over all the values in the array contained in the first argument.
  For each element, push it onto an empty string.

Create a template literal with space for the name, title and occupation.
  -Put the name variable in the name spot.
  -using dot notation, reference the value of the title and occupation.

Print the template literal.
*/