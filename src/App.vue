<template>
  <v-app class="app">
    <Navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/resources/Navbar.vue"
export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style >
.app{
 
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
 
}
a:hover {
  background-color: #ccf1ff;
}
</style>
