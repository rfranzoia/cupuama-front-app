class AuthenticationService {

    login = (username, token) => {
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('token', token)
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
}

export default new AuthenticationService()