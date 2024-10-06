//Difne The Make_Album Function
function Make_Album(artist_Name, album_title, tracks) {
    var album = {
        artist: artist_Name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling Three Function And Creating Three Variable With Different Values
var album1 = Make_Album("Shahzeb", "Album Title 1");
var album2 = Make_Album("Shayan", "Album Title 2");
var album3 = Make_Album("Abdullah", "Album Title 3", 10);
//Print The Variable
console.log(album1);
console.log(album2);
console.log(album3);
