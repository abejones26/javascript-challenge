// from data.js
// var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(data);

data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");

    Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

