<template>
  <div style="margin-top:56px;text-align:center" class="mb-8">
    <div>
      <v-img
        height="300px"
        src="https://www.rotary.org/sites/default/files/styles/w_2800/public/yp%20overview%20hero.jpg?itok=VZIEjCT_"
      >
        <p
          class="display-3 white--text text-center"
          style="position: absolute;top:50%;left:50%;transform:translate(-50%,-50%)"
        >Youth Programs</p>
      </v-img>
    </div>
    <!-- card tile started here -->
    
    <div class="background-div">
      <v-container class="mx-auto card-container pt-12 pb-12">
        <v-flex md8 class="mx-auto pb-8">
          <h1
            class="font-weight-light"
          >Rotary believes in developing the next generation of leaders. Our programs help younger leaders build leadership skills, expand education and learn the value of service.</h1>
        </v-flex>
        <v-layout row>
          <v-flex md4 class="pa-3" v-for="(cards,i) in card" :key="i">
            <v-hover v-slot:default="{hover}">
              <v-card class="mx-auto" style="height:100%" flat tile :elevation="hover ? '24':''">
                <v-img :src="cards.img"></v-img>
                <div class="pa-8">
                  <p class="title">{{cards.title}}</p>
                  <p>{{cards.description}}</p>
                  <p>
                    <a href="#">Learn More></a>
                  </p>
                </div>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- card tile ends here -->
    <!-- involved section starts -->
    <div style="width:50%;" class="mx-auto text-left mt-8">
      <h1 class="font-weight-medium pb-8 display-1">How can you get involved?</h1>
      <h3 class="title font-weight-light">
        All of our youth programs are connected to a Rotary club. To get involved,
        <a
          href="#"
        >contact the Rotary club</a> in your area.
      </h3>
      <hr style="color:#b0afae" class="mt-8 mb-8" />
      <div>
        <h1 class="text-center pb-8 font-weight-light">Already involved?</h1>
        <h3
          class="text-center title font-weight-light pb-8"
        >If you’re already a part of Rotary, learn more on these pages.</h3>
      </div>
      <!-- involved section ends -->
      <!-- buttons section starts -->
      <div v-for="(btn,i) in btn" :key="i" 
      style="text-align:center"      >
        <v-btn
          tile
          class="mb-4 white--text"
          color="#019fcb"
          width="50%"
          height="50px"
        >{{btn.text}}</v-btn>
      </div>
      <!-- buttons section ends -->
      
      <!-- <v-hover v-slot:default="{hover}">
    <v-btn tile depressed
        color="#019fcb"
    :outlined="hover ? bool:depressed"
    :class="hover ? '':'white--text'"
    >
        I am a button
    </v-btn> 
    </v-hover> -->
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      card: [
        {
          img:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/GI-rotaract-card_700x500.jpg?itok=xoO_Em3b 700w",
          title: "Rotaract clubs",

          description:
            "Rotaract clubs bring together people ages 18-30 to exchange ideas with leaders in the community, develop leadership and professional skills, and have fun through service."
        },
        {
          img:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/GI-interact-card_700x500.jpg?itok=ps7LnNM2 700w",
          title: "Interact clubs",
          description:
            "Interact clubs bring together young people ages 12-18 to develop leadership skills and learn about the world through service projects and activities."
        },
        {
          img:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/RYLA-card_700x500.jpg?itok=3aH-WwtN 700w",
          title: "Rotary Youth Leadership Awards",
          description:
            "RYLA is a leadership development program for young people who want to learn new skills, build their confidence, and have fun. Events range from one-day seminars to weeklong camps."
        },
        {
          img:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/YE-card-700x500.jpg?itok=XUEcEeAj 700w",
          title: "Rotary Youth Exchange",
          description:
            "Rotary Youth Exchange builds peace one young person at a time. Students learn a new language, discover another culture, and truly become global citizens. Exchanges for students ages 15-19 are sponsored by Rotary clubs in more than 100 countries."
        },
        {
          img:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/new-gen-card_700x500.jpg?itok=vc0N6Gfd 700w",
          title: "New Generations Service Exchange",
          description:
            "New Generations Service Exchange is a short-term, customizable program for university students and professionals up to age 30. Participants can design exchanges that combine their professional goals with a humanitarian project."
        }
      ],
      btn: [
        {
          text: "ROTARACT"
        },
        {
          text: "INTERACT"
        },
        {
          text: "YOUTH LEADERSHIP AWARDS"
        },
        {
          text: "YOUTH EXCHANGE"
        },
        {
          text: "NEW GENERATIONS SERVICE EXCHANGE"
        }
      ],
      bool:true
    };
  }
};
</script>

<style>
.background-div {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg)
    50% 0;
}
</style>