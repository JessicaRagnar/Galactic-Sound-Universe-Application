Galactic Sound Universe Application<br>
Overview<br>
The Galactic Sound Universe Application is a node.js-based console and web application that immerses users in a vast universe of genres, artists, albums, and songs. It provides functionalities such as viewing artists, albums, and songs by genre, playing random songs, and displaying information about genres, record labels, artists, albums, and users.
<br><br>
Project Structure<br>
project-root<br>
|-- src<br>
|   |-- models<br>
|   |   |-- Album.js<br>
|   |   |-- Artist.js<br>
|   |   |-- Genre.js<br>
|   |   |-- RecordLabel.js<br>
|   |   |-- Song.js<br>
|   |   |-- User.js<br>
|   |-- utils<br>
|   |   |-- userInteraction.js<br>
|-- views<br>
|   |-- index.ejs<br>
|   |-- artists.ejs<br>
|   |-- partials<br>
|   |   |-- footer.js<br>
|   |   |-- header.js<br>
|-- public<br>
|   |-- css<br>
|   |   |-- style.css<br>
|   |-- images<br>
|   |   |-- image.jpg<br>
|   |-- js<br>
|   |   |-- artists.js<br>
|   |   |-- musicplayer.js<br>
|-- app.js<br>
|-- server.js<br>
<br>

Overview of Classes<br>
Album Class:<br>
The Album class represents a musical album, with attributes such as a unique identifier, title, associated artist, genre, and an array of songs. It includes methods to add songs to the album and display information about the album.
<br><br>
Artist Class:<br>
The Artist class represents a musical artist, containing details like a unique identifier, name, genre, biography, record labels, and an array of associated albums. It includes methods to display information about the artist and add albums to the artist.
<br><br>
Genre Class:<br>
The Genre class represents a music genre with attributes including a unique identifier and a name. It has a method to display information about the genre.
<br><br>
RecordLabel Class:<br>
The RecordLabel class represents a record label, with attributes such as a unique identifier, name, head office address, and arrays to store associated albums and artists. It includes methods to display basic information, add albums, and add artists to the record label.
<br><br>
Song Class:<br>
The Song class represents an individual song with attributes like a unique identifier, title, and play count. It includes methods to increase the play count, retrieve the play count, and display basic information about the song.
<br><br>
User Class:<br>
The User class represents a user in the system, with attributes including a unique identifier, name, and a list of played songs. It includes methods to play a list of songs, displaying information about the user and the played songs.
<br><br>
Genres are created, and artists are associated with specific genres and record labels. Record labels are linked to albums, and albums are associated with artists. Users are for now simulated to play random songs, and the entire setup showcases a musical ecosystem with genres, artists, albums, songs, record labels, and user interactions.
<br><br>
<br>
2023-12-12 - 2023-12-14: Skapat klasser, fyllt på med data i app.js, skapat struktur på mappar och fått det grundläggande att synas när node app.js körs.<br>
2024-01-04 - 2024-01-12: Skapat en webbapplikation med Express, med index.html och artists.html.<br>
2024-01-08 - 2024-01-11: Utvecklat webbapplikationen med layout genom html och CSS, bilder genom Midjourney, text genom ChatGPT och funktioner för att visa artister, album och låtar.<br>
2024-01-12: Skapat userInteraction och dess funktioner. Gått igenom alla filer, sett över kommentarer och avslutat projektet.<br>
<br><br>
Reflektioner:<br>
Under det här projekt fick jag utforska Javascript och EJS för att skapa Galactic Sound Universe, en webbapplikation som utforskar musikvärlden genom genrer, artister och album. Trots utmaningar med tidsbegränsningar på grund av förkylning blev det en värdefull inlärningsupplevelse.
<br><br>
Javascript och EJS:<br>
Arbetet med Javascript och EJS öppnade upp nya möjligheter för att skapa dynamiska användargränssnitt och förbättrade min förmåga att hantera frontend-interaktioner.<br>
<br><br>
Databaser och modeller:<br>
Att skapa och hantera modeller för data såsom genrer, artister och album gav mig insikter i att organisera och strukturera information i en relationsbaserad databas.<br>
<br><br>
Frontend och Backend integration:<br>
Integreringen mellan frontend och backend med hjälp av Express.js ökade min förståelse för hur olika delar av en webbapplikation samverkar.<br>
