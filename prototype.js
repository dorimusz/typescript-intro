// constructor function - a function that is used to create an instance of a class
// emulate classes
function Profile(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  //   this.login = function () {
  //     console.log(this.email, "just logged in");
  //   };
}

//only the constructor function (and stuff) has prototype access
Profile.prototype.login = function () {
  this.online = true;
  console.log(this.email, "just logged in");
};
Profile.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "just logged out");
};

//the arguments the constructor receives are the properties of the object in an array
function Admin(...args) {
  console.log(args); //this is the array of arguments, have to pass it to user constructor
  Profile.apply(this, args); //passing the context of this and the arguments it needs - inheriting the properties of the Profile constructor
  this.role = "superadmin";
}

Admin.prototype = Object.create(User.prototype); //inheriting the User prototype so functions are available on the admin
// adding an additional property to only the admin class -  does not affect the user class
Admin.prototype.deleteUser = function (u) {
  profiles = profiles.filter((profile) => {
    return profile.email != u.email;
  });
};

let profileOne = new Profile("dr@mail.com", "Dr. John");
let profileTwo = new Profile("joe@mail.com", "Joe");
let admin = new Admin("admin@mail.com", "Admin Bob");
let profiles = [profileOne, profileTwo, admin];

console.log(profileOne);
console.log(admin);

//use prototype to add methods to the class
