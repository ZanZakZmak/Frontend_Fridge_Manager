import axios from 'axios'


let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
})

let cards = {
    getAll(searchTerm, category) {
 
    return Service.get(`/proba?title=${searchTerm}&Category=${category}`)
    }
   }

export { Service, cards }