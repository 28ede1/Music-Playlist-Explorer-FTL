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

   // Add sorted playlists
   playlists.forEach(playlist => {
      create_playlist_card(playlist);
   });
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