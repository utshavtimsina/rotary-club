<template>
  <div>
    <v-card flat class="structure">
      <div class="hero-text">
       <p
          class="display-3  white--text text-center"
        >
         Fighting Disease
          <br />
          <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
        </p>
    </div>
    </v-card>
    <v-flex md6 class="mx-auto">
      <p
        class="pa-3 display-2 font-weight-light wf-active"
      >We believe good health care is everyone’s right. Yet 400 million people in the world can’t afford or don’t have access to basic health care.</p>
      <p
        class="pa-3 title font-weight-light"
      >Disease results in misery, pain, and poverty for millions of people worldwide. That’s why treating and preventing disease is so important to us. We lead efforts both large and small. We set up temporary clinics, blood donation centers, and training facilities in underserved communities struggling with outbreaks and health care access. We design and build infrastructure that allows doctors, patients, and governments to work together.</p>
      <p
        class="pa-3 title font-weight-light"
      >Our members combat diseases like malaria, HIV/AIDS, Alzheimer’s, multiple sclerosis, diabetes, and polio. Prevention is important, which is why we also focus on health education and bringing people routine hearing, vision, and dental care.</p>
    </v-flex>
    <div class="images my-0">
      <v-flex md5 class="mx-auto">
        <h1 class="pa-3 display-1 text-center font-weight-light">HOW ROTARY MAKES HELP HAPPEN</h1>
        <p class="pa-3 title font-weight-light">
          We educate and equip communities to stop the spread of life-threatening diseases. Rotary members have hundreds of health projects underway around the world at any given time.
          <v-carousel
            style="width:100%; border:1px solid #e3dfde"
            class="mx-auto my-6"
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
      <v-layout row>
        <v-flex md4 class="mx-auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Qhls8k6uE8E"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </div>
    <v-flex md8 class="mx-auto">
      <v-container>
        <h1 class="text-center">OUR IMPACT ON DISEASE</h1>
        <p
          class="pa-3 title font-weight-light"
        >The Rotary Foundation is changing the world by providing grants for projects and activities around the globe and in your own backyard.</p>
        <v-layout>
          <v-flex md6>
            <p class="pa-3 title font-weight-light">
              <b>Providing clean water:</b> Rotary has worked with partners to provide more than 80 percent of Ghana’s people with clean water to fight Guinea worm disease.
            </p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md6>
            <p class="pa-3 title font-weight-light">
              <b>Reducing HIV infection:</b> In Liberia, Rotary members are helping women get tested for HIV early in their pregnancies. They used prenatal care to reduce new HIV infections in children by 95 percent over two years.
            </p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 blue--text">$65 mil</h1>
            <p
              class="py-3 title blue--text font-weight-light"
            >in grants was given by Rotary to fight disease</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md6>
            <p class="pa-3 title font-weight-light">
              <b>Ending polio:</b> members have played a key role in bringing the world to the brink of polio eradication. Their efforts have not only ended polio in 122 countries but also created a system for tackling myriad other health priorities, such as Ebola.
            </p>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 pink--text">99.9%</h1>
            <p
              class="py-3 title pink--text font-weight-light"
            >reduction in polio cases since our program started in 1985</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    
    <div style="margin:5% 0%; position:relative;">
      <v-img
        height="100%"
        src="    https://www.rotary.org/sites/default/files/styles/w_2160/public/cause%20disease%20share%202800x1800.JPG?itok=QQaH9ygW 2160w, https://www.rotary.org/sites/default/files/styles/w_2800/public/cause%20disease%20share%202800x1800.JPG?itok=f2IUXOcM 2800w"
      >
        <v-sheet class="black white--text" style="position:absolute; top:30%; left:20%; ">
          <p class="title pa-4">Help spread the word about Rotary’s efforts to fight disease</p>
          <v-icon class="pa-4 display-3 white--text">mdi-facebook-box</v-icon>
          <v-icon class="pa-4 display-3 white--text">mdi-twitter</v-icon>
          <hr class="ma-4" />
          <p class="title pa-4">What can you do in the fight against disease?</p>
          <v-btn class="pink white--text" height="50px" block>Make a donation</v-btn>
          <v-btn class="pink white--text my-2" height="50px" block>Become a member</v-btn>
        </v-sheet>
      </v-img>
    </div>
  
   
           <cause/>
           
      <pagefooter/>
  </div>
</template>

<script>
import cause from '@/components/cause-navigation'
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
            " https://www.rotary.org/sites/default/files/styles/w_700/public/causes-disease-carousel-polio-phones.jpg?itok=fJk6-Z4Q 700w",
          ribbon: "POLIO",
          content:
            "Mobile phones and simple text messaging may be the keys to victory in the world's largest public health initiative: the eradication of polio.",
          color: "#019fcb"
        },
        {
          src:
            " https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20disease%20malaria%20700x700.jpg?itok=ZaHa6YQc 700w",
          ribbon: " MALARIA",
          content:
            " We are dedicated to a malaria-free world through treatment and prevention. ",
          color: "#018d8d"
        },
        {
          src:
            "  https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20disease%20alz%20700x700.jpg?itok=aLAjxTM1 700w",
          ribbon: " ALZHEIMER’SALZHEIMER’S",
          content:
            "Our members use their extensive experience and leadership to fight Alzheimer’s disease and dementia through education and collaboration. ",
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
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/cause%20disease%20hero%202800x1800.JPG?itok=hI-Rgt4y);
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