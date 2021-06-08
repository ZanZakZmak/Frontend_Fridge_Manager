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