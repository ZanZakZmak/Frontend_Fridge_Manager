<template>
  <div class="shopping list">
    <h1>My Shopping Lists</h1>
   
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <p class="bg-primary text-white">Buđžet : 500</p>
                <p class="bg-primary text-white">{{total(store.data1.shopping_liste)}} Potrošen buđžet : {{store.data1.profil.total}}</p>

              <router-link to="/addnewlist"
                ><img
                  src="@/assets/lista add.svg"
                  alt=""
                  width="130"
                  height="124"
                  class="d-inline-block align-text-top"/>
              </router-link> 
                 
              <p>Make a new list</p> 

                </div>
            </div>
          </div>
          <div class="col-8">
            <shopping-list-card v-for="card in shoping_liste" :key="card.id_lista" :info="card" />
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    
  </div>
</template>

<script>
import ShoppingListCard from "@/components/ShoppingListCard.vue";
import store from '@/store.js';
import { lists } from "@/services";



export default {
  name: "ShoppingList",

  data: function () {
    return {
      store,
      shoping_liste :[],
    };
  },

  created() {
    this.fetchPosts();
  },
  methods:{
     async fetchPosts() {
      this.shoping_liste = await lists.getAll();
    },
    total(total_liste) {
      let total=0
      total_liste.forEach(element => {total=total+element.suma_liste});
      this.store.data1.profil.total=total;
     
    }
  },

  components: {
    ShoppingListCard,
  },


};
</script>




