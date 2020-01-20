<template>
  <div style="background:white" class="mb-8 text-center">
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column>
          <p
            class="display-3 my-8 white--text text-center"
            style="width:100%;position: absolute;bottom:8%;left:50%;transform:translate(-50%,-50%);"
          >
            Rotary Youth Exchanges
            <br />
            <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
          </p>
        </v-layout>
      </v-container>
    </v-card>
    <div class="mt-12">
      <v-flex md7 class="mx-auto">
        <div>
          <h1
            class="font-weight-regular"
          >The Rotary Foundation and clubs invest in our future leaders and philanthropists by funding scholarships for undergraduate and graduate study.</h1>
          <div class="mt-8">
            <p class="headline text-left">
              <b>Types of scholarships</b>
            </p>
            <v-layout row>
              <v-flex md2>
                <p class="display-4" style="color:#9b1238">1</p>
              </v-flex>
              <v-flex md10 class="text-left">
                <p :class="paragraph">
                  <b>Rotary clubs offer</b> scholarships for secondary, undergraduate, or graduate study.
                </p>
                <p
                  :class="paragraph"
                >Rotary club scholarships are given by individual clubs and are open to anyone except Rotary members and their families. Contact your local club for application information and eligibility requirements.</p>
                <p :class="paragraph">
                  <a href>Find your local Rotary club</a>
                </p>
              </v-flex>
            </v-layout>
            <div class="mt-12">
              <v-layout row>
                <v-flex md2>
                  <p class="display-4" style="color:#9b1238">2</p>
                </v-flex>
                <v-flex md10 class="text-left">
                  <p :class="paragraph">
                    <b>The Rotary Foundation</b> offers scholarships for college graduates and professionals to study peace and conflict resolution.
                  </p>
                  <p :class="paragraph">
                    Rotary peace fellowships are available to candidates who want to participate in a master’s degree or certificate program at one of our six partner universities.
                    <a
                      href
                    >Learn about Rotary peace fellowship eligibility requirements and restrictions.</a>
                  </p>
                </v-flex>
              </v-layout>
            </div>
          </div>
        </div>
        <div class="mt-12 text-left">
          <v-layout row>
            <v-flex md7>
              <h1>Want to offer a scholarship?</h1>
              <p
                :class="paragraph"
              >Rotary clubs can apply to The Rotary Foundation for district and global grants to support scholarships.</p>
              <p :class="paragraph">
                Global grants are for graduate students studying abroad in one of
                <a
                  href
                >Rotary’s six causes:</a>
              </p>
            </v-flex>
            <v-flex md5 class="my-auto text-center">
              <p class="mt-8" :class="paragraph" style="color:#872175">
                <strong class="display-2">$10.9mil</strong>
                <br />in grants given for education and literacy projects
              </p>
            </v-flex>
          </v-layout>
        </div>
        <div class="mt-8 text-left">
          <v-layout row>
            <v-flex md7 :class="paragraph">
              <ol>
                <li>Promoting peace</li>
                <li>Fighting disease</li>
                <li>Providing clean water, sanitation, and hygiene</li>
                <li>Saving mothers and children</li>
                <li>Supporting education</li>
                <li>Growing local economies</li>
              </ol>
            </v-flex>
            <v-flex md5 class="my-auto text-center">
              <p class="mt-8" :class="paragraph" style="color:#0050a2">
                <strong class="display-2">$350,000</strong>
                <br />in grants given for education and literacy projects
              </p>
            </v-flex>
          </v-layout>
        </div>
        <div class="mt-8 text-left">
          <p
            :class="paragraph"
          >Scholarships last from one to four years and can include an entire degree program. Global grant scholarships are funded using cash or District Designated Funds matched by the World Fund.</p>
          <p
            :class="paragraph"
          >District grants can be used to sponsor secondary school, undergraduate, or graduate students studying any subject, either locally or abroad. The scholarship may cover any length of time, from a six-week language training program to a year or more of university study.</p>
          <p
            :class="paragraph"
          >Rotary members are essential to recruiting qualified candidates for Rotary Peace Fellowships. You can advance peace in troubled areas around the world by promoting peace fellowships and supporting peace fellow candidates through the application process.</p>
        </div>
        <div style="margin:0% 10%" class="mt-12">
          <related :flex="flex" :length="flex.length"></related>
        </div>
      </v-flex>
    </div>
  </div>
</template>

<script>
import related from "@/components/related.vue";
export default {
    components: {
    related,
  }, 
  data: function() {
    return {
      paragraph: "title font-weight-light",
      flex: [
        {
          topic: "RESOURCES",
          img:"https://www.rotary.org/sites/default/files/styles/w_600/public/scholarships.jpg?itok=KcyILTR9 600w",
          src:'',
        },
        {
            topic:'',
            img:'',
            src:[
                'District Grants',
                'Global Grants',
                'Rotary Peace Centers'
            ],
        },
      ],
    }; 
  }
};
</script>
<style scopedstyle="height:100%">
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/scholarship%20hero%202800x1800.jpg?itok=lJxJRJmR);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /*Resize the background image to cover the entire container*/
  width: 100%;
  padding: 5% 3%;
  height: 600px;
}
a:hover {
  background-color: #ccf1ff;
}

@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-15px);
  }
}
.chevron {
  animation: bounce 0.8s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
</style>