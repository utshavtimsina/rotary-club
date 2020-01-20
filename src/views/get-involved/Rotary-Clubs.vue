<template>
  <div>
    <v-card flat class="structure">
        
        <div class="hero-text">
        <p
          class="display-3  white--text text-center"
        >
         Rotary Clubs
          <br />
          <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
        </p>
      </div>
    </v-card>
    <v-flex md10 class="mx-auto mt-9">
      <p
        style="margin:10% 0%;"
        class="pa-3 display-1 font-weight-light"
      >The heart of Rotary is our members, dedicated people who share a passion for community service and friendship.</p>
      <p
        class="py-3 title font-weight-light"
      >Rotary members share ideas, make plans, hear from the community, and catch up with friends during club programs that fuel the impact we make.</p>
    </v-flex>
    <div class="images my-0">
      <v-flex md10 class="mx-auto mt-9">
        <v-container>
          <v-layout row>
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? '21':'0'" :class="hover? 'my-2':'my-5'" class="mx-3">
                  <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20clubs%20700x500.jpg?itok=vpD_NzT5 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Rotary Clubs</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >While Rotary clubs are grounded in the same values, no two are the same, because each community has its own unique needs. At club meetings in communities across the globe, our members come together to strengthen their connections to friends and neighbors and their commitment to improving lives.</p>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex sm6 md4>
              <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? '21':'0'" :class="hover? 'my-2':'my-5'" class="mx-3">
                  <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20rotaract%20700x500.jpg?itok=NQ9Axac9 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Rotaract Clubs</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >Rotaract clubs bring together people ages 18-30 in communities worldwide to organize service activities, develop leadership skills, and socialize.</p>
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
                    src="  https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20interact%20700x500.jpg?itok=mU20LLE2 700w"
                    height="300px"
                    dark
                  ></v-img>
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <h1 class="text-center font-weight-light">Interact Clubs</h1>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <p
                    class="pa-3 body-1 font-weight-light"
                  >Through Interact clubs, people ages 12-18 connect with others in their community or school and learn about the world through service projects and activities.</p>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container>
          <h1 class="text-center">Who is Rotary?</h1>
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
        <img
          class="pa-9"
          width="100%"
          src="   https://www.rotary.org/sites/default/files/styles/w_1600/public/20191014_whereweare_EN.png?itok=cLhfJjlR 1600w"
          alt
        />
        <h1>Club benefits</h1>
        <p
          class="pa-3 title font-weight-light"
        >Your club connection gives you the chance to develop skills like public speaking, project management, and event planning. You’ll meet interesting people from your community and around the world. And you’ll tackle local and international issues that are important to you and your fellow club members.</p>
        <p
          class="pa-3 title font-weight-light"
        >Some clubs conduct all or part of their meetings online, for members who have a busy schedule, limited mobility, or live in an area without an established Rotary club. Online clubs, sometimes known as e-clubs, meet regularly, carry out service projects, support The Rotary Foundation, and socialize, like any other Rotary club, without the cost that often comes with meeting in person.</p>
        <h1>International connections</h1>
        <p
          class="pa-3 title font-weight-light"
        >You can expand your club connections to the world by developing a twin club relationship, organizing a Friendship Exchange, joining a Rotarian Action Group or Rotary Fellowship, or hosting an Open World visit. With more than 35,000 Rotary clubs worldwide, you have a friend in Rotary wherever you go.</p>
        <p
          class="pa-3 title font-weight-light"
        >Find more ideas for making an international connection</p>
        <h1>Twin clubs</h1>
        <p
          class="pa-3 title font-weight-light"
        >Twin clubs, or sister clubs, are two clubs from different countries that form a long-term relationship to promote international understanding and goodwill and carry out service projects in their communities. When looking for a partner, consider clubs that:</p>
        <ul>
          <li class="pa-3 title font-weight-light">Share similar interests, challenges, or history</li>
          <li class="pa-3 title font-weight-light">You’ve worked with in the past</li>
          <li
            class="pa-3 title font-weight-light"
          >Are located in a place that matches your club’s service interests</li>
          <li class="pa-3 title font-weight-light">Speak a common language</li>
        </ul>
        <p
          class="pa-3 title font-weight-light"
        >Browse projects seeking resources and consider partnering on a service project as a first step toward establishing a twin club relationship.</p>
        <p
          class="pa-3 title font-weight-light"
        >Recognize your relationship with a Twin Club Certificate of Recognition.</p>
        <h1>Friendship Exchange</h1>
        <p
          class="pa-3 title font-weight-light"
        >Explore new cultures and discover diverse perspectives by participating in a Friendship Exchange, a self-funded international exchange opportunity for Rotary members and their families. Taking part in an exchange is a wonderful way to make new friends and establish international service partnerships.</p>
        <p class="pa-3 title font-weight-light">Learn more</p>
        <p
          class="pa-3 title font-weight-light"
        >Download a Rotary Friendship Exchange promotional postcard.</p>
        <p class="pa-3 title font-weight-light">Email us with questions.</p>
        <h1>Rotarian Action Groups</h1>
        <p
          class="pa-3 title font-weight-light"
        >Connect with Rotary members, family members, and Rotaract members who are experts in a particular field by joining a Rotarian Action Group. Group members share their expertise by collaborating with clubs and districts on service projects.</p>
        <p class="pa-3 title font-weight-light">Learn more</p>
        <h1>Rotary Fellowships</h1>
        <p
          class="pa-3 title font-weight-light"
        >Interested in scuba diving or marathon running? Want to use your skills as a doctor or environmentalist to make a difference? Share your hobby or vocation with fellow club members, their spouses, and Rotaractors. Some Rotary Fellowships are purely social, and others use their common interests and knowledge to carry out service projects.</p>
        <h1>Intercountry committee</h1>
        <p
          class="pa-3 title font-weight-light"
        >An intercountry committee offers you the chance to work with Rotary clubs or districts in two or more countries. You might work with a committee to carry out international service projects, to sponsor a new Rotary club, or to develop a twin club relationship.</p>
        <h1>Open World</h1>
        <p
          class="pa-3 title font-weight-light"
        >Rotary clubs in the United States have a unique international and vocational service opportunity through Open World. In this federally sponsored program, clubs host a small delegation of current and future leaders from Russia, Serbia, or Ukraine. Clubs prepare a professional program related to U.S. business, community, and civic life.</p>
        <p
          class="pa-3 title font-weight-light"
        >These visits help develop a network of leaders who understand how American communities tackle contemporary issues. And the relationships they form often lead to service projects between Rotary clubs in two countries.</p>
        <p class="pa-3 title font-weight-light">Complete the host request form</p>
        <p class="pa-3 title font-weight-light">Find answers to FAQs</p>
        <p class="pa-3 title font-weight-light">Download Open World hosting themes</p>
        <p class="pa-3 title font-weight-light">Download the Open World program brochure</p>
        <p class="pa-3 title font-weight-light">Email us with questions?</p>
      </v-flex>
    </div>
    <v-flex md10 class="mx-auto mt-9">
    <v-card flat >
      <v-container class="mstructure" style="text-align: center;vertical-align: middle;">
        <v-layout column>
          <v-flex md6 class="pa-2" style="border-bottom:1px solid white;">
            <h1
              class="text-center white--text font-weight-light"
            >Refer potential members, and we’ll help connect them to the right club. Only current members can refer new members. To refer someone to your own club, contact your club secretary.</h1>
            <v-btn outlined class="my-9" dark style="padding:0% 20%">Refer A new Member</v-btn>
          </v-flex>
          <v-flex md6 class="pa-2">
            <h1
              class="text-center white--text font-weight-light"
            >Did you move? Has your schedule changed? We can help you rejoin your former club or find a new one that better fits your location and schedule.</h1>
            <v-btn outlined class="my-9" dark style="padding:0% 20%">Rejoin or change Clubs</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    <hr class="my-9 mx-7">
      <v-container >
        <v-layout class="my-9">
          <v-flex md6>
            <h3 class="my-9">RELATED STORIES</h3>
            <img
                width="60%"
              src= 'https://www.rotary.org/sites/default/files/styles/w_600/public/syrian%20crop.jpg?itok=DBz9KLcK 600w'
              alt
            />
            <a
              href="#"
              style="display:block;"
              class="title font-weight-light my-5"
            >Canada Rotary club helping refugees start new lives</a>
          </v-flex>
          <v-flex md6 class="my-9">
            <a
              href="#"
              style="display:block;"
              class="title font-weight-light my-5"
            > Rotary helps Tanzanians with albinism find safe futures</a>
            <a
              href="#"
              style="display:block;"
              class="title font-weight-light my-5"
            >Rotary club pairs students with celebrity mentors</a>
            <a
              href="#"
              style="display:block;"
              class="title font-weight-light my-5"
            >Rotarians save newborns in Brazil</a>
            <a
              href="#"
              style="display:block;"
              class="title font-weight-light my-5"
            >Kansas City club brings community together</a>
            <a
              href="#"
              style="display:block;"
              class="title font-weight-light my-5"
            >Rotary road trip hits 14 West Coast cities</a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
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
            "https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20carol%20climb-700x700.jpg?itok=MdDZeKPl 700w",
          header: "DIVERSITY",
          text:
            " Rotary welcomes people of all backgrounds,  cultures, experiences, and identities."
        },
        {
          src:
            " https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20salim%20700x700.jpg?itok=ArsAgN-7 700w",
          header: "EQUITY",
          text:
            " Rotary strives for the fair treatment, opportunity, and advancement of all Rotary participants."
        },
        {
          src:
            " https://www.rotary.org/sites/default/files/styles/w_700/public/Joel%20Jackson%20700x700.jpg?itok=8FW7ZBJ8 700w",
          header: "INCLUSION",
          text:
            " Rotary is working to create experiences where all people feel welcomed, respected, and valued."
        }
      ]
    };
  }
};
</script>

<style scoped>
.mstructure {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-purple.png);
  width: 100%;
  padding: 5% 3%;
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
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/GI%20clubs%20hero%202800x1800.jpg?itok=Zwrbc6_f);
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