<template>
  <div style="text-align:center;margin-top:56px">
    <v-card class="white--text blue-bar mt-6" flat tile>
      <v-flex md10 class="mx-auto">
        <p class="display-3 font-weight-light mb-4 mt-9">Join Rotary</p>
        <p class="headline font-weight-light mb-8">
          Rotary is 1.2 million passionate individuals in 35,000+ clubs worldwide. We are both an
          international organization and a local community leader. Together we lead change in our own
          backyards and across the world.
        </p>
        <div style="width:50%;display:inline-block">
          <hr />
        </div>
        <div style="width:80%;display:inline-block">
          <p
            class="title font-weight-light mt-12 text-left"
          >Tell us why you’re interested in Rotary, and we’ll help you get started.</p>
          <h3 class="text-left pb-2">I'm interested in:</h3>
          <v-select
            background-color="white"
            :items="items"
            outlined
            dense
            placeholder="-Select-"
            v-model="selectedValue"
            @change="showContent"
          ></v-select>
          <div class="title font-weight-light">
            <p v-if="selectedValue=='Joining a Rotary Club'">
              To make sure we find a club that suits your interests and location, give us a
              little information about yourself.
              <br />
              <v-btn color="#019fcb" class="white--text mt-4" width="30%" height="50px">GET STARTED</v-btn>
            </p>
            <p v-if="selectedValue=='Joining a Rotaract Club'">
              Rotaract brings together adults ages 18-30 to take action in their communities,
              develop their leadership and professional skills, and have fun. Tell us a little about
              yourself so we can connect you with the right club
              <br />
              <v-btn color="#019fcb" class="white--text mt-4" width="30%" height="50px">GET STARTED</v-btn>
            </p>

            <p v-if="selectedValue=='Study Abroad'">
              Rotary offers a variety of programs to help you discover new cultures and explore the
              world. Tell us a little about yourself so we can connect you with the right study
              abroad or youth exchange program.
              <br />
              <v-btn color="#019fcb" class="white--text mt-4" width="30%" height="50px">GET STARTED</v-btn>
            </p>

            <p v-if="selectedValue=='Youth Programs'">
              Rotary offers clubs and programs that help young people develop their leadership skills
              and make a positive difference in their communities. Tell us about yourself so we can
              connect you with the right program.
              <br />
              <v-btn color="#019fcb" class="white--text mt-4" width="30%" height="50px">GET STARTED</v-btn>
            </p>
            <p v-if="selectedValue=='Rotary Peace Fellowships'">
              Each year, up to 100 Rotary Peace Fellows are chosen to participate in a master's degree or
              certificate program at one of our partner universities. Let us help you learn more about our
              fellowship opportunities.
              <br />
              <v-btn color="#019fcb" class="white--text mt-4" width="30%" height="50px">GET STARTED</v-btn>
            </p>
            <p v-if="selectedValue=='Scholarships'">
              From scholarships to full graduate fellowships, Rotary can support your education in
              many ways. Tell us a little about yourself so we can connect you with the right
              opportunity.
              <br />
              <v-btn color="#019fcb" class="white--text mt-4" width="30%" height="50px">GET STARTED</v-btn>
            </p>
            <p v-if="selectedValue=='Others'">
              <br />
              <v-btn color="#019fcb" class="white--text mt-4" width="30%" height="50px">CONTACT US</v-btn>
            </p>
          </div>
        </div>
      </v-flex>
    </v-card>
    <v-card>
      <v-flex md10 class="mx-auto">
        <div class="mt-12">
          <h3 class="title">HOW OUR MEMBERSHIP WORKS</h3>
          <p class="text-left title font-weight-light mt-4">
            Membership in a Rotary club is by invitation only. We want to make sure you join a club
            that best fits your passion and perspective. We can connect you with a club that's
            right for you and make it easy to get involved and on your way to membership
            immediately.
          </p>
          <ul class="text-left">
            <li>
              <h3 class="title">You express interest</h3>
              <p
                class="subtitle-1"
              >Let us know a little about yourself and what you’re looking for in a club. We’ll find the local clubs in your area and let them know you’re interested.</p>
            </li>
            <li>
              <h3 class="title">Rotary matches you with a club</h3>
              <p
                class="subtitle-1"
              >Based on your preferences and interests, Rotary leaders in your community will match you with the local club that fits you best.</p>
            </li>
            <li>
              <h3 class="title">A local club contacts you</h3>
              <p
                class="subtitle-1"
              >A Rotary club member will contact you by email or phone to discuss your interest in Rotary. You’ll be invited to get to know the club better by attending a club meeting, a social event, or even to join in on a service project as a volunteer.</p>
            </li>
            <li>
              <h3 class="title">The club invites you to join</h3>
              <p
                class="subtitle-1"
              >Now that you and a local club have spent some time together and determined that you’re a good fit for each other, you will be invited to join. Each club has its own ways of welcoming new members; they may hold a ceremony for you.</p>
            </li>
            <li>
              <h3 class="title">You’re a member!</h3>
              <p
                class="subtitle-1"
              >Enjoy getting involved in your new club as a Rotary member. Join a committee. Lead a service project. Organize a social event. Lead and contribute to your new club.</p>
            </li>
          </ul>
          <v-btn color="#c10042" width="60%" height="50px" class="mb-4 mt-4 white--text">GET STARTED</v-btn>
          <br />
          <v-btn color="#c10042" width="60%" height="50px" class="white--text">LEARN MORE</v-btn>
        </div>
      
    
      </v-flex>
    </v-card>
    <v-img
      src="https://www.rotary.org/sites/default/files/styles/w_2800/public/join-tall%2Cw_1400-%402x.jpg?itok=eyS4nFP7 2800w"
      class="pa-12"
    ></v-img>
    <v-card class="mt-12 mb-12" tile flat>
      <v-layout row>
          <v-flex></v-flex>
        <v-flex md5 sm12 style="border:8px solid #bfbeba" class="mr-4">
          <div style="height:50%" class="my-auto ma-12 text-left">
            <p
              class="title font-weight-bold mt-12 mb-12"
            >Additional opportunities for existing members:</p>
            <p class="mb-8 title">
              <a href="#">Refer a new member ></a>
            </p>
            <p
              class="mb-12"
            >Know someone great? Refer a potential member and we'll help connect them to the right club. Only current members can refer new members. To refer someone to your own club, contact your club secretary.</p>
            <p class="mb-8 title">
              <a href="#">Rejoin or change clubs ></a>
            </p>
            <p
              class="mb-12"
            >Did you move? Has your schedule changed? We can help you rejoin your existing or find a new club that better fits your location and schedule.</p>
          </div>
        </v-flex>
        <v-flex md5 sm12 style="width:100%" class="ml-4">
          <div>
            <v-img
              src="https://www.rotary.org/sites/default/files/styles/w_1500/public/youthblockphoto.jpg?itok=pOi6czYR"
            ></v-img>

            <div
              class="white--text text-center"
              style="background:url('https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-purple.png')"
            >
              <div style="width:90%" class="mx-auto pt-4 pb-4">
                <p class="headline text-left">Interested in fellowship and youth programs?</p>
                <p
                  class="subtitle-1 text-left"
                >You don't have to be a Rotary member to get involved with Rotary. We have fellowships, groups, and exchanges for all ages and interests. Connect with a local Rotary club near you to find out what's available and how you can be involved.</p>
              </div>
              <v-btn width="50%" height="50px" class="mb-8" outlined color="white">LEARN MORE</v-btn>
            </div>
          </div>
        </v-flex>
        <v-flex></v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      "-Select-",
      "Joining a Rotary Club",
      "Joining a Rotaract Club",
      "Study Abroad",
      "Youth Programs",
      "Rotary Peace Fellowships",
      "Scholarships",
      "Others"
    ],
    selectedValue: "",
    selctedContent: ""
  }),
  methods: {
    showContent: function() {
      console.log(this.selectedValue);
    }
  }
};
</script>

<style>
.blue-bar {
  background: url("https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-darkblue.png");
}
</style>