import axios from "axios";

export const URL_NODE = 'http://localhost:3000/api/fruits'
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
        return axios.get(`${URL_NODE}`, this.getAuthConfig())
    }

    create = (fruit) => {
        return axios.post(`${URL_NODE}`, fruit)
    }

    get = (id) => {
        return axios.get(`${URL_NODE}/${id}`, this.getAuthConfig())
    }

    delete = (id) => {
        return axios.delete(`${URL_NODE}/${id}`, this.getAuthConfig())
    }

    update = (id, fruit) => {
        return axios.put(`${URL_NODE}/${id}`, fruit)
    }

}

export default new FruitApi()
