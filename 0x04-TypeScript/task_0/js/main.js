var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    location: "London"
};
var studentsList = [student1, student2];
document.addEventListener("DOMContentLoaded", function () {
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
});
