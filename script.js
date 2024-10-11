const outerDiv = document.querySelector("#outerDiv");
const allRow = document.querySelectorAll(".row");

let rowNumber = 16;
let columnNumber = 16;


function createSketch(rowNumber,columnNumber) {

    for (i=0;i<rowNumber;i++) {

    const row = document.createElement("div");
    row.classList.add("row");
    row.textContent = "row";
    outerDiv.appendChild(row);
    for (i=0;i<columnNumber;i++) {

        const column = document.createElement("div");
        column.classList.add("column");
        column.textContent = "column";
        allRow.appendChild(column);
    
        }
    }
}

function createColumn(columnNumber) {

    

}





//function createSketch(rowNumber,columnNumber) {
//createRow(rowNumber);
//createColumn(columnNumber);
//}

createSketch(16,16)





//create div rows v
//set class v
//use class div rows flex (in css) v
//loop to create many rowdiv v
//create div columns v
//use loop to create many columndiv x
//append columns to rows