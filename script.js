// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("playlist-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const shuffleBtn = document.getElementById("shuffle-btn");
const descriptionBtn = document.getElementById("description-btn");

let originalSongs = []; // for saving list of original songs
let currentPlaylistData = null;

function displaySongs(songs) {
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
}

function shuffleSongs() {
   const shuffled = [...originalSongs];

   for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[randomIndex];
      shuffled[randomIndex] = temp;
   }

   displaySongs(shuffled);
}

async function getPlaylistDescription() {
   const descriptionElement = document.getElementById('playlist-description');

   if (!currentPlaylistData) {
      descriptionElement.innerText = 'Error: No playlist data available';
      descriptionElement.style.color = 'purple';
      return;
   }


   // Show loading message
   descriptionElement.innerText = 'Generating description...';
   descriptionElement.style.color = 'purple';

   // Prepare the prompt for the AI
   const songList = currentPlaylistData.songs
      .map(song => `${song.title} by ${song.artist}`)
      .join(', ');

   const prompt = `Generate a 2-3 sentence description for a music playlist titled "${currentPlaylistData.title}" created by ${currentPlaylistData.creator}. The playlist contains these songs: ${songList}. Capture the vibe and theme of the playlist without listing songs individually. Avoid generic marketing language.`;

   // API configuration - API_KEY is loaded from config.js
   const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
   const MODEL = 'openrouter/free';
   

   try {
      const response = await fetch(API_URL, {
         method: 'POST',
         headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.href,
            'X-Title': 'Music Playlist Explorer'
         },
         body: JSON.stringify({
            model: MODEL,
            messages: [
               {
                  role: 'system',
                  content: 'You are a creative music playlist description writer. Write concise, engaging descriptions that capture the mood and vibe of playlists.'
               },
               {
                  role: 'user',
                  content: prompt
               }
            ],
         }),
      });

      if (!response.ok) {
         throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const description = data.choices[0].message.content.trim();

      if (description) {
         descriptionElement.innerText = description;
         descriptionElement.style.color = 'purple';
      } else {
         descriptionElement.innerText = 'Error: Could not generate description';
         descriptionElement.style.color = 'purple';
      }
   } catch (error) {
      console.error('getPlaylistDescription failed:', error);
      descriptionElement.innerText = 'Error retrieving description. Please try again.';
      descriptionElement.style.color = 'purple';
   }
}

function openPlaylistModal(playlistName, imageUrl, creator, songs) {
   document.getElementById('modal-playlist-name').innerText = playlistName;
   document.getElementById('modal-playlist-image').src = imageUrl;
   document.getElementById('modal-playlist-creator').innerText = creator;

   // Clear any previous description
   document.getElementById('playlist-description').innerText = '';

   // Store current playlist data for AI description
   currentPlaylistData = {
      title: playlistName,
      creator: creator,
      songs: songs
   };

   originalSongs = songs;
   displaySongs(songs);

   modal.style.display = "block";
}

closeBtn.onclick = function() {
   modal.style.display = "none";
}

shuffleBtn.onclick = function() {
   shuffleSongs();
}

descriptionBtn.onclick = async function() {
   await getPlaylistDescription();
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

// Delete playlist function
function deletePlaylist(playlistObject, cardElement) {
   // Show confirmation dialog
   const confirmation = confirm(`Are you sure you want to delete "${playlistObject.title}"?`);

   if (confirmation) {
      // Find and remove from playlistData array using unique ID
      const index = playlistData.findIndex(p => p._id === playlistObject._id);
      if (index > -1) {
         playlistData.splice(index, 1);
      }

      // Remove from display
      cardElement.remove();

      // Check if there are no playlists left
      const playlistCardsSection = document.querySelector('.playlist-cards');
      const remainingCards = playlistCardsSection.querySelectorAll('.playlist-card');

      if (remainingCards.length === 0) {
         const message = document.createElement('p');
         message.className = 'no-playlists-message';
         message.textContent = 'No playlists found';
         playlistCardsSection.insertBefore(message, playlistCardsSection.firstChild);
      }
   }
}

// Open edit modal
let currentEditPlaylist = null;
let currentEditCard = null;

function openEditModal(playlistObject, cardElement) {
   currentEditPlaylist = playlistObject;
   currentEditCard = cardElement;

   const editModal = document.getElementById('edit-modal');

   // Populate form fields
   document.getElementById('edit-title').value = playlistObject.title;
   document.getElementById('edit-creator').value = playlistObject.creatorName;
   document.getElementById('edit-image').value = playlistObject.image;
   document.getElementById('edit-date').value = playlistObject.dateAdded;

   // Populate songs list
   const songsList = document.getElementById('edit-songs-list');
   songsList.innerHTML = '';

   playlistObject.songs.forEach((song, index) => {
      const songDiv = document.createElement('div');
      songDiv.className = 'edit-song-item';
      songDiv.innerHTML = `
         <h4>Song ${index + 1}</h4>
         <label>Title: <input type="text" class="song-title" value="${song.title}" data-index="${index}"></label>
         <label>Artist: <input type="text" class="song-artist" value="${song.artistName}" data-index="${index}"></label>
         <label>Album: <input type="text" class="song-album" value="${song.albumName}" data-index="${index}"></label>
         <label>Length: <input type="text" class="song-length" value="${song.length}" data-index="${index}"></label>
         <label>Image URL: <input type="text" class="song-image" value="${song.image}" data-index="${index}"></label>
      `;
      songsList.appendChild(songDiv);
   });

   editModal.style.display = 'block';
}

// Close edit modal
document.getElementById('edit-close').onclick = function() {
   document.getElementById('edit-modal').style.display = 'none';
}

document.getElementById('edit-cancel').onclick = function() {
   document.getElementById('edit-modal').style.display = 'none';
}

// Save edited playlist
document.getElementById('edit-form').onsubmit = function(event) {
   event.preventDefault();

   // Update playlist object
   currentEditPlaylist.title = document.getElementById('edit-title').value;
   currentEditPlaylist.creatorName = document.getElementById('edit-creator').value;
   currentEditPlaylist.image = document.getElementById('edit-image').value;
   currentEditPlaylist.dateAdded = document.getElementById('edit-date').value;

   // Update songs
   const songTitles = document.querySelectorAll('.song-title');
   const songArtists = document.querySelectorAll('.song-artist');
   const songAlbums = document.querySelectorAll('.song-album');
   const songLengths = document.querySelectorAll('.song-length');
   const songImages = document.querySelectorAll('.song-image');

   songTitles.forEach((input, index) => {
      currentEditPlaylist.songs[index].title = input.value;
      currentEditPlaylist.songs[index].artistName = songArtists[index].value;
      currentEditPlaylist.songs[index].albumName = songAlbums[index].value;
      currentEditPlaylist.songs[index].length = songLengths[index].value;
      currentEditPlaylist.songs[index].image = songImages[index].value;
   });

   // Update the card display
   currentEditCard.querySelector('.playlist-title').textContent = currentEditPlaylist.title;
   currentEditCard.querySelector('.playlist-creator').textContent = currentEditPlaylist.creatorName;
   currentEditCard.querySelector('.playlist-cover').src = currentEditPlaylist.image;
   currentEditCard.querySelector('.playlist-date').textContent = currentEditPlaylist.dateAdded;

   // Update the onclick handler with new song data
   const formattedSongs = currentEditPlaylist.songs.map(song => ({
      title: song.title,
      artist: song.artistName,
      album: song.albumName,
      duration: song.length,
      image: song.image
   }));

   currentEditCard.onclick = function(event) {
      // Ignore clicks on buttons
      if (event.target.closest('button')) return;

      openPlaylistModal(
         currentEditPlaylist.title,
         currentEditPlaylist.image,
         currentEditPlaylist.creatorName,
         formattedSongs
      );
   };

   // Update in playlistData array using unique ID
   const index = playlistData.findIndex(p => p._id === currentEditPlaylist._id);
   if (index > -1) {
      playlistData[index] = currentEditPlaylist;
   }

   // Close modal
   document.getElementById('edit-modal').style.display = 'none';

   alert('Playlist updated successfully!');
}

// Sort playlists by like count (highest to lowest)
function sortByLikes() {
   const sortedPlaylists = [...playlistData].sort((a, b) => b.likeCount - a.likeCount);
   displayPlaylists(sortedPlaylists);
}

// Sort playlists by date (most recent first)
function sortByDate() {
   const sortedPlaylists = [...playlistData].sort((a, b) => {
      return parseInt(b.dateAdded) - parseInt(a.dateAdded);
   });
   displayPlaylists(sortedPlaylists);
}

// Sort playlists alphabetically by name (A to Z)
function sortByName() {
   const sortedPlaylists = [...playlistData].sort((a, b) => {
      return a.title.localeCompare(b.title);
   });
   displayPlaylists(sortedPlaylists);
}

// Display playlists in the order provided
function displayPlaylists(playlists) {
   const playlistCardsSection = document.querySelector('.playlist-cards');

   // Remove existing cards
   const existingCards = playlistCardsSection.querySelectorAll('.playlist-card');
   existingCards.forEach(card => card.remove());

   // Remove any existing no-playlist messages
   const existingMessages = playlistCardsSection.querySelectorAll('.no-playlists-message');
   existingMessages.forEach(msg => msg.remove());

   // Add sorted playlists
   if (playlists.length === 0) {
      const message = document.createElement('p');
      message.className = 'no-playlists-message';
      message.textContent = 'No playlists found';
      playlistCardsSection.appendChild(message);
   } else {
      playlists.forEach(playlist => {
         create_playlist_card(playlist);
      });
   }
}

function create_playlist_card(playlist_object) {
   const article = document.createElement('article');
   article.className = 'playlist-card';

   // Store a unique identifier on the card
   if (!playlist_object._id) {
      playlist_object._id = `playlist_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
   }
   article.dataset.playlistId = playlist_object._id;

   // Convert songs array to the format expected by openPlaylistModal
   const formattedSongs = playlist_object.songs.map(song => ({
      title: song.title,
      artist: song.artistName,
      album: song.albumName,
      duration: song.length,
      image: song.image
   }));

   article.onclick = function(event) {
      // Ignore clicks on buttons
      if (event.target.closest('button')) return;

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

   const heartIcon = document.createElement('span');
   heartIcon.className = 'heart-icon';
   heartIcon.textContent = '♥';

   const likeCount = document.createElement('span');
   likeCount.className = 'like-count';
   likeCount.textContent = playlist_object.likeCount;

   let isLiked = false;

   // click behavior example
   likeBtn.onclick = function(event) {
      event.stopPropagation();

      if (isLiked) {
         // Unlike: decrease count and reset color
         isLiked = false;
         playlist_object.likeCount--;
         likeCount.textContent = playlist_object.likeCount;
         heartIcon.style.color = '';
      } else {
         // Like: increase count and turn red
         isLiked = true;
         playlist_object.likeCount++;
         likeCount.textContent = playlist_object.likeCount;
         heartIcon.style.color = 'red';
      }
   };

   likeBtn.appendChild(heartIcon);
   likeBtn.appendChild(likeCount);

   // Create edit button
   const editBtn = document.createElement('button');
   editBtn.className = 'edit-btn';
   editBtn.innerHTML = '✏️';
   editBtn.title = 'Edit playlist';

   editBtn.onclick = function(event) {
      event.stopPropagation();
      // Find the current playlist in the array using the unique ID
      const currentPlaylist = playlistData.find(p => p._id === playlist_object._id);
      if (currentPlaylist) {
         openEditModal(currentPlaylist, article);
      } else {
         alert('Error: Playlist not found. Please refresh the page.');
      }
   };

   // Create delete button
   const deleteBtn = document.createElement('button');
   deleteBtn.className = 'delete-btn';
   deleteBtn.innerHTML = '🗑️';
   deleteBtn.title = 'Delete playlist';

   deleteBtn.onclick = function(event) {
      event.stopPropagation();
      deletePlaylist(playlist_object, article);
   };

   article.appendChild(img);
   article.appendChild(h3);
   article.appendChild(creatorP);
   article.appendChild(dateP);
   article.appendChild(likeBtn);
   article.appendChild(editBtn);
   article.appendChild(deleteBtn);

   const playlistCardsSection = document.querySelector('.playlist-cards');
   if (playlistCardsSection) {
      playlistCardsSection.appendChild(article);
   }

   return article;
}

// Create Playlist Modal Functions
let createSongCount = 0;

function openCreateModal() {
   const createModal = document.getElementById('create-modal');
   const songsList = document.getElementById('create-songs-list');

   // Reset form
   document.getElementById('create-form').reset();
   songsList.innerHTML = '';
   createSongCount = 0;

   // Add one default song field
   addSongField();

   createModal.style.display = 'block';
}

function addSongField() {
   const songsList = document.getElementById('create-songs-list');
   const songDiv = document.createElement('div');
   songDiv.className = 'edit-song-item';
   songDiv.setAttribute('data-song-index', createSongCount);

   songDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
         <h4>Song ${createSongCount + 1}</h4>
         <button type="button" class="remove-song-btn" onclick="removeSongField(${createSongCount})">✕ Remove</button>
      </div>
      <label>Title: <input type="text" class="song-title" required></label>
      <label>Artist: <input type="text" class="song-artist" required></label>
      <label>Album: <input type="text" class="song-album" required></label>
      <label>Length: <input type="text" class="song-length" placeholder="3:45" required></label>
      <label>Image URL: <input type="text" class="song-image" required></label>
   `;

   songsList.appendChild(songDiv);
   createSongCount++;
}

function removeSongField(index) {
   const songDiv = document.querySelector(`[data-song-index="${index}"]`);
   if (songDiv) {
      songDiv.remove();
   }
}

// Close create modal
document.getElementById('create-close').onclick = function() {
   document.getElementById('create-modal').style.display = 'none';
}

document.getElementById('create-cancel').onclick = function() {
   document.getElementById('create-modal').style.display = 'none';
}

// Add song button
document.getElementById('add-song-btn').onclick = function() {
   addSongField();
}

// Create playlist form submit
document.getElementById('create-form').onsubmit = function(event) {
   event.preventDefault();

   // Get form values
   const title = document.getElementById('create-title').value;
   const creator = document.getElementById('create-creator').value;
   const image = document.getElementById('create-image').value;
   const date = document.getElementById('create-date').value;

   // Get songs
   const songs = [];
   const songItems = document.querySelectorAll('#create-songs-list .edit-song-item');

   songItems.forEach(item => {
      const song = {
         title: item.querySelector('.song-title').value,
         artistName: item.querySelector('.song-artist').value,
         albumName: item.querySelector('.song-album').value,
         length: item.querySelector('.song-length').value,
         image: item.querySelector('.song-image').value
      };
      songs.push(song);
   });

   // Confirmation
   const confirmation = confirm(`Are you sure you want to create the playlist "${title}" with ${songs.length} song(s)?`);

   if (confirmation) {
      // Create new playlist object
      const newPlaylist = {
         title: title,
         creatorName: creator,
         image: image,
         dateAdded: date,
         likeCount: 0,
         songs: songs
      };

      // Add to playlistData
      playlistData.push(newPlaylist);

      // Remove "no playlists" message if it exists
      const noPlaylistsMsg = document.querySelector('.no-playlists-message');
      if (noPlaylistsMsg) {
         noPlaylistsMsg.remove();
      }

      // Create and display the card
      create_playlist_card(newPlaylist);

      // Close modal
      document.getElementById('create-modal').style.display = 'none';

      alert('Playlist created successfully!');
   }
}

document.addEventListener('DOMContentLoaded', function() {
   const playlistCardsSection = document.querySelector('.playlist-cards');

   // Remove any existing dynamically created playlist cards
   const existingCards = playlistCardsSection.querySelectorAll('.playlist-card');
   existingCards.forEach(card => card.remove());

   // Remove any existing no-playlist messages
   const existingMessages = playlistCardsSection.querySelectorAll('.no-playlists-message');
   existingMessages.forEach(msg => msg.remove());

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