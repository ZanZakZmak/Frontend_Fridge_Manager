<template>
  <div class="card">
    <h5 id="boja" class="card-header">Tomato</h5>
    <div class="card-body">
      <!--
      <h5 class="card-title">Tomato</h5>
      <p>rok trajanja</p>
      <img
        class="card-img-top rounded-circle"
        :src="info"
        align="left"
      />
      <br />
      <br />
      <a href="#" class="btn btn-primary" style="position: absolute; right: 80"
        >Add to fridge</a
      >
    -->
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img class="card-img-top rounded-circle" :src="info" align="left" />
          </div>
          <div class="col-3">
            
            <p align="left">rok trajanja: 20.05.2021</p>
            <p align="left">cijena: 1.30</p>
            <p align="left">količina <span class="bg-secondary badge">5</span> </p>
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
  name: "FridgeCard",
};
</script>
