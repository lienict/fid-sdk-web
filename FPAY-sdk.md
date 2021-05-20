# fpay-sdk-web v1.0.0
fpay-sdk-web v1.0.0 integration documentation for Web App

# Introduce
FPAY SDK is a library for web to interact with FPAY Platform. FPAY SDK includes the following main functions:
- Support init and redirect to pay function

## Support
If you have any questions you could:

- Contact directly via email, DM with the SDK team for assistance or contact us at [ftech.ai](https://ftech.ai/)

## Step 1: Registration
Contact us to register your Web App in FPAY system. 
We'll give you client_id, client_secret and some infomations, accept CORS.

## Step 2:  Using Ftech FPAY SDK
#### 1. Embed SDK and initialization
To using SDK, you must embed the SDK and call init function by using this code
``` java
<script src="https://id-dev.ftech.ai/sdk/v2.0.1/oidc-client.min.js"></script>
<script src="https://id-dev.ftech.ai/sdk/v2.0.1/ftech-oauth.min.js"></script>
<script type="application/javascript">
    const config = {
      authority: "https://id-dev.ftech.ai",
      client_id: "client.local",
      client_secret: "SGe4BUMY9zT65MvVgme69FfkQ3pkH",
      redirect_uri: "http://localhost:3000/openid",
      response_type: "code",
      scope: "openid profile offline_access",
      filterProtocolClaims: true,
      loadUserInfo: true,
      post_logout_redirect_uri: "http://localhost:3000/openid",
    };
    window.FtechFID.init(config);
  </script>
```
The static object FtechFID is created after embedding. 
There are some properties are optional like  response_type, scope, filterProtocolClaims, loadUserInfo. That mean, you cannot declare them in the config.

#### 2. Login
After embed SDK and initialization step, to login to FID system, you can call this function
```javascript
FtechFID.login()
```
If this function is work well, it'll redirect the browser to FID login page. Then, user'll login/register and do every thing they like in this website.

After login success, the browser will be redirected to your callback page. The callback page is declared at redirect_uri property. If you forgot it, please see your config variable.

#### 3. Callback page
This HTML file is the designated redirect_uri page once the user has logged into IdentityServer. 
It will complete the OpenID Connect protocol sign-in handshake with IdentityServer. 
Once the sign-in is complete, we can then redirect the user back to the main page. 

You can using callback.html like below code
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <script src="oidc-client.js"></script>
    <script>
      const homePage = 'http://your-home-page'
      window.FtechFID.callbackLogin(homePage)
    </script>
</body>
</html>
```


#### 4. Get user's information
If you want to get user's information, you can use getUserAsync function.
Example:
```javascript
  const userInfo = await FtechFID.getUserAsync() 
```
Note :  we're using async/await in getUserAsync function 

#### 4. Logout
If you want to logout, you can use logout function
Example 
```javascript
  FtechFID.logout()
```
