## Goals
1. Learn Hubspots CMS API and it's endpoints
2. Create our websites and pages

## HubSpot CMS APIs Overview

### What is Hubspot?
- Online platform w/ free tools to grow businesses for free

### What are HubSpot's CMS APIs?
- We can see CMS services for HUbspot on the CMS dashboard or APIs
- We can get landinf pages, HubDB tables, and website performance info and uptime


### Course Goals:
- Practice with the following APIs:
    1. Templates APIs
    2. Pages APIs
    3. HubDB APIs
    4. CMS Performance API


## Getting Started
- Goals: Create a developer account on HubSpot and make access tokens

### How to create a developer account?
- We need a dev account before we can use it's API
    1. Go to dev portal [here](https://developers.hubspot.com/) and click 'Create a developer account' button
    2. Click 'Create App Developer account'
    3. Complete sign in process
    4. Click 'Skip this, I'll explore on my own' 


### How to create an application?
- We have a dev acconut but we need to create an application to get our `clientID` and `secret`
- Before we get those, We need to change OAuth settings:
    1. From dev account home page, click "Create an app"
    2. Close the pop-up by clicking "Skip for now"
    3. Go the 'Auth' tab to change OAuth settings
    4. Copy your 'ClientID' and 'Client secret' and store them 
    5. Scroll down to the 'Redirect URL' section, and enter the following URL:
    `https://ed-6129512380366848.educative.run`
    6. Scroll down to 'Scopes' section and select the `content`, `hubdb`, and `cms.performance.read` scopes
    7. Click 'save changes'


### How to create an app test account?
- To test our newly made app, we have to make an app test account.
    1. Go to the 'Testing' tab from the app developer acct home page
    2. Click 'Create app testing account'
    3. Click 'Create' to make the test account


### How to request an authorization code?
- With an app account and a test account set up, we can ask for a auth code from HubSpot doing the following in educative or local: 

    1. Click "Edit" on the widget below and give your client ID against the `CLIENT_ID` field
    2. Run the app below, then click the link at the end of the widget to open the app in a new tab
    3. Cick the link shown on the app to go back to HubSpot
    4. Slect the app test account from the list and click 'Choose Account'
    5. Grant permissions and copy auth code shown on the react app
    NOTE: query paramer `code` has the auth code in the url as well

### How to request an access token?
- With an auth code, we can get an access token from hubspot on educative or locally:
    1. Click 'edit' below 
    2. 'Enter' auth code and client_secret below
    3. Run the app locally and make a token request
    4. Save the access and refresh token for later use

NOTE: Access tokens last ~30 min after being requested so come back with the refresh token to get another one.