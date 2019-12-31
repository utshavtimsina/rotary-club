<template>
  <div>
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column style="position:absolute; bottom:0; left:40%;">
          <p class="display-3 my-8 white--text text-center">Ending Polio</p>
        </v-layout>
      </v-container>
    </v-card>
    <div style="margin:0% 20%;">
      <h1 style="margin:5% 0%;" class="pa-3 display-2 text-center font-weight-light">What is polio?</h1>
      <p
        class="pa-3 display-1 font-weight-light"
      >Polio, or poliomyelitis, is a paralyzing and potentially deadly infectious disease that most commonly affects children under the age of 5. The virus spreads from person to person, typically through contaminated water. It can then attack the nervous system.</p>
    </div>
    <div class="images my-0">
      <h1 class="pa-3 display-2 text-center font-weight-light">Our goal</h1>
      <div style="margin:0% 20%;">
        <v-container>
          <v-layout>
            <v-flex md2>
              <img
                width="100%"
                src=" https://www.rotary.org/sites/default/files/styles/w_400/public/EPN-logo-w843xh1118.jpg?itok=tG5PDarz 400w"
                alt
              />
            </v-flex>
            <v-flex md10 class="px-10">
              <p
                class="pa-3 title font-weight-light"
              >Rotary has been working to eradicate polio for more than 30 years. Our goal of ridding the world of this disease is closer than ever.</p>
              <p
                class="pa-3 title font-weight-light"
              >As a founding partner of the Global Polio Eradication Initiative, we've reduced polio cases by 99.9 percent since our first project to vaccinate children in the Philippines in 1979.</p>
              <p
                class="pa-3 title font-weight-light"
              >We've helped immunize more than 2.5 billion children in 122 countries. So far, Rotary has contributed more than $1.8 billion toward eradicating the disease worldwide.</p>
              <p
                class="pa-3 title font-weight-light"
              >Today, polio remains endemic only in Afghanistan, Nigeria, and Pakistan. But it’s crucial to continue working to keep other countries polio-free. If all eradication efforts stopped today, within 10 years, polio could paralyze as many as 200,000 children each year.</p>
              <p
                class="pa-3 title font-weight-light"
              >Explore the history of Rotary and polio eradication</p>
              <h1 class="text-center display-2 font-weight-light">By the numbers</h1>
            </v-flex>
          </v-layout>
          <v-layout class="my-11">
            <v-flex class="text-center">
              <h1 class="pa-3 display-3 font-weight-light blue--text" color="#0050a2">$3</h1>
              <p class="pa-3 title font-weight-light blue--text">average cost to fully protect a child against polio</p>
            </v-flex>
             <v-flex class="text-center">
              <h1 class="pa-3 display-3 font-weight-light blue--text">430 million</h1>
              <p class="pa-3 title font-weight-light blue--text">children in total vaccinated in 39 countries in 2017</p>
            </v-flex>
             <v-flex class="text-center">
              <h1 class="pa-3 display-3 font-weight-light blue--text">$100 million</h1>
              <p class="pa-3 title font-weight-light blue--text">cost to conduct polio surveillance worldwide</p>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
    <pagefooter/>
  </div>
</template>

<script>
import pagefooter from "@/components/footer.vue";
export default {
  components: {
    pagefooter
  }
};
</script>
<style scoped>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/ENP-hero-w3000xh2000.jpg?itok=gfNnqKfK);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 100%;
  height: 700px;
}
.images {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg);
}
</style>