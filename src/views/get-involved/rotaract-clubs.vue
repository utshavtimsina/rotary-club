<template>
  <div>
    <v-card flat class="structure">
     <div class="hero-text">
        <p
          class="display-3  white--text text-center"
        >
         Rotaract Clubs
          <br />
          <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
        </p>
      </div>
    </v-card>
    <v-card class="text-center" flat>
      <v-flex md6 class="mx-auto mt-12 display-1">
        <p>Join the global movement of young leaders who are developing innovative solutions to the world’s most pressing challenges.</p>
      </v-flex>
      <v-layout row  >
        <v-flex></v-flex>
        <v-flex md5 sm12 xs12 class="mx-5">
          <p
            class="title font-weight-light"
          >Rotaract clubs bring together people ages 18-30 to exchange ideas with leaders in the community, develop leadership and professional skills, and have fun through service.</p>
          <p
            class="title font-weight-light"
          >In communities worldwide, Rotary and Rotaract members work side by side to take action through service. From big cities to rural villages, Rotaract is changing communities like yours.</p>
        </v-flex>
        <v-flex md3 sm6 xs6>
          <div style="color:#872175">
            <p class="title font-weight-light">10,904</p>
            <p class="title font-weight-light">Rotaract clubs</p>
          </div>
        </v-flex>
        <v-flex></v-flex>
      </v-layout>
      <v-layout row align-center>
        <v-flex></v-flex>
        <v-flex md5 sm12 class=" mx-2">
          <h1>What’s involved?</h1>
          <p
            class="title font-weight-light"
          >Rotaract members decide how to organize and run their clubs, manage their own funds, and plan and carry out activities and service projects. Rotary club sponsors offer guidance and support and work with your club as partners in service.</p>
        </v-flex>
        <v-flex md3 sm6>
          <div style="color:#018d8d" class="title font-weight-light">
            <p>250,792</p>
            <p>Rotaractors</p>
          </div>
        </v-flex>
        <v-flex></v-flex>
      </v-layout>

      <v-layout row  >
        <v-flex></v-flex>
        <v-flex md5 class="  mx-2">
          <h1>How do I join?</h1>
          <p class="title font-weight-light">
            Check with your university or
            <a href="#">contact a local Rotary club</a> to find out if there’s a Rotaract club in your area. Contact the Rotaract club to find out how you can join its next meeting, service project, or social event.
          </p>
        </v-flex>
        <v-flex md3>
          <div style="color:#0050a2" class="title font-weight-light">
            <p>184</p>
            <p>countries with Rotaract clubs</p>
          </div>
        </v-flex>
        <v-flex></v-flex>
      </v-layout>
      <v-flex md5 class="mx-auto">
        <v-carousel
          style="width:100%; border:1px solid #e3dfde"
           
          hide-delimiters
          height="100%"
        >
          <v-carousel-item v-for="(item,i) in items" :key="i">
            <v-sheet height="100%" width="100%" color="white">
              <div>
                <v-img width="100%" :src="item.src"></v-img>
              </div>
              <v-sheet :color="item.color" tile class="text-center pa-2 title font-weight-light">{{item.ribbon}}</v-sheet>
              <v-sheet
              height="270px"
                tile
                class="text-left black--text pa-4 subtitle-1"
                color="white"
              >{{item.content}}</v-sheet>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <hr style="width:40%;display:inline-block" />
      <div>
        <h1 class="mt-8">Already involved in Rotaract?</h1>
        <p class="title font-weight-light mb-12">
          Find
          <a href="#">tips and ideas</a> for running your club and planning strong projects.
        </p>
      </div>
      <hr style="width:50%;display:inline-block" />
      <div style="width:100%" class="mx-auto">
        <v-container>
          <v-layout row>
            <!-- <v-flex></v-flex> -->
            <v-flex md5 class="text-left">
              <p class="title font-weight-light">RELATED STORIES</p>
              <v-img
                src="https://www.rotary.org/sites/default/files/styles/w_600/public/20180622_CA_0145.jpg?itok=9xBg7EQS 600w"
              ></v-img>
              <p class="pt-4 title font-weight-light">
                <a href="#">Rotaract: 50 years of changing lives</a>
              </p>
            </v-flex>
            <v-flex md5 class="text-left pa-8">
              <p class="title font-weight-light">
                <a href="#">Rotaract clubs review awards for innovative ideas</a>
              </p>
              <br />
              <p class="title font-weight-light">
                <a href="#">7 things you did not know about Rotaract</a>
              </p>
              <br />
            </v-flex>
            <!-- <v-flex></v-flex> -->
          </v-layout>
        </v-container>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/Carousel%20Bugolobi%20700x700.jpg?itok=BIxqPcuZ 700w",
          ribbon: "UGANDA",
          content:
            "The Rotaract Club of Bugolobi worked alongside local doctors, schools, and the Uganda Health Marketing Group to provide everything from school supplies to comprehensive medical screenings, dental exams, and HIV testing and prevention education to over 1,000 residents of a nearby village.",
          color: "#019fcb"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/drive%20social%202_1.jpg?itok=ASHe49Gf 700w",
          ribbon: "UNITED STATES",
          content:
            "A 2,400-mile road trip across the West Coast connected Rotary clubs with community organizations in 14 cities.",
          color: "#018d8d"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/Carousel%20Turkey%20700x700.jpg?itok=4xIdZLd3 700w",
          ribbon: "TURKEY AND RUSSIA",
          content:
            "Twelve Rotaract clubs in Turkey and Russia collaborated with community partners to organize training for people with Down syndrome. Participants also received job placement assistance to put their new skills to work.",
          color: "#9b1238"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/Carousel%20Philippines%20700x700.jpg?itok=sd8ado6j 700w",
          ribbon: "THE PHILIPPINES",
          content:
            "Rotaractors transformed the lives of kids in a remote area in the Philippines in need of clean water and sanitation. They constructed a tank to store rainwater safely, taught the importance of hygiene and sanitation in preventing disease, and treated students who had skin infections or intestinal parasites.",
          color: "#872175"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/July17%20UF%20Ext%20Cap%20Habitat%20original_crop.jpg?itok=iLemmJbM 700w",
          ribbon: "UNITED STATES",
          content:
            "Rotaractors pair up with Habitat for Humanity Jacksonville to help rebuild a struggling neighborhood. ",
          color: "#019fcb"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/ROPA.jpg?itok=gQPW50dC 700w",
          ribbon: "SRI LANKA",
          content:
            "The Rotaract Club of the University of Moratuwa received a top Rotaract honor for its work to improve lives in a rural community.",
          color: "#018d8d"
        }
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
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/GI%20rotaract%20hero%202800x1800.jpg?itok=5HiLYP9D);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /*Resize the background image to cover the entire container*/
  width: 100%;
  padding: 5% 3%;
  height: 600px;
}
</style>