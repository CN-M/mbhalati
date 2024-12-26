const clientId = process.env.SPOTIFY_CLIENT_ID!;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
const tokenUrl = "https://accounts.spotify.com/api/token";
const showEndpoint = "https://api.spotify.com/v1/shows";
const showId = "2tsu1q7KYNAbPIhCFSgxYL";

export const getAccessToken = async (): Promise<string> => {
  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch access token");
  }

  const data = await response.json();
  return data.access_token;
};

export const fetchPodcastData = async (showId: string, accessToken: string) => {
  const response = await fetch(`${showEndpoint}/${showId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch podcast data for show ID: ${showId}`);
  }

  return response.json();
};

// const accessToken = await getAccessToken();
// const podcastData = await fetchPodcastData(showId, accessToken);
