var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
function printTeacher(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
}
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
