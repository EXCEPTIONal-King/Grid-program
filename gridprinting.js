function printGridFromURL(url) {
    readGridFromURL(url);
}

async function readGridFromURL(url) {
    document = await fetch(url);
    console.log(document.body);
    reader = document.body.getReader();
    line = await reader.read();
    console.log(line);
    var pageText
    for (var i = 0; i < line.value.length; i++) {
            pageText = pageText + String.fromCharCode(line.value[i]);
    }
    console.log(pageText)
}

function printGrid(grid) {}


printGridFromURL("http://localhost:3005/icecream.html");