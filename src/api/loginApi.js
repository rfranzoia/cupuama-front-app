import MD5 from "crypto-js/md5";

class LoginApi {

    login = (username, password) => {

        const data = {
            "login": username,
            "password": MD5(password).toString()
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        return fetch('http://localhost:8080/cupuama-go/api/v2/login', requestOptions)
    }
}

export default new LoginApi()