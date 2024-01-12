// Pathway: C:\Users\jeeks\Documents\Jessica\ME1634\Galactic_Sound_Universe\project_root\server.js

// Import necessary modules
const express = require('express');
const path = require('path');

// Import data from your app module
const appData = require('./app');

// Create an Express application
const app = express();

// Set the port to either the environment variable PORT or default to 3000
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the path for your views (template pages)
app.set('views', path.join(__dirname, 'views'));

// Define data that will be available for all views
const data = {
  companyName: 'Galactic Sound Universe',
};

// Middleware to set variables available for all view files
app.use((req, res, next) => {
  res.locals.companyName = data.companyName;
  next();
});

// Route for the homepage
app.get('/', (req, res) => {
  // Render the 'index' view with specified data
  res.render('index', { pageTitle: 'Home', currentYear: new Date().getFullYear() });
});

// Route for the artist page
app.get('/artists', (req, res) => {
  // Render the 'artists' view with specified data, including all artists from appData
  res.render('artists', {
    allArtists: appData.artists,
    pageTitle: 'Artists',
    currentYear: new Date().getFullYear(),
  });
});

// Route to fetch all artists as JSON with album information
app.get('/artists/json', (req, res) => {
  const allArtists = appData.artists.map(artist => ({
    id: artist.id,
    name: artist.name,
    genre: artist.genre,
    bio: artist.bio,
    recordLabels: artist.recordLabels.map(label => ({
      id: label.id,
      name: label.name,
      address: label.address,
    })),
    albums: artist.albums.map(album => ({
      id: album.id,
      title: album.title,
      songs: album.songs.map(song => ({
        id: song.id,
        title: song.title,
        genre: song.genre,  // Include other song attributes if needed
      })),
      // Add other album attributes here if needed
    })),
  }));

  res.json(allArtists);
});

// Function to fetch album details based on album ID
function fetchAlbumDetails(albumId) {
  const albumDetails = appData.albums.find(album => album.id === parseInt(albumId));

  if (albumDetails) {
    return {
      id: albumDetails.id,
      title: albumDetails.title,
      artist: albumDetails.artist.name,  // Include the artist name for reference
      songs: albumDetails.songs.map(song => ({
        id: song.id,
        title: song.title,
        genre: song.genre,
        // Include other song attributes if needed
      })),
      // Add other album attributes here if needed
    };
  } else {
    return null; // Return null if album details are not found
  }
}

// Route to fetch album details
app.get('/albums/details/:id', (req, res) => {
  const albumId = req.params.id;

  // Fetch album details using the defined function
  const albumDetails = fetchAlbumDetails(albumId);

  if (albumDetails) {
    res.json(albumDetails); // Send album details as JSON response
  } else {
    res.status(404).json({ error: 'Album not found' }); // Respond with a 404 status if album details are not found
  }
});
// Set the path for static files such as CSS and images
app.use(express.static(path.join(__dirname, 'public')));

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
