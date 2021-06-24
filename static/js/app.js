// from data.js
var tableData = data;

// YOUR CODE HERE!
function printTable(datesData) {
    var tbody = d3.select("tbody");
    tbody.html("");
    datesData.forEach((rowData) => {
        var row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
            var celData = row.append("td");
            celData.text(value);
        })
    })
}

printTable(tableData);

function filterDates() {
    var date = d3.select("#datetime").property("value");
    if (date) {
        var filterData = tableData.filter(row => row.datetime == date);
    }
    printTable(filterData);
}
d3.selectAll("#filter-btn").on("click", filterDates);