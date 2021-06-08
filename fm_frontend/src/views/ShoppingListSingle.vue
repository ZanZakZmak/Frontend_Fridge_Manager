<template>
  <div class="shopping list single">
    <h1>{{info.naziv_liste}}</h1>

    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <p class="bg-primary text-white">Buđžet : 500</p>
              <p class="bg-primary text-white">Potrošen buđžet : {{store.data1.profil.total}}</p>
              <p class="bg-primary text-white">Total : {{total_liste(info.lista_namjernice)}}</p>
              <router-link to="/choosegrocery"
                ><img
                  src="@/assets/lista add.svg"
                  alt=""
                  width="130"
                  height="124"
                  class="d-inline-block align-text-top"
              /></router-link>
              <p>Add groceries</p>
            </div>
          </div>
        </div>

        <div class="col-8">
          
          <shopping-list-single-card
            v-for="card in info.lista_namjernice"
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
  props: ["info"],
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
      this.info.suma_liste=total;
      return total;
    }
  },


};
</script>