document.addEventListener("DOMContentLoaded", function () {
    // Retrieve saved artist data from local storage
    const savedArtistData = JSON.parse(localStorage.getItem("artistData"));

    // If there is saved artist data
    if (savedArtistData) {
        // Use artist data to update DOM elements
        const artistImageSrc = `/images/${savedArtistData.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
        const artistName = savedArtistData.name;
        const songName = "Song Name"; // 
        const audioSource = "your-audio-file.mp3"; // This is where I put Audio if I hade one..

        // Update DOM elements
        document.getElementById("artistImage").src = artistImageSrc;
        document.getElementById("artistName").innerText = artistName;
        document.getElementById("songName").innerText = songName;

        // Set audio source
        const audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src = audioSource;
    }
});