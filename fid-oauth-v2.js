//https://docs.identityserver.io/en/release/quickstarts/7_javascript_client.html
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://fpay-oauth-dev.ftech.ai/oidc-client.min.js';

document.getElementsByTagName('head')[0].appendChild(script);
var FtechFID = new function () {
    this.mgr = null;
    this.URL = 'https://id-dev.ftech.ai/'
    this.init = (options) => {
        // const config = {
        //     authority: "http://localhost:5000",
        //     client_id: "client.local",
        //     client_secret: "SGe4BUMY9zT65MvVgme69FfkQ3pkH",
        //     redirect_uri: "http://localhost:3000/callback.html",
        //     response_type: "code",
        //     scope: "openid profile offline_access",
        //     filterProtocolClaims: true,
        //     loadUserInfo: true,
        //     post_logout_redirect_uri: "http://localhost:3000/index.html",
        // };

        const {
            authority,
            client_id,
            client_secret,
            redirect_uri,
            post_logout_redirect_uri = window.location.origin,
            response_type = "code",
            scope = "openid profile offline_access",
            filterProtocolClaims = true,
            loadUserInfo = true
        } = options;

        if (!authority || !client_id || !client_secret || !redirect_uri)
            throw new Error("You are missing authority or client_id or client_secret or redirect_uri")

        const mgr = new Oidc.UserManager({
            authority,
            client_id,
            client_secret,
            redirect_uri,
            post_logout_redirect_uri,
            response_type,
            scope,
            filterProtocolClaims,
            loadUserInfo
        });
        this.mgr = mgr;
        //mgr.signinRedirect();
    }
    this.login = () => this.mgr && this.mgr.signinRedirect()
    this.getUser = (cb) => {
        try {
            const mgr = this.mgr;
            if (!this.mgr) throw new Error('You are not login!')
            mgr.getUser().then(function (user) {
                var url = this.URL + "connect/userinfo";
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.onload = function () {
                    log(xhr.status, JSON.parse(xhr.responseText));
                    cb && cb(xhr.responseText)
                }
                xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
                xhr.send();
            });
        } catch (ex) {
            throw new Error("get user exception")
        }
    }

    this.getUserAsync = async () => {
        try {
            const mgr = this.mgr;
            if (!this.mgr) throw new Error('You are not login!')
            const user = await mgr.getUser();
            if (user) {
                const url = this.URL + "connect/userinfo";
                const response = await fetch(url, {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user.access_token
                    },
                });
                return response;
            }
            return {}
        } catch (ex) {
            throw new Error("get user exception")
        }
    }

    this.logout = () => {
        if (!this.mgr) throw new Error('You are not login!')
        this.mgr.signoutRedirect();
    }

    this.callbackLogin = (returnURL) => {
        new Oidc.UserManager().signinRedirectCallback().then(function () {
            window.location = returnURL;
        }).catch(function (e) {
            throw new Error(e)
        });
    }
}
