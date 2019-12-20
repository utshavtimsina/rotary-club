<template>
  <div class="home">
    <v-card  class="black" style="position:relative;">
      <video style="z-index:-1;" width="100%" height="100%" autoplay="" loop="" muted=""  data-webm="https://www.rotary.org/en/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.webm" data-mp4="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.mp4">
      <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.webm" type="video/webm">
      <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.mp4" type="video/mp4">
      </video>

        <v-overlay
          absolute="absolute"
          :value="overlay"
         
        >
          <v-container >
            <v-layout row>
              <v-flex md2>
              </v-flex>
              <v-flex xs6 md8  > 
                <div class="ma-9 " >
                    <v-img width="30%" src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/rotary-logo-white-2019-simplified.svg">
                  </v-img>
                  </div>
                  <div  class=" yellow--text ma-6">                  
                      People <span class="title">of</span> Action
                
                  </div>
                  <div class="ma-6 " >
                    <p>
                      Rotary is where neighbors, friends, and problem-solvers share ideas, join leaders, and take action to create lasting change.
                    </p>
                  </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-overlay>
    </v-card>
    <v-card class="pa-8 map">
      <v-container class="pa-8">
        <v-layout row>
          <v-flex md4 class="pa-8 ">
             <v-card  class="pa-8 py-12">
              <h3 class="heading-1 font-weight-thin"><b> Connect People</b></h3>
              <hr class="light-blue">
              <p class="title font-weight-thin" style="color:#01a2a2;">Rotary unites more than a million people</p>
              <p class="caption ">
                Together, we see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.
              </p>
            </v-card>
          </v-flex>
          <v-flex md3 class="pa-8 py-12"> 
              <span center>
                <v-img left src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/earth.png">
                 <v-overlay
                    absolute="absolute"
                    :value="overlay"
                    opacity="0.0"
                    class="text-center black--text"
                  >
                    &nbsp; <b class="display-2 font-weight-bold">1.2 <br class="title"> Million</b><br>  members and 35,000+ clubs
                 </v-overlay>
                </v-img>
              </span>
                  
          </v-flex>
        </v-layout>
      </v-container>
     
    
        <HomeComponent/>
        <hover/>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import hover from './hoverimgcomponent'
import HomeComponent from '@/components/HomeComponent.vue';
export default {
  name: "home",
  components: {
    hover,
    HomeComponent,
  },
  data() {
    return {
      absolute: true,
      overlay: true,
      dialog: true
    };
  }
};
</script>
<style  scoped>
.map {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/map.png);
}
.heros {
  color: aqua;
}

</style>