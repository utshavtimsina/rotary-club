<template>
  <div class="wrapper-div">
    <v-img
      class="background-img"
      height="600px"
      width="99%"
      src="https://www.rotary.org/sites/default/files/styles/w_2800/public/foundation%20hero%202800x1800.JPG?itok=Dv7NQlkI"
    >
      <div class="hero-text">
        <p
          class="display-3  white--text text-center"
        >
         Rotary Foundation
          <br />
          <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
        </p>
      </div>
    </v-img>
    <v-card class="card pt-8 pb-8" flat>
      <v-flex md10 class="mx-auto">
        <div>
          <p class="display-1 font-weight-light">
            The Rotary Foundation transforms your gifts into service projects that change lives
            both close to home and around the world.
          </p>
        </div>

        <div class="content-div">
          <p class="title font-weight-light">
            Since it was founded more than 100 years ago,
            the Foundation has spent more than $4 billion on life-changing, sustainable projects.
          </p>
          <p
            class="title font-weight-light"
          >With your help, we can make lives better in your community and around the world.</p>
          <p class="headline font-weight-bold">Our Mission</p>
          <p class="title font-weight-light">
            The mission of The Rotary Foundation of Rotary International is to enable Rotarians to advance world understanding, goodwill, and
            peace through the improvement of health, the support of education,
            and the alleviation of poverty.
          </p>

          <p class="headline font-weight-bold">What impact can one donation have?</p>
          <ul class="title font-weight-light">
            <li>For as little as 60 cents, a child can be protected from polio.</li>
            <li>$50 can provide clean water to help fight waterborne illness.</li>
            <li>$500 can launch an antibullying campaign and create a safe environment for children.</li>
          </ul>
          <v-btn
            class="pink darken-1 mt-4 white--text font-weight-bold mb-12"
            height="50"
            width="200"
            tile
          >Donate Now</v-btn>
        </div>
      </v-flex>
      <div class="next-div">
        <v-flex md10 class="mx-auto">
          <p class="title font-weight-bold">HOW THE FOUNDATION MAKES HELP HAPPEN</p>
          <div class="mt-12">
            <div
              class="infogram-embed"
              data-id="4453c8b1-b1ba-4ba0-b324-bd02ee9dbb41"
              data-type="interactive"
              data-title="Rotary Foundation grants"
            ></div>
          </div>
          <v-flex md6 class="mx-auto">
            
            <v-carousel hide-delimiters height="100%">
              <v-carousel-item v-for="(item,i) in items" :key="i" >
                <img :src="item.src" width="100%" height="80%" alt="">
                <v-sheet
                  class="text-left"
                  :color="item.color"
                  style="position:absolute;bottom:0%;width:100%"
                >
                  <div class="pa-2 text-center">{{item.ribbon}}</div>
                  <div class="white black--text pa-4">{{item.content}}</div>
                  <div class="white pb-4 pl-4">
                    <a href="#">{{item.link}}</a>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
          
        </v-flex>
      </div>
      <div class="blue-container pa-12">
        <v-layout row>
          <v-flex class>
            <v-img
              width="590px"
              class="mx-auto"
              src="https://www.rotary.org/sites/default/files/styles/w_2400/public/Proof-Charity-Navigator_EN.png?itok=qTDxJeXL 2400w"
            ></v-img>
          </v-flex>
          <v-flex class>
            <v-img
              width="590px"
              class="mx-auto"
              src="https://www.rotary.org/sites/default/files/styles/w_2400/public/TRF-percentage-spent_EN.png?itok=85HV2IL6 2400w"
            ></v-img>
          </v-flex>
        </v-layout>
        <v-img
          width="590"
          class="mx-auto"
          src="https://www.rotary.org/sites/default/files/styles/w_2400/public/TRF-R_LOGO_REVERSED.png?itok=noypV1jG 2400w"
        ></v-img>
      </div>
      <!-- image and red image component -->
      <v-flex md10 class="mx-auto white--text mt-9">
        <v-layout row>
          <v-flex md6>
            <v-img
              height="100%"
              src="https://www.rotary.org/sites/default/files/styles/w_600/public/backup%20callout.jpg?itok=KS1buGno"
            ></v-img>
          </v-flex>
          <v-flex
            md6
            class="pa-12"
            style="background:url('https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-red.png')"
          >
            <div class="mx-auto">
              <p class="headline text-left mx-auto">Foundation History</p>
              <p class="subtitle text-left my-8">
                At the 1917 convention, outgoing Rotary president Arch Klumph proposed setting up an endowment
                “for the purpose of doing good in the world.” That one idea, and an initial contribution of $26.50,
                set in motion a powerful force that has transformed millions of lives around the globe.
              </p>

              <v-btn
                width="100%"
                height="50"
                tile
                outlined
                style="border:2px solid white"
                color="white"
              >EXPLORE OUR HISTORY</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex style="color:black" class="mt-12 mx-auto" md8>
        <div class="mx-auto">
          <p class="display-1 text-left font-weight-bold">Financial structure</p>
          <div class="text-left title font-weight-light">
            <p class="text-left title font-weight-light">
              The Rotary Foundation is organized as a public charity operated exclusively for charitable
              purposes and governed by a Board of Trustees. The operations of Rotary International, a
              member organization, are overseen by its Board of Directors.
            </p>
            <p>
              The headquarters of Rotary International and The Rotary Foundation are in Evanston,
              Illinois, USA. We have associate foundations in Australia, Brazil, Canada, Germany, India,
              Japan, and the United Kingdom.
            </p>
            <a
              href="#"
              class="font-weight-bold"
            >Read highlights from the past year in our annual report</a>
            <br />
            <br />
            <a href="#" class="font-weight-bold">Learn about Rotary's investments</a>
            <br />
            <br />
            <p>Your generous contributions to The Rotary Foundation are essential to securing and growing Rotary programs throughout the world.</p>
            <a href="#" class="font-weight-bold">Learn more about donor recognition</a>
            <a href="#" class="font-weight-bold">Learn more about Rotary grants</a>
          </div>
        </div>
      </v-flex>
      <v-divider class="ma-12"></v-divider>

      <v-container>
        <v-layout row>
          <v-flex></v-flex>
          <v-flex md3 class="pa-4 text-left subtitle font-weight-bold">
            <p>RELATED STORIES</p>
            <v-img
              src="https://www.rotary.org/sites/default/files/styles/w_600/public/PNG%2Bfor%2BWord%2Bdocuments%2C%2Bpresentations%2C%2Band%2Bweb%2Buse..png?itok=1L4hOeC3 600w"
            ></v-img>
          </v-flex>
          <v-flex md3 class="pa-4 subtitle">
            <div class="text-left mx-auto">
              <p style="visibility:hidden">Nothing</p>
              <a href>Rotary Foundation gets top charity rating</a>
              <br />
              <a href>Rotary Foundation honored by University of Oxford</a>
              <br />
              <a href>Why The Rotary Foundation is the best steward for your money</a>
              <br />
            </div>
          </v-flex>
          <v-flex md3 class="pa-4 text-left subtitle">
            <p class="font-weight-bold">RESOURCES</p>
            <a href>The Rotary Foundation Reference Guide</a>
            <v-divider class="mt-4 mb-4"></v-divider>
            <a href>Rotary Foundation fact card</a>
          </v-flex>
          <v-flex></v-flex>
        </v-layout>
      </v-container>
      <v-divider class="ma-12"></v-divider>
      <v-container class="text-left">
        <v-layout row>
          <v-flex md5>
            <p class="title">EVERY ROTARIAN EVERY YEAR BROCHURES</p>
            <v-img
              height="154px"
              width="272px"
              src="https://www.rotary.org/sites/default/files/styles/w_600/public/every.jpg?itok=KEq6yYdN 600w"
            ></v-img>
          </v-flex>
          <v-flex md5>
            <ul type="none">
              <li class="pa-2">
                <a
                  href="https://my.rotary.org/en/document/every-rotarian-every-year-brochure-australia-philippines-new-zealand-and-pacific-islands"
                >Australia, Philippines, New Zealand and the Pacific Islands</a>
              </li>
              <li class="pa-2">
                <a
                  href="https://my.rotary.org/en/document/every-rotarian-every-year-brochure-europe"
                >Europe</a>
              </li>
              <li class="pa-2">
                <a
                  href="https://my.rotary.org/en/document/every-rotarian-every-year-brochure-great-britain-and-ireland"
                >Great Britain and Ireland</a>
              </li>
              <li class="pa-2">
                <a
                  href="https://my.rotary.org/en/document/every-rotarian-every-year-brochure-middle-east-and-africa"
                >Middle East and Africa</a>
              </li>
              <li class="pa-2">
                <a
                  href="https://my.rotary.org/en/document/every-rotarian-every-year-brochure-southeast-asia"
                >Southeast Asia - Afghanistan, Bangladesh, Bhutan, India, Nepal, Pakistan, Republic of Maldives, Sri Lanka</a>
              </li>
              <li class="pa-2">
                <a
                  href="https://my.rotary.org/en/document/every-rotarian-every-year-brochure-usa-and-canada"
                >USA and Canada</a>
              </li>
              <li class="pa-2">
                <a
                  href="https://my.rotary.org/en/document/every-rotarian-every-year-brochure-other-countries-and-regions"
                >Other countries and regions</a>
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
!(function(e, i, n) {
  var t = "InfogramEmbeds",
    d = e.getElementsByTagName("script")[0];
  if (window[t] && window[t].initialized)
    window[t].process && window[t].process();
  else if (!e.getElementById(n)) {
    var o = e.createElement("script");
    (o.async = 1),
      (o.id = n),
      (o.src = "https://e.infogram.com/js/dist/embed-loader-min.js"),
      d.parentNode.insertBefore(o, d);
  }
})(document, 0, "infogram-async");

export default {
  data() {
    return {
      items: [
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/causes-economies-carousel-power-of-light.jpg?itok=V8_JB0K2 700w",
          ribbon: "THE POWER OF LIGHT",
          color: "#019FCB",
          content:
            "A grant helped a club in Durango, Colorado, USA, install more than 200 solar lights in remote, off-the-grid Navajo homes.",
          link: "READ MORE"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/foundation-carousel-germany.jpg?itok=6oF2DMb0 700w",
          ribbon: "HEALING THOUSANDS",
          color: "#018D8D",
          content:
            "Rotarian and physician Pia Skarabis-Querfeld has spent years building a network of volunteer doctors to help refugees in Berlin, Germany.",
          link: "READ MORE"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/foundation-carousel-puerto-rico.jpg?itok=HXyzYqyr 700w",
          ribbon: "REBUILDING LIVES",
          color: "#9B1238",
          content:
            "Rotary clubs worked together to help Puerto Ricans rebuild their homes and hearts after Hurricane Maria.",
          link: "READ MORE"
        }
      ]
    };
  }
};
</script>
<style>
.background-img {
  position: fixed;
  height: 100%;
  width: 100%;
  top: -1%;
}
.card {
  margin-top: 600px;
  text-align: center;
  position: absolute;
  width: 100%;
}
.main-div {
  display: inline-block;
}
.content-div {
  text-align: left;
}
.next-div {
  background: url("https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg");
}
.infogram-embed {
  display: inline-block;
  width: 50%;
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

.blue-container {
  background: url("https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-darkblue.png");
}
</style>