// from data.js
var tableData = data;

// YOUR CODE HERE!

// Inputting table data into website

var table_body = d3.select("tbody")

tableData.forEach((item) => {
    var row = table_body.append("tr");
    Object.entries(item).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// var button = d3.selectAll("button").on("click", function() {
//     // What will be logged out? What is `this` in this case?
//     console.log(this);
//     // Answer: It will console log the `button` element.
//   });


