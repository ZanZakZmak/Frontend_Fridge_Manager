<template>
  <div>
    <!--  <button @click="funkcija()" class="btn btn-primary">Edit</button> -->
    {{ vegetables }}
    {{ fruit }}
    {{ dairy }}
    {{ meat }}
    {{ fish }}
    {{ drinks }}
  </div>
</template>

<script>

import _ from "lodash";
import store from "@/store.js";
import { cards } from "@/services";

export default {
  data() {
    return {
      store,
      namjernica: [],
      vegetables: [],
      fruit: [],
      dairy: [],
      meat: [],
      fish: [],
      drinks: []
    };
  },
  watch: {
    "store.searchTerm": _.debounce(function (val) {
      this.fetchAllPosts(val);
    }, 500),
    //"store.searchTerm": function(val) {this.fetchPosts(val)}
  },
  created() {
    this.fetchAllPosts();
  },
  name: "proba",
  methods: {
    fetchPosts(term, category) {
      let polje = []
      term = term || store.searchTerm;
      // get all  
      cards.getAll(term, category).then((response) => {
        let data = response.data;
        console.log("podatci sa backenda", data);
        polje = data.map((doc) => {
          return {
            id: doc.id_namjernice,
            url: doc.url_namjernice,
            name: doc.naziv_namjernice,
            category: doc.kategorija,
            price: Number(doc.cijena_namjernice),
          };
        });
         //console.log(`ovo je ${polje}`)
      });
       
      console.log(`ovo je ${polje}`)
      return polje;
    },
    fetchAllPosts(term) {
      term = term || store.searchTerm;
      this.vegetables = this.fetchPosts(term, 'povrće')
      this.fruit = this.fetchPosts(term, 'voće')
      this.dairy = this.fetchPosts(term, 'mlječni_projzvodi')
      this.fish = this.fetchPosts(term, 'fish')
      this.meat = this.fetchPosts(term, 'meat')
      this.drinks = this.fetchPosts(term, 'drinks')
     
    },
    
  },
};



/* let namjernica = [];

export default {
  name: "Proba",
  data: function () {
    return {
      namjernica:[],
    };
  },

 
  mounted () {
  fetch("http://localhost:3000/proba")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Podaci s backenda", data);
    this.namjernica = data.map((doc) => {
      // prilagodimo objekte
      return {
        id: doc.id_namjernice,
        url: doc.url_namjernice,
        name: doc.naziv_namjernice,
        category: doc.kategorija,
        price: Number(doc.cijena_namjernice),
      };
    });
  });
 
}
}; */

</script>
