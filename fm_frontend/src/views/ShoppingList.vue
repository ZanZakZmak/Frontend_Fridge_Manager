<!--ne radi kartica-->
<template>
  <div class="shopping list">
    <h1>My Shopping Lists</h1>

    <div class="container">
    <div class="row">
      <div class="col-5">
        <div class="card">
          <div class="card-body">
            
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some example text. Some example text.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class="col-7">
        
        
         <shopping-list-card/>
        
        
      </div>
      <div class="col-1">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ShoppingListCard from '@/components/ShoppingListCard.vue';

export default {
  name:"ShoppingList",
  component : {
    ShoppingListCard,
  },
}
</script>
