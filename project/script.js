const board = document.getElementById("board");
let tile;
let powerClass = ["triple-word", "double-word", "triple-letter", "double-letter"];

function powerTile(tile, text) {
    let newText = document.createTextNode(text);    // Create power text
    let p = document.createElement("p");            // Create paragraph element
  
    switch (text) {
        case "Triple Word":
            tile.classList.add(powerClass[0]);              // Adds class 'triple-word' to the tile
            p.appendChild(newText);                         // Adds text to the paragraph
            tile.appendChild(p);                            // Adds the paragraph to the tile
            break;

        case "Double Letter":
            tile.classList.add(powerClass[3]);              // Adds class 'triple-word' to the tile
            p.appendChild(newText);                         // Adds text to the paragraph
            tile.appendChild(p);                            // Adds the paragraph to the tile
            break;
    }

}

console.log(new Date().getDay())

// used for to count the number of tiles need 
let count = 0;
// Ceating the tiles for the board of 15x15
for (let i = 0; i < 15; i++) {
    for (let x = 0; x < 15; x++){
        count += 1;
        tile = document.createElement("div");
        // the cclass name for stying and testing specific tiles
        tile.classList.add("tile", `${count}`);
        board.append(tile);

        // rendering the hpower tiles on specific location the board
        if (count == 1 || count == 16 || count == 31|| count == 46|| count == 61|| count == 76|| count == 91|| count == 106 || count == 121 || count == 136 || count == 151 || count == 166 || count == 181 || count == 196 || count == 211) {
        powerTile(tile, "Triple Word");
        }  else if (count == 4) {
            powerTile(tile, "Double Letter");
        } else if (count == null) {
            powerTile(count, "Double Word");
        } else if (count == null) {
            powerTile(tile, "Triple Letter");
        }
    
    }
}



