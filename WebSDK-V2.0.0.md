
# fid-sdk-web v2.0.0
fid-sdk-web v2.0.0 integration documentation for Web App

# Introduce
FID SDK is a library for web to interact with FID Platform. FID SDK includes the following main functions:
- Support init, login, get user's information and logout
- See demo [here](https://fpay-oauth-dev.ftech.ai/demo/)

## Support
If you have any questions you could:

- Contact directly via email, DM with the SDK team for assistance or contact us at [ftech.ai](https://ftech.ai/)

## Step 1: Registration
Contact us to register your Web App in our system. 

Base on standard OIDC, you must give us redirect_uri, scope, response_type....

We'll give you client_id, client_secret(optional), authority...

After registration, you'll have your config like below config
```javascript
 const config = {
            authority: "https://id-dev.ftech.ai",
            client_id: "client.local",
            client_secret: "SGe4BUMY9zT65MvVgme69FfkQ3pkH",
            redirect_uri: "http://your-domain/callback",
        }
```
## Step 2: Implement OIDC 
### Solution 1. Using Third Party
Because we base on standard [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) and [OAuth2.0](https://datatracker.ietf.org/doc/html/rfc6749), so you can using any third party client SDK that support OpenID Connect and OAuth2.0 to communicating with Ftech FID.
Example: 
- If you are using VueJS you can using this [library](https://github.com/IdentityModel/oidc-client-js)
- If you are using ReactJS you can using this [library](https://github.com/IdentityModel/oidc-client-js)

### Solution 2. Using Ftech FID SDK
We have built a SDK to communicating with Ftech FID that base on [oidc-client-js](https://github.com/IdentityModel/oidc-client-js).
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

## Related documents
FID is built according to openid standard, full documentation can be viewed [here](https://openid.net/specs/openid-connect-core-1_0.html#Authenticates)

Some basic information that can be a quick reference to develop your app

### 1, User information
This specification defines a set of standard Claims. They can be requested to be returned either in the UserInfo Response.

| Member | Type  | Description  |
| ------- | --- | --- |
| sub | string | Subject - Global user ID, ie: "sub": "1000" |
| name | string | Display name, ie: "preferred_username": "Bạch Ngọc Sơn" |
| preferred_username | string | Field username, ie: "name": "sonbn" |
| picture | string | Primary profile picture url, ie: "picture": "https://a.com/b.jpg" |
| email | string | Primary email, used by local login, ie: "sonbn@ftech.ai" |
| email_verified | bool | Primary email verification status |
| phone_number | string | Primary phone number, used by local login. "+84"-formated, ie: "phone_number": "+8453458875". This field is also used for SMS OTP |
| phone_number_verified | bool | Primary phone number verification status |
| extra_info | object | Example: "extra_info": {"emails":["a@a.com","b@b.com"],"names":["A","B","C"],"pictures":[]} |


