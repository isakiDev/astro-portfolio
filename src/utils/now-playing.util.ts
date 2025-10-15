interface InputAccessToken {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async ({
  clientId,
  clientSecret,
  refreshToken,
}: InputAccessToken) => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const body = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };

  const encoded = new URLSearchParams(body).toString();

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encoded,
  });

  return response.json();
};

export const getNowPlaying = async ({ clientId, clientSecret, refreshToken }: InputAccessToken) => {
  try {
    const { access_token } = await getAccessToken({ clientId, clientSecret, refreshToken });

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status > 400) {
      throw new Error('Unable to Fetch Song');
    } else if (response.status === 204) { //The response was fetched but there was no content
      throw new Error('Currently Not Playing')
    }

    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    // todo: refactor adding types
    // @ts-ignore
    const artist = song.item.artists.map((artist) => artist.name).join(', ');
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl
    };
  } catch (error) {
    console.error('Error fetching currently playing song: ', error);
    //todo: refactor
    // @ts-ignore
    return error.message
  }
};