async function getAccessToken() {
    // This is apparently the required format for credentials
    const credentials = SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET
    const encodedCredentials = btoa(credentials); // btoa = encode to base64


    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + encodedCredentials
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();

    if (data.error) {
        console.error('Spotify Error:', data.error);
        console.error('Description:', data.error_description);
        return null;
    }

    console.log('Got access token!');
    return data.access_token;
}

async function fetchPlaylist(playlistId, accessToken) {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}?market=US`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    const data = await response.json();

    if (data.error) {
        console.error('Error:', data.error);
        return null;
    }

    console.log('Fetched playlist:', data.name);
    return data;
}

function formatDuration(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    
    // Add leading zero if seconds < 10
    const secondsFormatted = seconds < 10 ? '0' + seconds : seconds;
    
    return minutes + ':' + secondsFormatted;
}

// Transform Spotify playlist info and pair with mock songs
function transformPlaylist(spotifyPlaylist, mockSongs) {
    return {
        title: spotifyPlaylist.name,
        image: spotifyPlaylist.images[0]?.url || 'https://picsum.photos/300?random=1',
        creatorName: spotifyPlaylist.owner.display_name,
        dateAdded: new Date().getFullYear().toString(),
        likeCount: spotifyPlaylist.followers?.total || 0,
        songs: mockSongs  // Use the mock songs we pass in
    };
}

// Fetch multiple playlists and combine with mock songs
async function generatePlaylists(playlistIds, mockSongsArray) {
    const token = await getAccessToken();
    if (!token) return;

    const playlists = [];

    for (let i = 0; i < playlistIds.length; i++) {
        const playlistId = playlistIds[i];
        const mockSongs = mockSongsArray[i];

        console.log(`Fetching ${i + 1}/${playlistIds.length}...`);
        const spotifyData = await fetchPlaylist(playlistId, token);

        if (spotifyData) {
            const transformed = transformPlaylist(spotifyData, mockSongs);
            playlists.push(transformed);
        }
    }

    console.log('✅ Done!');
    console.log(JSON.stringify(playlists, null, 4));
    return playlists;
}