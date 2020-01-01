<template>
  <div>
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column style="position:absolute; bottom:0; left:30%;">
          <p class="display-3 my-8 white--text text-center">Saving Mothers & Children</p>
        </v-layout>
      </v-container>
    </v-card>
    <div style="margin:0% 20%;">
      <p
        class="pa-3 display-2 font-weight-light wf-active"
      >Rotary makes high-quality health care available to vulnerable mothers and children so they can live longer and grow stronger.</p>
      <p
        class="pa-3 title font-weight-light"
      >We expand access to quality care, so mothers and children everywhere can have the same opportunities for a healthy future. An estimated 5.9 million children under the age of five die each year because of malnutrition, inadequate health care, and poor sanitation — all of which can be prevented.</p>
    </div>
    <div class="images my-0">
      <div style="margin:0% 20%;">
        <h1 class="pa-3 display-1 text-center font-weight-light">HOW ROTARY MAKES HELP HAPPEN</h1>
        <p class="pa-3 title font-weight-light">
          Rotary provides education, immunizations, birth kits, and mobile health clinics. Women are taught how to prevent mother-to-infant HIV transmission, how to breast-feed, and how to protect themselves and their children from disease.
          <v-carousel
            style="width:60%; border:1px solid #e3dfde"
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
      </div>
    </div>
    <div class="imagess">
      <v-layout>
        <v-flex></v-flex>
        <v-flex class="pa-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6CqI1LhKiVI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin:0% 20%;">
      <v-container>
        <h1 class="text-center"> OUR IMPACT ON THE LIVES OF MOTHERS AND CHILDREN</h1>
        <p
          class="pa-3 title font-weight-light"
        >The Rotary Foundation reaches mothers and children in need by giving communities the help and training they need to take control of their own maternal and infant health care.</p>
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
    </div>

    <div style="margin:5% 0%; position:relative;">
      <v-img
        height="100%"
        src="    https://www.rotary.org/sites/default/files/styles/w_1728/public/new%20education%20share.jpg?itok=KbPYEYUg 1728w, https://www.rotary.org/sites/default/files/styles/w_2160/public/new%20education%20share.jpg?itok=m7G3GXQe 2160w, https://www.rotary.org/sites/default/files/styles/w_2800/public/new%20education%20share.jpg?itok=9nGj2Kau 2800w"
      >
        <v-sheet
          width="40%"
          class="red lighten-1 white--text"
          style=" position:absolute; top:30%; left:10%; "
        >
          <p class="title pa-4">Help spread the word about Rotary’s efforts to support education</p>
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
            " https://www.rotary.org/sites/default/files/styles/w_700/public/causes-mothers-carousel-scars.jpg?itok=BhFpZoyL%20700w",
          ribbon: "  HEALING SCARS OF WAR",
          content:
            "  In the mountains of Poland, 26 children traumatized by violence get a chance to be kids again at Rotary camp where psychologists mix escape and therapy.",
          color: "#019fcb"
        },
        {
          src:
            "    https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20women%20carousel%20sustain%20700x700.jpg?itok=0moAy-Hx 700w",
          ribbon: "   SUSTAINABLE PROGRAMS",
          content:
            "   Rotary programs improve women’s access to skilled health personnel: doctors, nurses, midwives, or community health care workers. ",
          color: "#9b3238"
        },
        {
          src:
            "  https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20women%20carousel%20births%20700x700.jpg?itok=bnvA8PyK 700w",
          ribbon: "CLEAN BIRTHS",
          content:
            "  Rotary members distribute clean birth kits and train health workers in safe delivery of babies.",
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
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/cause%20women%20hero%202800x1800.jpg?itok=HOenB1YN);
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
</style>