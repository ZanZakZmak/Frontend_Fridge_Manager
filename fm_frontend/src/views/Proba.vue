<template>
<div>
  <div><p>{{store.data1.fridge.fridge_namjernice[0].fridge_stavka.rok}}</p></div>
  <div><fridge-card v-for="card in filteredCards" :key="card.id_namjernice_fridge" :info="card" /></div>
</div>



</template>
<script>
import store from '@/store.js';
import FridgeCard from "@/components/FridgeCard.vue";

export default{
    name:'Proba',
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
    }
  },
    components: {
    FridgeCard,
    },
};
</script>
