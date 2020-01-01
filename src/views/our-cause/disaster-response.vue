<template>
  <div>
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column style="position:absolute; bottom:0; left:30%;">
          <p class="display-3 my-8 white--text text-center">Disaster Response</p>
        </v-layout>
      </v-container>
    </v-card>
    <div style="margin:0% 20%;">
      <p
        class="pa-3 display-2 font-weight-light wf-active"
      >With more than 1.2 million members worldwide, Rotarians are on the ground and ready to take action to help communities recover when disasters strike.</p>
      <p
        class="pa-3 title font-weight-light"
      >Rotary members and The Rotary Foundation play a unique role in disaster recovery and rebuilding efforts. Working closely with our partner ShelterBox and other organizations that specialize in disaster relief, Rotary members lead projects to support every phase of a community's recovery.</p>
    </div>
    <div class="images my-0">
      <div style="margin:0% 20%;">
        <h1
          class="pa-3 display-1 text-center font-weight-light"
        >Rotary supports three phases of relief:</h1>
        <p class="pa-3 title font-weight-light">
          <b>1.</b> Immediate response: Our local clubs and partners immediately offer helping hands and supplies.
          <br />
          <b>2.</b> Short-term assistance: Our clubs and districts help affected communities wherever we can through funds and materials to re-establish day-to-day operations.
          <br />
          <b>3.</b> Long-term rebuilding: Our clubs plan and implement projects that rebuild affected communities.
          <!-- <v-carousel
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
          </v-carousel>-->
        </p>
      </div>
      <v-card flat class="imagess">
        <v-container style="text-align: center;vertical-align: middle;">
          <v-layout>
            <v-flex md6 class="pa-2" style="border-right:1px solid white;">
              <h1 class="text-center white--text font-weight-light">
                <span class="text-center title white--text font-weight-light">FOR ALL</span>
                <br />Want to help communities recover?
              </h1>
              <v-btn outlined class="my-9" dark style="padding:0% 20%">donate now</v-btn>
            </v-flex>
            <v-flex md6 class="pa-2">
              <h1 class="text-center white--text font-weight-light">
                <span class="text-center title white--text font-weight-light">FOR MEMBERS</span>
                <br />Interested in a disaster response grant?
              </h1>
              <v-btn outlined class="my-9" dark style="padding:0% 20%">Learn More</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
    <div class="images">
      <v-layout>
        <v-flex></v-flex>
        <v-flex class="pa-10">
          <h1 class="black--text font-weight-light">Featured disaster response news</h1>
          <p
            class="py-3 title font-weight-light"
          >The latest news on what Rotarians are doing around the world to help disaster victims.</p>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex></v-flex>
        <v-flex class="pa-10">
           
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_ylRIasOsec"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
           <v-card>
               
           </v-card>
        </v-flex>
      </v-layout>
    </div>
    <div class="imagess">
      <h1 class="white--text text-center py-10">EXPLORE OTHER CAUSES</h1>
      <div style="margin:5% 0%;">
        <cause />
      </div>
    </div>
    <div style="margin:0% 10%;">
      <related :flex="flex" :length="flex.length" />
    </div>
    <pagefooter />
  </div>
</template>

<script>
import related from "@/components/related";
import cause from "@/components/cause-navigation";
import pagefooter from "@/components/footer.vue";
export default {
  components: {
    pagefooter,
    cause,
    related
  },
  data: function() {
    return {
      overlay: true,
      absolute: true,
      flex: [
        {
          topic: " RELATED STORIES",
          src: ["Telemedicine brings health care to rural Nigeria"],
          img:
            "  https://www.rotary.org/sites/default/files/styles/w_600/public/saada_crop.jpg?itok=knaKzeZN 600w"
        },
        {
          topic: "",
          src: ["Rotary helps Tanzanians with albinism find safe futures"],
          img: ""
        },
        {
          topic: "Resources",
          src: [
            "See how our members are strengthening communities on Rotary Showcase",
            "Find a project to support on Rotary Ideas"
          ],
          img: ""
        }
      ],
      items: [
        {
          src:
            " https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20econ%20microloans%20700x700.jpg?itok=izGv6rXO 700w",
          ribbon: "  MICROLOANS",
          content:
            "  Entrepreneurs use microloans to become street vendors, rickshaw drivers, weavers, and tailors..",
          color: "#019fcb"
        },
        {
          src:
            " https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20econ%20ag%20ops%20700x700.jpg?itok=NamnofiE 700w",
          ribbon: "  AGRICULTURAL OPPORTUNITIES",
          content:
            "  Entrepreneurs in rural communities can borrow money to buy livestock or plant crops, or get training in sustainable farming. ",
          color: "#9b3238"
        },
        {
          src:
            "   https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20econ%20carousel%20adopt%20700x700.jpg?itok=S_ySCUnh 700w",
          ribbon: " ADOPT A VILLAGE",
          content:
            "Rotary members use a multifaceted and coordinated strategy to break the cycle of poverty in extremely impoverished communities..",
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
.structures {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-darkblue.png);
  width: 100%;
  padding: 5% 3%;
  height: 400px;
}
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/20171216_BS_104-disaster-relief-hero_0.jpg?itok=UjaCTP9m);
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