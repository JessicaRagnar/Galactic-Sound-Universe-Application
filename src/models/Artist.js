class Artist {
    // Constructor for the Artist class
    constructor(id, name, genre, bio, recordLabels) {
        this.id = id;                        // Unique identifier for the artist
        this.name = name;                    // Name of the artist
        this.genre = genre;                  // Genre associated with the artist
        this.bio = bio;                      // Biography of the artist
        this.recordLabels = recordLabels;    // Array to store record labels associated with the artist
        this.albums = [];                    // Array to store albums by the artist
    }

    // Method to display information about the artist
    displayInfo() {
        console.log(`Artist: ${this.name}`);                                      // Display artist's name
        console.log(`Genre: ${this.genre ? this.genre.name : 'Unknown'}`);         // Display artist's genre or 'Unknown' if not specified
        console.log(`Record Labels: ${this.recordLabels ? this.recordLabels.map(label => label.name).join(', ') : 'No record labels'}`);  // Display record labels or 'No record labels' if not specified
        console.log(`Bio: ${this.bio}`);                                           // Display artist's biography
        console.log('Albums:');

        // Loop through each album and display information about each album
        this.albums.forEach(album => {
            console.log(`  - ${album.title}`);                                     // Display album title
        });

        console.log('-----------------------');
    }

    // Method to add an album to the artist
    addAlbums(albums) {
        this.albums = this.albums.concat(albums);    // Add albums to the artist's albums array
    }
}

// Make the Artist class available to other parts of the code by exporting it
module.exports = Artist;
