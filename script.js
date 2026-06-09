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