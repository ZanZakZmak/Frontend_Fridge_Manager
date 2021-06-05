<template>
  <div class="fridge">
    <h1>My fridge</h1>

    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <p class="bg-primary text-white">Buđžet : 500</p>
              <p class="bg-primary text-white">Potrošen buđžet : 245</p>
              <router-link to="/choosegrocery"
                ><img
                  src="@/assets/fridge.svg"
                  alt=""
                  width="100"
                  height="94"
                  class="d-inline-block align-text-top"
              /></router-link>
              <p>Add groceries</p>
            </div>
          </div>
        </div>

        <div class="col-8">
          <h2 align="left"><u>Vegetables</u></h2>
          <div><fridge-card v-for="card in filteredCards" :key="card.id_namjernice_fridge" :info="card" /></div>
          <h2 align="left"><u>Fruit</u></h2>
          <div><fridge-card v-for="card in filteredCards2" :key="card.id_namjernice_fridge" :info="card" /></div>
          <h2 align="left"><u>Dairy</u></h2>
          <div><fridge-card v-for="card in filteredCards3" :key="card.id_namjernice_fridge" :info="card" /></div>
          <h2 align="left"><u>Meat</u></h2>
          <div><fridge-card v-for="card in filteredCards4" :key="card.id_namjernice_fridge" :info="card" /></div>
          <h2 align="left"><u>Fish</u></h2>
          <div><fridge-card v-for="card in filteredCards5" :key="card.id_namjernice_fridge" :info="card" /></div>
          <h2 align="left"><u>Drinks</u></h2>
          <div><fridge-card v-for="card in filteredCards6" :key="card.id_namjernice_fridge" :info="card" /></div>
          
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import FridgeCard from "@/components/FridgeCard.vue";
import store from '@/store.js';


export default {
  name: "Fridge",
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
     return this.store.data1.fridge.fridge_namjernice.filter((x) => x.naziv_namjernice.includes(termin)).filter((x) => x.kategorija.includes("povrće"))
    },
    filteredCards2() {
      let termin = this.store.searchTerm;
     return this.store.data1.fridge.fridge_namjernice.filter((x) => x.naziv_namjernice.includes(termin)).filter((x) => x.kategorija.includes("voće"))
    },
    filteredCards3() {
      let termin = this.store.searchTerm;
     return this.store.data1.fridge.fridge_namjernice.filter((x) => x.naziv_namjernice.includes(termin)).filter((x) => x.kategorija.includes("mlječni_proizvodi"))
    },
    filteredCards4() {
      let termin = this.store.searchTerm;
     return this.store.data1.fridge.fridge_namjernice.filter((x) => x.naziv_namjernice.includes(termin)).filter((x) => x.kategorija.includes("meat"))
    },
    filteredCards5() {
      let termin = this.store.searchTerm;
     return this.store.data1.fridge.fridge_namjernice.filter((x) => x.naziv_namjernice.includes(termin)).filter((x) => x.kategorija.includes("fish"))
    },
    filteredCards6() {
      let termin = this.store.searchTerm;
     return this.store.data1.fridge.fridge_namjernice.filter((x) => x.naziv_namjernice.includes(termin)).filter((x) => x.kategorija.includes("drinks"))
    },
  },
  components: {
    FridgeCard,
  },
};
</script>