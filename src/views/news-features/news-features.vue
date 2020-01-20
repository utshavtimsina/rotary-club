<template>
  <div style="margin-top:56px" class="mb-12">
    <firstelement PageName="News & Features">
    </firstelement>
    <!-- image section of layout row starts -->
    <div class="text-center white--text" style="height:450px">
      <v-layout row style="height:100%">
        <v-flex md6 style="overflow:hidden;height:100%;width:50%" class="zoom">
          <div style="overflow:hidden">
            <v-img
              class="zooms"
              height="450px"
              width="100%"
              src="https://www.rotary.org/sites/default/files/styles/w_1400/public/dec19-20190625_GH_046.jpg?itok=w_-ArPiI"
            >
            </v-img>
            <!-- left img content starts -->

              <div class="text-left pl-8 pr-8" 
              style="position:relative;transform:translateY(-100%)">
                <p class="display-1">The Sustainibility Challange</p>
                <p class="subtitle-2">Feature | 25-Nov-2019</p>
                <p
                  class="subtitle-3"
                >10 years into the Rotary-USAID water and sanitation partnership, here’s what worked, what didn’t — and
                </p>
                
              </div>
              <!-- left img content ends -->
          </div>
        </v-flex>
        <v-flex md6 style="height:100%;width:50%">
          <v-layout column style="height:100%;width:100%">
            <v-flex style="height:50%;width:100%">
              <div style="overflow:hidden;height:100%;width:100%" class="zoom">
                <v-img
                  class="zooms"
                  height="225px"
                  width="100%"
                  src="https://www.rotary.org/sites/default/files/styles/w_1400/public/nov2019-FEA-Yonkers-2b.jpg?itok=LlGF4nDN"
                >
                </v-img>
                <!-- right top img content starts -->
                  <div class="text-left pl-8 pr-8" style="position:relative;width:100%;transform:translateY(-100%)">
                    <p class="display-1">Hoops on the Hudson</p>
                    <p class="subtitle-2">Feature | 11-Nov-2019</p>
                  </div>
                  <!-- right top img content ends -->
              </div>
            </v-flex>

            <v-flex style="height:50%;width:100%">
              <div style="overflow:hidden;height:100%;width:100%" class="zoom">
                <v-img
                  class="zooms"
                  height="225px"
                  width="100%"
                  src="https://www.rotary.org/sites/default/files/styles/w_1400/public/20190804_PK_081-HERO-PP.jpg?itok=uGKtpXBQ"
                >
                </v-img>
                <!-- right bottom img content starts -->
                  <div class="text-left pl-8 pr-8" 
                  style="position:relative;width:100%;transform:translateY(-100%)">
                    <p
                      class="displStep into ay-1"
                    >World Polio Day cheers major achievements toward global polio eradication</p>
                    <p class="subtitle-2">Feature | 31-Oct-2019</p>
                  </div>
                  <!-- right bottom img content ends -->
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
    <!-- image section of layout row ends -->

    <div id="seamless" class="pa-12">
      <v-flex md11 class="mx-auto">
          <label class="mr-8">FILTER BY TYPE:</label>
          <input type="checkbox" class="mr-2">
          <label class="mr-4">Feature</label>
          <input type="checkbox" class="mr-2">
          <label class="mr-4">News</label>
        <input type="checkbox" class="mr-2">
        <label >Press Release</label>
      </v-flex>
        <v-flex class="mt-12 mx-auto" id="news&features" md11>
        <v-layout row>
          <!-- <v-flex></v-flex> -->
          <v-flex md3
          v-for="(cards,i) in news_features" :key="i"
          class="pa-4"
          >
            <v-hover
              v-slot:default="{hover}"
            >
            <v-card
            tile flat style="height:100%" class="pa-4 img-card"
            id="img-card"
            :elevation="hover? '12':'0'"
            >
              <p class="subtitle-2 title-press-release">
                <strong>{{cards.title}}</strong>
                </p>
                <h3 class="font-weight-light">
                    {{cards.content}}
                  </h3>
                <p class="mt-8 font-weight-light">
                  {{cards.title}} | {{cards.date}}
                </p>
            <!-- <input type="hidden" :noOfFlex="count(j)"> -->
            </v-card>
            </v-hover>
          </v-flex>
          <!-- <v-flex></v-flex> -->
        </v-layout>
        </v-flex>
    </div>
  </div>
</template>

<script>
import firstelement from "@/components/first-element.vue"
export default {
  components:{
    firstelement,
  },
  data: function() {
    return {
      overlay: true,
      absolute: true,
      no_of_Cards:4,
      noOfFlex:1,
      index:0,
      news_features:[
        { 
          title:'Feature1',
          content:'Hoops on the Hudson',
          date:'01-Nov-2019'
        },
        {
          title:'Press Release2',
          content:'Toastmasters and Rotary partner to help members grow professionally and make a difference in their communities',
          date:'07-Jan-2019'
        },
        { 
          title:'News3',
          content:'Join us for Rotary’s World Polio Day Online Global Update',
          date:'14-Oct-2019'

        },
        { 
          title:'Feature4',
          content:'Hoops on the Hudson',
          date:'01-Nov-2019'
        },
        {
          title:'Press Release5',
          content:'Toastmasters and Rotary partner to help members grow professionally and make a difference in their communities',
          date:'07-Jan-2019'
        },
        { 
          title:'News6',
          content:'Join us for Rotary’s World Polio Day Online Global Update',
          date:'14-Oct-2019'

        },
        { 
          title:'Feature7',
          content:'Hoops on the Hudson',
          date:'01-Nov-2019'
        },
        {
          title:'Press Release8',
          content:'Toastmasters and Rotary partner to help members grow professionally and make a difference in their communities',
          date:'07-Jan-2019'
        },
        { 
          title:'News9',
          content:'Join us for Rotary’s World Polio Day Online Global Update',
          date:'14-Oct-2019'

        },
        { 
          title:'Feature10',
          content:'Hoops on the Hudson',
          date:'01-Nov-2019'
        },
        {
          title:'Press Release11',
          content:'Toastmasters and Rotary partner to help members grow professionally and make a difference in their communities',
          date:'07-Jan-2019'
        },
        { 
          title:'News12',
          content:'Join us for Rotary’s World Polio Day Online Global Update',
          date:'14-Oct-2019'

        },
      ],

    };
  },
  methods:{
    // provideList:function(){
    //   var i;
    //   for(i=0;i<3;i++){
    //   alert("i am in a loop");
    //   }
    // }
    count: function(j){
      if(j==3 && this.noOfFlex<=3)
      {
        this.noOfFlex=this.noOfFlex+1;
        // alert(this.noOfFlex);
      }
      if(j <= this.news_features.length){
        this.index = this.index+1;
        // alert(this.news_features.length);
      }
      // alert(i);
    }
  },
  
};
</script>

<style scoped>
.zoom:not(:hover) .zooms {
  /* transform:scale(1) translateZ(0); */
  transition: transform 1.5s;
}
.zoom:hover .zooms {
  transform: scale(1.1);
  transition: transform 1.5s;
}
#seamless {
  background: url("https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg");
  }
.img-card:hover{
    transform:translateY(-5px);
}
#img-card{
    border-top:2px solid#018D8D;
}
</style>