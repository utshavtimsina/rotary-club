<template>
   <div>

     <v-container >
      
       <v-layout row  style="background:url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/network.png) no-repeat 50% 50%">
         <v-flex md2 class=" mx-9 my-9 transparent">
            <div class="differences-person-1 transparent" ></div>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex class=" mx-9 my-9 transparent" md1>
            <div class="differences-person-2 transparent "></div>
         </v-flex>
         <v-flex md1 class=" mx-9 my-9 transparent">
            <div class="differences-person-3 transparent"></div>
         </v-flex>
         <v-flex md1 class=" mx-9 my-9 transparent">
            <div class="differences-person-4 transparent "></div>
            
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex md1 flat class=" mx-9 my-9 transparent" >
            <div class="differences-person-5 transparent "></div>
         </v-flex>
          <v-flex flat md2 class=" mx-9 my-9 transparent">
            <div class="differences-person-6 transparent"></div>
         </v-flex>
         <v-flex md1 class=" mx-9 my-9 transparent">
            <div class="differences-person-7 transparent"></div>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex md1 class=" mx-9 transparent">
            <div class="differences-person-8 transparent" ></div>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex md1 class=" mx-9 my-9 transparent">
            <div class="differences-person-9 transparent"></div>
         </v-flex>
       </v-layout>
     </v-container>
            
     <HomeComponentExtend/>
</div>
</template>

<script>
export default {
  data(){
    return{
      overlay:true,
    }
  },
  components:{
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
   
   opacity: 1;
   z-index: 4;
    
 }
.differences-person-1 {
    background-image:url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-1.jpg);
    height: 153px;
    width: 153px;
   transform: translate(300%,-30%);  
}
.differences-person-2 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-2.jpg);
    height: 153px;
    width: 153px;
    transform: translate(200%,-200%);  
    z-index: initial;

}
.differences-person-3 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-3.jpg);
     height: 153px;
    width: 153px;
  transform: translate(-200%,100%);  
}
.differences-person-4 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-4.jpg);
    height: 153px;
    width: 153px;
   transform: translate(-300%,200%);  
}
.differences-person-5 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-5.jpg);
    height: 153px;
    width: 153px;
   transform: translate(-50%,100%);  
}
.differences-person-6 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-6.jpg);
     height: 153px;
    width: 153px;
   transform: translate(-40%,-60%);  
}
.differences-person-7 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-7.jpg);
    height: 153px;
    width: 153px;
    transform: translate(900%,00%);  
}
.differences-person-8 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-8.jpg);
     height: 153px;
    width: 153px;
    transform: translate(200%,-200%);  
}
.differences-person-9 {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/person-9.jpg);
    height: 153px;
    width: 153px;
   transform: translate(-60%,-300%);  
}
</style>