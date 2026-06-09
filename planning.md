## Music Playlist Explorer — Planning Spec

### Data Shape
[Leave blank — fill in before Milestone 3]

playlist:
    - Playlist Title
    - Playlist Image
    - Creator Name
    - Data Added
    - Like Count
    - Song list (list of song objects)

song:
    - Song Name
    - Song Image
    - Artist Name
    - Song Length


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

### AI Feature Spec (Milestone 8)
[Leave blank — fill in before Milestone 8]

### Decisions Log
[One entry per milestone where you make spec-informed decisions]