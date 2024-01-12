const readline = require('readline-sync');
const appModules = require('../../app');

// Retrieve the list of artists from appModules
const artists = appModules.artists;

// Function to display artists based on the chosen genre
function showArtistsByGenre(genreName) {
    // Convert genre name to lowercase for case-insensitive comparison
    const lowerCaseGenre = genreName.toLowerCase();

    // Filter artists based on the specified genre
    const artistsInGenre = artists.filter(artist => artist.genre.name.toLowerCase() === lowerCaseGenre);

    // Check if any artists were found in the genre
    if (artistsInGenre.length === 0) {
        console.log(`No artists found within the genre ${genreName}.`);
    } else {
        // Display artists within the genre
        console.log(`Artists within the genre ${genreName}:`);
        artistsInGenre.forEach((artist, index) => {
            console.log(`${index + 1}. ${artist.name}`);
        });

        // Prompt the user to choose an artist or enter 0 to go back or change the genre
        const selectedArtistIndex = parseInt(readline.question('Choose an artist by entering the corresponding number, or enter 0 to go back or change the genre: '), 10);

        // If the user chooses to go back, exit the function
        if (selectedArtistIndex === 0) {
            return;
        }

        // Retrieve the selected artist based on the index
        const selectedArtist = artistsInGenre[selectedArtistIndex - 1];

        // Check if a valid artist is selected
        if (selectedArtist) {
            // Display albums and songs for the selected artist
            showAlbumsAndSongs(selectedArtist);
        } else {
            console.log('Invalid artist selection.');
        }
    }
}

// Function to display albums and songs for a selected artist
function showAlbumsAndSongs(selectedArtist) {
    // Display albums by the selected artist
    console.log(`Albums by ${selectedArtist.name}:`);
    selectedArtist.albums.forEach((album, index) => {
        console.log(`- ${index + 1}. ${album.title}`);
    });

    // Prompt the user to choose an album or enter 0 to go back
    const selectedAlbumIndex = parseInt(readline.question('Choose an album by entering the corresponding number, or enter 0 to go back: '), 10);

    // If the user chooses to go back, exit the function
    if (selectedAlbumIndex === 0) {
        return;
    }

    // Retrieve the selected album based on the index
    const selectedAlbum = selectedArtist.albums[selectedAlbumIndex - 1];

    // Check if a valid album is selected
    if (selectedAlbum) {
        // Display songs in the selected album
        showSongsInAlbum(selectedAlbum);
    } else {
        console.log('Invalid album selection.');
    }
}

// Function to display songs in a selected album
function showSongsInAlbum(selectedAlbum) {
    // Display songs in the selected album
    console.log(`Songs in the album "${selectedAlbum.title}" by ${selectedAlbum.artist.name}:`);
    selectedAlbum.songs.forEach((song, index) => {
        console.log(`${index + 1}. ${song.title}`);
    });

    // Prompt the user to choose a song to play or enter 0 to go back
    const playSongIndex = parseInt(readline.question('Choose a song to play by entering the corresponding number, or enter 0 to go back: '), 10);

    // If the user chooses to go back, exit the function
    if (playSongIndex === 0) {
        return;
    }

    // Retrieve the selected song based on the index
    const selectedSong = selectedAlbum.songs[playSongIndex - 1];

    // Check if a valid song is selected
    if (selectedSong) {
        // Display a message indicating that the selected song is playing
        console.log(`Playing: ${selectedSong.title}`);
        // Add your logic to play the song here
    } else {
        console.log('Invalid song selection.');
    }
}

// Main loop to repeatedly prompt the user to choose a genre until they enter "exit"
while (true) {
    // Prompt the user to choose a genre or enter "exit" to end
    const selectedGenre = readline.question('Please choose a genre, or enter "exit" to end: ');

    // Check if the user wants to exit
    if (selectedGenre.toLowerCase() === 'exit') {
        // Display a farewell message and exit the loop
        console.log('Goodbye!');
        break;
    }

    // Invoke the function to show artists based on the chosen genre
    showArtistsByGenre(selectedGenre);
}
