## Goals:
 - Learn how to use HubSpot CMS API 
 - Be more comfortable using 3rd party APIs
 
 ## HubSpot CMS APIs Overview
- HubSpot is free tool to grow business and website free of cost

### What are HubSpot's CMS APIs?
- We'll cover the following APIs:
    - `Template API` = Let's us make templates for website
    - `Pages API` = Let's us create and edit pages on website
    - `HubDB API` = Automate DB management tasks like create and update tables and entries
    - `CMS Performance API` = get info on site's performance and uptime

## Getting Started
Goal(s): WE need a dev acct to get API Keys before making API calls


### How to create a developer account?

1. Navigate to the HubSpot developer [portal](https://developers.hubspot.com/) and click the "Create a developer account" button.

2. Click “Create App Developer account.”

3. Enter your name and email address, then click “Next.”

4. Provide your job role by selecting the one that defines it best or “Other.” Click “Next” to move to the next step.

5. Enter a username for your developer account, then click “Next.”

6. You’ll receive a verification code at the email address you entered in step 3. Enter the verification code, then click “Verify email.”

7. Set a strong password for your account, then click “Create Account” to finish account creation.


### How to create an application?
1. From your developer account home page, click “Create an app.”

2. Close the pop-up by clicking “Skip for now.”

3. Go to the “Auth” tab to configure OAuth settings.

4. Copy your “Client ID” and “Client secret” and store them somewhere safe.

5. Scroll down to the “Redirect URL” section, and enter the following URL:
`https://ed-6129512380366848.educative.run`

6. Scroll down to the “Scopes” section and select the content, hubdb, and cms.performance.read scopes.

7. Click “Save changes.”


### How to create a app test acct?
Goal: Make a app testing acct to test new app

1. Go to the “Testing” tab from the app developer account home page.

2. Click “Create app testing account.”

3. Click “Create” to create the account.


### How to create an auth code?
- Use app and app test accounts to get auth code. 
- I set up the code to use the right info: client_id so just `npm start` to get `auth_code`

### How to request an access token?
- Update info in .env or store it within `code` in queryParameters `URLSearchParams` object with client_id and client_secret
- Run `getAccessToken` in node (node path to accessToken + getAccessToken.mjs)

note: Access tokens expire every 30 minutes so run refreshToken to get a new accessToken and update info in env file or hard code where needed