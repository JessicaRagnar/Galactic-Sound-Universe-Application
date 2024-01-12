class Genre {
  // Constructor for the Genre class
  constructor(id, name) {
    this.id = id;        // Unique identifier for the genre
    this.name = name;    // Name of the genre
  }

  // Method to display information about the genre
  displayInfo() {
    console.log(`- ${this.name}`);  // Display the name of the genre
  }
}

// Make the Genre class available to other parts of the code by exporting it
module.exports = Genre;
