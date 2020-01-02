<template>
  <div
 class="mx-auto"
  >
  <hr>
    <v-layout row>
        <!-- <v-flex></v-flex> -->
      <v-flex class="pa-4 text-left" 
      :class="size"
      v-for="(i,index) in flex " 
      :key="index">
        <p>{{i.topic}}</p>
        <v-img
        v-if="i.img!=''"
        height="60%"
        width="100%"
        :src="i.img"
        >
        </v-img>
        <p
        class="pt-4 text-left"
        v-for="(links,j) in i.src" :key="j"
        >
            <a :href="links">{{links}}</a>
        </p>
      </v-flex>
      <!-- <v-flex></v-flex> -->
    </v-layout>
    
  </div>
</template>

<script>
export default {
    computed:{
        size:function(){
            return "md"+12/this.length;
        }
    },
  props: {
    flex:Object,
    length,
  }
};
</script>

<style>
</style>