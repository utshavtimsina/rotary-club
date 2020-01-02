<template>
  <div style="margin-top:56px;margin-bottom:30px">
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column>
          <p
            class="display-3 my-8 white--text text-center"
            style="width:100%;position: absolute;bottom:8%;left:50%;transform:translate(-50%,-50%);"
          >Rotary Youth Leadership Awards</p>
        </v-layout>
      </v-container>
    </v-card>
    <div class="mt-8">
      <v-flex md7 class="mx-auto text-center">
        <h1
          class="font-weight-light mb-8"
        >Do you have what it takes to become a dynamic leader and change yourself and the world?</h1>
        <p
          class="title text-left font-weight-light mb-8"
        >Rotary Youth Leadership Awards (RYLA) is an intensive leadership experience organized by Rotary clubs and districts where you develop your skills as a leader while having fun and making connections.</p>
        <div class="text-left">
          <h1>What are the benefits?</h1>
          <div class="title font-weight-light">
            <p>Connect with leaders in your community and around the world to:</p>
            <ul>
              <li>Build communication and problem-solving skills</li>
              <li>Discover strategies for becoming a dynamic leader in your school or community</li>
              <li>Learn from community leaders, inspirational speakers, and peer mentors</li>
              <li>Unlock your potential to turn motivation into action</li>
              <li>Have fun and form lasting friendships</li>
            </ul>
          </div>
          <div>
            <h1 class="mt-8">What’s involved?</h1>
            <p
              class="title font-weight-light"
            >RYLA events are organized locally by Rotary clubs and districts for participants ages 14-30. Depending on community needs, RYLA may take the form of a one-day seminar, a three-day retreat, or a weeklong camp. Typically, events last 3-10 days and include presentations, activities, and workshops covering a variety of topics.</p>
            <p
              class="title font-weight-light"
            >Your community might host a RYLA event for secondary school students to hone their leadership potential, for university students to develop creative problem-solving strategies, or for young professionals to learn ethical business practices.</p>
          </div>
          <div>
            <h1 class="mt-8">How can I participate?</h1>
            <p class="title font-weight-light">
              RYLA participants are nominated by local Rotary clubs.
              <a href="#">Contact your local Rotary club</a> to find out more about RYLA events in your area, how to apply, and any costs of getting involved.
            </p>
          </div>
        </div>
        <v-carousel
          style="width:353px; border:1px solid #e3dfde"
          class="mx-auto mt-12"
          hide-delimiters
          height="570px"
        >
          <v-carousel-item v-for="(item,i) in items" :key="i">
            <v-sheet height="100%" width="100%" color="white">
              <div>
                <v-img width="100%" :src="item.src"></v-img>
              </div>
              <v-sheet :color="item.color" tile class="text-center pa-2">{{item.ribbon}}</v-sheet>
              <v-sheet
                tile
                class="text-left black--text"
                color="white"
              ><p class="pa-6 subtitle-1">{{item.content}}</p>
              </v-sheet>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <hr class="mt-8 mb-8">
        <div>
            <h1>
                Want to organize a RYLA event?
            </h1>
            <p class="mt-4">
                <a href="#" class="font-weight-medium">Find out how</a>
            </p>
        </div>
      </v-flex>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/RYLA%20williams%20700x700.jpg?itok=m2eYohHX 700w",
          ribbon: "UNITED STATES",
          content:
            "RYLA in Williams Bay, Wisconsin, USA, challenged more than 80 students to participate in outdoor activities that developed team building, problem solving, and communication.",
          color: "#019fcb"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/RYLA%20england%20700x700.jpg?itok=nCVqGRvY 700w",
          ribbon: "ENGLAND",
          content:
            "Outside of Warwickshire, England, RYLA participants learned to work together to accomplish a task and build trust.",
          color: "#018d8d"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/RYLA%20sweden%20700x700.jpg?itok=FRMOdP64 700w",
          ribbon: "SWEDEN",
          content:
            "In Helsingborg, Sweden, students from around the world learned from community leaders how to find solutions to everyday challenges.",
          color: "#9b1238"
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/RYLA%20malawi%20700x700.jpg?itok=GvaeA1gv 700w",
          ribbon: "MALAWI",
          content:
            "Two teams of young leaders in Malawi worked together in a race against other teams to complete challenges that required teamwork and communication.",
          color: "#872175"
        }
      ]
    };
  }
};
</script>

<style>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/RYLA%20hero%202800x1800.jpg?itok=XDH1L7wK);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /*Resize the background image to cover the entire container*/
  width: 100%;
  padding: 5% 3%;
  height: 600px;
}
</style>