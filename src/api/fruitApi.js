import axios from "axios";

export const URL_JAVA = 'http://localhost:8080/cupuama-app/v1/fruits'
export const URL_GO = 'http://localhost:8080/cupuama-go/api/v2/fruits'

class FruitApi {

    getAuthConfig = () => {
        return {
            headers: {
                Authorization: sessionStorage.getItem("token")
            }
        }
    }

    list = () => {
        return axios.get(`${URL_JAVA}`, this.getAuthConfig())
    }

    create = (fruit) => {
        return axios.post(`${URL_JAVA}`, fruit)
    }

    get = (id) => {
        return axios.get(`${URL_JAVA}/${id}`, this.getAuthConfig())
    }

    delete = (id) => {
        return axios.delete(`${URL_JAVA}/${id}`, this.getAuthConfig())
    }

    update = (id, fruit) => {
        return axios.put(`${URL_JAVA}/${id}`, fruit)
    }

}

export default new FruitApi()