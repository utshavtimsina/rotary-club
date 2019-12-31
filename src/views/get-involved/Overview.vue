<template>
  <div>
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column>
          <p class="display-3 my-8 white--text text-center">Get Involved</p>
        </v-layout>
      </v-container>
    </v-card>
    <div class="images my-0">
      <div style="margin:0% 20%;">
        <p
          style="margin:10% 0%;"
          class="pa-3 display-1 font-weight-light"
        >Join Rotary’s 1.2 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.</p>
      </div>
      <div style="margin:0% 20%;">
        <v-container>
          <v-layout row>
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card
                  height="550px"
                  :elevation="hover ? '21':'0'"
                  :class="hover? 'my-2':'my-5'"
                  class="mx-3"
                >
                  <v-img
                    src="  https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20overview%20member%20700x500.jpg?itok=F3UxxRiP 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Disaster relief</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >Rotary and ShelterBox collaborate to provide emergency shelter and vital supplies to stabilize, protect, and support communities affected by disasters and humanitarian crises.</p>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card
                  height="550px"
                  :elevation="hover ? '21':'0'"
                  :class="hover? 'my-2':'my-5'"
                  class="mx-3"
                >
                  <v-img
                    src="  https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20overview%20clubs%20700x500.jpg?itok=6gx7h854 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Clubs</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >With 35,000 clubs around the world, it’s easy to find a club that fits your passion and purpose.</p>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card
                  height="550px"
                  :elevation="hover ? '21':'0'"
                  :class="hover? 'my-2':'my-5'"
                  class="mx-3"
                >
                  <v-img
                    src="  https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20overview%20projects%20700x500.jpg?itok=hcfwaNMS 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Projects</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >Rotary members are helping others in communities around the world every day through thousands of service projects</p>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
          <v-layout row>
            <!-- next flexbox -->
            <v-flex></v-flex>
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card
                  height="550px"
                  :elevation="hover ? '21':'0'"
                  :class="hover? 'my-2':'my-5'"
                  class="mx-3"
                >
                  <v-img
                    src=" https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20overview%20partnerships%20700x500.jpg?itok=X0DZIvRm 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Partnerships</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >We know we’re stronger when we work with others. We’re always looking for groups to partner with to make a difference.</p>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card
                  height="550px"
                  :elevation="hover ? '21':'0'"
                  :class="hover? 'my-2':'my-5'"
                  class="mx-3"
                >
                  <v-img
                    src="  https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20overview%20programs%20700x500.jpg?itok=jFPjy65Y 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Programs</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >We have programs that will help you gain world understanding, find lifelong friends, and make a difference in your community.</p>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex></v-flex>
          </v-layout>
        </v-container>
        <h1>Your time, energy, and a passion to improve your world are all you need to get involved with Rotary.</h1>
        <p
          class="py-3 title font-weight-light"
        >Become one of Rotary’s people of action or explore the many opportunities we have for anyone — whatever your age or interest — who wants to improve lives in communities near and far. Connect with a local Rotary club to find out how you can get involved.</p>
      </div>
    </div>
     <div style="margin:0% 20%;">
        <v-container>
            <v-layout column>
             <v-btn 
                class="pa-7 pink"
                dark
                outlined
                style="margin:0% 25%;"
            >
                Become A Member
            </v-btn>
              <v-btn 
                class="pa-7 pink"
                dark
                outlined
                style="margin:1% 25%;"
            >
               Find a project
            </v-btn>
               <v-btn 
                class="pa-7 pink"
                dark
                outlined
                style="margin:0% 25%;"
            >
               make a donation
            </v-btn>
         
            </v-layout>
             
        </v-container>
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
};
</script>

<style scoped>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/GI%20new%20hero%203.jpg?itok=rmeGxX4A);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 100%;
  padding: 5% 3%;
  height: 400px;
}
.images {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg);
}
</style>