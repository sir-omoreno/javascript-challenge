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


var button = d3.select("#filter-btn");
button.on("click", enter_date_function);

function enter_date_function() {
    var inputDate = d3.select("#datetime").property("value")

    var filterData = tableData.filter(siting => siting.datetime === inputDate)

    var tbody = d3.select("tbody")
    tbody.html("")

    if (filterData.length == 0) {
        alert(`check date format.`);
    } else {
        // Add the data if the date is correct
        filterData.forEach((ufo_siting) => {
            var row = d3.select("tbody").append("tr")
            Object.entries(ufo_siting).forEach(([key, value]) => {
                var cell = row.append("td")
                cell.text(value)
            })
        })}
    };







