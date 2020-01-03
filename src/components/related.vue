<template>
  <div
 class="mt-12"
  >
  <hr>
    <v-layout row>
        <!-- <v-flex></v-flex> -->
      <v-flex class="pa-4 text-left mx-auto" 
      :class="size"
      v-for="(i,index) in flex " 
      :key="index">
        <p>{{i.topic}}</p>
        <v-img
        v-if="i.img!=''"
        :height="img_height"
        :width="img_width"
        :src="i.img"
        >
        </v-img>
        <div v-if="i.src!=''">
        <p
        class="pt-4 text-left"
        v-for="(links,j) in i.src" :key="j"
        >
            <a :href="links">{{links}}</a>
        </p>
        </div>
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
    flex:Array,
    length,
    img_height:String,
    img_width:String,
  }
};
</script>

<style>
</style>