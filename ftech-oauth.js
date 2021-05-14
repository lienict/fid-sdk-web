
var FtechOAuth = new function () {
    this.URL = 'https://id-dev.ftech.ai/'
    this.getUserInfo = async () => {
        try {
            const response = await fetch(this.URL + 'connect/userinfo')
            return await response.json()
        } catch (ex) {

        }
        return {}
    }

}
