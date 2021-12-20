import { Google } from "googleapis";

const scopes = [
    "userinfo.email",
    "userinfo.profile"
].join(",");

const params = {
    scope: scopes,
};

const queryPramString = new URLSearchParams(params);

const LOGIN_URL = "https://www.googleapis.com/auth/" + queryPramString.toString();

const oauth2Client = new Google.auth.OAuth2(
    process.env.NEXT_PUBLIC_CLIENT_ID,
    process.env.NEXT_PUBLIC_CLEIENT_SECRET,
    process.env.NEXTAUTH_URL
  );

  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
  
  });

  export default url

  export { LOGIN_URL };