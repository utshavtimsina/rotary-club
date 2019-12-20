<template>
  <div class="home">
    <v-card >
      <video style="z-index:-1;" width="100%" height="100%" autoplay="" loop="" muted=""  data-webm="https://www.rotary.org/en/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.webm" data-mp4="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.mp4">
      <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.webm" type="video/webm">
      <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.mp4" type="video/mp4">
      </video>
       

        <v-overlay
          absolute="absolute"
          :value="overlay"
         
        >
          <v-container >
            <v-layout column>
              <v-flex md2>
              </v-flex>
              <v-flex xs6 md8 style="visibility:hidden;" > 
                <div class="ma-9 "   >
                    <v-img width="30%" src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/rotary-logo-white-2019-simplified.svg">
                  </v-img>
                  </div>
                  <div  class="display-3 yellow--text ma-6">                  
                      People <span class="title">of</span> Action
                
                  </div>
                  <div class="ma-6 display-1" >
                    <p>
                      Rotary is where neighbors, friends, and problem-solvers share ideas, join leaders, and take action to create lasting change.
                    </p>
                  </div>
              </v-flex>
            </v-layout>
          </v-container>
     
          <v-container >
            <v-layout row>
              <v-flex md2>
              </v-flex>
              <v-flex xs6 md8  > 
                <div class="ma-9 " >
                    <v-img width="30%" src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/rotary-logo-white-2019-simplified.svg">
                  </v-img>
                  </div>
                  <div  class="display-3 yellow--text ma-6">                  
                      People <span class="title">of</span> Action
                
                  </div>
                  <div class="ma-6 display-1" >
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
          <v-flex md2>
          </v-flex>
          <v-flex md4>
             <v-card >
              <h3 class="heading-1 font-weight-thin"><b> Connect People</b></h3>
              <hr class="light-blue">
              <p class="title font-weight-thin" style="color:#01a2a2;">Rotary unites more than a million people</p>
              <p class="caption ">
                Together, we see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.
              </p>
            </v-card>
          </v-flex>
          <v-flex md3>

          </v-flex>
          <v-flex md3> 
            <v-card>
                  <v-img width="20px" src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/earth.png">
                    </v-img>
                    <b>1.2</b> Million members and 35,000+ clubs
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
     
     
        
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data(){
    return{
      overlay:true,
    }
  },
}
</script>
<style  scoped>
.map{
  background:url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/map.png);
}
.heros{
  color:aqua; 
}
</style>