// from data.js
// var tableData = data;
var tbody = d3.select("tbody");

var sightdate = data;

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(sightdate);

    var filteredData = sightdate.filter(sightdate => sightdate.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(sightings) {
        console.log(sightings);
        var row = tbody.append("tr");

        Object.entries(sightings).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });


});
