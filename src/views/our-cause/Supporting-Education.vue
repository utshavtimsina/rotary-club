<template>
  <div>
    <v-card flat class="structure">
       <div class="hero-text">
       <p
          class="display-3  white--text text-center"
        >
         Supporting Education
          <br />
          <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
        </p>
    </div>
    </v-card>
    <v-flex md6 class="mx-auto">
      <p
        class="pa-3 display-2 font-weight-light wf-active"
      >More than 775 million people over the age of 15 are illiterate. That’s 17 percent of the world’s adult population.</p>
      <p
        class="pa-3 title font-weight-light"
      >Our goal is to strengthen the capacity of communities to support basic education and literacy, reduce gender disparity in education, and increase adult literacy. We support education for all children and literacy for children and adults.</p>
    </v-flex>
    <div class="images my-0">
      <v-flex md5 class="mx-auto">
        <h1 class="pa-3 display-1 text-center font-weight-light">HOW ROTARY MAKES HELP HAPPEN</h1>
        <p class="pa-3 title font-weight-light">
          We take action to empower educators to inspire learning at all ages.
          <v-carousel
            style="width:100%; border:1px solid #e3dfde"
            class="mx-auto"
            hide-delimiters
            height="100%"
          >
            <v-carousel-item v-for="(item,i) in items" :key="i">
              <v-sheet height="100%" width="100%" color="white">
                <div>
                  <v-img width="100%" height="40%" :src="item.src"></v-img>
                </div>
                <v-sheet :color="item.color" tile class="text-center pa-2">{{item.ribbon}}</v-sheet>
                <v-sheet
                  tile
                  class="text-left black--text pa-6 subtitle-1"
                  color="white"
                >{{item.content}}</v-sheet>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </p>
      </v-flex>
    </div>
    <div class="imagess">
      <v-layout>
        <v-flex  md4 class="mx-auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WHBg3WcCai8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </div>
    <v-flex md10 class="mx-auto">
      <v-container>
        <h1 class="text-center">OUR IMPACT ON EDUCATION</h1>
        <p
          class="pa-3 title font-weight-light"
        >The Rotary Foundation supports education through scholarships, donations, and service projects around the world.</p>
        <v-layout>
          <v-flex md6>
            <p class="pa-3 title font-weight-light">
              <b>Opening schools:</b> In Afghanistan, Rotary members opened a girls’ school to break the cycle of poverty and social imbalance.
            </p>
            <p class="pa-3 title font-weight-light">
              <b>Teaching adults to read:</b> Rotary members in the United States partnered with ProLiteracy Detroit to recruit and train tutors after a study showed that more than half of the local adult population was functionally illiterate.
            </p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 green--text">500</h1>
            <p
              class="py-3 title green--text font-weight-light"
            >adults raised their reading levels by three grades in Detroit</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md6>
            <p class="pa-3 title font-weight-light">
              <b>New teaching methods:</b> The SOUNS program in South Africa, Puerto Rico and the United States teaches educators how to improve literacy by teaching children to recognize letters by sounds instead of names.
            </p>
            <p class="pa-3 title font-weight-light">
              <b>Making schools healthy:</b> Rotarians are providing clean, fresh water to every public school in Lebanon so students can be healthier and get a better education.
            </p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 blue--text">$100 mil</h1>
            <p
              class="py-3 title blue--text font-weight-light"
            >in grants to get clean water in Lebanese schools</p>
          </v-flex>
        </v-layout>
        <p
          class="pa-3 display-2 font-weight-light wf-active"
        >" When you teach somebody how to read, they have that for a lifetime. It ripples through the community, one by one."</p>
      </v-container>
    </v-flex>

    <div style="margin:5% 0%; position:relative;">
      <v-img
        height="100%"
        src="    https://www.rotary.org/sites/default/files/styles/w_1728/public/new%20education%20share.jpg?itok=KbPYEYUg 1728w, https://www.rotary.org/sites/default/files/styles/w_2160/public/new%20education%20share.jpg?itok=m7G3GXQe 2160w, https://www.rotary.org/sites/default/files/styles/w_2800/public/new%20education%20share.jpg?itok=9nGj2Kau 2800w"
      >
        <v-sheet width="40%"  class="red lighten-1 white--text" style=" position:absolute; top:30%; left:10%; ">
          <p class="title pa-4 " > Help spread the word about Rotary’s efforts to support education</p>
          <v-icon class="pa-4 display-3 white--text">mdi-facebook-box</v-icon>
          <v-icon class="pa-4 display-3 white--text">mdi-twitter</v-icon>
          <hr class="ma-4" />
          <p class="title pa-4">What can you do to support education and bring literacy to everyone?</p>
          <v-btn class="pink white--text" height="50px" block>Make a donation</v-btn>
          <v-btn class="pink white--text my-2" height="50px" block>Become a member</v-btn>
        </v-sheet>
      </v-img>
    </div>

    <cause />

    <pagefooter />
  </div>
</template>

<script>
import cause from "@/components/cause-navigation";
import pagefooter from "@/components/footer.vue";
export default {
  components: {
    pagefooter,
    cause
  },
  data: function() {
    return {
      overlay: true,
      absolute: true,
      items: [
        {
          src:
            "  https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20education%20carousel%20teacher%20700x700.JPG?itok=dZVTiICo 700w",
          ribbon: " TEACHER TRAINING",
          content:
            "  We share our knowledge and experience with educators and other professionals who work with vulnerable populations.",
          color: "#019fcb"
        },
        {
          src:
            "  https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20education%20carousel%20adult%20700x700.jpg?itok=B0kmvdN6 700w",
          ribbon: "  ADULT LITERACY",
          content:
            "  Rotary members fight adult illiteracy by working with local advocates to offer community literacy programs.  ",
          color: "#9b3238"
        },
        {
          src:
            "  https://www.rotary.org/sites/default/files/styles/w_700/public/scholarship2.jpg?itok=P3qUG0sn 700w",
          ribbon: " ROTARY SCHOLARSHIPS",
          content:
            "  Rotary members invest in the future by giving scholarships to students who have the potential to change our communities.",
          color: "#9b1238"
        }
      ]
    };
  }
};
</script>
<style scoped>
.wf-active {
  font-family: Open Sans, HelveticaNeue-Light, Helvetica Neue Light,
    Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
}
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/cause%20education%20hero%202800x1800.JPG?itok=djusAHNi);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 100%;
  height: 700px;
}
.images {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg);
}
.imagess {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-green.png);
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
    transform: translateY(-15px);
  }
}
.hero-text{
    position:absolute;
    height:600px;
    width:100%;
    top:105%;
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
</style>