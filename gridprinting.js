function printGridFromURL(url) {
    readGridFromURL(url);
}

async function readGridFromURL(url) {
    //read web page
    google_document = await fetch(url);
    reader = google_document.body.getReader();
    var pageText;
    let line;
    do {
        line = await reader.read();
        if (line.value == undefined) break;
        for (var i = 0; i < line.value.length; i++) {
                pageText = pageText + String.fromCharCode(line.value[i]);
        }
        console.log(pageText.slice(pageText.length - 20));
    } while (line.done == false);
   

    //console.log(line);
    //get table

    //size of grid
    let max_y = 0;
    let max_x = 0;
    //elements to print
    let elements = []; //store data from table

    let array_index = 0;//position of element to place
    let prev_row_index = 0;//manage position in table

    
    //loop extracting 1 element from the table at a time
    while (pageText.indexOf("<tr", prev_row_index) != -1) {
        prev_row_index = pageText.indexOf("<tr", prev_row_index);
        console.log(pageText.indexOf("<tr", prev_row_index));
        let lead_in_string = "<span class=\"c1\">";
        let index_reader = pageText.indexOf(lead_in_string, prev_row_index);
        index_reader = index_reader + lead_in_string.length;
        let x_coord = pageText.charAt(index_reader);
        index_reader = pageText.indexOf(lead_in_string, index_reader);
        index_reader = index_reader + lead_in_string.length;
        let char = pageText.charAt(index_reader);
        
        index_reader = pageText.indexOf(lead_in_string, index_reader);
        index_reader = index_reader + lead_in_string.length;
        let y_coord = pageText.charAt(index_reader);
        
        elements[array_index++] = [x_coord, char, y_coord];
        console.log(elements[array_index - 1]);

        prev_row_index += 2; //shift forward to not hit the same "<tr...


    }


    //make grid
      
    var grid;
    for (var k = 0; k < elements.length; k++) {
        grid[elements[k][0]][elements[k][2]] = elements[k][1]
    }
    console.log("Grid:")
    console.log(grid);
}   



//printGridFromURL("http://localhost:3005/icecream.html");
printGridFromURL("https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub");