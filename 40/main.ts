//Difne The Make_Album Function
function Make_Album(artist_Name : String , album_title : String , tracks? : Number){
    let album : {artist : String , title : String , tracks ? : Number} = {
        artist : artist_Name,
        title : album_title,
    };

    if(tracks !== undefined){
        album.tracks = tracks
    }

    return album;
}
//Calling Three Function And Creating Three Variable With Different Values
let album1 = Make_Album("Shahzeb","Album Title 1")

let album2 = Make_Album("Shayan" , "Album Title 2") 

//Calling A Make_Album function With Third Parameter 
let album3 = Make_Album("Abdullah" , "Album Title 3" , 10) 

//Print The Variable
console.log(album1);

console.log(album2);

console.log(album3);


