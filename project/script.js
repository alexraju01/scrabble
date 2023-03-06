const board = document.getElementById("board");
let tile;
let powerClass = ["triple-word", "double-word", "triple-letter", "double-letter", "star"];

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
            tile.classList.add(powerClass[3]);          
            p.appendChild(newText);                         
            tile.appendChild(p);                            
            break;

        case "Double Word":
            tile.classList.add(powerClass[1]);              
            p.appendChild(newText);                         
            tile.appendChild(p);                            
            break;

        case "Triple Letter":
            tile.classList.add(powerClass[2]);              
            p.appendChild(newText);                         
            tile.appendChild(p);                            
            break;
        case "star":
            tile.classList.add(powerClass[4]);                                        
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
        if (count == 1 || count == 8 || count == 15 || count == 106 || count == 120 || count == 211 || count == 218 || count == 225 ) {
        powerTile(tile, "Triple Word");
        }  else if (count == 4 || count == 12  || count == 37 || count == 39 || count == 46 || count == 53  || count == 60 || count == 93 || count == 97 || count == 99 || count == 103 || count == 109 || count == 117 || count == 123 || count == 127 || count == 129 || count == 133 || count == 166 || count == 173 || count == 180 || count == 187 || count == 189 || count == 214 || count == 222) {
            powerTile(tile, "Double Letter");
        } else if (count == 17 || count == 29 || count == 33 || count == 43 || count == 49 || count == 57 || count == 65 || count == 71 || count == 155 || count == 161 || count == 169 || count == 177 || count == 183 || count == 193 || count == 197 || count == 209) {
            powerTile(tile, "Double Word");
        } else if (count == 21 || count == 25 || count == 77 || count == 81 || count == 85 || count == 89 || count == 137 || count == 141 || count == 145 || count == 149 ||  count == 201 || count == 205) {
            powerTile(tile, "Triple Letter");
        } else if (count == 113 ){
            powerTile(tile, "star");

        }
    }
}



