// Spotify Data Generator - Pairs Spotify playlist info with your existing songs

// Add your Spotify playlist IDs here
const spotifyIds = [
    '0istShasBIZ3dUgwZPJs6e',
    '4HgvtBWxPZJNyMvabm62o0?si=LLS13u1fSyC2llRZXNGCFQ&nd=1&dlsi=d572a5e9448246d7',
    '2oKgQmWLlAgCqw0YD8SvEg',
    '7gK6hhbEPJb2ZARqT5jP9x',
    '6HEegfWHhUcytwQFAm1QbK',
    '7lF4y9h7mw0RJK5JIOOR2Z',
    '4Mak6QDZIXpA4mNQAartg9',
    '1bXv55nZdRJtIiuLeuJwp2'

    // Add more IDs...
];

// Get songs from your existing data.js (one for each Spotify ID)
const mockSongs = spotifyIds.map((id, index) => playlistData[index].songs);

// Generate and store the data
let generatedPlaylistData = null;

async function generate() {
    generatedPlaylistData = await generatePlaylists(spotifyIds, mockSongs);
    console.log('✅ Data ready! Copy generatedPlaylistData to replace data.js');
}

generate();
