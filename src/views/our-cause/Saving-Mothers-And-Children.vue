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
          <v-flex md8>
            <p class="pa-3 title font-weight-light">
              <b>Mobile prenatal clinics</b>  
            </p>
            <p class="pa-3 title font-weight-light">
             Haiti has the highest maternal and infant mortality rate of any country in the western hemisphere. Rotary provided a fully equipped medical Jeep to volunteers and midwives to reach mothers and children in remote areas.
              <p class="pa-3 title font-weight-light">
             <b class="py-3"> Cancer screening</b><br ><br>
             Rotarians provided a mobile cancer screening unit and awareness trainings around Chennai, India, where there is a high mortality rate of women with breast and cervical cancer due to late diagnosis.
            <br><br><b >Preventing injuries and deaths</b><br><br>
            Rotary members launched a $3 million, five-year pilot to save lives of mothers and children during home deliveries in Nigeria. Since 2005, they’ve also repaired 1,500 obstetric fistulas — 500 more than their initial goal — restoring dignity and hope to vulnerable mothers.
            </p>
          </v-flex>
          <v-flex md4 class="my-10 text-center">
            <v-card>
                 <img width="100%" src="  https://www.rotary.org/sites/default/files/styles/w_2400/public/cause%20women%20quote%20block%202800x2800.jpg?itok=BFzMnOiM 2400w" alt="">
            <p
              class="py-3 title blue--text font-weight-light"
            >“If mothers are empowered and healthy, so are their families, leading to an alleviation of poverty and hunger.” Robert Zinser, co-founder of the Rotarian Action Group for Population and Development and retired president for Asia at chemical giant BASF 
            </p>
            </v-card>
         
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div style="margin:5% 0%; position:relative;">
      <v-img
        height="100%"
        src="  https://www.rotary.org/sites/default/files/styles/w_2800/public/cause%20women%20share%202800x1800.jpg?itok=MC5_vV3f 2800w"
      >
        <v-sheet
          width="40%"
          class="red lighten-1 white--text"
          style=" position:absolute; top:30%; left:10%; "
        >
          <p class="title pa-4">Spread the word about Rotary’s efforts to save mothers and children.</p>
          <v-icon class="pa-4 display-3 white--text">mdi-facebook-box</v-icon>
          <v-icon class="pa-4 display-3 white--text">mdi-twitter</v-icon>
          <hr class="ma-4" />
          <p class="title pa-4">What can you do to support mothers and their children?</p>
          <v-btn class="pink white--text" height="50px" block>Make a donation</v-btn>
          <v-btn class="pink white--text my-2" height="50px" block>Become a member</v-btn>
        </v-sheet>
      </v-img>
    </div>
<div class="imagess">
  <h1 class="white--text text-center py-10"> EXPLORE OTHER CAUSES</h1>
  <div style="margin:5% 0%;">
    <cause  />
    </div>
</div>
<div style="margin:0% 10%;">
  <related :flex="flex" :length='flex.length'/>
  </div>
    <pagefooter />
  </div>
</template>

<script>
import related from '@/components/related'
import cause from "@/components/cause-navigation";
import pagefooter from "@/components/footer.vue";
export default {
  components: {
    pagefooter,
    cause,
    related,
  },
  data: function() {
    return {
      overlay: true,
      absolute: true,
      flex:[
        {
          topic:'Related',
          src:['Telemedicine brings health care to rural Nigeria'],
          img:" https://www.rotary.org/sites/default/files/styles/w_600/public/nigeria2_crop.jpg?itok=KJ_tdARc 600w"

        },
        {
          topic:'',
          src:[
          'Rotarians save newborns in Brazil',
          ],
          img:""
        }
        ,{
          topic:'Resources',
          src:[
            'See how our members are strengthening communities on Rotary Showcase',
            'Find a project to support on Rotary Ideas',
            ],
          img:""
        }
      ],
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
            "https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20women%20carousel%20sustain%20700x700.jpg?itok=0moAy-Hx 700w",
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
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-darkblue.png);
  width: 100%;
  position: relative;
}
</style>