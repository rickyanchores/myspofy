// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQAwO3BhVU7fvwuuPjWR2ev8jTeLnCaL0uLGfKwmmkzCLMGW9dZJlopeQ0rcwMo0xLDutqEwsgU4ReYT2qoUdcDaNIUSrRZgQiP2siSC2x716tluUqSv0kj87hCGPL2t6webpqnvJIWMtDJm4CywPFR3G12-f4rybY5yVLezPkJ3BtigS8RkUqNQPqs2kKHjQiHvXwj0Iypn3hx9DXRllz-FQ54XnMaejanfjZYJOW2ySLiOoo9Rcqr5uQ';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);