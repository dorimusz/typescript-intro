// generic object type: it'll be object type, no key/value pairs as objects, there's key/type pairs. Not an actual object, just the structure of it.
const personType: {
  name: string;
  age: number;
} = {
  name: "Dor",
  age: 27,
};

/*
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // TUPLE, fixed length and type array
} = {
  name: "Dor",
  age: 27,
  hobbies: ["asd", "asd2"],
  role: [2, "author"],
};


// person.role.push("admin");
// person.role[1] = 10;
// person.role = [1, "admin", "admin "]; // not assignable

let favoriteActivity: any[];
favoriteActivity = ["asd", 1, false];

let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //hobbies can be only strings and ts knows this
  // console.log(hobby.map()) //ts knows this is not an array but a string, so it'll throw an error when trying to map it
}
*/

//ENUM
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
enum Roles {
  ADMIN = "ADMIN",
  READ_ONLY = 150,
  AUTHOR = 55,
}

const person = {
  name: "Dor",
  age: 27,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN, //like an object identifier, but it's an enum, so it's a number (assigns labels to numbers)
};

if (person.role === ADMIN) {
  console.log("is admin");
}

//ANY TYPE - can be anything, fallback to any type
