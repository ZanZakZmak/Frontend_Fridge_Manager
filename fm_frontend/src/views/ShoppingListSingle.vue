<template>
  <div class="shopping list single">
    <h1>place holder ime liste</h1>

    <div class="container">
      <div class="row">
        <div class="col-4">
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

        <div class="col-8">
          <h2 align="left"><u>Vegetables</u></h2>
          <shopping-list-single-card v-for="card in cards" :key="card.url" :info="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ShoppingListSingleCard from "@/components/ShoppingListSingleCard.vue";

let cards = [];

cards = [
  {url: "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80", description: 'tomato' },
  {url: "https://images.unsplash.com/photo-1606050627722-3646950540ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", description: 'banana' },
  {url: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80", description: 'milk' },  
];

export default {
  name: "ShoppingListSingle",
  data: function () {
    return {
      cards: cards,
      
    };
  },
   

  components: {
    ShoppingListSingleCard,
  },
};
</script>