// from data.js
var tableData = data;
var tbody = d3.select("tbody");


// YOUR CODE HERE!
// tableData.forEach(function(object){
//     console.log(object);
// });

var city_name = tableData.map(function(city) {
    return city.city;
  });

console.log(city_name);
// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
tableData.forEach(function(object){
  console.log(object);
  var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(object) {
  var row = tbody.append("tr");

  Object.entries(object).forEach(function([key, value]) {
    console.log(key, value);
  });
});
// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(object) {
//   var row = tbody.append("tr");

//   Object.entries(object).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(object) {
  var row = tbody.append("tr");
  Object.entries(object).forEach(function([key, value]) {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});