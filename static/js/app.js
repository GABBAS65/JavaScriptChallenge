// from data.js
var tableData = data;

// YOUR CODE HERE!

for (var i = 0; i < tableData.length; i++) {
    console.log(tableData[i])
    var data = tableData[i];
    var date = data.datetime;
    var city = data.city;
    var state = data.state;
    var country = data.country;
    var shape = data.shape;
    var durationMinutes = data.durationMinutes;
    var comments = data.comments;

    addRows()
}

function addRows() {
    var table = document.getElementById( 'ufo-table' ),
        row = table.insertRow(-1),
        dateRow = row.insertCell(0),
        cityRow = row.insertCell(1),
        stateRow = row.insertCell(2),
        countryRow = row.insertCell(3),
        shapeRow = row.insertCell(4),
        durationRow = row.insertCell(5),
        commentsRow = row.insertCell(6);

        dateRow.innerHTML = date;
        cityRow.innerHTML = city;
        stateRow.innerHTML = state;
        countryRow.innerHTML = country;
        shapeRow.innerHTML = shape;
        durationRow.innerHTML = durationMinutes;
        commentsRow.innerHTML = comments;

  }



function dateFilter() {
    var user = document.getElementById("datetime").value;
    console.log(user)

    document.getElementById("ufo-table").innerHTML = ""
    var table = document.getElementById("ufo-table");
    headerRow = table.insertRow(0);
    headerRow.insertCell(0).innerHTML = "Date"
    headerRow.insertCell(1).innerHTML = "City"
    headerRow.insertCell(2).innerHTML = "State"
    headerRow.insertCell(3).innerHTML = "Country"
    headerRow.insertCell(4).innerHTML = "Shape"
    headerRow.insertCell(5).innerHTML = "Duration"
    headerRow.insertCell(6).innerHTML = "Comments"

    var filteredData = tableData.filter(tableData => tableData.datetime == user);

    console.log(filteredData);

    for (var i = 0; i < filteredData.length; i++) {
        var filterTable = document.getElementById( 'ufo-table' ),
        filterRow = filterTable.insertRow(-1),
        dateRowFilter = filterRow.insertCell(0),
        cityRowFilter = filterRow.insertCell(1),
        stateRowFilter = filterRow.insertCell(2),
        countryRowFilter = filterRow.insertCell(3),
        shapeRowFilter = filterRow.insertCell(4),
        durationRowFilter = filterRow.insertCell(5),
        commentsRowFilter = filterRow.insertCell(6);

        dateRowFilter.innerHTML = filteredData[i].datetime;
        cityRowFilter.innerHTML = filteredData[i].city;
        stateRowFilter.innerHTML = filteredData[i].state;
        countryRowFilter.innerHTML = filteredData[i].country;
        shapeRowFilter.innerHTML = filteredData[i].shape;
        durationRowFilter.innerHTML = filteredData[i].durationMinutes;
        commentsRowFilter.innerHTML = filteredData[i].comments;
    }

}

