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
          <p class="title font-weight-bold">
                HOW THE FOUNDATION MAKES HELP HAPPEN
              </p>
                 <v-flex md4 class="mx-auto">
                  <v-carousel hide-delimiters>
                      <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                      >
                    <v-sheet
                    :color="item.color"
                    style="position:absolute;bottom:0;width:100%"
                    >
                    <div>
                    {{item.ribbon}}
                    </div>
                    <div class="white black--text pa-8">
                        {{item.content}}
                    </div>
                    <div class="white pb-4">
                      <a href="#" class="text--left">{{item.link}}</a>
                      </div>
                    </v-sheet>
                      </v-carousel-item>
                      </v-carousel>
                
              
              </v-flex>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {
                src:"https://www.rotary.org/sites/default/files/styles/w_350/public/causes-economies-carousel-power-of-light.jpg?itok=V8_JB0K2 350w",
                ribbon:"THE POWER OF LIGHT",
                color:"#019FCB",
                content:"A grant helped a club in Durango, Colorado, USA, install more than 200 solar lights in remote, off-the-grid Navajo homes.",
                link:"READ MORE",
            },
            {
                src:"https://www.rotary.org/sites/default/files/styles/w_350/public/foundation-carousel-germany.jpg?itok=6oF2DMb0 350w",
                ribbon:"HEALING THOUSANDS",
                color:"#018D8D",
                content:"Rotarian and physician Pia Skarabis-Querfeld has spent years building a network of volunteer doctors to help refugees in Berlin, Germany.",
                link:"READ MORE",
            },
            {
                src:"https://www.rotary.org/sites/default/files/styles/w_350/public/foundation-carousel-puerto-rico.jpg?itok=HXyzYqyr 350w",
                ribbon:"REBUILDING LIVES",
                color:"#9B1238",
                content:"Rotary clubs worked together to help Puerto Ricans rebuild their homes and hearts after Hurricane Maria.",
                link:"READ MORE",
            }
            ],         
        }

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

</style>