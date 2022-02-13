import axios from "axios";

export const URL_LOGIN_GO = 'http://localhost:8080/cupuama-go/api/v2/login'
export const URL_LOGIN_JAVA = 'http://localhost:4200/cupuama-app/login'

class LoginApi {

    login = (username, password) => {

        const data = {
            "username": "admin",
            "password": "p4ssw0rd"
        }

        return axios.post(`${URL_LOGIN_JAVA}`, data)
    }
}

export default new LoginApi()
