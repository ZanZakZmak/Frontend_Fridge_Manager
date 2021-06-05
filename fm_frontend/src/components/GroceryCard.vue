<template>
  <div class="card">
    <h5 class="card-header">{{ info.description }}</h5>

    <div class="card-body">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img
              class="card-img-top rounded-circle"
              :src="info.url_namjernice"
              align="left"
            />
          </div>
          <div class="col-3">
            <p align="left">
              rok trajanja: <input type="date" placeholder="" />
            </p>
            <p align="left">
              količina
              <input type="text" placeholder="" />
            </p>
            <p align="left"> {{info.cijena_namjernice}} kn </p>
          </div>
          <div class="col-3">
            <a
              href="#"
              class="btn btn-success"
              style="position: absolute; right: 80"
              >Add</a
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
}
</style>

<script>
export default {
  props: ["info"],
  name: "GroceryCard",
};
</script>
