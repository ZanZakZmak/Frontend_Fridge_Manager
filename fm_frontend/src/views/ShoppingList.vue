<template>
  <div class="shopping list">
    <h1>My Shopping Lists</h1>
   
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <p class="bg-primary text-white">Buđžet : 500</p>
                <p class="bg-primary text-white">Potrošen buđžet : 245</p>

              <router-link to="/addnewlist"
                ><img
                  src="@/assets/fridge.svg"
                  alt=""
                  width="100"
                  height="94"
                  class="d-inline-block align-text-top"/>
              </router-link> 
                 
              <p>Make a new list</p> 

                </div>
            </div>
          </div>
          <div class="col-8">
            <shopping-list-card v-for="card in store.data1.shopping_liste" :key="card.id_lista" :info="card" />
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    
  </div>
</template>

<script>
import ShoppingListCard from "@/components/ShoppingListCard.vue";
import store from '@/store.js';

let cards = [];

cards = [
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
];

export default {
  name: "ShoppingList",

  data: function () {
    return {
      cards: cards,
      store,
    };
  },

  components: {
    ShoppingListCard,
  },


};
</script>




