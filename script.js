const outerDiv = document.querySelector("#outerDiv");


function createRow(rowNumber) {

    for (i=0;i<rowNumber;i++) {

    const row = document.createElement("div");
    row.classList.add("row");
    outerDiv.appendChild(row);

    }
}

function createColumn(columnNumber) {

    const allRow = document.querySelectorAll(".row");

    allRow.forEach(row => {

        for (i=0;i<columnNumber;i++) {

        const column = document.createElement("div");
        column.classList.add("column");
        column.addEventListener("mouseover", function(){this.style.backgroundColor = 
            `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        })
        row.appendChild(column);
        }

    })

   
}





function createSketch(rowNumber,columnNumber) {
createRow(rowNumber);
createColumn(columnNumber);
}

createSketch(16,16)






function generateGrid() {

    let rowResponse = prompt("How many rows?");
    let columnResponse = prompt("How many columns?");
    
    if (rowResponse>100||columnResponse>100) {alert("Your PC will explode with that many rows/columns! (100 max)")} else {

    const allRow = document.querySelectorAll(".row");

        allRow.forEach(row => {

            row.remove();

        })

    createSketch(rowResponse,columnResponse);
    }

    }
    
    

const btn = document.querySelector("#btnGrid")

btn.addEventListener("click",generateGrid)
//https://stackoverflow.com/questions/14829410/javascript-function-running-without-being-called


//create div rows v
//set class v
//use class div rows flex (in css) v
//loop to create many rowdiv v
//create div columns v
//use loop to create many columndiv x
//append columns to rows


//you gotta appendchild column to row, only appendchild row