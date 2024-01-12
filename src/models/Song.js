class Song {
    // Constructor for the Song class
    constructor(id, title, playCount) {
        this.id = id;               // Unique identifier for the song
        this.title = title;         // Title of the song
        this.playCount = playCount; // Number of times the song has been played
    }

    // Method to increase the play count for the song
    play() {
        this.playCount++;
    }

    // Method to retrieve the play count for the song
    getPlayCount() {
        return this.playCount;
    }

    // Method to display basic information about the song
    displayInfo() {
        console.log(`Song: ${this.title}`);
        console.log('-----------------------');
    }
}

// Make the Song class available to other parts of the code by exporting it
module.exports = Song;
