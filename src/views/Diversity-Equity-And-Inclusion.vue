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
      <div style="margin:6% 20%;">
        <p class="pa-3 title font-weight-light">
            As a global network that strives to build a world where people unite and take action to create lasting change, Rotary values diversity and celebrates the contributions of people of all backgrounds, regardless of their age, ethnicity, race, color, abilities, religion, socioeconomic status, culture, sex, sexual orientation, and gender identity.

        </p>
      </div>
   <div class="corousal "> 
      <div style="margin:5% 15%;padding:2% 0%;">
      <v-layout align-center="true">
        <v-flex md3>

        </v-flex>
        <v-flex md6>
           <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="slide-x-reverse-transition"
              transition="slide-x-transition" 
              style="position:relative;"
            >
             <v-sheet
              height="22%"
              width="100%"
              class="text-center"
              style="position:absolute; bottom:0%;"
              
            >
              
                <div class=" heading-1 red " style="margin:0% 20%;padding:2% 0%;">{{item.header}}</div>
                <span>
                 {{item.text}}
                </span>
            </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      </div>
    </div>
    <div style="margin:6% 20%;">
        <p class="pa-3 title font-weight-light">
          A top priority for Rotary is growing and diversifying our membership to make sure we reflect the communities we serve.
        </p>
         <p class="pa-3 title font-weight-light">
            We're creating an organization that is more open and inclusive, fair to all, builds goodwill, and benefits our communities. We want people with differing perspectives and ideas who will help Rotary take action to create lasting change in communities around the world.
         </p>
         <p class="pa-3 title font-weight-light">
            Through Rotary, you'll find unique opportunities to get involved. Everyone is welcome in Rotary.
      </p>
    </div>
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
}
</style>