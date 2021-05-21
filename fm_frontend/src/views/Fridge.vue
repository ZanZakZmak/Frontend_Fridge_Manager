<template>
  <div class="fridge">
    <h1>My fridge</h1>

    <div class="container">
      <div class="row">
        <div class="col-5">
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>

        <div class="col-7">
          <fridge-card v-for ="card in cards" :key="card" :info="card"/>
          
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import FridgeCard from "@/components/FridgeCard.vue";

let cards = []

cards = [
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80"
]

export default {
  name: "Home",
  data: function(){
    return {
      cards: cards
    }

  },
  components: {
    FridgeCard,
  },
};
</script>