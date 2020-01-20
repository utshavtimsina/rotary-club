<template>
  <div>
    <v-card class="hero-background">
      <v-overlay absolute="absolute" :value="overlay" z-index="-1" opacity="0.2">
        <h1 class="display-3">Membership</h1>
      </v-overlay>
    </v-card>
    <v-card style="z-index:1;" class="others" flat>
      <v-container>
         <v-flex md10 class="mx-auto">
          <p
            class="display-1 font-weight-light my-5"
          >Impact starts with our members — people like you who see a world where people unite and take action to create lasting change — across the globe, in our communities, and in ourselves.</p>
          <p
            class="title font-weight-light my-5"
          >At club meetings in communities across the globe, our people of action come together to strengthen their connections to friends and neighbors and their commitment to improving lives.</p>
          <h1>Who can join?</h1>
          <p
            class="title font-weight-light my-5"
          >We’re looking for people who want to give back to their communities.</p>
          <p
            class="title font-weight-light my-5"
          >Rotary clubs also welcome Rotaractors, Rotary Peace Fellows, and other members of the family of Rotary who qualify for membership.</p>
          <h1>How can I become a member?</h1>
          <p
            class="title font-weight-light my-5"
          >Clubs accept new members by invitation. To help us find the right club for you, we’ll ask you a few questions about yourself and your interests. Then we’ll share your answers with Rotary leaders in your community who will match you with a club.</p>
          <div class="text-center">
            <img 
            width="100%"
              src="https://www.rotary.org/sites/default/files/styles/w_400/public/Progress-Tracker-Graphic_EN_0.png?itok=ctTceZVU 400w, https://www.rotary.org/sites/default/files/styles/w_600/public/Progress-Tracker-Graphic_EN_0.png?itok=k18qjhJa 600w, https://www.rotary.org/sites/default/files/styles/w_800/public/Progress-Tracker-Graphic_EN_0.png?itok=YfOxDp6C 800w, https://www.rotary.org/sites/default/files/styles/w_1000/public/Progress-Tracker-Graphic_EN_0.png?itok=3iun6ghH 1000w, https://www.rotary.org/sites/default/files/styles/w_1200/public/Progress-Tracker-Graphic_EN_0.png?itok=Rs0y8sK2 1200w, https://www.rotary.org/sites/default/files/styles/w_1400/public/Progress-Tracker-Graphic_EN_0.png?itok=_P5xnaNh 1400w, https://www.rotary.org/sites/default/files/styles/w_1600/public/Progress-Tracker-Graphic_EN_0.png?itok=wvj0WQ53 1600w"
              alt
            />
            <v-btn outlined dark class="pink my-9" style="width: 60%; height:40px;">Join</v-btn>
          </div>
          <h1>What are the benefits?</h1>
          <p
            class="title font-weight-light my-5"
          >Becoming a Rotary member connects you with a diverse group of professionals who share your drive to give back. Through regular meetings and events, you’ll:</p>
          <ul>
            <li
              class="title font-weight-light my-5"
            >Discuss your community’s needs and develop creative ways to meet them</li>
            <li
              class="title font-weight-light my-5"
            >Connect with other leaders who are changing the world</li>
            <li class="title font-weight-light my-5">Expand your leadership and professional skills</li>
            <li class="title font-weight-light my-5">Catch up with good friends and meet new ones</li>
          </ul>
          <p class="title font-weight-light my-5">Other benefits of membership include:</p>
          <p
            class="title font-weight-light my-5"
          >Rotary Global Rewards, our member benefits program, which offers discounts on products and services. It’s Rotary’s way of helping our members spend less so they can do more.</p>
          <p
            class="title font-weight-light my-5"
          >The Rotary International Convention is our biggest event of the year. Rotary members from more than 130 countries meet at the convention each year to celebrate our successes and make plans for the future.</p>
          <p
            class="title font-weight-light my-5"
          >Rotary Fellowships give members the chance to join a group of people who share similar interests, hobbies, or vocations. Some groups use their fellowship to make a positive difference.</p>
          <p
            class="title font-weight-light my-5"
          >Rotarian Action Groups unite Rotary members, family members, program participants and alumni who share their expertise in particular fields by collaborating with clubs and districts on projects.</p>
          <h1>What’s expected of me?</h1>
          <p class="title font-weight-light my-5">As a club member, you will be asked to:</p>
          <ul>
            <li class="title font-weight-light my-5">Pay club dues</li>
            <li class="title font-weight-light my-5">Attend meetings and events</li>
            <li
              class="title font-weight-light my-5"
            >Use your professional skills and talents to make a difference</li>
          </ul>
          <h1>Rotaract and Interact clubs</h1>
          <p
            class="title font-weight-light my-5"
          >If you’re between the ages of 12 and 30, you may be interested in joining one of our service clubs for young professionals and youth. Like Rotary clubs, Rotaract and Interact clubs give their members the chance to make friends, develop leadership skills, and create positive change. Learn more about Rotaract and Interact clubs.</p>
          <hr />
          <v-layout row class="my-9">
            <v-flex md6 sm12>
              <h3 class="my-9">RELATED STORIES</h3>
              <img
                src="https://www.rotary.org/sites/default/files/styles/w_300/public/DSC_3318_crop.jpg?itok=6-ESmQIl 300w, https://www.rotary.org/sites/default/files/styles/w_600/public/DSC_3318_crop.jpg?itok=klsTFbBq 600w"
                alt
              />
              <a href="#" style="display:block;" class="title font-weight-light my-5">Kansas City club brings community together</a>
            </v-flex>
            <v-flex md6 sm12>
                <a href="#" style="display:block;" class="title font-weight-light my-5"> Children with disabilities learn artisan craft</a>
                <a href="#" style="display:block;" class="title font-weight-light my-5">Rotary club pairs students with celebrity mentors</a>
                <a href="#" style="display:block;" class="title font-weight-light my-5">Australia clubs helping to end domestic violence</a>
                <a href="#" style="display:block;" class="title font-weight-light my-5">Rotarians save newborns in Brazil</a>
                <a href="#" style="display:block;" class="title font-weight-light my-5">Toxic algae blooms threaten drinking water for millions</a>
                <a href="#" style="display:block;" class="title font-weight-light my-5">Rotary clubs go wild for wildlife conservation</a>
            </v-flex>
          </v-layout>
       </v-flex>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: true
    };
  }
};
</script>

<style scoped>
.hero-background {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/new%20membership%20hero.jpg?itok=wyGjFvBL);
 background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 100%;
  padding: 5% 3%;
  height: 600px;
}
.others {
  width: 100%;
  position: absolute;
  top: 80%;
  z-index: 4;
}
</style>