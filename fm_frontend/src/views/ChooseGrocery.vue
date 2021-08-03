<template>
  <div class="choosegrocery">
    <h1>Choose Groceries</h1>

    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <router-link to="/addgrocery">
                <img
                  src="@/assets/igloo add.svg"
                  alt=""
                  width="130"
                  height="124"
                  class="d-inline-block align-text-top"
                />
              </router-link>
              <p>Add groceries</p>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="card">
            <div class="card-body">
              <h2 align="left"><u>Vegetables</u></h2>
              <grocery-card
                v-for="card in odabir_namjernice"
                :key="card.url_namjernice"
                :info="card"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GroceryCard from "@/components/GroceryCard.vue";
import store from "@/store.js";
import { grocerys } from "@/services";
import _ from "lodash";

export default {
  name: "ChooseGrocery",
  data: function () {
    return {
      store,
      odabir_namjernice: [],
    };
  },
  watch: {
    "store.searchTerm": _.debounce(function (val) {
      this.fetchPosts(val);
    }, 500),
    //"store.searchTerm": function(val) {this.fetchPosts(val)}
  },
  created() {
    this.fetchPosts();
  },
  /* computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.store.data1.namjernice.filter((card) =>
        card.naziv_namjernice.includes(termin)
      );
    },
  }, */
  methods: {
    async fetchPosts(term) {
      term = term || store.searchTerm;
      this.odabir_namjernice = await grocerys.getAll(term);
    },
  },
  components: {
    GroceryCard,
  },
};
</script>