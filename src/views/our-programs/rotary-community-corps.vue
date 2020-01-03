<template>
  <div style="background:white" class="mb-8 text-center">
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column>
          <p
            class="display-3 my-8 white--text text-center"
            style="width:100%;position: absolute;bottom:8%;left:50%;transform:translate(-50%,-50%);"
          >
            Rotary Community Corps
            <br />
            <v-icon color="white" size="60px" class="chevron">
                mdi-chevron-down
            </v-icon>
          </p>
        </v-layout>
      </v-container>
    </v-card>
    <div class="mt-8">
      <v-flex md7 class="text-center mx-auto">
        <h1
          class="font-weight-light"
        >A Rotary Community Corps is a group of non-Rotarians who share our commitment to changing the world through service projects.</h1>
        <div class="title font-weight-light text-left mt-6">
          <p>RCC members plan and carry out projects in their communities and support local Rotary club projects.</p>
          <p>There are more than 10,000 corps in 100 countries. RCCs are active everywhere Rotary is present: in urban and rural areas, and in both developed and developing countries.</p>
        </div>
      </v-flex>
      <div
        class="pt-8 pb-8 mt-12"
        style="
        background:url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg) 50% 0;
        height:774px "
      >
        <v-carousel
          style="width:352px; border:1px solid #e3dfde"
          class="mx-auto"
          hide-delimiters
          height="600px"
        >
          <v-carousel-item v-for="(item,i) in items" :key="i">
            <v-sheet height="100%" width="100%  " color="white">
              <div>
                <v-img width="350px" height="350px" :src="item.src"></v-img>
              </div>
              <v-sheet :color="item.color" tile class="text-center pa-2">{{item.ribbon}}</v-sheet>
              <v-sheet tile class="text-left black--text" color="white">
                <p class="pr-6 pl-6 pt-4 subtitle-1">{{item.content}}</p>
              </v-sheet>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div class="mt-12 text-left">
      <v-flex md7 class="mx-auto">
        <h1>What’s involved?</h1>
        <p
          :class="paragraph"
        >By joining or organizing an RCC, you can make a tremendous impact in your community.</p>
        <h1 class="mt-8">How do I join an RCC?</h1>
        <p :class="paragraph">
          RCCs can exist anywhere a local Rotary club sponsors one. You can find an RCC in your area by contacting your local Rotary club. If there isn’t a community corps, discuss the idea of starting one with your local Rotary club president.
          <a
            href
          >Learn more about what you can do through a Rotary Community Corps.</a>
        </p>
        <h1 class="mt-8">How do I sponsor an RCC?</h1>
        <p :class="paragraph">
          By sponsoring an RCC, you’re giving more people a chance to take action to solve your community’s problems. Fill out an
          <a href>organization form</a> and email it to
          <a href>Rotary International</a>.
        </p>
        <div>
          <h1 class="mt-8">How do I form an RCC?</h1>
          <p
            :class="paragraph"
          >You can form an RCC anywhere community members are interested in working with Rotary. Here are some guidelines:</p>
          <ul :class="paragraph">
            <li>
              Work with other local residents to identify the community’s greatest needs using this
              <a
                href
              >assessment form</a>.
            </li>
            <li>Work with your local Rotary club to outline how you will work together.</li>
            <li>Recruit RCC members. Start with a core group of members. Community organizations and nongovernmental agencies are good places to recruit.</li>
          </ul>
          <div class="mt-8">
            <p :class="paragraph">
              <a href>Read stories</a> about RCCs on our Rotary Service in Action Blog.
            </p>
            <p :class="paragraph">
              Questions or need support?
              <a href>Contact us</a>.
            </p>
          </div>
        </div>
      </v-flex>
    </div>
    <div style="width:88%;" class="mx-auto mt-12 text-left white--text">
      <v-layout row>
        <v-flex md6>
          <v-img
            height="100%"
            src="https://www.rotary.org/sites/default/files/styles/w_600/public/ron%20denham%20400x400%20middle.jpg?itok=3aC7AM7s"
          ></v-img>
        </v-flex>
        <v-flex
          md6
          style="background:url('https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-red.png')"
          class="pa-12"
        >
          <h1>Why Rotary Community Corps?</h1>
          <p
            :class="paragraph"
          >"Rotary Community Corps are local. They are part of the community and help mobilize the community. They ensure that local needs are met. And most significantly, a Rotary Community Corps has a vested interest in its own success. Their members have to live with the results of their work; their commitments are the basis for sustainability. Rotary grant projects that establish Rotary Community Corps help to ensure that the project’s impact lives on in the community long after Rotary’s direct support ends."</p>
          <p
            :class="paragraph"
          >Ron Denham, founder of the Water and Sanitation Rotarian Action Group</p>
        </v-flex>
      </v-layout>
    </div>
    <div style="display:inline-block">
      <related :flex="flex" :length="flex.length"
      img_height="169px"
      img_width="272px"
      ></related>
    </div>
  </div>
</template>

<script>
import related from "@/components/related.vue";
export default {
  components: {
    related
  },
  data: function() {
    return {
      paragraph: "title font-weight-light",

      items: [
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/RCC%20Japan%20700x700_0.jpg?itok=Kd3JCLy5 700w",
          ribbon: "JAPAN",
          color: "#019FCB",
          content:
            "The RCC of Handa Education Circle works with local schools to hold disaster-preparedness classes for young people. Activities include first aid, building portable toilets, and emergency food preparation."
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/RCC%20Kenya%20700x700_0.jpg?itok=LlljXlTF 700w",
          ribbon: "KENYA",
          color: "#018d8d",
          content:
            "The RCC of Cura Village near Nairobi established a home for children whose parents have died of AIDS. Many of the children are HIV-positive themselves."
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/RCC%20colorado%20700x700.jpg?itok=kQDxAAmK 700w",
          ribbon: "UNITED STATES",
          color: "#9b1238",
          content:
            "The RCC of Parker, Colorado, provides a powerful growth and enrichment experience for the teens and adults with special needs who belong to it."
        }
      ],
      flex: [
        {
          topic: "RESOURCES",
          img:
            "https://www.rotary.org/sites/default/files/styles/w_600/public/rcc.jpg?itok=BJW3uesN 600w",
          src: ""
        },
        {
          topic: "",
          img: "",
          src: [
            "Rotary Community Corps informational brochure",
            "Rotary Community Corps organization form",
            "Rotary Community Corps constitution",
            "Rotary Community Corps bylaws",
            "Rotary Community Corps presentation",
            "Rotary Community Corps survey results 2018"
          ]
        }
      ]
    };
  }
};
</script>

<style>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/rcc%20hero%203.jpg?itok=YYz6vEzO);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /*Resize the background image to cover the entire container*/
  width: 100%;
  padding: 5% 3%;
  height: 600px;
}
a:hover {
  background-color: #ccf1ff;
}

@keyframes bounce {
  0% {
    transform:translateY(0px)
  }
  100% {
    transform: translateY(-15px);
  }
}
.chevron{
  animation: bounce 0.8s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
</style>