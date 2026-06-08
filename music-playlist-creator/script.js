// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("playlist-modal");
const closeBtn = document.getElementsByClassName("close")[0];

function openPlaylistModal(playlistName, imageUrl, creator, songs) {
   document.getElementById('modal-playlist-name').innerText = playlistName;
   document.getElementById('modal-playlist-image').src = imageUrl;
   document.getElementById('modal-playlist-creator').innerText = creator;

   const songList = document.getElementById('modal-song-list');
   songList.innerHTML = '';

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

window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

// Hamburger menu toggle
function toggleMenu() {
   const controlPanel = document.querySelector('.control-panel');
   controlPanel.classList.toggle('active');
}