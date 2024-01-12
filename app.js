// Import necessary classes and modules
const Genre = require('./src/models/Genre');
const Artist = require('./src/models/Artist');
const Album = require('./src/models/Album');
const Song = require('./src/models/Song');
const RecordLabel = require('./src/models/RecordLabel');
const User = require('./src/models/User');

// Create genres
const genres = [
    new Genre(1, 'Rock'),
    new Genre(2, 'Pop'),
    new Genre(3, 'Jazz'),
    new Genre(4, 'Country'),
    new Genre(5, 'Electronic')
    // More genres could be added
];

// Create record labels
const recordLabels = [
    new RecordLabel(1, 'Spectrum Records', 'Music Road 123 45 Big City'),
    new RecordLabel(2, 'BeatBox Records', 'Harmonica Road 123 45 Big City'),
    new RecordLabel(3, 'Echelon Sounds', 'Rhythm Street 123 45 Big City')
    // More labels could be added
];

// Create artists
const artists = [
    new Artist(1, 'Rockin\' Ricky', genres[0], 'Rockin\' Ricky is the undisputed king of air guitar. With fingers that move at the speed of sound, he\'ll make you believe his guitar is on fire!', [recordLabels[0]]),
    new Artist(2, 'Pop Princess Polly', genres[1], 'Polly, the Pop Princess, is here to bring glitter and joy to your world. With infectious melodies and dance moves that defy gravity, she\'s on a mission to make the whole world sing along.', [recordLabels[0]]),
    new Artist(3, 'Jazzy Jive Jimmy', genres[2], 'Jazzy Jive Jimmy, the saxophone sensation, will transport you to a world of smooth tunes and sultry rhythms. His saxophone solos are so enchanting; they might just make you want to dance in the moonlight.', [recordLabels[1]]),
    new Artist(4, 'Country Crooner Cindy', genres[3], 'Cindy, the Country Crooner, spins tales of heartbreak, love, and life on the open road. With a voice as warm as a southern breeze, she\'ll make you want to grab your cowboy boots and two-step under the stars.', [recordLabels[1]]),
    new Artist(5, 'Electro Ellie', genres[4], 'Electro Ellie, the queen of electronic vibes, creates sonic landscapes that transport you to another dimension.', [recordLabels[2]])
    // More artists could be added

];
    // Add artists to record labels
    recordLabels[0].addArtist(artists[0]);
    recordLabels[0].addArtist(artists[1]);
    recordLabels[1].addArtist(artists[2]);
    recordLabels[1].addArtist(artists[3]);
    recordLabels[2].addArtist(artists[4]);

// Create songs
const songs = [
    new Song(1, 'Rebel Road', 'Rock', artists[0]),
    new Song(2, 'Guitar Fury', 'Rock', artists[0]),
    new Song(3, 'Dancing in the Moonlight', 'Pop', artists[1]),
    new Song(4, 'Pop Paradise', 'Pop', artists[1]),
    new Song(5, 'Moonlit Jazzscape', 'Jazz', artists[2]),
    new Song(6, 'Highway Jam', 'Rock', artists[0]),
    new Song(7, 'Whiskey Sunrise', 'Country', artists[3]),
    new Song(8, 'Southern Blues', 'Country', artists[3]),
    new Song(9, 'Electric Storm', 'Electronic', artists[4]),
    new Song(10, 'Techno Wonderland', 'Electronic', artists[4]),
    new Song(11, 'Smooth Saxophone Solitude', 'Jazz', artists[2]),
    new Song(12, 'Country Sunset', 'Country', artists[3]),
    new Song(13, 'Jazz Odyssey', 'Jazz', artists[2]),
    new Song(14, 'Bubblegum Beats', 'Pop', artists[1]),
    new Song(15, 'Electronic Bliss', 'Electronic', artists[4]),
    new Song(16, 'Rock Rhythms', 'Rock', artists[0]),
    new Song(17, 'Funky Grooves', 'Pop', artists[1]),
    new Song(18, 'Acoustic Serenity', 'Country', artists[3]),
    new Song(19, 'Reggae Vibes', 'Pop', artists[1]),
    new Song(20, 'Metal Mayhem', 'Rock', artists[0]),
    new Song(21, 'Folk Fusion', 'Country', artists[3]),
    new Song(22, 'Soulful Sounds', 'Pop', artists[1]),
    new Song(23, 'Retro Rewind', 'Electronic', artists[4]),
    new Song(24, 'Chillwave Chronicles', 'Electronic', artists[4]),
    new Song(25, 'Indie Inspirations', 'Pop', artists[1]),
    new Song(26, 'Dreamy Disco', 'Electronic', artists[4]),
    new Song(27, 'Latin Groove', 'Pop', artists[1]),
    new Song(28, 'Bluesy Ballad', 'Jazz', artists[2]),
    new Song(29, 'Punk Power', 'Rock', artists[0]),
    new Song(30, 'Trap Tunes', 'Electronic', artists[4]),
    new Song(31, 'Hip Hop Hype', 'Pop', artists[1]),
    new Song(32, 'Classical Charms', 'Jazz', artists[2]),
    new Song(33, 'R&B Romance', 'Pop', artists[1]),
    new Song(34, 'Ambient Awakening', 'Electronic', artists[4]),
    new Song(35, 'Dubstep Dreams', 'Electronic', artists[4]),
    new Song(36, 'Ska Surprise', 'Pop', artists[1]),
    new Song(37, 'Gospel Glory', 'Country', artists[3]),
    new Song(38, 'Psychedelic Phantasy', 'Rock', artists[0]),
    new Song(39, 'Celtic Celebration', 'Country', artists[3]),
    new Song(40, 'Meditative Moments', 'Electronic', artists[4]),
    new Song(41, 'Asian Fusion', 'Pop', artists[1]),
    new Song(42, 'Trapdoor Techno', 'Electronic', artists[4]),
    new Song(43, 'Futuristic Funk', 'Electronic', artists[4]),
    new Song(44, 'Disco Delight', 'Electronic', artists[4]),
    new Song(45, 'African Adventure', 'Electronic', artists[4]),
    new Song(46, 'Indie Introspection', 'Pop', artists[1]),
    new Song(47, 'Reggaeton Rhythms', 'Pop', artists[1]),
    new Song(48, 'Jungle Jams', 'Electronic', artists[4]),
    new Song(49, 'Tango Triumph', 'Jazz', artists[2]),
    new Song(50, 'Viking Voyage', 'Rock', artists[0])
];

// Create albums with songs
const albums = [
    new Album(1, 'Thunderstruck Dreams', artists.find(artist => artist.id === 1), genres[0], [
        new Song(1, 'Rebel Road', 10),
        new Song(2, 'Guitar Fury', 15),
        new Song(6, 'Highway Jam', 20),
        new Song(16, 'Rock Rhythms', 25),
        new Song(29, 'Punk Power', 30),
    ]),
    new Album(2, 'Starlight Serenade', artists.find(artist => artist.id === 2), genres[1], [
        new Song(3, 'Dancing in the Moonlight', 12),
        new Song(4, 'Pop Paradise', 18),
        new Song(14, 'Bubblegum Beats', 22),
        new Song(17, 'Funky Grooves', 28),
        new Song(25, 'Indie Inspirations', 35),
    ]),
    new Album(3, 'Smooth Velvet Nights', artists.find(artist => artist.id === 3), genres[2], [
        new Song(5, 'Moonlit Jazzscape', 20),
        new Song(11, 'Smooth Saxophone Solitude', 25),
        new Song(13, 'Jazz Odyssey', 30),
        new Song(28, 'Bluesy Ballad', 35),
        new Song(49, 'Tango Triumph', 40),
    ]),
    new Album(4, 'Dusty Trails and Open Skies', artists.find(artist => artist.id === 4), genres[3], [
        new Song(7, 'Whiskey Sunrise', 22),
        new Song(8, 'Southern Blues', 28),
        new Song(12, 'Country Sunset', 32),
        new Song(18, 'Acoustic Serenity', 35),
        new Song(39, 'Celtic Celebration', 40),
    ]),
    new Album(5, 'Electric Dreams', artists.find(artist => artist.id === 5), genres[4], [
        new Song(9, 'Electric Storm', 42),
        new Song(10, 'Techno Wonderland', 50),
        new Song(15, 'Electronic Bliss', 45),
        new Song(23, 'Retro Rewind', 48),
        new Song(24, 'Chillwave Chronicles', 55),
    ]),
    new Album(6, 'Highway Guitar Riffs', artists.find(artist => artist.id === 1), genres[0], [
        new Song(2, 'Guitar Fury', 15),
        new Song(6, 'Highway Jam', 20),
        new Song(16, 'Rock Rhythms', 25),
        new Song(29, 'Punk Power', 30),
        new Song(38, 'Psychedelic Phantasy', 35),
    ]),
    new Album(7, 'Bubblegum Pop Extravaganza', artists.find(artist => artist.id === 2), genres[1], [
        new Song(3, 'Dancing in the Moonlight', 12),
        new Song(14, 'Bubblegum Beats', 22),
        new Song(17, 'Funky Grooves', 28),
        new Song(25, 'Indie Inspirations', 35),
        new Song(41, 'Asian Fusion', 40),
    ]),
    new Album(8, 'Moonlit Saxophone Melodies', artists.find(artist => artist.id === 3), genres[2], [
        new Song(5, 'Moonlit Jazzscape', 20),
        new Song(11, 'Smooth Saxophone Solitude', 25),
        new Song(13, 'Jazz Odyssey', 30),
        new Song(28, 'Bluesy Ballad', 35),
        new Song(49, 'Tango Triumph', 40),
    ]),
    new Album(9, 'Southern Charm Ballads', artists.find(artist => artist.id === 4), genres[3], [
        new Song(7, 'Whiskey Sunrise', 22),
        new Song(12, 'Country Sunset', 32),
        new Song(18, 'Acoustic Serenity', 35),
        new Song(39, 'Celtic Celebration', 40),
        new Song(48, 'Jungle Jams', 45),
    ]),
    new Album(10, 'Techno Odyssey', artists.find(artist => artist.id === 5), genres[4], [
        new Song(9, 'Electric Storm', 42),
        new Song(10, 'Techno Wonderland', 50),
        new Song(15, 'Electronic Bliss', 45),
        new Song(23, 'Retro Rewind', 48),
        new Song(24, 'Chillwave Chronicles', 55),
    ]),
];
artists.forEach(artist => {
    const artistAlbums = albums.filter(album => album.artist.id === artist.id);
    artist.addAlbums(artistAlbums);
});

    // Connect albums to record labels
    recordLabels[0].addAlbum(albums[0]);
    recordLabels[0].addAlbum(albums[1]);
    recordLabels[1].addAlbum(albums[2]);
    recordLabels[1].addAlbum(albums[3]);
    recordLabels[2].addAlbum(albums[4]);
    recordLabels[0].addAlbum(albums[5]);
    recordLabels[0].addAlbum(albums[6]);
    recordLabels[1].addAlbum(albums[7]);
    recordLabels[1].addAlbum(albums[8]);
    recordLabels[2].addAlbum(albums[9]);
    
    // Display record label information
    function displayRecordLabelInfo(recordLabels) {
        recordLabels.forEach(recordLabel => {
            console.log(`Record Label: ${recordLabel.name}`);
            console.log('Artists:');
    
            // Check if there are artists for the current record label
            if (recordLabel.artists.length === 0) {
                console.log('  No artists for this record label.');
            } else {
                // Loop through each artist and display information about each artist
                recordLabel.artists.forEach(artist => {
                    console.log(`  - ${artist.name}`);
                });
            }
            console.log('Albums:');
                        
            // Check if there are albums for the current record label
            if (recordLabel.albums.length === 0) {
                console.log('  No albums for this record label.');
            } else {
                // Loop through each album and display information about each album
                recordLabel.albums.forEach(album => {
                    console.log(`  - ${album.title}`);
                });
            }
    
            console.log('-----------------------');
        });
    }

// Create users and their played songs
const users = [
    new User(1, 'MusicMaven'),
    new User(2, 'HarmonyHero'),
    new User(3, 'GrooveGuru'),
    new User(4, 'BeatBard')
    // More user can be added
];

// Function to get a random subset of elements from an array
function getRandomSubset(array, size) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
}

// Simulate users playing songs
users.forEach(user => {
    const randomSongs = getRandomSubset(songs, 5); 

    // Play the selected songs
    user.playSongs(randomSongs);
});

// Display information
console.log('Genres:');
genres.forEach(genre => {
    genre.displayInfo();
});
console.log('-----------------------');

console.log('Record Labels:');
recordLabels.forEach(label => {
    label.displayInfo();
});

displayRecordLabelInfo(recordLabels);

console.log('Artists:');
artists.forEach(artist => {
    artist.displayInfo();
});

console.log('Albums:');
albums.forEach(album => {
    album.displayInfo();
});

console.log('Users:');
users.forEach(user => {
    user.displayInfo();
});

// Export modules
module.exports = {
    genres,
    artists,
    albums,
    songs,
};
