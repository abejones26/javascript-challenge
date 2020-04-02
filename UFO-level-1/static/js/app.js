// This is where my results will be appended
var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(data);

// This function append the filtereddata results into a table on the html
// Looping through 'data
data.forEach(function(sightings) {
    console.log(sightings);

    // Using d3 to append one table row 'tr' for each sighting
    var row = tbody.append("tr");

    // Using object.entries to console.log my value results
    Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);

        // Appending value results into the html table
        var cell = row.append("td");
        cell.text(value);
    });
});

