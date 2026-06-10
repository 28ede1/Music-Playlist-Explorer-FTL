// Playlist data - add your playlist data here
const playlistData = [
    {
        title: "Chill Vibes",
        image: "https://picsum.photos/300?random=1",
        creatorName: "Alex Rivers",
        dateAdded: "2026",
        likeCount: 0,
        songs: [
            {
                title: "Sunset Dreams",
                image: "https://picsum.photos/100?random=1",
                artistName: "Luna Bay",
                albumName: "Coastal Memories",
                length: "3:45"
            },
            {
                title: "Ocean Waves",
                image: "https://picsum.photos/100?random=2",
                artistName: "The Tides",
                albumName: "Endless Horizon",
                length: "4:12"
            },
            {
                title: "Midnight Jazz",
                image: "https://picsum.photos/100?random=3",
                artistName: "Smooth Operators",
                albumName: "After Hours",
                length: "5:20"
            }
        ]
    },
    {
        title: "Workout Energy",
        image: "https://picsum.photos/300?random=2",
        creatorName: "Jordan Fit",
        dateAdded: "2026",
        likeCount: 287,
        songs: [
            {
                title: "Pump It Up",
                image: "https://picsum.photos/100?random=4",
                artistName: "Bass Crew",
                albumName: "Maximum Power",
                length: "3:20"
            },
            {
                title: "Run Wild",
                image: "https://picsum.photos/100?random=5",
                artistName: "Energy Rush",
                albumName: "Unstoppable",
                length: "2:58"
            },
            {
                title: "Beast Mode",
                image: "https://picsum.photos/100?random=6",
                artistName: "Iron Hearts",
                albumName: "Unleashed",
                length: "3:33"
            },
            {
                title: "Cardio Blast",
                image: "https://picsum.photos/100?random=7",
                artistName: "Pulse Nation",
                albumName: "High Intensity",
                length: "4:01"
            }
        ]
    },
    {
        title: "Study Focus",
        image: "https://picsum.photos/300?random=3",
        creatorName: "Sam Scholar",
        dateAdded: "2026",
        likeCount: 95,
        songs: [
            {
                title: "Concentration",
                image: "https://picsum.photos/100?random=8",
                artistName: "Mindful Beats",
                albumName: "Deep Focus",
                length: "6:15"
            },
            {
                title: "Library Silence",
                image: "https://picsum.photos/100?random=9",
                artistName: "Quiet Hours",
                albumName: "Study Soundscapes",
                length: "4:50"
            }
        ]
    },
    {
        title: "Road Trip Anthems",
        image: "https://picsum.photos/300?random=4",
        creatorName: "Casey Cruise",
        dateAdded: "2026",
        likeCount: 312,
        songs: [
            {
                title: "Highway Stars",
                image: "https://picsum.photos/100?random=10",
                artistName: "Open Road",
                albumName: "Long Distance",
                length: "3:42"
            },
            {
                title: "Mile Marker",
                image: "https://picsum.photos/100?random=11",
                artistName: "Journey Band",
                albumName: "Road Warrior",
                length: "4:28"
            },
            {
                title: "Cruise Control",
                image: "https://picsum.photos/100?random=12",
                artistName: "Drive Time",
                albumName: "Easy Rider",
                length: "3:15"
            },
            {
                title: "Windows Down",
                image: "https://picsum.photos/100?random=13",
                artistName: "Summer Breeze",
                albumName: "Golden Days",
                length: "3:52"
            },
            {
                title: "Rest Stop Groove",
                image: "https://picsum.photos/100?random=14",
                artistName: "Travel Tunes",
                albumName: "On The Move",
                length: "2:47"
            }
        ]
    },
    {
        title: "Late Night Blues",
        image: "https://picsum.photos/300?random=5",
        creatorName: "Morgan Keys",
        dateAdded: "2026",
        likeCount: 201,
        songs: [
            {
                title: "Rainy Mood",
                image: "https://picsum.photos/100?random=15",
                artistName: "Blue Notes",
                albumName: "Melancholy Sessions",
                length: "5:03"
            },
            {
                title: "Soul Searching",
                image: "https://picsum.photos/100?random=16",
                artistName: "Deep Feelings",
                albumName: "Inner Journey",
                length: "4:35"
            },
            {
                title: "Velvet Voice",
                image: "https://picsum.photos/100?random=17",
                artistName: "Smooth Jazz Collective",
                albumName: "Midnight Lounge",
                length: "6:20"
            }
        ]
    },
    {
        title: "Morning Coffee",
        image: "https://picsum.photos/300?random=6",
        creatorName: "Taylor Brew",
        dateAdded: "2026",
        likeCount: 178,
        songs: [
            {
                title: "Fresh Start",
                image: "https://picsum.photos/100?random=18",
                artistName: "Morning Light",
                albumName: "New Beginnings",
                length: "3:28"
            },
            {
                title: "Sunrise Acoustic",
                image: "https://picsum.photos/100?random=19",
                artistName: "Gentle Strings",
                albumName: "Dawn Collection",
                length: "4:10"
            },
            {
                title: "Wake Up Call",
                image: "https://picsum.photos/100?random=20",
                artistName: "Early Birds",
                albumName: "Rise & Shine",
                length: "2:55"
            },
            {
                title: "Breakfast Beat",
                image: "https://picsum.photos/100?random=21",
                artistName: "Daily Rhythm",
                albumName: "Morning Ritual",
                length: "3:40"
            }
        ]
    },
    {
        title: "Party Starters",
        image: "https://picsum.photos/300?random=7",
        creatorName: "DJ Phoenix",
        dateAdded: "2026",
        likeCount: 445,
        songs: [
            {
                title: "Dance Floor Fever",
                image: "https://picsum.photos/100?random=22",
                artistName: "Club Mix",
                albumName: "Party Anthems Vol. 1",
                length: "3:18"
            },
            {
                title: "Turn It Up",
                image: "https://picsum.photos/100?random=23",
                artistName: "Bass Drop",
                albumName: "Maximum Volume",
                length: "2:50"
            },
            {
                title: "Night Out",
                image: "https://picsum.photos/100?random=24",
                artistName: "Party People",
                albumName: "Weekend Vibes",
                length: "3:35"
            }
        ]
    },
    {
        title: "Acoustic Sessions",
        image: "https://picsum.photos/300?random=8",
        creatorName: "Riley Strings",
        dateAdded: "2026",
        likeCount: 129,
        songs: [
            {
                title: "Campfire Stories",
                image: "https://picsum.photos/100?random=25",
                artistName: "Folk Tales",
                albumName: "Fireside Sessions",
                length: "4:22"
            },
            {
                title: "Unplugged Soul",
                image: "https://picsum.photos/100?random=26",
                artistName: "Raw Emotion",
                albumName: "Stripped Down",
                length: "5:15"
            },
            {
                title: "String Theory",
                image: "https://picsum.photos/100?random=27",
                artistName: "Guitar Masters",
                albumName: "Six String Magic",
                length: "3:48"
            },
            {
                title: "Whisper Song",
                image: "https://picsum.photos/100?random=28",
                artistName: "Soft Voice",
                albumName: "Intimate Moments",
                length: "4:05"
            }
        ]
    },
    {
        title: "Summer Nights",
        image: "https://picsum.photos/300?random=9",
        creatorName: "Luna Martinez",
        dateAdded: "2026",
        likeCount: 267,
        songs: [
            {
                title: "Firefly Glow",
                image: "https://picsum.photos/100?random=29",
                artistName: "Night Sky",
                albumName: "Evening Tales",
                length: "4:15"
            },
            {
                title: "Starlight Dance",
                image: "https://picsum.photos/100?random=30",
                artistName: "Cosmic Vibes",
                albumName: "Celestial Dreams",
                length: "3:58"
            },
            {
                title: "Moonlit Path",
                image: "https://picsum.photos/100?random=31",
                artistName: "Silver Rays",
                albumName: "Nocturne",
                length: "5:02"
            }
        ]
    },
    {
        title: "Urban Beats",
        image: "https://picsum.photos/300?random=10",
        creatorName: "Marcus Flow",
        dateAdded: "2026",
        likeCount: 389,
        songs: [
            {
                title: "City Lights",
                image: "https://picsum.photos/100?random=32",
                artistName: "Metro Sound",
                albumName: "Downtown",
                length: "3:22"
            },
            {
                title: "Concrete Jungle",
                image: "https://picsum.photos/100?random=33",
                artistName: "Street Poets",
                albumName: "Block Party",
                length: "4:08"
            },
            {
                title: "Subway Rhythm",
                image: "https://picsum.photos/100?random=34",
                artistName: "Underground Kings",
                albumName: "Rush Hour",
                length: "3:45"
            }
        ]
    },
    {
        title: "Rainy Day Lounge",
        image: "https://picsum.photos/300?random=11",
        creatorName: "Sophie Gray",
        dateAdded: "2026",
        likeCount: 156,
        songs: [
            {
                title: "Drizzle Dreams",
                image: "https://picsum.photos/100?random=35",
                artistName: "Cloudy Skies",
                albumName: "Storm Sessions",
                length: "4:50"
            },
            {
                title: "Thunder Whisper",
                image: "https://picsum.photos/100?random=36",
                artistName: "Rain Collective",
                albumName: "Weathered",
                length: "5:18"
            },
            {
                title: "Puddle Reflections",
                image: "https://picsum.photos/100?random=37",
                artistName: "Wet Pavement",
                albumName: "After the Storm",
                length: "3:55"
            }
        ]
    }
];


// // Playlist data - add your playlist data here
// const playlistData = [
//     {
//         "title": "Tyler, The Creator: Full Discography",
//         "image": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847be28a0f1858f342325b32aa",
//         "creatorName": "cole nordstrom",
//         "dateAdded": "2026",
//         "likeCount": 2657,
//         "songs": [
//             {
//                 "title": "Sunset Dreams",
//                 "image": "https://picsum.photos/100?random=1",
//                 "artistName": "Luna Bay",
//                 "albumName": "Coastal Memories",
//                 "length": "3:45"
//             },
//             {
//                 "title": "Ocean Waves",
//                 "image": "https://picsum.photos/100?random=2",
//                 "artistName": "The Tides",
//                 "albumName": "Endless Horizon",
//                 "length": "4:12"
//             },
//             {
//                 "title": "Midnight Jazz",
//                 "image": "https://picsum.photos/100?random=3",
//                 "artistName": "Smooth Operators",
//                 "albumName": "After Hours",
//                 "length": "5:20"
//             }
//         ]
//     },
//     {
//         "title": "Everything",
//         "image": "https://mosaic.scdn.co/640/ab67616d00001e02582d56ce20fe0146ffa0e5cfab67616d00001e0259998815d706661e2c404d9fab67616d00001e0286339e6cd71cc2a167451ee5ab67616d00001e02ce4f1737bc8a646c8c4bd25a",
//         "creatorName": "charlie",
//         "dateAdded": "2026",
//         "likeCount": 3,
//         "songs": [
//             {
//                 "title": "Pump It Up",
//                 "image": "https://picsum.photos/100?random=4",
//                 "artistName": "Bass Crew",
//                 "albumName": "Maximum Power",
//                 "length": "3:20"
//             },
//             {
//                 "title": "Run Wild",
//                 "image": "https://picsum.photos/100?random=5",
//                 "artistName": "Energy Rush",
//                 "albumName": "Unstoppable",
//                 "length": "2:58"
//             },
//             {
//                 "title": "Beast Mode",
//                 "image": "https://picsum.photos/100?random=6",
//                 "artistName": "Iron Hearts",
//                 "albumName": "Unleashed",
//                 "length": "3:33"
//             },
//             {
//                 "title": "Cardio Blast",
//                 "image": "https://picsum.photos/100?random=7",
//                 "artistName": "Pulse Nation",
//                 "albumName": "High Intensity",
//                 "length": "4:01"
//             }
//         ]
//     },
//     {
//         "title": "The Best of Michael Jackson",
//         "image": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c845fc7b418ddd0e9a7d6204e",
//         "creatorName": "Michael Jackson",
//         "dateAdded": "2026",
//         "likeCount": 1614157,
//         "songs": [
//             {
//                 "title": "Concentration",
//                 "image": "https://picsum.photos/100?random=8",
//                 "artistName": "Mindful Beats",
//                 "albumName": "Deep Focus",
//                 "length": "6:15"
//             },
//             {
//                 "title": "Library Silence",
//                 "image": "https://picsum.photos/100?random=9",
//                 "artistName": "Quiet Hours",
//                 "albumName": "Study Soundscapes",
//                 "length": "4:50"
//             }
//         ]
//     },
//     {
//         "title": "Drake - Chill Playlist🌺",
//         "image": "https://mosaic.scdn.co/640/ab67616d00001e0202854a7060fccc1a66a4b5adab67616d00001e021692599c8c0f98e470c68106ab67616d00001e025ea859dc94365abd9fd84fd6ab67616d00001e02bba7cfaf7c59ff0898acba1f",
//         "creatorName": "Steven Hanafee",
//         "dateAdded": "2026",
//         "likeCount": 4816,
//         "songs": [
//             {
//                 "title": "Highway Stars",
//                 "image": "https://picsum.photos/100?random=10",
//                 "artistName": "Open Road",
//                 "albumName": "Long Distance",
//                 "length": "3:42"
//             },
//             {
//                 "title": "Mile Marker",
//                 "image": "https://picsum.photos/100?random=11",
//                 "artistName": "Journey Band",
//                 "albumName": "Road Warrior",
//                 "length": "4:28"
//             },
//             {
//                 "title": "Cruise Control",
//                 "image": "https://picsum.photos/100?random=12",
//                 "artistName": "Drive Time",
//                 "albumName": "Easy Rider",
//                 "length": "3:15"
//             },
//             {
//                 "title": "Windows Down",
//                 "image": "https://picsum.photos/100?random=13",
//                 "artistName": "Summer Breeze",
//                 "albumName": "Golden Days",
//                 "length": "3:52"
//             },
//             {
//                 "title": "Rest Stop Groove",
//                 "image": "https://picsum.photos/100?random=14",
//                 "artistName": "Travel Tunes",
//                 "albumName": "On The Move",
//                 "length": "2:47"
//             }
//         ]
//     },
//     {
//         "title": "Blonded",
//         "image": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849e9fcc630f6477e0d89e483a",
//         "creatorName": "Frank Ocean",
//         "dateAdded": "2026",
//         "likeCount": 302648,
//         "songs": [
//             {
//                 "title": "Rainy Mood",
//                 "image": "https://picsum.photos/100?random=15",
//                 "artistName": "Blue Notes",
//                 "albumName": "Melancholy Sessions",
//                 "length": "5:03"
//             },
//             {
//                 "title": "Soul Searching",
//                 "image": "https://picsum.photos/100?random=16",
//                 "artistName": "Deep Feelings",
//                 "albumName": "Inner Journey",
//                 "length": "4:35"
//             },
//             {
//                 "title": "Velvet Voice",
//                 "image": "https://picsum.photos/100?random=17",
//                 "artistName": "Smooth Jazz Collective",
//                 "albumName": "Midnight Lounge",
//                 "length": "6:20"
//             }
//         ]
//     },
//     {
//         "title": "Beabadoobee playlist ♡",
//         "image": "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da846f1deabf018f7b14401bd62f",
//         "creatorName": "𝓥𝓲𝓷  ♡",
//         "dateAdded": "2026",
//         "likeCount": 4657,
//         "songs": [
//             {
//                 "title": "Fresh Start",
//                 "image": "https://picsum.photos/100?random=18",
//                 "artistName": "Morning Light",
//                 "albumName": "New Beginnings",
//                 "length": "3:28"
//             },
//             {
//                 "title": "Sunrise Acoustic",
//                 "image": "https://picsum.photos/100?random=19",
//                 "artistName": "Gentle Strings",
//                 "albumName": "Dawn Collection",
//                 "length": "4:10"
//             },
//             {
//                 "title": "Wake Up Call",
//                 "image": "https://picsum.photos/100?random=20",
//                 "artistName": "Early Birds",
//                 "albumName": "Rise & Shine",
//                 "length": "2:55"
//             },
//             {
//                 "title": "Breakfast Beat",
//                 "image": "https://picsum.photos/100?random=21",
//                 "artistName": "Daily Rhythm",
//                 "albumName": "Morning Ritual",
//                 "length": "3:40"
//             }
//         ]
//     },
//     {
//         "title": "sza - all songs",
//         "image": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da843a7e30cae4ce15cbd13507c4",
//         "creatorName": "oliviatannous",
//         "dateAdded": "2026",
//         "likeCount": 21946,
//         "songs": [
//             {
//                 "title": "Dance Floor Fever",
//                 "image": "https://picsum.photos/100?random=22",
//                 "artistName": "Club Mix",
//                 "albumName": "Party Anthems Vol. 1",
//                 "length": "3:18"
//             },
//             {
//                 "title": "Turn It Up",
//                 "image": "https://picsum.photos/100?random=23",
//                 "artistName": "Bass Drop",
//                 "albumName": "Maximum Volume",
//                 "length": "2:50"
//             },
//             {
//                 "title": "Night Out",
//                 "image": "https://picsum.photos/100?random=24",
//                 "artistName": "Party People",
//                 "albumName": "Weekend Vibes",
//                 "length": "3:35"
//             }
//         ]
//     },
//     {
//         "title": "Malcolm Todd (all songs)",
//         "image": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c36dd489e403b2de11bc976e6",
//         "creatorName": "Grace",
//         "dateAdded": "2026",
//         "likeCount": 17621,
//         "songs": [
//             {
//                 "title": "Campfire Stories",
//                 "image": "https://picsum.photos/100?random=25",
//                 "artistName": "Folk Tales",
//                 "albumName": "Fireside Sessions",
//                 "length": "4:22"
//             },
//             {
//                 "title": "Unplugged Soul",
//                 "image": "https://picsum.photos/100?random=26",
//                 "artistName": "Raw Emotion",
//                 "albumName": "Stripped Down",
//                 "length": "5:15"
//             },
//             {
//                 "title": "String Theory",
//                 "image": "https://picsum.photos/100?random=27",
//                 "artistName": "Guitar Masters",
//                 "albumName": "Six String Magic",
//                 "length": "3:48"
//             },
//             {
//                 "title": "Whisper Song",
//                 "image": "https://picsum.photos/100?random=28",
//                 "artistName": "Soft Voice",
//                 "albumName": "Intimate Moments",
//                 "length": "4:05"
//             }
//         ]
//     }
// ];
