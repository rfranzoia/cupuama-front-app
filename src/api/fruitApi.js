import axios from "axios";

class FruitApi {

    //LIST_URL = "http://localhost:8080/cupuama-go/api/v2/fruits"
    //GET_URL = `http://localhost:8080/cupuama-go/api/v2/fruits/${id}`

    list = () => {
        console.log("listing fruits");
        return axios.get("http://localhost:8080/cupuama-go/api/v2/fruits")
    }

    get = (id) => {
        return axios.get(`http://localhost:8080/cupuama-go/api/v2/fruits/${id}`)
    }

    delete = (id) => {
        return axios.delete(`http://localhost:8080/cupuama-go/api/v2/fruits/${id}`)
    }
}

export default new FruitApi()