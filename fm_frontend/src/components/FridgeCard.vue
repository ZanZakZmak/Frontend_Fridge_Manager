<template>
  <div class="card">
    <h5 class="card-header">Vegetables</h5>
    <div class="card-body">
      <h5 class="card-title">Tomato</h5>
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
    </div>
  </div>
</template>

<style lang="css">
.card-img-top {
  width: 50%;
  height: 15vw;
  object-fit: cover;
}
</style>

<script>
export default {
  props: ['info'],
  name: 'FridgeCard',

};
</script>
