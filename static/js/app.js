// from data.js
var tableData = data;

// YOUR CODE HERE!

var table=d3.select("#ufo-table")

var body=d3.select("tbody")

var row=body.append("tr")

// row.append("td").text()

// data.forEach(entry=>{
//     row.append("td").text(entry.date)
//     row.append("td").text(entry.city)
//     row.append("td").text(entry.state)
//     row.append("td").text(entry.country)
//     row.append("td").text(entry.durationMinutes)
//     row.append("td").text(entry.comments)
// })