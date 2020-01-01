<template>
  <div class="home" >
    <v-card  class="black" style="z-index:1;">
      <div>
      <video style="z-index:1;" width="100%" height="100%" autoplay="" loop="" muted=""  data-webm="https://www.rotary.org/en/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.webm" data-mp4="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.mp4">
      <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.webm" type="video/webm">
      <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.mp4" type="video/mp4">
      </video>
   <v-overlay
          absolute="absolute"
          :value="overlay"
         style="positon:absolute;z-index:4;"
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
   </div>
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
     <p class="text-center display-2  pink--text accent-2">Our Causes</p>
        <hover/>
    </v-card>
          
      <v-card class="deep-purple "> <!-- for the purple div with Featured Stories-->
          <v-layout row>
            <v-flex xs0 md1>

            </v-flex>
            <v-flex xs11 md9>
              <div class="py-8">
                <p class=" text-center yellow--text darken-3 display-2 font-italic font-weight-bold">
                  Featured Stories
                </p>
              </div>
              <div >
                <v-layout>
                  <v-flex xs4 md4> 
                      <v-hover v-slot:default="{ hover }">
                         <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out transparent" flat>
                                <v-img 
                                height="100%"
                                width="100%"
                                  src="https://www.rotary.org//sites/all/themes/rotary_rotaryorg/images/home/nakivale.jpg"
                                >
                                  <v-overlay :opacity="hover ? 0:0.3" :absolute="absolute" :value="overlay">
                                     <v-flex
                                       class="center-bottom title "
                                    >Rotaractors Reshape Refugee Camp</v-flex>
                                  </v-overlay>
                                </v-img>
                          </v-card>
                        </v-hover>
                  </v-flex>
                       <v-flex xs4 md4> 
                      <v-hover v-slot:default="{ hover }">
                         <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out transparent" flat>
                                <v-img
                                  src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/shelterbox.jpg"
                                >
                                  <v-overlay :opacity="hover ? 0:0.5" :absolute="absolute" :value="overlay">
                                    <v-flex
                                       class="center-bottom title "
                                    >        What it takes to be ShelterBox volunteer
                                    </v-flex>
                                  </v-overlay>
                                </v-img>
                          </v-card>
                        </v-hover>
                  </v-flex>
                       <v-flex xs4 md4> 
                      <v-hover v-slot:default="{ hover }">
                         <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out transparent" flat>
                                <v-img
                                width="100%"
                                  src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/feat-more.jpg"
                                >
                                  <v-overlay :opacity="hover ? 0:0.3" :absolute="absolute" :value="overlay">
                                    <v-flex
                                        class="center-bottom title "
                                    >
                                    <v-btn outlined> 
                                      VIEW ALL STORIES
                                    </v-btn>
                                    </v-flex>
                                  </v-overlay>
                                </v-img>
                          </v-card>
                        </v-hover>
                  </v-flex>
                </v-layout>
              </div>
            </v-flex>
            <v-flex md1>
              
            </v-flex>
          </v-layout>
        <v-card class="white"> <!-- inside purple card to make Join Leaders Component with no spacing -->
          <section class="home-adspace">
            <v-container class="my-9 ">
              <v-layout row >
                <v-flex md4 class="py-9">
                  <h2 class="blue--text heading-3">Join Leaders</h2>

                  <p class="my-9">
                    Club activities, social events, and volunteer projects offer networking opportunities that build personal and professional connections. And Rotarians can extend those networks by visiting other clubs around the globe.
                  </p>

                  <p>
                    <v-btn outlined class="blue--text pa-5" href="/en/get-involved/join">Learn More</v-btn>
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </section>
              <v-card class="white">
              <span class="home-cta-video-overlay">
                <video style="z-index:-1;" width="100%" height="30%" autoplay="" loop="" muted="" >
                  <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_Soccer_Kids_Running2.webm" type="video/webm">
                    <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_Soccer_Kids_Running2.mp4" type="video/mp4">
                  </video>
                  <v-overlay
                        absolute="absolute"
                        :value="overlay"
                        opacity="0.1"
                        class="text-center black--text "
                        z-index="3"
                        > 
                        <span class="display-1 white--text font-weight-light">Help us change lives locally and around the world</span>
                            <div  >
                             
                              <v-btn depressed light class="pa-8 my-9 title">
                                
                                GET INVOLVED
                              
                              </v-btn>
                               </div>
                              <div>
                              <v-btn depressed light  class="pa-8 title">
                                DONATE
                              </v-btn>
                               </div>
                              <div>
                              <v-btn depressed light class="pa-8 my-9 title">
                                Join
                              </v-btn>
                            </div>
                    </v-overlay>
              </span>
        </v-card>
        </v-card>
       </v-card><!-- end of purple Div also includes Join Leaders Components -->
       <bodyfooter/><!-- footer1 -->
       <pagefooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import hover from './hoverimgcomponent'
import HomeComponent from '@/components/HomeComponent.vue';
import bodyfooter from '@/components/bodyfooter.vue';
import pagefooter from '@/components/footer.vue';
export default {
  name: "home",
  components: {
    hover,
    HomeComponent,
    bodyfooter,
    pagefooter,
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
.home-cta-video-overlay {
    background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/cta-video-overlay.png) no-repeat 50% 50%;
    height: 100%;
    max-width: 50%;
    left: 0;
    z-index: 3;
}
.home-adspace {
    background-image: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/ad-block-networkingmap--1000.png);
    background-position: 107% 96%;
    background-size: 69%;
}
.center-bottom {
  margin-top: 70%;
  text-align: center;
}
.map {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/map.png);
}
.heros {
  color: aqua;
}
.transparent {
   background-color: white!important;
   opacity: 0.9;
   border-color: transparent!important;
 }

</style>