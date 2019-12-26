<template>
  <div>
    <span class="hero-background">
      <v-overlay absolute="absolute" :value="overlay" z-index="-1" opacity="0.2">
        <h1 class="display-3">Our History</h1>
      </v-overlay>
    </span>
    <v-card style="z-index:1;" class="others" flat>
      <v-container>
        <div style="margin-left:20%; margin-right:20% " class="pa-9">
          <p
            class="headline font-weight-light"
          >Rotary started with the vision of one man — Paul Harris. The Chicago attorney formed the Rotary Club of Chicago on 23 February 1905, so professionals with diverse backgrounds could exchange ideas and form meaningful, lifelong friendships.</p>
          <p
            class="headline font-weight-light"
          >Over time, Rotary’s reach and vision gradually extended to humanitarian service. Members have a long track record of addressing challenges in their communities and around the world.</p>
          <h1
            class="my-9"
          >" Whatever Rotary may mean to us, to the world it will be known by the results it achieves.&nbsp;"</h1>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img
                  src="https://www.rotary.org/sites/default/files/styles/w_96/public/Paul%20Harris%20mug.jpg"
                  alt
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <b>Paul Harris</b>
                </v-list-item-title>Rotary founder
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <h1 class="my-5">Our ongoing commitment</h1>
          <p
            class="headline font-weight-light"
          >That commitment endures today through an organization that remains truly international. Only 16 years after being founded, Rotary had clubs on six continents. Our members now span the globe, working to solve some of our world’s most challenging problems.</p>
          <p
            class="headline font-weight-light"
          >We’re not afraid to dream big and set bold goals. We began our fight against polio in 1979 with a project to immunize 6 million children in the Philippines. Today, polio remains endemic in only three countries — down from 125 in 1988.</p>
        </div>
      </v-container>
      <v-card>
        <div class="layout-container -gray">
          <v-container>
            <div style="margin-left:20%; margin-right:20% " class="pa-9">
              <h2 class="headline pa-7 text-center">Still making history</h2>
              <p
                class="headline font-weight-light"
                style="text-align: center;"
              >With every project, we’re changing the world for the better. The following stories trace our evolution as an organization through historical documents, artifacts, and images that show the people and events that shaped Rotary.</p>
              <v-container fluid>
                <v-layout row align-center="true" justify-center="true">
                  <v-flex sm6 md4>
                    <v-hover v-slot:default="{ hover }">
                      <v-card
                        class="text-center"
                        :class="hover ? 'pa-0':'pa-2'"
                        :elevation="hover ? '21':'0' "
                      >
                        <v-img
                          src="https://www.rotary.org/sites/default/files/styles/w_700/public/006464_001_Arthur-Frederick-Sheldon_mottoes_th.jpg?itok=mgWfWjLO 700w"
                        ></v-img>
                        <h4 class="pa-3">Rotary’s two official mottoes</h4>
                        <p>Service Above Self and One Profits Most Who Serves Best can be traced back to the early days of the organization.</p>
                      </v-card>
                    </v-hover>
                  </v-flex>
                  <v-flex sm6 md4>
                    <v-hover v-slot:default="{ hover }">
                      <v-card
                        class="text-center"
                        :class="hover ? 'pa-1':'pa-2'"
                        :elevation="hover ? '21':'0' "
                      >
                        <v-img
                          src="https://www.rotary.org/sites/default/files/styles/w_700/public/James-L-Bomar-Jr_History_polio_efforts_th.jpg?itok=SdhPjumv 700w"
                        ></v-img>
                        <h4 class="pa-3">The roots of Rotary’s polio eradication efforts</h4>
                        <p>In 1979, Rotary began a project to immunize six million children against polio in the Philippines. The effort’s success led to Rotary making polio eradication its top priority.</p>
                      </v-card>
                    </v-hover>
                  </v-flex>
                  <v-flex sm6 md4>
                    <v-hover v-slot:default="{ hover }">
                      <v-card
                        class="text-center"
                        :class="hover ? 'pa-0':'pa-2'"
                        :elevation="hover ? '21':'0' "
                      >
                        <v-img
                          src="https://www.rotary.org/sites/default/files/styles/w_700/public/2008-07-087_South_America_th.jpg?itok=NBPyoR4U 700w"
                        ></v-img>
                        <h4 class="pa-3">The start of Rotary in South America</h4>
                        <p>Rotary’s global expansion began early. The chartering of the Rotary Club of Montevideo, Uruguay, in February 1919 brought Rotary to South America.</p>
                      </v-card>
                    </v-hover>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-container>
        </div>
      </v-card>
      <v-card flat>
          <v-container>

           <div style="margin-left:10%; margin-right:10% " class="pa-9">
        <v-layout  class="blue lighten-1" row align-center="true">
          <v-flex md6 >
            <div>
              <v-img
                height="100%"
                src="https://www.rotary.org/sites/default/files/styles/w_600/public/2008-07-007-archives.jpg?itok=uXsK2S4"
              ></v-img>
            </div>
          </v-flex>
          <v-flex md6>
            <div class="">
              <!-- <h1 style="visibility:hidden">&nbsp; a</h1> -->
              <h1 class="mx-4">Dive deeper into our archives</h1>
              <p
                class="font-weight-light mx-4"
              >Rotary’s archives include tens of thousands of photos, recordings, publications, and artifacts that preserve our legacy. Are you conducting research? Members of Rotary, Rotary staff, and the public may visit the archives by appointment. Learn more about what we collect, what we can do for you, and how to schedule an appointment to examine our material.</p>
            </div>
          </v-flex>
        </v-layout>
           </div>
        </v-container>
      </v-card>
      <pagefooter />
    </v-card>
  </div>
</template>

<script>
import pagefooter from "@/components/footer.vue";
export default {
  data() {
    return {
      overlay: true
    };
  },
  components: {
    pagefooter
  }
};
</script>

<style scoped>
.layout-container.-gray {
  background: #f8f9fa
    url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg)
    50% 0;
}
.imagesCont {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_1728/public/about-history-2800x1800_1.jpg);
}
.hero-background {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_1728/public/about-history-2800x1800_1.jpg);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: initial;
  top: -12%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.others {
  width: 100%;
  position: absolute;
  top: 80%;
  z-index: 4;
}
</style>