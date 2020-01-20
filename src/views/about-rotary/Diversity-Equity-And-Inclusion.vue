<template>
  <div>
      <v-card flat  class="structure" >
          <v-container style="text-align: center;vertical-align: middle;">
              <v-layout column  > 
                  <p class="display-3 my-8 white--text text-center" >
                     Diversity, Equity, and Inclusion
                  </p>
              </v-layout>
          </v-container>
      </v-card>
      <v-flex md10 xs12 sm12 class="mx-auto">
        <p class="pa-3 title font-weight-light">
            As a global network that strives to build a world where people unite and take action to create lasting change, Rotary values diversity and celebrates the contributions of people of all backgrounds, regardless of their age, ethnicity, race, color, abilities, religion, socioeconomic status, culture, sex, sexual orientation, and gender identity.
        </p>
      </v-flex>
   <div class="corousal "> 
      <v-flex md10 xs12 sm12 class="mx-auto">
      <v-layout >
        <v-flex >

        </v-flex>
        <v-flex md6>
           <v-carousel hide-delimiters width="40%" height="100%">
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
            >
             <v-sheet
              width="100%"
              height="100%"
            >
             <img width="100%" :src="item.src" alt="">
                <div class=" heading-1 red text-center " style="padding:2% 0%;">{{item.header}}</div>
                <div style="padding:2% 7%;">
                 {{item.text}}
                </div>
            </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex></v-flex>
      </v-layout>
      </v-flex>
    </div>
     <v-flex md10 xs12 sm12 class="mx-auto">
        <p class="pa-3 title font-weight-light">
          A top priority for Rotary is growing and diversifying our membership to make sure we reflect the communities we serve.
        </p>
         <p class="pa-3 title font-weight-light">
            We're creating an organization that is more open and inclusive, fair to all, builds goodwill, and benefits our communities. We want people with differing perspectives and ideas who will help Rotary take action to create lasting change in communities around the world.
         </p>
         <p class="pa-3 title font-weight-light">
            Through Rotary, you'll find unique opportunities to get involved. Everyone is welcome in Rotary.
      </p>
     </v-flex>
      <pagefooter/>
  </div>
</template>

<script>
import pagefooter from '@/components/footer.vue';
export default {
    components:{
        pagefooter,
    },
    data(){
    return {
      overlay:true,
      items:[
        {
          src:"  https://www.rotary.org/sites/default/files/styles/w_700/public/20181108_GH_035_DEI_carousel_700x700px.jpg?itok=86l3f86q 700w",
          header:"DIVERSITY",
          text:' Rotary welcomes people of all backgrounds,  cultures, experiences, and identities.'
        },
        {
          src:"  https://www.rotary.org/sites/default/files/styles/w_700/public/20180811_TH_014_DEI_carousel_700x700px.jpg?itok=KbfKHFmb 700w",
          header:"EQUITY",
          text:" Rotary strives for the fair treatment, opportunity, and advancement of all Rotary participants."
        },
        {
          src:"https://www.rotary.org/sites/default/files/styles/w_700/public/20180806_NP_004_DEI_carousel_700x700px.jpg?itok=maZQcvJX 700w",
          header:"INCLUSION",
          text:" Rotary is working to create experiences where all people feel welcomed, respected, and valued."
        }
      ]
    }
  },
}
</script>

<style scoped>
    .structure{
    background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-darkblue.png);
    width: 100%;
    padding: 5% 3%;
    height: 400px;
}
.corousal{
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg) 50% 0;
  width: 100%;
  height: 100%;
}
</style>