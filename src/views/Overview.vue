<template>
  <div class="overview" style="z-index:4;">
    <v-img
    style="z-index:4;"
      src="https://www.rotary.org/sites/default/files/styles/w_2160/public/who%20overview%202.jpg?itok=sKHAn1ho"
    >
      <v-overlay
        absolute="absolute"
        :value="overlay"
        opacity="0.1"
        class="text-center white--text font-weight-light"
        z-index="3"
      >
      <h1 class="display-3 " >
        Who We Are
      </h1>
      </v-overlay>
    </v-img>
    <v-container >
       <div class="ma-9">
          <div class="ma-9">
             <div class="ma-9">
      <v-card class="pa-5 font-weight-light " flat>
        <h1 class="font-weight-light my-6">
        Rotary is a global network of 1.2 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.
        </h1>
        <p class="my-5">Solving real problems takes real commitment and vision. For more than 110 years, Rotary's people of action have used their passion, energy, and intelligence to take action on sustainable projects. From literacy and peace to water and health, we are always working to better our world, and we stay committed to the end.</p>
        <p>Learn more about <a href="/en/about-rotary/our-structure">our structure</a> and <a href="/en/about-rotary/rotary-foundation">our foundation</a> and <a href="https://my.rotary.org/en/learning-reference/about-rotary/strategic-plan">our strategic vision</a>.</p>
        <h2 class="my-5">What we do</h2>
        <p>Rotary members believe that we have a shared responsibility to take action on our world’s most persistent issues. Our 35,000+ clubs work together to:</p>
        <ul class="my-5">
          <li>Promote peace</li>
          <li>Fight disease</li>
          <li>Provide clean water, sanitation, and hygiene</li>
          <li>Save mothers and children</li>
          <li>Support education</li>
          <li>Grow local economies</li>
        </ul>
        <p><a href="/en/get-involved">Get involved</a></p>
        <h2 class="my-5">Our mission</h2>
        <p>We provide service to others, promote integrity, and advance world understanding, goodwill, and peace through our fellowship of business, professional, and community leaders.</p>
      </v-card>
          </div>
           </div>
      </div>
    </v-container>
    <div class="corousal my-9"> 
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
              class="d-flex align-self-auto "
              style="position:absolute; bottom:0%;"
              
            >
              
                <div class=" pa-2 heading-1 red mx-4">{{item.header}}</div>
                <span>
                 {{item.text}}
                </span>
            </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
          
    </div>
    <v-container > 
      <div class="ma-9">
          <div class="ma-9">
             <div class="ma-9">
              <h2 class="heading-2 my-5">We work differently</h2>
              <p class="my-5">We see differently: Our multidisciplinary perspective helps us see challenges in unique ways.</p>
              <p class="my-5">We think differently: We apply leadership and expertise to social issues — and find unique solutions.</p>
              <p class="my-5">We act responsibly: Our passion and perseverance create lasting change.</p>
              <p class="my-5">We make a difference at home and around the world: Our members can be found in your community and across the globe.</p>
              <p class="text-center">
              <v-btn outlined class="pink pa-4 white--text mx-8">
                  Get involved

              </v-btn></p>
              
              <h2 class="heading-2">Diversity, Equity, and Inclusion</h2>
              <p class="my-5">As a global network that strives to build a world where people unite and take action to create lasting change, Rotary values diversity and celebrates the contributions of people of all backgrounds, regardless of their age, ethnicity, race, color, abilities, religion, socioeconomic status, culture, sex, sexual orientation, and gender identity.</p>
              <p class="my-5">Learn more about <a href="/en/about-rotary/diversity-equity-and-inclusion">Diversity, Equity, and Inclusion</a>.</p>
              </div>
           </div>
      </div>
    </v-container>
   <bodyfooter/>
    <pagefooter/>
    
  </div>
</template>
<script>
import pagefooter from '@/components/footer.vue';
import bodyfooter from '@/components/bodyfooter.vue';
export default {
  data(){
    return {
      overlay:true,
      items:[
        {
          src:"https://www.rotary.org/sites/default/files/styles/w_700/public/about%20overview%20opp%20creator%20700x700.jpg?itok=1H2SIl4D 700w",
          header:"WE ARE OPPORTUNITY-CREATORS",
          text:'Rotary members look for opportunities to improve our communities today and invest in the next generation for tomorrow.'
        },
        {
          src:"https://www.rotary.org/sites/default/files/styles/w_700/public/Overview%20comm%20builder%20700x700.JPG?itok=qjDs-k2a 700w",
          header:"WE ARE COMMUNITY-BUILDERS",
          text:"We collaborate with community leaders who want to get to work on projects that have a real, lasting impact on people’s lives."
        },
        {
          src:" https://www.rotabodyfooterry.org/sites/default/files/styles/w_700/public/Overview%20peep%20of%20action%20700x700.jpg?itok=rWjbSfMJ 700w",
          header:"WE ARE PEOPLE OF ACTION",
          text:"We connect passionate people with diverse perspectives to exchange ideas, forge lifelong friendships, and, above all, take action to change the world."
        }
      ]
    }
  },
  components:{
    bodyfooter,
    pagefooter,
  }
}
</script>
<style scoped>
.corousal{
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg) 50% 0;
}
</style>
