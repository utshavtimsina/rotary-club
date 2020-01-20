<template>
  <div>
    <v-card flat class="structure">
       <div class="hero-text">
        <p
          class="display-3  white--text text-center"
        >
         Interact Clubs
          <br />
          <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
        </p>
      </div>
    </v-card>
    <v-flex md10 class="mx-auto">
      <h1
        style="margin:5% 0%;"
        class="pa-3 display-1 font-weight-light"
      >Take action, build international understanding, and make new friends around the world.</h1>
    </v-flex>
    <v-flex md10 class="mx-auto">
      <v-container>
        <v-layout>
          <v-flex></v-flex>
          <v-flex md8>
            <p
              class="py-3 title font-weight-light"
            >Interact clubs bring together young people ages 12-18 to develop leadership skills while discovering the power of Service Above Self. Find out how serious leadership can be seriously fun.</p>
          </v-flex>
          <v-flex class="my-8 text-center">
            <h1 class="pink--text display-3">20372</h1>
            <p class="py-3 title font-weight-light">Interact clubs</p>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex></v-flex>
          <v-flex md8>
            <h1>What are the benefits?</h1>
            <p
              class="py-3 title font-weight-light"
            >Connect with leaders in your community and around the world to:</p>
            <ul>
              <li
                class="py-3 title font-weight-light"
              >Take action to make a difference in your school and community</li>
              <li
                class="py-3 title font-weight-light"
              >Discover new cultures and promote international understanding</li>
              <li class="py-3 title font-weight-light">Become a leader in your school and community</li>
              <li
                class="py-3 title font-weight-light"
              >Have fun and make new friends from around the world</li>
            </ul>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 blue--text">468,556</h1>
            <p class="py-3 title font-weight-light">Interactors</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex></v-flex>
          <v-flex md8>
            <h1>What’s involved?</h1>
            <p
              class="py-3 title font-weight-light"
            >Interact clubs organize at least two projects every year, one that helps their school or community and one that promotes international understanding. Rotary club sponsors mentor and guide Interactors as they carry out projects and develop leadership skills.</p>
            <p
              class="py-3 title font-weight-light"
            >Celebrate the global impact of Interact by getting involved in:</p>
            <ul>
              <li class="py-3 title font-weight-light">World Interact Week</li>
              <li class="py-3 title font-weight-light">Interact Video Awards</li>
              <li class="py-3 title font-weight-light">Rotary Youth Day at the United Nations</li>
              <li class="py-3 title font-weight-light">Global Youth Service Day</li>
            </ul>
          </v-flex>
          <v-flex class="my-10 text-center">
            <h1 class="display-3 green--text">159</h1>
            <p class="py-3 title font-weight-light">countries with Interact clubs</p>
          </v-flex>
        </v-layout>
      </v-container>
      <h1>How do I join?</h1>
      <p
        class="py-3 title font-weight-light"
      >Check with your school or contact a local Rotary club to find out if there’s an Interact club in your area. Contact the Interact club to find out how you can join its next meeting, service project, or community event.</p>
      <p
        class="py-3 title font-weight-light"
      >Follow Interact on Facebook to see how Interact clubs are having fun through service.</p>
      <v-container>
        <v-layout>
          <v-flex></v-flex>
          <v-flex md6>
            <v-carousel hide-delimiters width="40%" height="100%">
              <v-carousel-item v-for="(item,i) in items" :key="i">
                <v-sheet width="100%" height="100%">
                  <img width="100%" :src="item.src" alt />
                  <div class="heading-1 red text-center" style="padding:2% 0%;">{{item.header}}</div>
                  <div style="padding:2% 7%;">{{item.text}}</div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
          <v-flex></v-flex>
        </v-layout>
      </v-container>
      <h1>Already involved in Interact?</h1>
      <p class="py-3 title font-weight-light">Find tips and ideas for your club.</p>
    </v-flex>
    <pagefooter />
  </div>
</template>

<script>
import pagefooter from "@/components/footer.vue";
export default {
  components: {
    pagefooter
  },
  data() {
    return {
      overlay: true,
      items: [
        {
          src:
            "   https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20interact%20Vietnam%20700x700.jpg?itok=sAFbbEKQ 700w",
          header: "UNITED STATES",
          text:
            " Interactors and their sponsor Rotary club teamed up with One World Play Project to bring durable soccer balls to kids in Vietnam."
        },
        {
          src:
            " https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20Interact%20Nepal%20700x700.jpg?itok=Rsge8dJQ 700w",
          header: "NEPAL",
          text:
            " Interactors in Nepal designed an innovative and self-sustaining way to fund their hand washing and hygiene campaign that is keeping younger students healthy and safe. WATCH A VIDEO about the Seeds of Change project."
        },
        {
          src:
            " https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20Interact%20Canada%20700x700.jpg?itok=UUtt-_qV 700w",
          header: "CANADA",
          text:
            " For the Interactors at a Canadian school, every day is a new opportunity to feed the hungry and end polio for good. WATCH A VIDEO about the project."
        }
      ]
    };
  }
};
</script>

<style scoped>
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

.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/GI%20interact%20hero%202800x1800.jpg?itok=m_mXgOO9);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding: 10% 3%;
  height: 600px;
}
.images {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg);
}
</style>