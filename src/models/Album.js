class Album {
    // Constructor for the Album class
    constructor(id, title, artist, genre, songs = []) {
        this.id = id;                // Unique identifier for the album
        this.title = title;          // Title of the album
        this.artist = artist;        // Artist associated with the album
        this.genre = genre;          // Genre of the album
        this.songs = songs;          // Array to store songs in the album
    }

    // Method to add a song to the album
    addSong(song) {
        this.songs.push(song);
    }

    // Method to display information about the album
    displayInfo() {
        console.log(`Album: ${this.title}`);               // Display album title
        console.log(`Artist: ${this.artist.name}`);        // Display artist's name
        console.log(`Genre: ${this.genre.name}`);          // Display genre
        console.log('Songs:');

        // Check if there are songs in the album
        if (this.songs.length === 0) {
            console.log('No songs in this album.');        // Display message if no songs
        } else {
            // Loop through each song and display information about each song
            this.songs.forEach(song => {
                console.log(`- ${song.title}`);             // Display song title
            });
        }

        console.log('-----------------------');
    }
}

// Make the Album class available to other parts of the code by exporting it
module.exports = Album;
