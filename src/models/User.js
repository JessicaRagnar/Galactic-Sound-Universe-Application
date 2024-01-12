class User {
    // Constructor for the User class
    constructor(id, name) {
        this.id = id;                   // Unique identifier for the user
        this.name = name;               // Name of the user
        this.playedSongs = [];          // List of played songs
    }

    // Method to play a list of songs
    playSongs(songs) {
        songs.forEach(song => {
            // Increase the play count for each song and add it to the played songs list
            song.play();
            this.playedSongs.push(song);
        });
    }

    // Method to display information about the user and the played songs
    displayInfo() {
        console.log(`User: ${this.name}`);
        console.log('Played Songs:');
        this.playedSongs.forEach(song => {
            song.displayInfo();
        });
        console.log('-----------------------');
    }
}

// Make the User class available to other parts of the code by exporting it
module.exports = User;
