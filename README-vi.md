# fid-sdk-web v1
Tài liệu tích hợp fid-sdk-web cho WEB

English version [here](./README.md)

# Introduce
FID SDK là thư viện cho phép ứng dụng làm việc với FID Platform. FID SDK version 01 bao gồm các chức năng như sau
- Hỗ trợ lấy thông tin user

## Support
Nếu bạn cần hỗ trợ hãy làm theo cách sau : 

- Liên hệ trực tiếp qua Email với đội phát triển SDK hoặc liên hệ với chung tôi qua [ftech.ai](https://ftech.ai/)

## Step 1: Authentication
Liên hệ với [ftech.ai](https://ftech.ai/) để đăng ký client. Ftech sẽ cung cấp cho bạn client_id, client_secret(optional), accept CORS và một vài thông tin cần thiết khác.

Sau đó, bạn có thể sử dụng third party client SDK để giao tiếp với [OAuth2.0](https://datatracker.ietf.org/doc/html/rfc6749) và [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html) providers để login/register/logout/reset password...

Bạn nên chọn các thư viện hỗ trợ về [PKCE](https://datatracker.ietf.org/doc/html/rfc7636) extensions cho OAuth

Chúng tôi có thể gợi ý cho bạn [library](https://github.com/IdentityModel/oidc-client-js/wiki)

## Step 2 (Optional): Lưu AccessToken and RefreshToken
Khi bạn có AccessToken và RefreshToken sau bước 1, Bạn có thể lưu chúng dưới dạng cookie với tên như sau

- Bạn lưu AccessToken với tên *access_token*
- Bạn lưu RefreshToken với tên *refresh_token*

## Hướng dẫn sử dụng cơ bản
### Nhúng thư viện (Optional)
Bạn có thể download hoặc nhúng link sau. 
From CDN
```java
<script src="https://id-dev.ftech.ai/sdk/v1.0.1/ftech-oauth.min.js"></script>
```
### 1. Lấy thông tin user
Bạn có thể lấy thông tin user bằng cách gọi hàm

```java
const userInfo = await window.FtechOAuth.getUserInfo()
```

Note : 
- FtechOAuth là static object được tạo sau khi bạn nhúng thư viện JS
