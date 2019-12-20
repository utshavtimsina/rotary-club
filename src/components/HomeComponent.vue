<template>
   <div >

     <v-container>
       <v-layout row  >
         <v-spacer></v-spacer>
         <v-flex md2 class=" mx-9 my-9 transparent">
            <div class="differences-person-1 " ></div>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex class=" mx-9 my-9 transparent" md1>
            <div class="differences-person-2  "></div>
         </v-flex>
         <v-flex md1 class=" mx-9 my-9 transparent">
            <div class="differences-person-3 "></div>
         </v-flex>
         <v-flex md1 class=" mx-9 my-9 transparent">
            <div class="differences-person-4  "></div>
            
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex md1 flat class=" mx-9 my-9 transparent" >
            <div class="differences-person-5  "></div>
         </v-flex>
          <v-flex flat md2 class=" mx-9 my-9 transparent">
            <div class="differences-person-6"></div>
         </v-flex>
         <v-flex md1 class=" mx-9 my-9 transparent">
            <div class="differences-person-7"></div>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex md1 class=" mx-9 transparent">
            <div class="differences-person-8"></div>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex md1 class=" mx-9 my-9 transparent">
            <div class="differences-person-9"></div>
         </v-flex>
       </v-layout>
       <v-layout row>
         <v-flex md2>

         </v-flex>
         <v-flex md4>
           <v-card class="pa-5">
            <h3 class="display-1">We Transform Communities</h3>
              <hr class="light-blue">
            <p class="caption pa-2">We take action locally and globally</p>

            <p>
              Each day, our members pour their passion, integrity, and intelligence into completing projects that have a lasting impact. We persevere until we deliver real, lasting solutions.
            </p>
           </v-card>
          
         </v-flex>
           <v-flex md4>
         
             <img alt=""  data-src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/difference-transform-people.png" style="transform: translate3d(0px, 95.5px, 0px);" src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/difference-transform-people.png">
              
         </v-flex>
       </v-layout>
     </v-container>
            
     <HomeComponentExtend/>
</div>
</template>

<script>
import HomeComponentExtend from '@/components/HomeComponentExtend.vue'
export default {
  data(){
    return{
      overlay:true,
    }
  },
  components:{
    HomeComponentExtend,
  }
}
</script>

<style  scoped>
.solve-graphic-drop {
    background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/solve-graphic-drop.png) no-repeat;
    background-position: 8rem 50%;
    background-size: 9rem;
    width: 60%;
    height: 14rem;
    position: relative;
}
.transparent {
   background-color: white!important;
   opacity: 0.9;
   border-color: transparent!important;
 }
.differences-person-1 {
    background-image:url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-1.jpg);
    height: 153px;
    width: 153px;
    margin: 60px 0 0 -46.15385%;  
}
.differences-person-2 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-2.jpg);
    height: 153px;
    width: 153px;
    margin: 70px 0 0 -33.84615%;

}
.differences-person-3 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-3.jpg);
     height: 153px;
    width: 153px;
    margin: -108px 0 0 +20.76923%;
}
.differences-person-4 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-4.jpg);
    height: 153px;
    width: 153px;
    margin: 95px 0 0 +15.38462%;
}
.differences-person-5 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-5.jpg);
    height: 153px;
    width: 153px;
    margin: -295px 0 0 -4.61538%
}
.differences-person-6 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-6.jpg);
     height: 153px;
    width: 153px;
    margin: 260px 0 0 9.23077%;
}
.differences-person-7 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-7.jpg);
    height: 153px;
    width: 153px;
    margin: 20px 0 0 8.46154%;
}
.differences-person-8 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-8.jpg);
     height: 153px;
    width: 153px;
    margin: -150px 0 0 27.69231%;
}
.differences-person-9 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-9.jpg);
    height: 153px;
    width: 153px;
    margin: -480px 0 0 -7.69231%;
}
</style>