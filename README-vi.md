
# fid-sdk-web v1
fid-sdk-web v1 integration documentation for WEB

English version [here](./README.md)

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
Liên hệ với [ftech.ai](https://ftech.ai/) để đăng ký thông tin client. Ftech sẽ cung cấp các thông số như client_id, client_secret(optional)...

Sau đó, bạn có thể chọn các thứ viên thứ 3 để giao tiếp với [OAuth2.0](https://datatracker.ietf.org/doc/html/rfc6749) và [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) providers để login/register/logout/reset password...

Bạn nên chọn library hỗ trợ [PKCE](https://datatracker.ietf.org/doc/html/rfc7636) extensions cho OAuth

Chúng tôi khuyến khích bạn sử dụng [library](https://github.com/auth0/auth0-spa-js)

## Step 3: Lưu trữ AccessToken and RefreshToken
Khi bạn đã có AccessToken và RefreshToken sau khi hoàn thành bước 2, bạn 

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
