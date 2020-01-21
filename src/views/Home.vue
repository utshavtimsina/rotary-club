<template>
  <div class="home" >
    <v-card  class="black" style="z-index:1;">
  <div class="video-div">
       <video autoplay loop muted class="hero-video" width="100%"
       style="opacity:0.5;"
      >
     
        <source 
          src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_06.mp4"
          type="video/mp4"
        />
      </video>
    <div class="hero-text ">  
 
        <p
          class="  white--text text-center  "
        >
          
            <v-layout row>
              
              <v-flex md8  sm6 xs6 class="mx-auto "  > 
                    <img style="max-width:20%;height: auto;"   src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/rotary-logo-white-2019-simplified.svg">
                  <div  class=" yellow--text  " style="font-size: 4vw;">                  
                      People <span class="title">of</span> Action
                  </div>
                   <p class="mt-6 white--text" style="font-size: 2vw;">
                      Rotary is where neighbors, friends, and problem-solvers share ideas, join leaders, and take action to create lasting change.
                    </p>
              </v-flex>
            </v-layout>
          <br/>
        </p>
        
      </div>
 
   
 
  </div>
      <!-- <div>
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
   </div> -->
    </v-card>
    <v-card class="  map">
      <v-container class="pa-8">
        <v-layout row>
          <v-flex md5 sm12 xs12 class="   ">
             <v-card  class="pa-8 ">
              <h3 class="heading-1 font-weight-thin"><b> Connect People</b></h3>
              <hr class="light-blue">
              <p class="title font-weight-thin" style="color:#01a2a2;">Rotary unites more than a million people</p>
              <p class="caption ">
                Together, we see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.
              </p>
              <div class="mobileView">
              <hr class="light-blue">
                
                  <p> <b class="display-2 font-weight-bold"> 1.2 <br class="title"> Million</b><br>  members and 35,000+ clubs</p>
                </div>
            </v-card>
          </v-flex>
          <v-flex   class="mx-auto mt-8 desktopView" style="height:1000px; width:100%;"    > 
            <div style="z-index:4;position:absolute;left:50%; transform:translateX(-50%); "  >
           <v-flex md5 class="mx-auto" >
                <v-img style="height:auto;" left src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/earth.png">
                 <v-overlay
                    absolute="absolute"
                    :value="overlay"
                    opacity="0.0"
                    class="text-center white--text"
                  >
                    &nbsp; <b class="display-2 font-weight-bold"> 1.2 <br class="title"> Million</b><br>  members and 35,000+ clubs
                 </v-overlay>
                </v-img>
                 
              </v-flex>
               <HomeComponent  />
                </div>
          </v-flex>
           
        </v-layout>
               <v-layout row>
        
         <v-flex md4 class="mx-auto mt-7">
           <v-card class="pa-5">
            <h3 class="display-1">We Transform Communities</h3>
              <hr class="light-blue">
            <p class="caption pa-2">We take action locally and globally</p>

            <p>
              Each day, our members pour their passion, integrity, and intelligence into completing projects that have a lasting impact. We persevere until we deliver real, lasting solutions.
            </p>
           </v-card>
          
         </v-flex>
           <v-flex md4 class="desktopView">
         
             <img width="100%"  height="100%" data-src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/difference-transform-people.png" style="transform: translate3d(0px, 95.5px, 0px);" src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/difference-transform-people.png">
              
         </v-flex>
      
       </v-layout>
      </v-container>
         <v-container class="my-10">
         <v-layout row  >
         <v-flex xs7 sm7 md4 class="desktopView">
                <img height="100%" width="100%" src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/difference-solve-people.png" alt="">
         </v-flex>
         <v-flex xs4 sm4 md3 class="desktopView">
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
         <v-flex sm12 xs12 md4 class="mx-5 my-5 mx-auto "   >
             <v-card class="pa-8">
                <h3 class="display-1">We Solve Problems</h3>
                 <hr class="light-yellow " >
                <p class="yellow--text display-1">No challenge is too big for us</p>

                <p>
                  For more than 110 years, we’ve bridged cultures and connected continents to champion peace, fight illiteracy and poverty, promote clean water and sanitation, and fight disease.
                </p>
                
                <div class="mobileView">
                   <hr class="light-yellow " >
                  <p> <strong><b style="font-size:150% "> 2.5</b>Billion </strong><br> <span  class="pa-3 "> children immunized against polio</span></p>
                </div>
             </v-card>
         </v-flex>
       </v-layout>
       </v-container>
        
     <p class="text-center display-2  pink--text accent-2">Our Causes</p>
        <hover/>
    </v-card>
          
      <v-card class="deep-purple "> <!-- for the purple div with Featured Stories-->
          <v-layout >
            <v-flex xs11 md8 class="mx-auto">
              <div class="py-8">
                <p class=" text-center yellow--text darken-3 display-2 font-italic font-weight-bold">
                  Featured Stories
                </p>
              </div>
              <div >
                <v-layout row >
                  <v-flex  md4 xs9 class="mx-auto"> 
                      <v-hover v-slot:default="{ hover }">
                         <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out transparent " flat>
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
                       <v-flex  md4 xs9 class="mx-auto"> 
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
                        <v-flex  md4 xs9 class="mx-auto"> 
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
              <v-layout row >
                <v-flex md4 xs9 class="py-9 mx-auto">
                  <h2 class="blue--text heading-3">Join Leaders</h2>

                  <p class="my-9">
                    Club activities, social events, and volunteer projects offer networking opportunities that build personal and professional connections. And Rotarians can extend those networks by visiting other clubs around the globe.
                  </p>

                  <p>
                    <v-btn outlined class="blue--text pa-5" href="/en/get-involved/join">Learn More</v-btn>
                  </p>
                </v-flex>
              </v-layout>
          </section>
              <v-card class="white desktopView">
                <v-flex md12 xs9 class="mx-auto">
              <span class="video-div">
                <video  style="width:100%;" autoplay="" loop="" muted="" class="hero-video " >
                  <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_Soccer_Kids_Running2.webm" type="video/webm">
                    <source src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/media/home/AmbientWebDemo_Soccer_Kids_Running2.mp4" type="video/mp4">
                  </video>
                  <div
                        absolute="absolute"
                        :value="overlay"
                        opacity="0.1"
                             
                        class="text-center hero-text black--text "
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
                  </div>
              </span>
              </v-flex>
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
@media screen and (max-width: 1024px){
  .desktopView{
    display: none !important;
  } 
}
@media only screen and (min-width: 1024px){
  .mobileView{
    display: none !important;
  }
}
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
 .chevron {
  animation: bounce 0.8s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-10px);
  }
}
.video-div{
  display:grid;
  grid-template-columns: auto;
  height:50vw;
  overflow:hidden;
  
}
.hero-video{
  /* height:100%; */
  grid-column:1/12;
  grid-row:1/20;
  width:100%;
  
}
.hero-text{
    width:100%;
    grid-column:1/12;
    grid-row:15;
    color:white;
    /* margin-top:60Vh; */
    /* transform:translateY(10%); */
    /* width:50%; */
    /* align-self: baseline; */
    /* margin-top:60vh; */
    z-index:2;
    /* position:absolute; */
    /* height:150px; */
    /* width:100%; */
    /* top:15%; */
    /* left:50%; */
    /* transform:translate(-50%,-50%);  */
}

</style>