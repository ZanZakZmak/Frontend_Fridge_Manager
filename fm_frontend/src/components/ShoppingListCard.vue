<template>
<router-link to="/shoppinglistsingle">
  <div class="card">
    <div class="card-header">Naziv shopping liste</div>
    <div class="card-body">
      <div class="row">
      <div class="text-start col-6">količina:<span class="bg-secondary badge">5</span></div>
      
      <div class="text-end col-6">total: 245 kn</div>
      </div>
    </div>
    <div class="card-footer text-end" text-muted>24.05.2021</div>
  </div>
</router-link>
</template>
<script>


export default {
  name: "ShoppingListCard",
};
</script>