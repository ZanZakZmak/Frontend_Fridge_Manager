<template>
<router-link v-bind:to="{ name: 'ShoppingListSingle', params: {name: info.naziv_liste, info: info}}">
  <div class="card">
    <div class="card-header"> {{info.naziv_liste}} </div>
    <div class="card-body">
      <div class="row">
      <div class="text-start col-6">količina:<span class="bg-secondary badge"> {{brojanje_namjernica(info)}} </span></div>
      
      <div class="text-end col-6">total: {{info.suma_liste}} </div>
      </div>
    </div>
    <div class="card-footer text-end" text-muted> {{info.datum_izrade_liste}} </div>
  </div>
</router-link>
</template>
<script>


export default {
  props: ["info"],
  name: "ShoppingListCard",
  /* data: function () {
    return {
      methods,
      store,
    };
  }, */
  methods:{
    brojanje_namjernica(listica){
      let sum=0;
      listica.lista_namjernice.forEach(element => {sum++;});
      return sum;
    }
  },
};
</script>