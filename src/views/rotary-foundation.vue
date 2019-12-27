<template>
  <div class="wrapper-div">
    <v-img
      class="background-img"
      src="https://www.rotary.org/sites/default/files/styles/w_2800/public/foundation%20hero%202800x1800.JPG?itok=Dv7NQlkI"
    ></v-img>
    <v-card class="card pt-8 pb-8">
      <div class="main-div">
        <div>
          <p class="display-1">
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
      </div>
      <div class="next-div pa-12">
        <p class="title font-weight-bold">HOW THE FOUNDATION MAKES HELP HAPPEN</p>
        <v-flex md4 class="mx-auto">
          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
              <v-sheet
                class="text-left"
                :color="item.color"
                style="position:absolute;bottom:0;width:100%"
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
        <div class="mt-12">
          <div
            class="infogram-embed"
            data-id="4453c8b1-b1ba-4ba0-b324-bd02ee9dbb41"
            data-type="interactive"
            data-title="Rotary Foundation grants"
          ></div>
  
        </div>
      </div>
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
// import GraphLine3D from 'vue-graph/src/components/line3d.js'
// import NoteWidget from 'vue-graph/src/widgets/note.js'
// import LegendWidget from 'vue-graph/src/widgets/legends.js'
export default {
  // components:{
  //   GraphLine3D,
  //   NoteWidget,
  //   LegendWidget,
  // },
  data() {
    return {
      names: [
        "Preventing disease",
        "Providing clean water",
        "Supporting education",
        "Growing local economies",
        "Saving mothers & children",
        "Promoting peace"
      ],
      values: [
        [35660986],
        [18761791],
        [10998136],
        [10503910],
        [7204677],
        [3547899]
      ],
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
  width: 60%;
  display: inline-block;
}
.content-div {
  text-align: left;
}
.next-div {
  background: url("https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg");
}
.infogram-embed{
  display:inline-block;
  width:50%;
}
</style>