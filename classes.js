class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  logoin() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now: ", this.score);
    return this; //returns theinstance of the object, a particular user
  }
}

//class inheritance, the Admin class inherits from the User class
class Superadmin extends User {
  deleteUser(user) {
    //cycle through each element inside the users array and delete/abort/filter-out the user that is passed in
    users = users.filter((u) => {
      return u.email != user.email; // will be false and filtered out
    });
  }
}

// different instances of the class (holds differend values)
let userOne = new User("dr@mail.com", "Dr. John");
let userTwo = new User("joe@mail.com", "Joe");
let superadmin = new Superadmin("admin@mail.com", "Shane");

//method chaining - needs a return value which is not undefined
// userOne.logoin().updateScore().updateScore().logout();

let users = [userOne, userTwo, superadmin];

// admin.deleteUser(userOne);

console.log(users);
