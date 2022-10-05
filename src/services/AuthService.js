import axios from "axios";
const URL="https://stockmarket-api-gateway.azuremicroservices.io/api/v1.0/market/auth"
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class AuthService{

    login(user){
       return axios.post(`${URL}/login`,user);
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }
    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

}


export default new AuthService()