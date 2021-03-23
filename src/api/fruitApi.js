import axios from "axios";

class FruitApi {

    //LIST_URL = "http://localhost:8080/cupuama-go/api/v2/fruits"
    //GET_URL = `http://localhost:8080/cupuama-go/api/v2/fruits/${id}`

    list = () => {
        return axios.get("http://localhost:8080/cupuama-go/api/v2/fruits")
    }

    get = (id) => {
        return axios.get(`http://localhost:8080/cupuama-go/api/v2/fruits/${id}`)
    }

    delete = (id) => {
        return axios.delete(`http://localhost:8080/cupuama-go/api/v2/fruits/${id}`)
    }

    update = (id, fruit) => {
        return axios.put(`http://localhost:8080/cupuama-go/api/v2/fruits/${id}`, fruit)
    }

    create = (fruit) => {
        return axios.post("http://localhost:8080/cupuama-go/api/v2/fruits", fruit)
    }
}

export default new FruitApi()