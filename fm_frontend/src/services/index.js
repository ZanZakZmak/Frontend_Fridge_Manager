import axios from 'axios'


let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
})

let users = {
    async getOne(){
        let users = {
            async getOne(id) {
            let response = await Service.get(`/users/${id}`);
            let doc = response.data;
            return {
            id: doc._id,
            username: doc.username,
            email: doc.email,
            password: doc.password,
            budget: doc.budzet,
            };
        }
            
    }
}
}

let cards = {

    async getAll(searchTerm, category) {
        let response = await Service.get(`/fridge?title=${searchTerm}&Category=${category}`)
        let grocery = response.data
        //treba promjeniti sve podatke u karticama za map
        /* .map(doc => {
            return {
                id: doc.id_namjernice,
                url: doc.url_namjernice,
                name: doc.naziv_namjernice,
                category: doc.kategorija,
                price: Number(doc.cijena_namjernice),
            };
        }); */
        return grocery
    }
}

let lists = {
    async getAll() {
        let response = await Service.get(`/shoppinglist`)
        let speza = response.data
        //treba promjeniti sve podatke u karticama za map
        /* .map(doc => {
            return {
                id: doc.id_namjernice,
                url: doc.url_namjernice,
                name: doc.naziv_namjernice,
                category: doc.kategorija,
                price: Number(doc.cijena_namjernice),
            };
        }); */
        return speza
    }
}

let grocerys = {
    async getAll(searchTerm) {
        let response = await Service.get(`/choosegrocery?title=${searchTerm}`)
        let namjernica = response.data
        //treba promjeniti sve podatke u karticama za map
        /* .map(doc => {
            return {
                id: doc.id_namjernice,
                url: doc.url_namjernice,
                name: doc.naziv_namjernice,
                category: doc.kategorija,
                price: Number(doc.cijena_namjernice),
            };
        }); */
        return namjernica
    }
}
export { Service, cards, lists, grocerys }