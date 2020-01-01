<template>
  <div>
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column style="position:absolute; bottom:0; left:40%;">
          <p class="display-3 my-8 white--text text-center">Providing Clean Water</p>
        </v-layout>
      </v-container>
    </v-card>
    <div style="margin:0% 20%;">
      <p
        class="pa-3 display-2 font-weight-light wf-active"
      >Clean water, sanitation, and hygiene education are basic necessities for a healthy environment and a productive life.</p>
      <p
        class="pa-3 title font-weight-light"
      >When people have access to clean water and sanitation, waterborne diseases decrease, children stay healthier and attend school more regularly, and mothers can spend less time carrying water and more time helping their families.</p>
    </div>
    <div class="images my-0">
      <div style="margin:0% 20%;">
        <h1 class="pa-3 display-1 text-center font-weight-light">HOW ROTARY MAKES HELP HAPPEN</h1>
        <p class="pa-3 title font-weight-light">
          Through water, sanitation, and hygiene (WASH) programs, Rotary’s people of action mobilize resources, form partnerships, and invest in infrastructure and training that yield long-term change.
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
            src="https://www.youtube.com/embed/pt4cC1KDfD4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin:0% 20%;">
      <v-container>
        <h1 class="text-center">OUR IMPACT ON CLEAN WATER AND SANITATION</h1>
        <p
          class="pa-3 title font-weight-light"
        >The Rotary Foundation is changing the world by providing grants for projects and activities around the globe and in your own backyard:</p>
        <v-layout>
          <v-flex md6>
            <p class="pa-3 title font-weight-light">
              <b>Rotary-USAID Partnership:</b> Rotary has partnered with the United States Agency for International Development in Ghana, Madagascar, and Uganda to implement sustainable, long-term programs to improve water supplies, sanitation, and hygiene.
            </p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 green--text">$24 </h1>
            <p
              class="py-3 title green--text font-weight-light"
            >is all it takes to provide one person with safe water</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md6>
            <p class="pa-3 title font-weight-light">
              <b>WASH in Schools Target Challenge:</b> has challenged our members to develop sustainable water, sanitation, and hygiene education projects in five countries: Belize, Guatemala, Honduras, India, and Kenya.
            </p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 blue--text">110</h1>
            <p
              class="py-3 title blue--text font-weight-light"
            >schools in Ghana have better sanitation and hygiene due to Rotary-USAID partnership</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md6>
            <p class="pa-3 title font-weight-light">
              <b>WASH projects:</b> 2013, The Rotary Foundation has invested in more than 1,000 WASH projects in more than 100 countries. Through grants from The Rotary Foundation and fundraising by Rotary clubs, our volunteers have supported water purification, hygiene education, latrine construction, and waste management.
            </p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 pink--text">2030</h1>
            <p
              class="py-3 title pink--text font-weight-light"
            > is the year Rotary hopes to finish providing everyone with safe water, sanitation, and hygiene</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div style="margin:5% 0%; position:relative;">
      <v-img
        height="100%"
        src="   https://www.rotary.org/sites/default/files/styles/w_2160/public/cause%20water%20share%202800x1800.JPG?itok=e7xiL2_A 2160w, https://www.rotary.org/sites/default/files/styles/w_2800/public/cause%20water%20share%202800x1800.JPG?itok=9_sOiKB_ 2800w"
      >
        <v-sheet class="black white--text" style="position:absolute; top:30%; left:60%; ">
          <p class="title pa-4"> Help spread the word about Rotary’s efforts to provide clean water.</p>
          <v-icon class="pa-4 display-3 white--text">mdi-facebook-box</v-icon>
          <v-icon class="pa-4 display-3 white--text">mdi-twitter</v-icon>
          <hr class="ma-4" />
          <p class="title pa-4"> What can you do to make clean water available to everyone?</p>
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
            "   https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20water%20carousel%20lebanon%20700x700.jpg?itok=ykpcWX6Q 700w",
          ribbon: " MAKING SCHOOLS HEALTHIER",
          content:
            " All 24 of Lebanon’s Rotary clubs came together — overcoming religious, cultural, and political divisions — to form partnerships with the government, World Vision, UNICEF, and the Red Cross. Together the groups developed a program that delivers clean water to every public school in the country.",
          color: "#019fcb"
        },
        {
          src:
            "  https://www.rotary.org/sites/default/files/styles/w_700/public/water%20madan.jpg?itok=DHA65jJe 700w",
          ribbon: " WATER FOR A COMMUNITY",
          content:
            " Rotary clubs partnered with local organizations to install a rainwater harvesting and distribution center for 4,000 people in Madan, India. They also delivered training programs for women in the community and students in 35 schools. ",
          color: "#9b3238"
        },
        {
          src:
            "   https://www.rotary.org/sites/default/files/styles/w_700/public/water%20madan.jpg?itok=DHA65jJe 700w",
          ribbon: " WASH IN GUATEMALA SCHOOLS",
          content:
            " Rotary clubs in Guatemala improved conditions for as many as 1,793 children in 10 schools in the town of Escuintla by providing toilets, washing stations, water tanks, and training",
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
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/new%20water%20hero%202.jpg?itok=t6nSs4ls);
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