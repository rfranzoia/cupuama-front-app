import axios from "axios";

class AuthenticationService {

    login = (username, token) => {
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('token', token)
        this.setupInterceptors()
    }

    logout = () => {
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('token')
    }

    isUserLogged = () => {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return false
        return true
    }

    setupInterceptors = () => {
        axios.interceptors.request.use((config) => {
            if (this.isUserLogged()) {
                config.headers.authorization = sessionStorage.getItem("token")
            }
            return config
        })
    }
}

export default new AuthenticationService()