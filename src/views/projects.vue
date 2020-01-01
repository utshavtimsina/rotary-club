<template>
  <div>
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column>
          <p class="display-3 my-8 white--text text-center" style="position: absolute;bottom:10%;left:50%;transform:translate(-50%,-50%)">Projects</p>
        </v-layout>
      </v-container>
    </v-card>
    <v-card class="card pt-8 pb-8" flat>
      <div style="width:60%;display:inline-block">
        <p
          class="display-1 mx-auto"
        >Are you looking for a way to make a difference in your community or communities around the world? There’s a project happening that needs you.</p>
        <p
          class="text-left title font-weight-light"
        >We use our knowledge of local issues to identify areas of need, then apply our expertise and diverse perspectives to find a solution. Rotary members likely are working in your community right now to feed the hungry, tutor disadvantaged children, maintain parks and playgrounds, and much more. You can help.</p>
      </div>
      <!-- Carousel -->
      <v-carousel
        style="width:31%; border:1px solid #e3dfde"
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
      <div class="mt-12">
        <v-btn class="white--text" tile color="#018d8d" width="400px" height="50px">EXPLORE PROJECTS</v-btn>
        <br />
        <br />
        <v-btn
          class="white--text"
          tile
          color="#018d8d"
          width="400px"
          height="50px"
        >SUPPORT OUR FOUNDATION</v-btn>
      </div>
      <hr style="width:50%;display:inline-block;margin-top:30px" />
      <div style="width:50%" class="mx-auto">
        <v-container>
          <v-layout row>
            <!-- <v-flex></v-flex> -->
            <v-flex md5 class="text-left">
              <p>RELATED STORIES</p>
              <v-img
                src="https://www.rotary.org/sites/default/files/styles/w_600/public/saada_crop.jpg?itok=knaKzeZN 600w"
              ></v-img>
              <p class="pt-4"><a href="#">Rotary helps Tanzanians with albinism find safe futures</a></p>
            </v-flex>
            <v-flex md5 class="text-left pa-8">
              <p><a href="#">Judo offers Brazil’s youth an escape from slums</a></p> <br>
              <p><a href="#">Canada Rotary club helping refugees start new lives</a></p> <br>
              <p><a href="#">Australia clubs helping to end domestic violence</a></p>
            </v-flex>
            <!-- <v-flex></v-flex> -->
          </v-layout>
        </v-container>
      </div>
    </v-card>
    <div style="margin:0% 10%">
    <flex :flex="flex" :length='flex.length'>
      </flex>
      </div>
  </div>
</template>

<script>
import flex from "../components/related"
export default {
  components:{
    flex
  },
  data: function() {
    return {
      items: [
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20projects%20Navajo%20700x700_1.JPG?itok=c7d64EE9 700w",
          ribbon: "LIGHTING THE WAY TO A BETTER LIFE",
          content:
            "Since the installation of more than 175 solar lights, families living on the Navajo Reservation in Arizona, USA, can now read, work, and study long after the sun sets.",
          color: "#019fcb"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/the-rotarian-upfront-may-2016_700x700.jpg?itok=lLyzeWDD 700w",
          ribbon: "TEACHING STUDENTS INDEPENDENCE",
          content:
            "A mentoring project at the Andong Yeongmyeong School in Korea is preparing students with autism and intellectual and emotional disabilities for careers in horticulture.",
          color: "#018d8d"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20projects%20Ghana%20700x700%20-%20Copy.jpg?itok=yjPqXr75 700w",
          ribbon: "A PIPELINE TO CLEAN WATER",
          content:
            "Working with local community leaders, Rotary clubs piped clean water to remote villages in Ghana, freeing women and children from spending hours searching for and fetching water.",
          color: "#9b1238"
        }
      ],
      flex:[
        {
          topic:'Related',
          src:['A university president and Rotary club fight Boko Haram'],
          img:"https://www.rotary.org/sites/default/files/styles/w_600/public/boko%20cause%20tile.jpg?itok=07W57Zrk 600w"

        },
        {
          topic:'',
          src:[
          'Improving literacy through teacher training',
          'How education is breaking the cycle of modern slavery',
          'Rotary program boosts scientific literacy in Taiwan',
          'Rotary club pairs students with celebrity mentors',
          ],
          img:""
        }
        ,{
          topic:'Resources',
          src:[
            'Learn about our WASH in Schools Target Challenge ',
            'See how our members advocate for basic education in Rotary Showcase',
            ],
          img:""
        }
      ],
    };
  }
};
</script>

<style>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/GI%20projects%20hero2%202800x1800_0.jpg?itok=HFauKIh8);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /*Resize the background image to cover the entire container*/
  width: 100%;
  padding: 5% 3%;
  height: 600px;
}
.card {
  text-align: center;
  position: relative;
  /* width: 100%; */
}
</style>