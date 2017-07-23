
let access_token = null;

module.exports = {
    setToken: (token, expiration_time) => {
        access_token = token;
        setTimeout(() => {
            access_token = null;
        }, (expiration_time-1)*1000);
    },

    getToken: () => {
        return access_token;
    }

}

