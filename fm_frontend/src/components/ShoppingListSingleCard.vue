<template>
  <div class="card">
    <h5 id="boja" class="card-header">{{info.naziv_namjernice}}</h5>
    
    <div class="card-body">
      
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img class="card-img-top rounded-circle" :src="info.url_namjernice" align="left" />
          </div>
          <div class="col-3">
            
            <p align="left">cijena: {{info.cijena_namjernice}}</p>
            <p align="left">količina: <span class="bg-secondary badge"> {{info.lista_stavka.kolicina}} </span> </p>
            <p align="left">total: {{total_namjernica()}}</p>
          </div>
          <div class="col-3">
            <a
              href="#"
              class="btn btn-danger"
              style="position: absolute; right: 80"
              >X</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.card-img-top {
  width: 75%;
  height: 15vw;
  object-fit: cover;
};

</style>

<style lang="scss">
#boja {
  background-color: lawngreen !important;
}
</style>

<script>
export default {
  props: ["info"],
  name: "ShoppingListSingleCard",

   methods:{
    total_namjernica() {
      let total=0
      total=this.info.lista_stavka.total_namjernica_lista=(this.info.cijena_namjernice)*(this.info.lista_stavka.kolicina) 



      return total;
    }
  },
};
</script>
