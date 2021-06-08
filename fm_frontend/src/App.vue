<template>
  <div id="app">
    
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/fridge.svg"
            alt=""
            width="40"
            height="34"
            class="d-inline-block align-text-top"
          />
          Fridge Manager
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/">Fridge</router-link>  | 
            </li>
            <li class="nav-item">
              <router-link to="/shoppinglist">ShoppingList</router-link>  |
            </li>
             <li class="nav-item">
              <router-link to="/profileedit">ProfileEdit</router-link>
            </li>
             
          </ul>
          <form class="d-flex">
            <input
              v-model="store.searchTerm"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

          </form>
        </div>
      </div>
    </nav>

    

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>

import store from '@/store.js';

export default {
  name: 'app',
  data() {
    return {  
      store,
    };
  },
  
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #32527b;
  //background-color: #dfe5e8 !important;
}

#nav {
  padding: 30px;
  background-color: #dfe5e8 !important;

  a {
    font-weight: bold;
    color: #32527b;

    &.router-link-exact-active {
      color: #42abb9;
    }
  }
}
</style>
