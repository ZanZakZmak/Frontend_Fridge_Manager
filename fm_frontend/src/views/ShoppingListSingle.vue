<template>
  <div class="shopping list single">
    <h1>{{store.data1.shopping_liste[0].naziv_liste}}</h1>

    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <p class="bg-primary text-white">Buđžet : 500</p>
              <p class="bg-primary text-white">Potrošen buđžet : 245</p>
              <p class="bg-primary text-white">Total : {{total_liste(store.data1.shopping_liste[0].lista_namjernice)}}</p>
              <router-link to="/shoppinglist"
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
          
          <shopping-list-single-card
            v-for="card in store.data1.shopping_liste[0].lista_namjernice"
            :key="card.id_lista"
            :info="card"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListSingleCard from "@/components/ShoppingListSingleCard.vue";
import store from "@/store.js";



export default {
  name: "ShoppingListSingle",
  data: function () {
    return {
      store,
    };
  },

  components: {
    ShoppingListSingleCard,
  },

  methods:{
    total_liste(budzet_liste) {
      let total=0
      budzet_liste.forEach(element => {total=total+element.lista_stavka.total_namjernica_lista});



      return total;
    }
  },


};
</script>