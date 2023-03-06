const board = document.getElementById("board");
let tile;

function tripleWord(tile) {
    console.log(tile)
}



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

    
    }
}
console.log(count)
if (count = 1) {
    tripleWord(tile)
}


