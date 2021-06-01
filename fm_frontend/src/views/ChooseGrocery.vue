<template>
  <div class="choosegrocery">
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
              <fridge-card
                v-for="card in filteredCards"
                :key="card.url"
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
import FridgeCard from "@/components/FridgeCard.vue";
import store from "@/store.js";

let cards = [];

cards = [
  {
    url:
      "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
    description: "tomato",
  },
  {
    url:
      "https://images.unsplash.com/photo-1606050627722-3646950540ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    description: "banana",
  },
  {
    url:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
    description: "milk",
  },
];

export default {
  name: "Fridge",
  data: function () {
    return {
      cards: cards,
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
      return this.cards.filter((card) => card.description.includes(termin));
    },
  },
  components: {
    FridgeCard,
  },
};
</script>