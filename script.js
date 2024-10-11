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
        row.appendChild(column);
        }

    })

   
}





function createSketch(rowNumber,columnNumber) {
createRow(rowNumber);
createColumn(columnNumber);
}

createSketch(16,16)







//create div rows v
//set class v
//use class div rows flex (in css) v
//loop to create many rowdiv v
//create div columns v
//use loop to create many columndiv x
//append columns to rows


//you gotta appendchild column to row, only appendchild row