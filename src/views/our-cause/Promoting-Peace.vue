<template>
  <div>
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column style="position:absolute; bottom:0; left:40%;">
          <p class="display-3 my-8 white--text text-center">Promoting Peace</p>
        </v-layout>
      </v-container>
    </v-card>
    <div style="margin:0% 20%;">
      <p
        class="pa-3 display-1 font-weight-light"
      >Conflict and violence displaced more than 68 million people in the past year, and half of those are children.</p>
      <p
        class="pa-3 title font-weight-light"
      >We refuse to accept conflict as a way of life. Rotary projects provide training that fosters understanding and provides communities with the skills to resolve conflicts.</p>
    </div>
    <div class="images my-0">
      <div style="margin:0% 20%;">
        <h1 class="pa-3 display-1 text-center font-weight-light">HOW ROTARY MAKES HELP HAPPEN</h1>
        <p
          class="pa-3 title font-weight-light"
        >Through our service projects, peace fellowships, and scholarships, our members are taking action to address the underlying causes of conflict, including poverty, inequality, ethnic tension, lack of access to education, and unequal distribution of resources.</p>
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
      </div>
    </div>
    <div class="imagess">
      <v-layout>
        <v-flex></v-flex>
        <v-flex class="pa-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8DiH4nn1TMg"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin:0% 20%;">
      <v-container>
        <v-layout>
          <v-flex md6>
            <p
              class="pa-3 title font-weight-light"
            ><b>Improving quality of life.</b> Rotary members founded the People for People Foundation, which has helped 10,000 families afford food, clothing, rent, utilities, medications, and other necessities.</p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 pink--text">100</h1>
            <p
              class="py-3 title pink--text font-weight-light"
            >peace fellowships are offered each year at Rotary Peace Centers around the world</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md6>
            <p
              class="pa-3 title font-weight-light"
            >Raising awareness of bullying. Rotaract clubs in the Philippines conduct antibullying campaigns in schools to teach children how to handle conflict peacefully from an early age.</p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 blue--text">65 mil</h1>
            <p
              class="py-3 title blue--text font-weight-light"
            >people are currently displaced by armed conflict or persecution</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md6>
            <p
              class="pa-3 title font-weight-light"
            >Protecting domestic violence survivors and their families. The U.S. state of Louisiana has the fourth highest incidence of death caused by domestic violence. Local Rotary members met this issue by helping a shelter provide food, clothing, legal advocacy, and counseling to over 500 women in one year.</p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 green--text">$142 mil</h1>
            <p
              class="py-3 title green--text font-weight-light"
            >has been raised by Rotary to support peace</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md6>
            <p
              class="pa-3 title font-weight-light"
            >Promoting positive peace. Rotary has partnered with the Institute for Economics and Peace, an independent think tank and leader in the study of peace and conflict, to help address the root causes of conflict and create conditions that foster peace.</p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 blue--text">1000+</h1>
            <p
              class="py-3 title font-weight-light"
            >students have graduated from Rotary’s Peace Centers program</p>
          </v-flex>
        </v-layout>
      </v-container>
      <img
        height="100%"
        width="60%"
        src=" https://www.rotary.org/sites/default/files/styles/w_1600/public/5_peace%20alumniEN.jpg?itok=cHVx3Tyc 1600w"
        alt
      />
      <!-- image and red image component -->
      <v-card class="white--text" flat>
        <v-layout row>
          <v-flex md6>
            <v-img
              height="100%"
              src="https://www.rotary.org/sites/default/files/styles/w_1200/public/cause%20peace%20callout1200x800.jpg?itok=Ze3xxN08"
            ></v-img>
          </v-flex>
          <v-flex
            md6
            class="pa-12"
            style="background:url('https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-red.png')"
          >
            <div class="mx-auto">
              <p class="display-2 text-left mx-auto">We wage peace</p>
              <p
                class="title text-left my-8"
              >The Rotarian Action Group for Peace gives Rotary members resources and support to advance world peace and turn ambitious ideas into life-changing realities.</p>
              <p class="subtitle text-left my-8">Help us wage peace</p>
              <p class="display-2 text-left mx-auto">We support peace</p>
              <p
                class="title text-left my-8"
              >With your help, our foundation can promote peace through projects and education.</p>
              <p class="subtitle text-left my-8">Give now</p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
    <div style="margin:5% 0%;">
      <v-img
        height="100%"
        src=" https://www.rotary.org/sites/default/files/styles/w_2800/public/peace%20share%203.jpg?itok=0UkoPfHO 2800w"
      >
        <v-sheet class="black white--text" style="position:absolute; top:30%; left:20%; ">
          <p class="title pa-4">Spread the word about Rotary’s efforts to promote peace</p>
          <v-icon class="pa-4 display-3 white--text">mdi-facebook-box</v-icon>
          <v-icon class="pa-4 display-3 white--text">mdi-twitter</v-icon>
          <hr class="ma-4" />
          <p class="title pa-4">What can you do to promote peace?</p>
          <v-btn class="pink white--text" height="50px" block>Support rotary peace center</v-btn>
          <v-btn class="pink white--text my-2" height="50px" block>Learn more about peace fellowships</v-btn>
        </v-sheet>
      </v-img>
    </div>
    <div style="margin:0% 20%;">
      <p
        class="py-3 display-2 font-weight-light"
      >I wanted to do something to help prevent war, rather than addressing its consequences.</p>
      <p class=" title font-weight-light">Robert Opira</p>
      <p
        class=" titlefont-weight-light"
      >Rotary Peace Fellow, University of Queensland, 2005-07</p>
    </div>
    <pagefooter />
  </div>
</template>

<script>
import pagefooter from "@/components/footer.vue";
export default {
  components: {
    pagefooter
  },
  data: function() {
    return {
      items: [
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/causes-peace-carousel-Tanzania_0.jpg?itok=6Sm3Gy71 700w",
          ribbon: "BREAK MYTHS",
          content:
            "Hunted for body parts and isolated by fear, Tanzanians with albinism are finding new futures through Rotary programs that fight pervasive myths and stigmas.",
          color: "#019fcb"
        },
        {
          src:
            "  https://www.rotary.org/sites/default/files/styles/w_700/public/syrian-crop-cause.jpg?itok=lxnlBSWP 700w",
          ribbon: "REBUILD LIVES",
          content:
            "Canada Rotary club helping refugees from Syria start new lives.",
          color: "#018d8d"
        },
        {
          src:
            "  https://www.rotary.org/sites/default/files/styles/w_700/public/boko-cause-tile.jpg?itok=AasLLmyS 700w",
          ribbon: "EDUCATE REFUGEES",
          content:
            "A university president and Rotary club fight Boko Haram to educate refugees in Nigeria.",
          color: "#9b1238"
        }
      ]
    };
  }
};
</script>
<style scoped>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/peace%20hero.jpg?itok=D9BbOHiP);
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