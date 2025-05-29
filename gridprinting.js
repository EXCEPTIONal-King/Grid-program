function printGridFromURL(url) {
    readGridFromURL(url);
}

async function readGridFromURL(url) {
    document = await fetch(url);
    console.log(document.body);
    reader = document.body.getReader();
    line = await reader.read();
    console.log(line);
    for (var i = 0; i < line.value.length; i++) {
        console.log(String.fromCharCode(line.value[i]));
    }
}

function printGrid(grid) {}


printGridFromURL("http://localhost:3005/");