<template>
  <div class="shopping list">
    <h1>My Shopping Lists</h1>
   
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <p class="bg-primary text-white">Buđžet : 500</p>
                <p class="bg-primary text-white">Potrošen buđžet : 245</p>

              <router-link to="/addnewlist"
                ><img
                  src="@/assets/fridge.svg"
                  alt=""
                  width="100"
                  height="94"
                  class="d-inline-block align-text-top"/>
              </router-link> 
                 
              <p>Make a new list</p> 

                </div>
            </div>
          </div>
          <div class="col-8">
            <shopping-list-card v-for="card in cards" :key="card" />
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    
  </div>
</template>

<script>
import ShoppingListCard from "@/components/ShoppingListCard.vue";

let cards = [];

cards = [
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
  "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1016&q=80",
];

export default {
  name: "ShoppingList",

  data: function () {
    return {
      cards: cards,
    };
  },

  components: {
    ShoppingListCard,
  },


};
</script>









<!--  1.Primjer
<template>
  <div className="modal__wrapper">
        <div className="modal">
            <slot/>
        </div>
    </div>
  </template>

<style lang="scss" scoped>
.modal{
  width: 300px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  padding: 20px 20px;
  z-index: 1200;
 &__wrapper{
  background-color: rgba(0,0,0,0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: absolute;
  top: o;
}
}

</style>
-->


<!-- 2. primjer
<b-button @click="modalShow = !modalShow">Make new list</b-button>
              <b-modal v-model="modalShow">Hello From Modal!</b-modal>  -->
<!--<script>
  export default {
    data() {
      return {
        modalShow: false
      }
    }
  }
</script>
-->

<!-- 3. Primjer

U template isto <button

      type="button"
      class="btn"
      @click="showModal"
    >
      Open Modal!
    </button>

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    />

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> This is the default title! </slot>
          <button type="button" class="btn-close" @click="close">x</button>
        </header>

        <section class="modal-body">
          <slot name="body"> This is the default body! </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> This is the default footer! </slot>
          <button type="button" class="btn-green" @click="close">
            Close Modal
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>


Ovo ide u App.vue

import modal from '@/components/Modal.vue';

export default {
  name: 'app',
  components: {
    Modal,
  },
  data() {
    return {  
       isModalVisible: false,
      store,
    };
  },
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  
};
</script>
-->