<template>
       <v-container class="my-10">
         <v-layout row>
         <v-flex xs7 sm7 md4>
                <img height="100%" width="100%" src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/difference-solve-people.png" alt="">
         </v-flex>
         <v-flex xs4 sm4 md3>
           <div style="width:60%">

           
           <v-img  width="20%" style="margin: 0 0 0 40.15385%;" src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/solve-graphic-dropper.png">

           </v-img>
           <v-img  width="150%"  src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/solve-graphic-drop.png">
              <v-overlay
                    absolute="absolute"
                    :value="overlay"
                    opacity="0.0"
                    class="text-center white--text my-4 "
                  >
                <strong ><b style="font-size:150% "> 2.5</b> Billion</strong><br> <span  class="pa-3 "> children immunized against polio</span>
              </v-overlay>
           </v-img>
           </div>
         </v-flex>
         <v-flex sm11 xs11 md4 class="mx-5 my-5" >
             <v-card class="pa-8">
                <h3 class="display-1">We Solve Problems</h3>
                 <hr class="light-yellow " >
                <p class="yellow--text display-1">No challenge is too big for us</p>

                <p>
                  For more than 110 years, we’ve bridged cultures and connected continents to champion peace, fight illiteracy and poverty, promote clean water and sanitation, and fight disease.
                </p>
             </v-card>
         </v-flex>
       </v-layout>
       </v-container>
</template>

<script>
export default {
data(){
    return{
      overlay:true,
    }
  },
}
</script>

<style>

</style>