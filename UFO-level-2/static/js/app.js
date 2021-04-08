// from data.js
var tableData = data;

var table=d3.select("#ufo-table")

var body=d3.select("tbody")

// Append table to HTML

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

var dateInputElement=d3.select("#datetime")

var cityInputElement=d3.select("#city")

var stateInputElement=d3.select("#state")

var countryInputElement=d3.select("#country")

var shapeInputElement=d3.select("#shape")

// Define function for change event

    

function runEnter(){

    d3.event.preventDefault()

    // Retireve value from input element

    body.html("")

    var dateInputValue=dateInputElement.property("value")

    var cityInputValue=cityInputElement.property("value")

    var stateInputValue=stateInputElement.property("value")

    var countryInputValue=countryInputElement.property("value")

    var shapeInputValue=shapeInputElement.property("value")


    // console.log(dateInputValue)
    // console.log(cityInputValue)
    // console.log(stateInputValue)
    // console.log(countryInputValue)
    // console.log(shapeInputValue)


    

// Filter data based on user input
    
    var filteredData=data.filter(({datetime, city, state, country, shape})=>{
        return datetime===dateInputValue &&
        city.toLowerCase()===cityInputValue.toLowerCase() &&
        state.toLowerCase()===stateInputValue.toLowerCase() &&
        country.toLowerCase()===countryInputValue.toLowerCase() &&
        shape.toLowerCase()===shapeInputValue.toLowerCase()
    })

    console.log(filteredData)


    filteredData.forEach(entry=>{

        // add row to body for each item

        var row=body.append("tr")

        // cycle through each object item
    
        Object.entries(entry).forEach(([key, value])=>{
        
            // append data row for each value

            var cell=row.append("td")

            // Display text

            cell.text(value)
    
        })
    })

  
}


