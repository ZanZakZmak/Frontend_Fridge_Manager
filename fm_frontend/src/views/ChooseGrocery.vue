<template>
  <div class="choosegrocery">
    <h1>Choose Groceries</h1>

    <div class="container">
      <div class="row">
        <div class="col-2">
          <div class="card">
            <div class="card-body">
              <router-link to="/addgrocery">
                <button type="button" class="btn btn-primary">
                  Add new grocery
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-10">
          <div class="card">
            <div class="card-body">
              <h2 align="left"><u>Vegetables</u></h2>
              <grocery-card
                v-for="card in filteredCards"
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

export default {
  name: "ChooseGrocery",
  data: function () {
    return {
      store,
    };
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      // let newCards = []

      /* for (let card of this.cards) {
        if (card.description.indexOf(termin) >= 0) {
          newCards.push(card)
        }
      }*/
      // return newCards
      return this.store.data1.namjernice.filter((card) => card.naziv_namjernice.includes(termin));
    },
  },
  components: {
    GroceryCard,
  },
};
</script>