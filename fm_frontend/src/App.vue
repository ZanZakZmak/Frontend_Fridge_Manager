<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <router-link to="/">Home</router-link> |
          <router-link to="/fridge">Fridge</router-link> |
          <router-link to="/shoppinglist">ShoppingList</router-link>

          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #32527B;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #32527B;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
