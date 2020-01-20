<template>
  <div>
    <v-card flat class="structure">
      <div class="hero-text">
        <p
          class="display-3  white--text text-center"
        >
         Growing Local Economies
          <br />
          <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
        </p>
      </div>
    </v-card>
    <v-flex md8 class="mx-auto">
      <p
        class="pa-3 display-2 font-weight-light wf-active"
      >Nearly 800 million people live on less than $1.90 a day. Rotary members are passionate about providing sustainable solutions to poverty.</p>
      <p
        class="pa-3 title font-weight-light"
      >Our members and our foundation work to strengthen local entrepreneurs and community leaders, particularly women, in impoverished communities..</p>
      <p
        class="pa-3 title font-weight-light"
      >We provide training and access to well-paying jobs and financial management institutions.</p>
    </v-flex>
    <div class="images my-0">
      <v-flex md5 class="mx-auto">
        <h1 class="pa-3 display-1 text-center font-weight-light">HOW ROTARY MAKES HELP HAPPEN</h1>
        <p class="pa-3 title font-weight-light">
          We create opportunities to help individuals and communities thrive financially and socially.
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
        <v-flex md4 class="mx-auto" >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5vzd0nypweY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </div>
    <v-flex md10 class="mx-auto">
      <v-container>
        <h1 class="text-center">OUR IMPACT ON LOCAL ECONOMIES</h1>
        <p
          class="pa-3 title font-weight-light"
        > Rotary members train people to become resources for their community, offering networking activities, advice on new business development, and mathematics and financial management training.</p>
        <v-layout>
          <v-flex md8>
            <p class="pa-3 title font-weight-light">
              <b> Rotarians make amazing things happen, like:</b>
            </p>
            <p
              class="pa-3 title font-weight-light"
            ><b>Breaking the cycle of poverty for women:</b> Most of the women living in rural Guatemala do not have the collateral to get loans from regulated financial institutions. The Rotary Club of Guatemala de la Ermita helped 400 local women complete financial literacy courses so they could pool their money and fund their own microlending program.</p>
          </v-flex>
          <v-flex md4 class="my-10 text-center">
             <h1 class="display-3 green--text">$9.2 mil</h1>
              <p
                class="py-3 title green--text font-weight-light"
              >The amount The Rotary Foundation has spent to grow local economies and reduce poverty last year</p>
          </v-flex>
        </v-layout>
             <v-layout>
          <v-flex md8>
            <p
              class="pa-3 title font-weight-light"
            ><b>Skills development, business training:</b>  Esmeraldas, Ecuador, Rotary members helped grant more than 250 microloans and train more than 270 community members in sewing, baking, plumbing, microcredit, business management, and leadership. </p>
          </v-flex>
          <v-flex md4 class="my-10 text-center">
             <h1 class="display-3 pink--text">60%</h1>
              <p
                class="py-3 title pink--text font-weight-light"
              >of the world’s hungry people are women and girls</p>
          </v-flex>
        </v-layout>
         <v-layout>
          <v-flex md8>
            <p
              class="pa-3 title font-weight-light"
            ><b>Sustainable farming:</b> In west Cameroon, soil erosion and loss of soil fertility have significantly reduced farmers’ harvests. Rotary members gave farmers the skills they needed to improve soil fertility, control soil erosion, and market their produce. The results: increased crop yields and profits. </p>
          </v-flex>
          <v-flex md4 class="my-10 text-center">
             <h1 class="display-3 blue--text">70%</h1>
              <p
                class="py-3 title blue--text font-weight-light"
              >of the world’s poorest people live in rural areas and depend on agriculture and related activities for their livelihood</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <div style="margin:5% 0%; position:relative;">
      <v-img
        height="100%"
        src="  https://www.rotary.org/sites/default/files/styles/w_2800/public/cause%20econ%20share%20NEW.jpg?itok=kCrbBu7E 2800w"
      >
        <v-sheet
          width="40%"
          class="pink lighten-1 white--text"
          style=" position:absolute; top:10%; left:45%; "
        >
          <p class="title pa-4"> Spread the word about Rotary’s efforts to grow local economies.</p>
          <v-icon class="pa-4 display-3 white--text">mdi-facebook-box</v-icon>
          <v-icon class="pa-4 display-3 white--text">mdi-twitter</v-icon>
          <hr class="ma-4" />
          <p class="title pa-4"> How can you help economies flourish? </p>
          <v-btn class="pink white--text" height="50px" block>Make a donation</v-btn>
          <v-btn class="pink white--text my-2" height="50px" block>Become a member</v-btn>
        </v-sheet>
      </v-img>
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
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_1728/public/case%20econ%20hero%202800x1800.JPG?itok=JpjNUq8V);
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