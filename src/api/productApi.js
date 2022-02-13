import axios from "axios";

export const URL_NODE = 'http://localhost:3000/api/products'
export const URL_JAVA = 'http://localhost:8080/cupuama-app/v1/products'
export const URL_GO = 'http://localhost:8080/cupuama-go/api/v2/products'

class ProductApi {

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

    create = (product) => {
        return axios.post(`${URL_NODE}`, product)
    }

    get = (id) => {
        return axios.get(`${URL_NODE}/${id}`, this.getAuthConfig())
    }

    delete = (id) => {
        return axios.delete(`${URL_NODE}/${id}`, this.getAuthConfig())
    }

    update = (id, product) => {
        return axios.put(`${URL_NODE}/${id}`, product)
    }

}

export default new ProductApi()
