import { config } from 'dotenv';
import fetch from "node-fetch";
config({ path: '../../.env' });

const endpointUrl = new URL("https://api.hubapi.com/oauth/v1/token");

const headerParameters = {
  "Content-Type": "application/x-www-form-urlencoded",
};

// Defining the new description to be set
const queryParameters = new URLSearchParams({
  grant_type: "authorization_code",
  client_id:`${process.env.CLIENT_ID}`,
  client_secret:`${process.env.CLIENT_SECRET}`,
  redirect_uri: "https://ed-6129512380366848.educative.run",
  code:`${process.env.AUTH_CODE}`,
});

const options = {
  method: "POST",
  headers: headerParameters,
};

async function getAccessToken() {
  try {
    endpointUrl.search = queryParameters;
    const response = await fetch(endpointUrl, options);
    printResponse(response);
  } catch (error) {
    printError(error);
  }
}

getAccessToken();

export default function printError(err) {
    console.error(err.message)
}

export default async function printResponse(res) {
    res = await res.json();
    console.log(res)
}