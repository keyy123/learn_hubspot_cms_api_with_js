import { config } from "dotenv";
import fetch from "node-fetch";
config({ path: '../../.env' });

const endpointUrl = new URL("https://api.hubapi.com/oauth/v1/token");

const headerParameters = {
  "Content-Type": "application/x-www-form-urlencoded",
};

const queryParameters = new URLSearchParams({
  grant_type: "refresh_token",
  client_id: `${process.env.CLIENT_ID}`,
  client_secret: `${process.env.CLIENT_SECRET}`,
  redirect_uri: "https://ed-6129512380366848.educative.run",
  refresh_token: `${process.env.REFRESH_TOKEN}`,
});

const options = {
  method: "POST",
  headers: headerParameters,
};

async function refreshToken() {
  try {
    endpointUrl.search = queryParameters;
    const response = await fetch(endpointUrl, options);
    printResponse(response);
  } catch (error) {
    printError(error);
  }
}

refreshToken();

function printError(err) {
    console.error(err.message)
}

async function printResponse(res) {
    res = await res.json();
    console.log(res)
}