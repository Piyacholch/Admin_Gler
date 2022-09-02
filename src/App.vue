<template>
  <div id="nav" v-if="$store.state.user">

    <!-- <button @click="$store.dispatch('logout')" class="btn_logout">Logout</button> -->
  </div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

* {
  font-family: "Kanit", sans-serif;
}
.btn_logout{
  float: right;
}


</style>
