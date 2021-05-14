# fid-sdk-web v1
fid-sdk-web v1 integration documentation for WEB

Phiên bản tiếng Việt [xem ở đây](./README-vi.md)

# Introduce
FID SDK is a library for web to interact with FID Platform. FID SDK includes the following main functions:
- Support to get profile information of the user
- Support Logout

## Support
If you have any questions you could:

- Contact directly via email with the SDK team for assistance or contact us at [ftech.ai](https://ftech.ai/)

## Step 1 : Embed library
From CDN
```java
<script src="https://cdn.auth0.com/js/auth0-spa-js/1.13/auth0-spa-js.production.js"></script>
```

## Step 2: Authentication
Contact [ftech.ai](https://ftech.ai/) directly for register client. Ftech will provide client_id, client_secret(optional) and some other informations for you.

Then, you can using third party client SDK for communicating with [OAuth2.0](https://datatracker.ietf.org/doc/html/rfc6749) and [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) providers to login/register/logout/reset password...

You have better choice library that supports the [PKCE](https://datatracker.ietf.org/doc/html/rfc7636) extensions for OAuth, which was created to secure authorization codes in public clients when custom URI scheme redirects are used.

We suggest you using this [library](https://github.com/IdentityModel/oidc-client-js)

## Step 3 (Optional): Save AccessToken and RefreshToken
When you have AccessToken and RefreshToken after finish step 1, you must save them as cookies with below rules

- You save AccessToken with name *access_token*
- You save RefreshToken with name *refresh_token*

## Basic instructions for use
### 1. Get User Information
You can get user's information by using this function

```java
const userInfo = await window.FtechOAuth.getUserInfo()
```

### 2. Logout
You can logout by using this function 
```java
await window.FtechOAuth.logout()
```
Note : 
- When logout, we'll clear all cookies in the website
- FtechOAuth is static object that created in the SDK that you embeded in the Step1
