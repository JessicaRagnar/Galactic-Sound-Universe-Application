class RecordLabel {
    // Constructor for the RecordLabel class
    constructor(id, name, headofficeAddress) {
        this.id = id;                           // Unique identifier for the record label
        this.name = name;                       // Name of the record label
        this.headofficeAddress = headofficeAddress; // Head office address of the record label
        this.albums = [];                       // Array to store albums associated with the record label
        this.artists = [];                      // Array to store artists signed to the record label
    }

    // Method to display basic information about the record label
    displayInfo() {
        console.log(`Record Label: ${this.name}`);
        console.log(`Head Office Address: ${this.headofficeAddress}`);
        console.log('-----------------------');
    }

    // Method to add an album to the record label
    addAlbum(album) {
        this.albums.push(album);  // Add an album to the record label's collection
    }

    // New method to add artists to the record label
    addArtist(artist) {
        this.artists.push(artist);  // Add an artist to the record label's roster
    }
}

// Make the RecordLabel class available to other parts of the code by exporting it
module.exports = RecordLabel;
