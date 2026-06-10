// Featured page JavaScript

// Hamburger menu toggle
function toggleMenu() {
   const controlPanel = document.querySelector('.control-panel');
   controlPanel.classList.toggle('active');
}

// Function to randomly select a playlist
function selectRandomPlaylist() {
   if (!playlistData || playlistData.length === 0) {
      return null;
   }

   const randomIndex = Math.floor(Math.random() * playlistData.length);
   return playlistData[randomIndex];
}

// Function to sort songs by rating (highest to lowest)
// Note: Since songs don't have a rating field in the data structure,
// we'll display them in their original order as per the data
function displayFeaturedPlaylist(playlist) {
   // Set playlist info
   document.getElementById('featured-playlist-image').src = playlist.image;
   document.getElementById('featured-playlist-name').textContent = playlist.title;
   document.getElementById('featured-playlist-creator').textContent = `by ${playlist.creatorName}`;

   // Display songs
   const songList = document.getElementById('featured-song-list');
   songList.innerHTML = '';

   playlist.songs.forEach(song => {
      const songCard = document.createElement('div');
      songCard.className = 'featured-song-card';
      songCard.innerHTML = `
         <img src="${song.image}" alt="${song.title}">
         <div class="featured-song-info">
            <h4>${song.title}</h4>
            <p>${song.artistName}</p>
         </div>
         <span class="featured-song-duration">${song.length}</span>
      `;
      songList.appendChild(songCard);
   });

   // Show the featured container
   document.querySelector('.featured-container').style.display = 'block';
   document.getElementById('no-playlist-message').style.display = 'none';
}

// Initialize featured page
document.addEventListener('DOMContentLoaded', function() {
   const selectedPlaylist = selectRandomPlaylist();

   if (selectedPlaylist) {
      displayFeaturedPlaylist(selectedPlaylist);
   } else {
      // Show error message if no playlists available
      document.querySelector('.featured-container .featured-playlist-header').style.display = 'none';
      document.getElementById('no-playlist-message').style.display = 'block';
   }
});
