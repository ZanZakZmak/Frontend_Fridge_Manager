<!--ne radi kartica-->
<template>
  <div class="shopping list">
    <h1>My Shopping Lists</h1>

    <div class="container">
    <div class="row">
      <div class="col-5">
        <div class="card">
            <div class="card-body">
              <p class="bg-primary text-white">Buđžet : 500</p>
              <p class="bg-primary text-white">Potrošen buđžet : 245</p>
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
      <div class="col-7">
        
        
         <shopping-list-card v-for="card in cards" :key="card" />
        
        
      </div>
      <div class="col-1">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ShoppingListCard from '@/components/ShoppingListCard.vue';

let cards = [];

cards = [
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
];

export default {
  name:"ShoppingList",
  data: function () {
    return {
      cards: cards,
    };
  },
  components : {
    ShoppingListCard,
  },
}
</script>
