// from data.js
var tableData = data;

// YOUR CODE HERE!

var table=d3.select("#ufo-table")

var body=d3.select("tbody")




// row.append("td").text()

data.forEach(entry=>{

    var row=body.append("tr")

    
    Object.entries(entry).forEach(([key, value])=>{
    
        var cell=row.append("td")
        cell.text(value)

    })
})