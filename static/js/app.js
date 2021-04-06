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

// Select button and form and assign selection to variables

var button=d3.select("#filter-btn")

var form=d3.select("form")

// Set change event on selected items

button.on("click", runEnter)

form.on("submit", runEnter)

// Select input element that will contain our user input

var inputElement=d3.select("#datetime")

function runEnter(){

    d3.event.preventDefault()

    // Retireve value from input element

    var inputValue=inputElement.property("value")

// Filter data based on user input
    

    var filteredData=data.filter(data=>data.datetime===inputValue)

    console.log(filteredData)

}


