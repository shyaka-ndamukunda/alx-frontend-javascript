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
function printTeacher(firstName, lastName) {
    // This is a test comment. It won't affect the function's output.
    return "".concat(firstName[0], ". ").concat(lastName);
}
console.log(printTeacher("John", "Doe")); // Output: J. Doe
