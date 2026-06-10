// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("playlist-modal");
const closeBtn = document.getElementsByClassName("close")[0];

function openPlaylistModal(playlistName, imageUrl, creator, songs) {
   document.getElementById('modal-playlist-name').innerText = playlistName;
   document.getElementById('modal-playlist-image').src = imageUrl;
   document.getElementById('modal-playlist-creator').innerText = creator;

   const songList = document.getElementById('modal-song-list');
   // Clears the modal content so old data doesn't stay when a new playlist is opened
   songList.innerHTML = ''; 

   // Creates a div element based on song information (songs appear in a list )
   songs.forEach(song => {
      const songCard = document.createElement('div');
      songCard.className = 'song-card';
      songCard.innerHTML = `
         <img src="${song.image}" alt="${song.title}">
         <div class="song-info">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
            <p>${song.album}</p>
         </div>
         <span class="song-duration">${song.duration}</span>
      `;
      songList.appendChild(songCard);
   });

   modal.style.display = "block";
}

closeBtn.onclick = function() {
   modal.style.display = "none";
}

// if the user clicks anywhere on the page, the modal gets deleted (modal and modal-content are two different parts of the modal display, modal includes the entire screen)
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

// Hamburger menu toggle
function toggleMenu() {
   const controlPanel = document.querySelector('.control-panel');

   // toggle removes/adds the specified class based on whether the class exist for the element
   controlPanel.classList.toggle('active');
}

function create_playlist_card(playlist_object) {
   const article = document.createElement('article');
   article.className = 'playlist-card';

   // Convert songs array to the format expected by openPlaylistModal
   const formattedSongs = playlist_object.songs.map(song => ({
      title: song.title,
      artist: song.artistName,
      album: song.albumName,
      duration: song.length,
      image: song.image
   }));

   article.onclick = function() {
      openPlaylistModal(
         playlist_object.title,
         playlist_object.image,
         playlist_object.creatorName,
         formattedSongs
      );
   };

   const img = document.createElement('img');
   img.src = playlist_object.image;
   img.alt = 'Playlist cover';
   img.className = 'playlist-cover';

   const h3 = document.createElement('h3');
   h3.className = 'playlist-title';
   h3.textContent = playlist_object.title;

   const creatorP = document.createElement('p');
   creatorP.className = 'playlist-creator';
   creatorP.textContent = playlist_object.creatorName;

   const dateP = document.createElement('p');
   dateP.className = 'playlist-date';
   dateP.textContent = playlist_object.dateAdded;

   const likeBtn = document.createElement('button');
   likeBtn.className = 'like-btn';
   likeBtn.onclick = function(event) {
      event.stopPropagation();
   };

   const heartIcon = document.createElement('span');
   heartIcon.className = 'heart-icon';
   heartIcon.textContent = '♥';

   const likeCount = document.createElement('span');
   likeCount.className = 'like-count';
   likeCount.textContent = playlist_object.likeCount;

   likeBtn.appendChild(heartIcon);
   likeBtn.appendChild(likeCount);

   article.appendChild(img);
   article.appendChild(h3);
   article.appendChild(creatorP);
   article.appendChild(dateP);
   article.appendChild(likeBtn);

   const playlistCardsSection = document.querySelector('.playlist-cards');
   if (playlistCardsSection) {
      playlistCardsSection.appendChild(article);
   }

   return article;
}

document.addEventListener('DOMContentLoaded', function() {
   const playlistCardsSection = document.querySelector('.playlist-cards');

   if (!playlistData || playlistData.length === 0) {
      const message = document.createElement('p');
      message.className = 'no-playlists-message';
      message.textContent = 'No playlists found';
      playlistCardsSection.insertBefore(message, playlistCardsSection.firstChild);
   } else {
      playlistData.forEach(playlist => {
         create_playlist_card(playlist);
      });
   }
});