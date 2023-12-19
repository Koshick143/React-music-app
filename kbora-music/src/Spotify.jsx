const authEnd = "https://accounts.spotify.com/authorize?";
const clientId = "9d670ee34e5f4ea98d7621a39187eec9";
const redirectUrl = "http://localhost:5173";
const scopes = ["user-library-read","playlist-read-private"];

export const loginEndPoint = `${authEnd}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`