<template>
  <div>
    <v-card flat class="structure">
       <div class="hero-text">
        <p
          class="display-3  white--text text-center"
        >
        Our Causes
          <br />
          <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
        </p>
      </div>
    </v-card>
    <div class="images my-0">
      <v-flex md8 class="mx-auto mt-9">
        <p
          
          class="pa-3 display-1 font-weight-light"
        >Rotary is dedicated to six areas of focus to build international relationships, improve lives, and create a better world to support our peace efforts and end polio forever.</p>
      </v-flex>
      <v-flex md10 class="mx-auto">
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
                    src="  https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20CI%20disease%20700x500.JPG?itok=clTBA586 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Fighting disease</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >We educate and equip communities to stop the spread of life-threatening diseases like polio, HIV/AIDS, and malaria. We improve and expand access to low-cost and free health care in developing areas.</p>
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
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20CI%20peace%20700x500.JPG?itok=lyyk-_Lb 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Promoting peace</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >Rotary encourages conversations to foster understanding within and across cultures. We train adults and young leaders to prevent and mediate conflict and help refugees who have fled dangerous areas.</p>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? '21':'0'" :class="hover? 'my-2':'my-5'" class="mx-3">
                  <v-img
                    src=" https://www.rotary.org/sites/default/files/styles/w_700/public/casue%20CI%20water%20700%20x%20500.JPG?itok=dslN6kh_ 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">
                            Providing clean water,
                            <br />sanitation, and hygiene
                          </h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >We support local solutions to bring clean water, sanitation, and hygiene to more people every day. We don’t just build wells and walk away. We share our expertise with community leaders and educators to make sure our projects succeed long-term.</p>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
          <v-layout row>
            <!-- next flexbox -->
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? '21':'0'" :class="hover? 'my-2':'my-5'" class="mx-3">
                  <v-img
                    src="  https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20CI%20mothers%20700x500.jpg?itok=kRSTODg4 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">
                            Saving mothers
                            <br />and children
                          </h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >Nearly 6 million children under the age of five die each year because of malnutrition, poor health care, and inadequate sanitation. We expand access to quality care, so mothers and their children can live and grow stronger.</p>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? '21':'0'" :class="hover? 'my-2':'my-5'" class="mx-3">
                  <v-img
                    src="  https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20CI%20economy%20700x500.JPG?itok=CXs66ixA 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">
                            Growing local
                            <br />economies
                          </h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >We carry out service projects that enhance economic and community development and create opportunities for decent and productive work for young and old. We also strengthen local entrepreneurs and community leaders, particularly women, in impoverished communities.</p>
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
                    src="   https://www.rotary.org/sites/default/files/styles/w_700/public/cause%20new%20education%20700x500.jpg?itok=m58gEURy 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Supporting education</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >More than 775 million people over the age of 15 are illiterate. Our goal is to strengthen the capacity of communities to support basic education and literacy, reduce gender disparity in education, and increase adult literacy.</p>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- image and red image component -->
        <v-card class="white--text"  flat>
          <v-layout row>
            <v-flex md6>
              <v-img
                height="100%"
                src="https://www.rotary.org/sites/default/files/styles/w_1200/public/Callout%20polio%201200x800.jpg?itok=KK7HeNp5"
              ></v-img>
            </v-flex>
            <v-flex
              md6
              class="pa-12"
              style="background:url('https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-red.png')"
            >
              <div class="mx-auto">
                <p class="headline text-left mx-auto">Ending polio forever</p>
                <p
                  class="subtitle text-left my-8"
                >Rotary has been working to eradicate polio for over 30 years, and our goal of ridding the earth of this disease is in sight. We started in 1979 with vaccinations for 6 million children in the Philippines. Today, Afghanistan, Nigeria, and Pakistan are the only countries where polio remains endemic.</p>
                <p class="subtitle text-left my-8">Help us in the final push.</p>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </div>
    <pagefooter />
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
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/cause%20overview%20hero%202800%20x%20900.JPG?itok=OiWCo1A9);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 100%;
  padding: 5% 3%;
  height: 600px;
}
.images {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg);
}
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
</style>