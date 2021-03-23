import axios from "axios";
import MD5 from "crypto-js/md5";

class LoginApi {

    login = (username, password) => {

        const data = {
            "login": username,
            "password": MD5(password).toString()
        }

        return axios.post('http://localhost:8080/cupuama-go/api/v2/login', data)
    }
}

export default new LoginApi()