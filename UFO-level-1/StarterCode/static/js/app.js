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

tableData.forEach(function(object){
  console.log(object);
  var row = tbody.append("tr");
});

tableData.forEach(function(object) {
  var row = tbody.append("tr");

  Object.entries(object).forEach(function([key, value]) {
  });
});

tableData.forEach(function(object) {
  var row = tbody.append("tr");
  Object.entries(object).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});
// selects button from html
var button = d3.select("button");

//event listener 
button.on("click", function() {

    //get the user input date
    var userInputDate = d3.select("#datetime").property("value");
    console.log("The user input date is:", userInputDate);

    
    
    var filteredData = tableData.filter(object => object.datetime === userInputDate);


    if (filteredData.length === 0) {
        d3.selectAll("th").remove();
        var row = tbody.append("th").text("No Sightings");
    };

    console.log(filteredData);

    
    d3.selectAll("td").remove();

    filteredData.forEach(object => {
        var row = tbody.append("tr");
        Object.entries(object).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    }); 
});