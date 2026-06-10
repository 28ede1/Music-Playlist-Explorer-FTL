## Music Playlist Explorer — Planning Spec

### Data Shape
[Leave blank — fill in before Milestone 3]

playlist:
    - title (string) — name of the playlist
    - image (string) — URL or file path for the playlist cover image
    - creatorName (string) — name of the user who created the playlist
    - dateAdded (string) — date the playlist was created or added
    - likeCount (number) — total number of likes on the playlist
    - songs (array of song objects) — list of songs contained in the playlist

song:
    - title (string) — name of the song
    - image (string) — URL or file path for the song's album artwork
    - artistName (string) — name of the artist who performs the song
    - length (string) — duration of the song in MM:SS format


### UI and Interaction Rules
[Leave blank — fill in before Milestone 1]

What are the main sections of the homepage?

* There is a header that contains the name of the webpage, a button to view the featured playlists (Featured), a button to view all available playlists(All), a search bar, a button to view recently viewed playlists (Recents), and a button to view favorite songs (Favorites).

* The main content section of the page should contain at least 8 playlist cards. Each playlist card should display a cover image, playlist title, creator/artist name, genre, date added, and like count.

* When the webpage is opened, the user should automatically be on the 'all' tab. The homepage should display all playlist cards.

* Users should be able to sort playlists by playlist name, number of likes, date added, or genre. 

* If the user clicks the 'featured' tab, only a selected playlist should be shown, along with the songs that are part of that playlist. The playlist name and cover image should be displayed the largest, with the songs from that playlist stacked and displayed to the right of it.

* Each song in the featured playlist should display an image, song name, artist, and song length.

* The songs in the featured playlist should be automatically sorted by rating from highest to lowest.

What happens when a user clicks a playlist card?

* If the user clicks on a playlist card, a modal should appear displaying a list of songs that are part of that playlist, along with an option to shuffle the songs in the playlist.

* The playlist should automatically be added to the user's recently viewed playlists after being clicked.

* The header of the modal should contain a small image of the playlist, the playlist name, and the playlist creator/author.

* Each song in the list should display its title, artist, song length, and a favorite button.

* The modal should contain an edit playlist button for modifying the playlist.

What happens when a user clicks outside the modal?

* If the user clicks outside of the modal, the modal should disappear and the user should be returned to the screen they were previously viewing.

* Any likes, favorites, or playlist edits made before closing the modal should remain saved.

What happens when a user clicks the like icon?

* The like button on each playlist card should increment the playlist's like count when clicked.

* The updated like count should remain persistent across all interactions on the website.

* The updated like count should be reflected wherever that playlist is displayed, including playlist cards, the featured playlist view, and the playlist modal.

What does the shuffle button do?

* The order of the songs listed in the modal should change.

* Shuffling should not remove or duplicate songs.

* The playlist itself should not be permanently modified.

How will the user be able to add, edit, and delete playlists?

* The homepage should contain a create playlist button.

* Clicking the create playlist button should open a form where users can enter a playlist name, creator name, genre, cover image, and songs.

* Users should be able to edit playlists through the edit playlist button located in the playlist modal.

* Editing should allow users to change playlist information, add songs, remove songs, or update the playlist cover image.

* Users should be able to delete playlists from the edit playlist screen.

* Before deleting a playlist, a confirmation message should appear asking the user to confirm the action.

* Newly created or edited playlists should immediately appear updated throughout the application.

How will the user be able to sort or search for playlists?

* A search bar in the header should allow users to search playlists by playlist name, creator name, genre, or song title.

* Search results should update as the user types.

* Users should be able to sort playlists by playlist name, number of likes, date added, or genre.

* Sorting and searching should work together so users can search and then apply a sort option.

How will the user be able to access playlists they recently viewed?

* Whenever a playlist card is opened, that playlist should be added to a recently viewed list.

* A recently viewed button in the header should allow users to access these playlists.

* Recently viewed playlists should be displayed using the same playlist card design as the homepage.

* The most recently viewed playlists should appear first.

How will the user be able to add songs to a favorites tab?

* Every song displayed in a playlist modal should contain a favorite button.

* Clicking the favorite button should add the song to the user's favorites list.

* Clicking the button again should remove the song from the favorites list.

* A favorites button in the header should allow users to access all favorited songs.

* Favorite songs should display the song image, title, artist, and rating.

* Users should be able to remove songs from favorites directly from the favorites page.

* Favorite songs should remain saved across all interactions on the website.

* On mobile view, the All, Featured, Favorites, and Recents should use hamburger icon to access

DESIGN INTENT:
CSS should be used to create a music recommendation webpage that has a color theme based of williams college school colors. The cards when highlighting should have a yellow border. The navigation tab elements should have a yellow background when being hovered. When hovering over the playlist cards, they should slightly enlarge and have a shadow, so that when the user hovers over the cards they can see more interactivity. When clicking on a card, a modal should appear on the screen, with the background having a gray tint, and the modal having a purple highlight around it.

### Function Specs
[Add function specs here as you plan each milestone]

#1 Function for creating a playlist card

The function should be called, 

function create_playlist_card(playlist_object) {
}

playlist_object should be the following shape:

const playlist = {
    title: "Playlist Title",
    image: "playlist-image-url",
    creatorName: "Creator Name",
    dateAdded: "YYYY-MM-DD",
    likeCount: 0,
    songs: [
        {
            title: "Song Title",
            image: "song-image-url",
            artistName: "Artist Name",
            albumName: "Album Name",
            length: "0:00"
        }
    ]
};

Create and return an <article> element with the class "playlist-card" using the provided playlist object. The article's onclick attribute should call openPlaylistModal() and pass the playlist's title, image, creatorName, and songs array as arguments. Create an <img> element with the class playlist-cover, setting its src to the playlist's image and its alt text to "Playlist cover". Create an <h3> element with the class playlist-title containing the playlist's title, a <p> element with the class playlist-creator containing the playlist's creatorName, and a <p> element with the class playlist-date containing the playlist's dateAdded. Also create a <button> element with the class like-btn and the attribute onclick="event.stopPropagation()". Inside the button, create a <span> with the class heart-icon containing the heart symbol (♥) and a <span> with the class like-count containing the playlist's likeCount. Append all elements so the final structure matches the provided example markup while dynamically populating all values from the playlist object. The created <article> element should be a child of the <section> element with the "playlist-cards" class

Example.
<article class="playlist-card" onclick="openPlaylistModal('Playlist Title', 'assets/img/playlist.png', 'Creator Name', [{title: 'Song 1', artist: 'Artist Name', album: 'Album Name', duration: '00:00', image: 'assets/img/song.png'}, {title: 'Song 2', artist: 'Artist Name', album: 'Album Name', duration: '00:00', image: 'assets/img/song.png'}, {title: 'Song 3', artist: 'Artist Name', album: 'Album Name', duration: '00:00', image: 'assets/img/song.png'}])">
                <img src="assets/img/playlist.png" alt="Playlist cover" class="playlist-cover">
                <h3 class="playlist-title">Playlist Title</h3>
                <p class="playlist-creator">Creator Name</p>
                <p class="playlist-date">Date Added</p>
                <button class="like-btn" onclick="event.stopPropagation()">
                    <span class="heart-icon">♥</span>
                    <span class="like-count">5</span>
                </button>
</article>

#2
Function meant for handling liking and unliking a playlist. Like buttons for the playlist cards should have both a "liked" and "not liked" state. When the user clicks the like button, it should enter the "liked" state, the like count should increase, and the icon should turn red. While the button remains in the "liked" state, the icon should stay red. If the user clicks the like button again, it should return to the "not liked" state, the like count should decrease, and the icon color should be reset.


#3 
There should be a shuffle button that appears in the modal.
The shuffle button in the modal should be below the playlist cover image.
The shuffle button should have similar behavior when hovered in terms of CSS styling. When the shuffle button is hit, the songs (apart of the song data in the playlist object selected) should have a randomized order. The function meant for shuffling should be implemented such that clicking shuffle multiple times reorders the songs randomly. Note that original order should be preserved. When you click out of the modal, the order of the songs should return to where they originally were.

#4
Implement a dedicated Featured page that randomly selects and displays a playlist with an enlarged cover image and playlist name on the left and the song list ont he right and to add navigation between the Featured page and the All Playlists page. It should be a separate HTML fil ewiht its own layout, its own JavaScript logic, and navigation system that connects it to the rest of the app.

The All button should redirect the user to the main page (index.html). The featured button should redirect to the featured page.

The layout of the page — what sections exist, what goes where?

* The featured page should have alot of the same styling and flexbox and media query behavior. It should have the same header structure with the title, cow image, but not the search function because it makes less sense. It can still use the hamburger icon behavior, but it does not have a favorites, a recents, or create playlist

* The main section of the page should have the elements specified previously. The footer of the page can match 1 to 1 with the homepage.

A function spec for your random playlist selection function: what does it take in, what does it return, and when does it run?

When the user hits the featured tab, a playlist should be chosen at random (if data in data.js is empty, use the same error handling as was used for the All tab). The chosen playlist will be shown and the songs will be shown as specified earlier. If the user clicks to a different tab or hits the featured tab again, the randomly chosen playlist should change.

### AI Feature Spec (Milestone 8)
[Leave blank — fill in before Milestone 8]

### Decisions Log
[One entry per milestone where you make spec-informed decisions]