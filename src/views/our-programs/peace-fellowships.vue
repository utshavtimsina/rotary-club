<template>
  <div style="background:white">
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column>
          <p
            class="display-3 my-8 white--text text-center"
            style="width:100%;position: absolute;bottom:8%;left:50%;transform:translate(-50%,-50%);"
          >Peace Fellowships</p>
        </v-layout>
      </v-container>
    </v-card>
    <div class="mt-8">
      <v-flex md7 class="mx-auto text-center">
        <h1
          class="font-weight-light mb-8"
        >Each year, Rotary awards up to 100 fully funded fellowships for dedicated leaders from around the world to study at one of our peace centers.</h1>
        <div class="title font-weight-light text-left">
          <p>Through academic training, practice, and global networking opportunities, the Rotary Peace Centers program develops the fellows into experienced and effective catalysts for peace. The fellowships cover tuition and fees, room and board, round-trip transportation, and all internship and field-study expenses.</p>
          <p>In just over a decade, the Rotary Peace Centers have trained more than 1,200 fellows. Many of them now serve as leaders at international organizations or have started their own foundations.</p>
          <p>
            Check out the
            <a href="#">Rotary Peace Map</a> to see where our alumni are fostering peace around the world.
          </p>
        </div>
        <div class="text-left">
          <v-layout row>
            <p class="display-1 font-weight-bold">Our fellowships</p>

            <p class="title font-weight-light">
              Each year,
              <a href="#">The Rotary Foundation</a> awards up to 50 fellowships for master’s degrees and 50 for certificate studies at premier universities.
            </p>
            <v-flex md6>
              <ul class="title font-weight-light">
                <li>
                  <b>Master’s degree programs:</b> Accepted candidates study peace and development issues with research-informed teaching and a diverse student body. The program lasts 15 to 24 months and includes a 2-3 month field study, which participants design themselves.
                </li>
              </ul>
            </v-flex>
            <v-flex md3>
              <iframe
                width="400"
                height="200"
                src="https://www.youtube.com/embed/D3yrkaOpjPk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-flex>
            <v-layout column>
              <ul class="title font-weight-light">
                <li>
                  <b>Professional development certificate program:</b> Experienced leaders gain practical tools for promoting peace and international development during an intensive, 3- month program, which includes 3 weeks of field study and peer learning opportunities with a diverse group.
                </li>
              </ul>
            </v-layout>
          </v-layout>
        </div>
        <div class="mt-12 text-left">
          <v-img
            src="https://www.rotary.org/sites/default/files/styles/w_1600/public/5_peace%20alumniEN.jpg?itok=cHVx3Tyc 1600w"
          ></v-img>
          <p
            class="font-weight-light mb-4"
          >More than 1,000 peace fellowship alumni are working in over 100 countries.</p>
          <hr>
        </div>
        <div class="mt-12 text-left">
          <h1 class="font-weight-medium">Is a peace fellowship right for me?</h1>
          <h3
            class="title font-weight-light"
          >Peace fellowship candidates must meet these requirements:</h3>
          <ul class="title font-weight-light">
            <li>Proficiency in English; a second language is strongly recommended</li>
            <li>Demonstrated commitment to international understanding and peace</li>
            <li>Excellent leadership skills</li>
            <li>Master’s degree applicants: minimum three years of related full-time work or volunteer experience, bachelor’s degree</li>
            <li>Certificate applicants: minimum five years of related full-time work or volunteer experience</li>
          </ul>
          <div class="text-center">
            <v-btn height="50px" width="150px" tile color="#019FCB" class="white--text">GET STARTED</v-btn>
          </div>
        </div>
      </v-flex>
      <!-- carousel starts -->
      <div
        class="pt-8 pb-8 mt-12"
        style="
        background:url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg) 50% 0;
        height:774px "
      >
        <v-carousel
          style="width:352px; border:1px solid #e3dfde"
          class="mx-auto"
          hide-delimiters
          height="100%"
        >
          <v-carousel-item v-for="(item,i) in items" :key="i">
            <v-sheet height="100%" width="100%  " color="white">
              <div>
                <v-img width="350px" height="350px" :src="item.src"></v-img>
              </div>
              <v-sheet :color="item.color" tile class="text-center pa-2">{{item.ribbon}}</v-sheet>
              <v-sheet tile class="text-left black--text" color="white">
                <p class="pr-6 pl-6 pt-4 subtitle-1">{{item.content}}</p>
              </v-sheet>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
      <!-- carousel ends -->

      <v-flex md7 class="mx-auto text-center">
        <div class="mt-4 text-left">
          <h1>Rotary Peace Centerss</h1>
          <h3 class="pt-4">Master’s program</h3>
          <div class="mt-6">
            <h3 class="title">
              <a
                href="#"
                class="links-with-bg"
              >Duke University and University of North Carolina at Chapel Hill, USA</a>
              (
              <a href="#" class="links-with-bg">fact sheet</a>)
            </h3>
            <p
              class="title font-weight-light"
            >Fellows can earn a master's degree in international development policy from Duke or a master’s from various departments at the University of North Carolina. In addition, Fellows at both universities can earn a graduate certificate in international peace and conflict resolution from UNC.</p>

            <h3 class="title">
              <a href="#" class="links-with-bg">International Christian University, Tokyo, Japan</a>
              (
              <a href="#" class="links-with-bg">fact sheet</a>)
            </h3>
            <p
              class="title font-weight-light"
            >The ICU Graduate School of Arts and Sciences is known for its interdisciplinary program and liberal arts approach. Fellows pursue a master’s degree in Peace Studies within the Department of Public Policy and Social Research.</p>
            <v-layout>
              <v-flex md9>
                <h3 class="title">
                  <a href="#" class="links-with-bg">University of Bradford, Bradford, England</a>
                  (
                  <a href="#" class="links-with-bg">fact sheet</a>)
                </h3>
                <p
                  class="title font-weight-light"
                >The Department of Peace Studies at Bradford is the largest in the world and offers several master’s degrees related to peace, conflict, security, and development.</p>
                <h3 class="title">
                  <a href="#" class="links-with-bg">University of Queensland, Brisbane, Australia</a>
                  (
                  <a href="#" class="links-with-bg">fact sheet</a>)
                </h3>
                <p
                  class="title font-weight-light"
                >Fellows earn a master’s degree in international studies and peace and conflict studies at the Graduate Centre of Governance and International Affairs.</p>
              </v-flex>
              <!-- box  -->
              <v-flex md6 class="mx-4">
                <div style="border:2px solid #bfbfbf" class="pa-4">
                  <p
                    class="title font-weight-light"
                  >Fellowship recipients may not study at a Rotary Peace Center in their home countries, other than candidates from Thailand, who may attend the center at Chulalongkorn University.</p>
                </div>
              </v-flex>
              <!-- box -->
            </v-layout>
            <h3 class="title">
              <a href="#">Uppsala University, Uppsala, Sweden</a>
              (
              <a href="#" >fact sheet</a>)
            </h3>
            <p
              class="title font-weight-light"
            >The Department of Peace and Conflict Research offers a master’s degree in social science. It is internationally renowned for its free and globally accessible collection of data related to armed conflict and organized violence.</p>
          </div>
          <div class="pt-4">
            <h2 class="pb-4">Certificate program</h2>
            <h3 class="title">
              <a href="#" >Chulalongkorn University, Bangkok, Thailand</a>
              (
              <a href="#" >fact sheet</a>)
            </h3>
            <p
              class="title font-weight-light"
            >The professional development certificate is awarded to experienced leaders who complete the university’s intensive three-month program in peace and conflict prevention and resolution.</p>
          </div>
        </div>
      </v-flex>
      <div class="text-center mt-12">
        <v-flex md11 class="mx-auto">
          <v-layout row>
            <v-flex md4 class="pa-2">
              <iframe
                width="100%"
                height="215px"
                src="https://www.youtube.com/embed/IaM8lb11GKU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div class="text-left">
                <p class="title">Lauren Coffaro: A Peace Fellow’s Journey (Part 1)</p>
                <p
                  class="title font-weight-light"
                >What it took to win a Rotary Peace Fellowship for graduate study at the University of Bradford, England.</p>
              </div>
            </v-flex>
            <v-flex md4 class="pa-2">
              <iframe
                width="100%"
                height="215px"
                src="https://www.youtube.com/embed/etnu3mj5IzA"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div class="text-left">
                <p class="title">Lauren Coffaro: A Peace Fellow’s Journey (Part 2)</p>
                <p
                  class="title font-weight-light"
                >A Rotary peace fellow talks about living in England and studying at the University of Bradford.</p>
              </div>
            </v-flex>

            <v-flex md4 class="pa-2">
              <iframe
                width="100%"
                height="215px"
                src="https://www.youtube.com/embed/N2vdzGPwfo0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div class="text-left">
                <p class="title">Lauren Coffaro: A Peace Fellow’s Journey (Part 3)</p>
                <p
                  class="title font-weight-light"
                >For her Applied Field Experience, a Rotary peace fellow travels to Guatemala and works with a Nobel laureate.</p>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </div>
      <div class="mt-12 text-center">
        <v-flex md7 class="mx-auto">
          <h1 class="font-weight-light">Help us create the next generation of peacemakers with a gift to the Rotary Peace Centers</h1>
          <div class="mt-8">
            <v-btn color="#019FCB" 
            height="50px"
            width="150px"
            class="white--text"
            >DONATE</v-btn>
            <div class="mt-8">
            <h1 class="font-weight-light">
                Other ways to support us
            </h1>
            <p class="title font-weight-light mt-4">
                Advance peace and development around the world by <a href="">promoting</a> the peace fellowship program.
            </p>
            <p class="title font-weight-light mt-4">
                Your district can support the Rotary Peace Centers by allocating at least $25,000 annually in District Designated Funds. Learn how to become a <a href="">Peacebuilder District</a>.
            </p>
            </div>
          </div>
        </v-flex>
      </div>
    </div>
    <div style="margin:0% 10%">
    <related :flex="flex" :length="flex.length">
    </related>
    </div>
  </div>
</template>

<script>
import related from "@/components/related.vue"
export default {
    components:{
        related
    },
  data: function() {
    return {
      items: [
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/Muyatwa%20Sitali_1x1.jpg?itok=tnhmsBBF 700w",
          ribbon: "MUYATWA SITALI",
          color: "#018d8d",
          content:
            "   The Rotary Peace Fellowship training in peace and conflict studies helped me understand the risks and vulnerabilities in my work in postconflict and fragile states. I also gained negotiation skills that I use almost daily.” — Muyatwa Sitali, Programs and Outreach Officer, Sanitation and Water for All"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/Abdikheir%20Ahmed_1x1.jpg?itok=PXfJ3aq- 700w",
          ribbon: "ABDIKHEIR AHMED",
          color: "#9b1238",
          content:
            "“We are a family of peace fellows; we see ourselves as change agents in the community. And to be a change agent, you need to be able to influence society and put yourself in the loop of decision making.” — Abdikheir Ahmed, Director, Immigration Partnership Winnipeg"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/Marie-Paule%20Attemaz_1x1.jpg?itok=QU4WXm10 700w",
          ribbon: "MARIE-PAULE ATTEMA",
          color: "#872175",
          content:
            "“It’s often individuals who have been impacted by conflict themselves who want to make a change in the world. Being given the opportunity to pursue a master’s in peace and conflict studies opened doors I never thought possible in terms of connections in the field of peace and development.” — Marie-Paule Attema, recent graduate of Rotary Peace Center at the University of Queensland"
        }
      ],
      flex:[
          {
              topic:'RESOURCES & REFERENCES',
              img:'https://www.rotary.org/sites/default/files/styles/w_600/public/peace%20social.jpg?itok=Gb0qoOPu 600w',
              src:[
                  'Police officer takes the lessons of the Rotary peace program to the streets'
              ],
          },
          {
              topic:'',
              img:'',
              src:[
                  'From peace fellow to international advocate',
                  'Rotary peace fellow helps refugees fleeing Myanmar',
                  'Peace fellow puts political theory into practice',
                  'Fellowship helps peace scholar write book',
                  'Peace fellow wins award for work in Canada',
                  'Rotary peace fellow applies lessons to life in Bogotá',
                  'Rotary Peace Fellowships brochure (PDF)',
              ],
          },
          {
              topic:'',
              img:'',
              src:[
                  'Follow Rotary Peace Centers on Facebook',
                  'Sign up for our Peace in Action newsletter',
              ],
          },
      ],
    };
  }
};
</script>

<style>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/peace%20fellow%20hero.JPG?itok=a3bq2thW);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /*Resize the background image to cover the entire container*/
  width: 100%;
  padding: 5% 3%;
  height: 600px;
}

a:hover{
  background-color: #ccf1ff;
}
</style>