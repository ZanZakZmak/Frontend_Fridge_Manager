<template>
  <div class="fridge">
    <h1>My fridge</h1>

    <div class="container">
      <div class="row">
        <div class="col-5">
          <!--pocetak-->
          <div class="card">
            <div class="card-body">This is some text within a card body.</div>
          </div>
        </div>
        <div class="col-7">
          <!--pocetak-->
          <div class="card">
            <h5 class="card-header">Vegetables</h5>
            <div class="card-body">
              <h5 class="card-title">Tomato</h5>
              <img
                class="card-img-top rounded-circle"
                src="https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80"
                align="left"
              />
              <br />
              <br />
              <a href="#" class="btn btn-primary" style="position: absolute; right: 80;" >Add to fridge</a>
            </div>
          </div>
          <div class="card">
            <h5 class="card-header">Fruit</h5>
            <div class="card-body">
              <h5 class="card-title">Banana</h5>
              <img
                class="card-img-top rounded-circle"
                src="https://images.unsplash.com/photo-1543218024-57a70143c369?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                align="left"
              />
              <br />
              <br />
              <a href="#" class="btn btn-primary" style="position: absolute; right: 80;" >Add to fridge</a>
            </div>
          </div>
          <div class="card">
            <h5 class="card-header">Dairy products</h5>
            <div class="card-body">
              <h5 class="card-title">Chesse</h5>
              <img
                class="card-img-top rounded-circle"
                src="https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                align="left"
              />
              <br />
              <br />
              <a href="#" class="btn btn-primary" style="position: absolute; right: 80;" >Add to fridge</a>
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
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
export default {};
</script>