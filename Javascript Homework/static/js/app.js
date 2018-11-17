// from data.js
var tableData = data;

// Select the filter button
var filterbutton = d3.select("#filter-btn");

filterbutton.on("click", function () {

    d3.event.preventDefault();

    d3.selectAll("tr").remove();

    // Get a reference to the table body
    var tbody = d3.select("tbody");


    // Getting a reference to the input element on the page
    var inputField = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputField.property("value");

    if (inputValue === "") {
        alert("Please enter a date (format: MM/DD/YYYY)");
    }
    else {

        tableData.forEach(function (ufosight) {
            if (ufosight.datetime === inputValue) {
                var row = tbody.append("tr");
                Object.entries(ufosight).forEach(function ([key, value]) {
                    // Append a cell to the row for each value
                    var cell = row.append("td");
                    cell.text(value);
                })
            }
        });
    }
});

