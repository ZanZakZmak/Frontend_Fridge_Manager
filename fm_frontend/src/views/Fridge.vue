<template>
  <div class="fridge">
    <h1>My fridge</h1>

    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <p class="bg-primary text-white">Buđžet : 500</p>
              <p class="bg-primary text-white">
                Potrošen buđžet : {{ store.data1.profil.total }}
              </p>
              <router-link to="/choosegrocery"
                ><img
                  src="@/assets/fridge add.svg"
                  alt=""
                  width="130"
                  height="124"
                  class="d-inline-block align-text-top"
              /></router-link>
              <p>Add groceries</p>
            </div>
          </div>
        </div>

        <div class="col-8">
          <h2 align="left"><u>Vegetables</u></h2>
          <div>
            <fridge-card
              v-for="card in vegetables"
              :key="card.id_namjernice_fridge"
              :info="card"
            />
          </div>
          <h2 align="left"><u>Fruit</u></h2>
          <div>
            <fridge-card
              v-for="card in fruit"
              :key="card.id_namjernice_fridge"
              :info="card"
            />
          </div>
          <h2 align="left"><u>Dairy</u></h2>
          <div>
            <fridge-card
              v-for="card in dairy"
              :key="card.id_namjernice_fridge"
              :info="card"
            />
          </div>
          <h2 align="left"><u>Meat</u></h2>
          <div>
            <fridge-card
              v-for="card in meat"
              :key="card.id_namjernice_fridge"
              :info="card"
            />
          </div>
          <h2 align="left"><u>Fish</u></h2>
          <div>
            <fridge-card
              v-for="card in fish"
              :key="card.id_namjernice_fridge"
              :info="card"
            />
          </div>
          <h2 align="left"><u>Drinks</u></h2>
          <div>
            <fridge-card
              v-for="card in drinks"
              :key="card.id_namjernice_fridge"
              :info="card"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import _ from "lodash";
import FridgeCard from "@/components/FridgeCard.vue";
import store from "@/store.js";
import { cards } from "@/services";

export default {
  name: "Fridge",
  data: function () {
    return {
      store,
      vegetables: [],
      fruit: [],
      dairy: [],
      meat: [],
      fish: [],
      drinks: [],
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
  methods: {
    async fetchPosts(term, category) {
      term = term || store.searchTerm;
      let polje = await cards.getAll(term, category);
      return polje;
    },
    async fetchAllPosts(term) {
      term = term || store.searchTerm;
      this.vegetables = await this.fetchPosts(term, "povrće");
      this.fruit = await this.fetchPosts(term, "voće");
      this.dairy = await this.fetchPosts(term, "mlječni_proizvodi");
      this.fish = await this.fetchPosts(term, "fish");
      this.meat = await this.fetchPosts(term, "meat");
      this.drinks = await this.fetchPosts(term, "drinks");
    },
  },
 /*  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.store.data1.fridge.fridge_namjernice
        .filter((x) => x.naziv_namjernice.includes(termin))
        .filter((x) => x.kategorija.includes("povrće"));
    },
    filteredCards2() {
      let termin = this.store.searchTerm;
      return this.store.data1.fridge.fridge_namjernice
        .filter((x) => x.naziv_namjernice.includes(termin))
        .filter((x) => x.kategorija.includes("voće"));
    },
    filteredCards3() {
      let termin = this.store.searchTerm;
      return this.store.data1.fridge.fridge_namjernice
        .filter((x) => x.naziv_namjernice.includes(termin))
        .filter((x) => x.kategorija.includes("mlječni_proizvodi"));
    },
    filteredCards4() {
      let termin = this.store.searchTerm;
      return this.store.data1.fridge.fridge_namjernice
        .filter((x) => x.naziv_namjernice.includes(termin))
        .filter((x) => x.kategorija.includes("meat"));
    },
    filteredCards5() {
      let termin = this.store.searchTerm;
      return this.store.data1.fridge.fridge_namjernice
        .filter((x) => x.naziv_namjernice.includes(termin))
        .filter((x) => x.kategorija.includes("fish"));
    },
    filteredCards6() {
      let termin = this.store.searchTerm;
      return this.store.data1.fridge.fridge_namjernice
        .filter((x) => x.naziv_namjernice.includes(termin))
        .filter((x) => x.kategorija.includes("drinks"));
    },
  }, */
  components: {
    FridgeCard,
  },
};
</script>