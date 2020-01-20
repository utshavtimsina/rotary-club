    <template>
  <div 
  style="background:white;margin-top:56px;" 
  class="text-center">
  <div id="video-div" style="position:relative;">
      <video  width="100%" autoplay loop muted class="hero-video" 
      >
        <source 
          
          src="https://www.rotary.org/sites/default/files/2018_075_TwoDropsofPatience_ambient.mp4"
          type="video/mp4"
        />
      </video>
      <div class="hero-text">
        <p
          class="display-3 my-8 white--text text-center"
        >
          Step into another world
          <br />
          <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
        </p>
      </div>
  </div>
    <div class="page-content mt-12">
      <v-container>
      <v-flex md8 class="mx-auto">
        <div style="border-top:1px solid black;border-bottom:1px solid black" class="px-8">
          <h1
            class="font-weight-regular"
          >Rotary is harnessing the immersive power of virtual reality to create a more connected, stronger world.</h1>
        </div>
      </v-flex>
      <v-flex md10 class="mt-4 title font-weight-light mx-auto">
          <p>
            Virtual reality connects with people on a visceral, personal level in a way that words simply can’t. Rather than tell you how Rotary is changing lives, let us show you.
          </p>
        </v-flex>
        <v-layout row>
          <!-- left flex starts -->
        <v-flex md8 class="text-left mt-12">
          <h1 class="font-weight-regular">Get the Rotary VR app</h1>
          <div class="mt-4">
            <p :class="paragraph">
              By combining the power of Rotary's virtual reality app with a VR viewer and smartphone, you can immerse yourself in some of Rotary's most meaningful work. 
            </p>
            <p :class="paragraph">
              To experience virtual reality, download the Rotary VR App to your smartphone. For optimal viewing, use a VR viewer and noise canceling headphones to immerse yourself in any of Rotary's VR films.
            </p>
            <p :class="paragraph">
              You can also view a 360° version of our VR films simply by watching them on your computer or smartphone.
            </p>
          </div>
          <div class="mt-12">
            <h1 class="font-weight-regular">
              Our current VR films
            </h1>
            <hr class="mt-4 mb-4">
          </div>
          <!-- vr films section starts -->
          <div class="mt-12">
            <v-layout row
            v-for="(vrfilms,i) in VRFilms" :key="i"
            >
              <v-flex md3>
                <v-img
                :src="vrfilms.img"
                >
                </v-img>
              </v-flex>
              <v-flex md9 class="pr-6 pl-6">
                <h1>
                  {{vrfilms.title}}
                </h1>
                <p :class="paragraph">
                  {{vrfilms.content}}
                </p>
                <a href="">
                  {{vrfilms.link}}
                </a>
              </v-flex>
              <hr class="mt-12 mb-12" style="width:100%">
            </v-layout>
          </div>
          <!-- vr films section ends -->
        </v-flex>
        <!-- left flex ends -->

        <!-- right flex starts -->
        <v-flex md4>
          <div id="phone-image" class="mt-4">
          <v-img
          src="https://www.rotary.org/sites/default/files/styles/w_2200/public/vr-app-mobile--v1.jpg?itok=4Iqcmtoi 2200w, https://www.rotary.org/sites/default/files/styles/w_2400/public/vr-app-mobile--v1.jpg?itok=iiLI3PIc 2400w"
          >
          </v-img>
          </div>
          <div id="buttons" class="pa-4">
            <v-btn
            flat
            class="white--text mb-4"
            color="#c10042"
            width="100%"
            height="8vh"
            >
              ANDROID
            </v-btn>
            <v-btn
            flat
            class="white--text"
            height="8vh"
            color="#c10042"
            width="100%"
            >
              IPHONE
            </v-btn>
          </div>
        </v-flex>
        <!-- right flex ends -->
        </v-layout>
         </v-container>
    </div>
    <!-- dark blue section starts -->
    <div class="dark-blue mt-12 text-left white--text pa-8">
      <v-container>
        <v-layout row>
          <v-flex md8>
            <div>
          <h1 class="font-weight-regular mb-4">
          Club and member resources
        </h1>
        <p :class="paragraph">
          Use these resources to plan and promote your club’s virtual reality events.
        </p>
        </div>
        <div class="mt-6" id="lists" >
          <ul :class="paragraph">
            <li class="mb-8">
              <span class="font-weight-bold">Plan a VR Event</span>
              <p>
                Learn what equipment you need, how your space should be set up, and how to promote your event.
              </p>
              <a href="">Download the Event Planning Guide</a>
            </li>
            <li class="mb-8">
              <span class="font-weight-bold">How to involve viewers</span>
              <p>
                After your guests view the VR film, invite them to get involved with your club — as a donor, volunteer, or maybe even a new member. These talking points can help.
              </p>
              <a href="">Download VR Talking Points</a>
            </li>
            <li class="mb-8">
              <span class="font-weight-bold">Virtual reality safety</span>
              <p>
                  Review this safety sheet and make it available to guests before they view a VR film.
              </p>
              <a href="">Download the safety guidelines</a>
            </li>
          </ul>
        </div>
        </v-flex>
        <v-flex md4 class="mx-auto">
          <div class="mb-4">
            <h3 class="font-weight-light">
              PROMOTIONAL RESOURCES
            </h3>
          </div>
          <div>
            <p :class="paragraph">
              <a href="">Sample social media posts (PDF)</a>
              <br><span>
                Customize these social media posts to promote your event on Facebook and Twitter.
              </span>
            </p>
            <p :class="paragraph">
              <a href="">Ad template (PPTX)</a>
              <br><span>
                Use this simple template to create your own ad or flyer to promote your event.
              </span>
            </p>
            <p :class="paragraph">
              <a href="">Tabletop sign (PDF)</a>
              <br><span>
                Dress up your virtual reality event with these tabletop cards. Have your local printer produce it, and request an easel to hold it.
              </span>
            </p>
            <p :class="paragraph">
              <a href="">Roll-up banner (PDF)</a>
              <br><span>
                Use this attention-grabbing 80-inch (203 cm) tall banner at your next event. Have your local printer produce it.
              </span>
            </p>

          </div>
        </v-flex>
        </v-layout>
        
      </v-container>
    </div>
    <!-- dark blue section ends -->
  </div>
</template>

<script>
export default {

  data:function(){
    return{
      paragraph:'title font-weight-light',
      VRFilms:[
        {
          img:'https://www.rotary.org/sites/default/files/styles/w_400/public/patience%20cropped.png?itok=4CJw288L 400w',
          title:'Two Drops of Patience',
          content:'Travel with Patience Asiimwe and her fellow Rotaractors to a remote region of Uganda to vaccinate children who otherwise would be missed. See how far Patience will go to make sure every child in her country is protected from polio.',
          link:'Watch the trailer (non-VR version)'
        },
        {
          img:'https://www.rotary.org/sites/default/files/styles/w_400/public/thumb-vr-02.png?itok=Xpg4KhxE 400w',
          title:'One Small Act',
          content:'See the powerful impact that small acts of kindness can have on the life of one little girl whose world has been torn apart by conflict.',
          link:'Watch the 360° video (non-VR version)'
        },
        {
          img:'https://www.rotary.org/sites/default/files/styles/w_400/public/thumb-vr-03.png?itok=0BFvGLOJ 400w',
          title:'I Dream of An Empty Ward',
          content:'Follow Alokita, one of the last children in India to be paralyzed by polio, as she takes her first steps in 11 years. Actress and Rotary polio ambassador Archie Panjabi introduces the film.',
          link:'Watch the 360° video (non-VR version)'
        },
      ]
    };
  }
};
</script>

<style scoped>

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
    transform: translateY(-15px);
  }
}
#video-div{
  height:550px;
  overflow:hidden;
}
.hero-text{
    position:absolute;
    height:150px;
    width:100%;
    top:75%;
    left:50%;
    transform:translate(-50%,-50%); 
    /* transform: translateY(-300%); */
    /* height:20vh; */
    /* bottom:200%; */
    /* left:50%;
    top:50%;
    transform:translate(-50%,-50%); */
    word-wrap: break-word;
    /* background-color:rgba(0, 0, 0, 0.1); */
    /* opacity:0.4; */
}
.dark-blue{
  background: url('https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-darkblue.png')
}
</style>