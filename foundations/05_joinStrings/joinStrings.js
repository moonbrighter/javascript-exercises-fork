let firstName = "Carlos";
let lastName = "Stevenson";
let fullName = firstName + " " + lastName;
let thisYear = 1965;
let birthYear = 1947;
let age = thisYear - birthYear;

greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
