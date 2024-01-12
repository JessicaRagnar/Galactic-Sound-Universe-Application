// HTML generation functions
function generateArtistListItemHTML(artist) {
    return `
            <div class="artist-container">
                <img src="/images/${artist.name.toLowerCase().replace(/\s+/g, '-')}.jpg" alt="${artist.name}" style="max-width: 100%; max-height: 200px;">
                <div class="artist-name">${artist.name}</div>
            </div>
    `;
}

function generateArtistDetailsHTML(artist) {
    return `
        <img src="/images/${artist.name.toLowerCase().replace(/\s+/g, '-')}.jpg" alt="${artist.name}" style="max-width: 100%; max-height: 400px;">
        <div>
            <h3>${artist.name} - ${artist.genre.name}</h3>
            <p class="galactic-text">${artist.bio}</p>
            <br><br>
            <h3>Record Labels:</h3>
            <p class="galactic-text">${artist.recordLabels ? artist.recordLabels.map(label => `${label.name}`).join(', ') : 'No record labels available'}</p>
        </div>
    `;
}

function generateAlbumListHTML(albums) {
    return `
        <div>
        <br>
            <h3>Albums:</h3>
            <ul id="album-list" class="artists-list">
                ${albums ? albums.map(album => `<li data-album-id="${album.id}">${album.title}</li>`).join('') : 'No albums available'}
            </ul>
        </div>
    `;
}

function generateAlbumDetailsHTML(selectedAlbum) {
    return `
        <div>
            <h3>Songs:</h3>
            <ul id="song-list" class="artists-list">
                ${selectedAlbum.songs.map(song => `<li>${song.title}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Function to update the artist details on the webpage
function updateArtistDetails(artist) {
    const artistDetailsContainer = document.getElementById('artist-details');
    artistDetailsContainer.innerHTML = generateArtistDetailsHTML(artist);

    // Clear song details when updating artist details
    clearSongDetails();
}

// Function to update the album list on the webpage
function updateAlbumList(albums, containerId) {
    const albumListContainer = document.getElementById(containerId);
    albumListContainer.innerHTML = generateAlbumListHTML(albums);

    // Clear song details when updating album list
    clearSongDetails();
}

// Function to update album details on the webpage
function updateAlbumDetails(selectedAlbum) {
    const albumDetailsContainer = document.getElementById('album-details');
    albumDetailsContainer.innerHTML = generateAlbumDetailsHTML(selectedAlbum);
}

// Function to clear song details
function clearSongDetails() {
    const songListContainer = document.getElementById('song-list');
    if (songListContainer) {
        songListContainer.innerHTML = ''; // Clear the song list
    }
}

// Function to fetch artists from the server
async function fetchArtists() {
    try {
        // Fetch JSON data from the server
        const response = await fetch('/artists/json');

        // Check if the response is successful and is of type JSON
        const contentType = response.headers.get('content-type');
        if (!response.ok || !contentType || !contentType.includes('application/json')) {
            throw new Error('Invalid response or content type');
        }

        // Parse the JSON data
        const artists = await response.json();

        // Get the HTML elements for the artist list, artist details, and album details
        const artistList = document.getElementById('artist-list');
        const artistDetailsContainer = document.getElementById('artist-details');
        const albumListContainer = document.getElementById('album-list');
        const albumDetailsContainer = document.getElementById('album-details');

        // Clear previous content in containers
        artistList.innerHTML = '';
        artistDetailsContainer.innerHTML = '';
        albumListContainer.innerHTML = '';
        albumDetailsContainer.innerHTML = '';

        // Loop through each artist in the data
        artists.forEach(artist => {
            // Create HTML element for the artist item
            const listItem = document.createElement('li');
            listItem.innerHTML = generateArtistListItemHTML(artist);

            // Add click event listener to show details when clicked
            listItem.addEventListener('click', async () => {
                // Update artist details and album list
                updateArtistDetails(artist);
                updateAlbumList(artist.albums, 'album-list');
            });

            // Add the HTML element to the artist list
            artistList.appendChild(listItem);
        });

        // Add click event listener to album list items (outside the loop)
        albumListContainer.addEventListener('click', async (event) => {
            const albumId = event.target.getAttribute('data-album-id');
            if (albumId) {
                // Fetch album details based on the selected albumId
                const selectedAlbumResponse = await fetch(`/albums/details/${albumId}`);
                const selectedAlbum = await selectedAlbumResponse.json();

                // Display album details, including songs
                updateAlbumDetails(selectedAlbum);
            }
        });
    } catch (error) {
        // Log an error if fetching or processing data fails
        console.error('Error fetching artists data:', error.message);
    }
}

// Call the fetchArtists function when the script is executed
fetchArtists();
