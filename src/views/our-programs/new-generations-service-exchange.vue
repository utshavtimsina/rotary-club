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
          >New Generations Service Exchange is a short-term, customizable program for university students and professionals up to age 30.</h1>
          <p
            :class="paragraph"
            class="mt-4 text-left"
          >Participants can design exchanges that combine their professional goals with a humanitarian project.</p>
        </div>
        <div class="mt-12 text-left">
          <div>
            <h1>
                What are the benefits?
            </h1>
            <ul :class='paragraph'>
                <li>    
                    Make connections with service-minded community leaders in another country
                </li>
                <li>
                    Learn another language
                </li>
                <li>
                    Build your professional skills and gain international experience
                </li>
                <li>
                    Travel and explore a new culture while giving back through service
                </li>
            </ul>
          </div>
        <div class="mt-8">
            <h1>
                What is an exchange like?
            </h1>
            <p :class='paragraph'>
                With your host Rotary district, you’ll plan activities that can include networking, relationship building, humanitarian service, professional development, and leadership training. Exchanges:
            </p>
            <ul :class="paragraph">
                <li>    
                    Last from a few weeks to six months
                </li>
                <li>
                    Can be arranged for individuals or groups
                </li>
                <li>
                    Need not be reciprocal
                </li>
            </ul>
        </div>
        <div class="mt-8">
            <h1>
                How much does it cost?
            </h1>
            <p :class="paragraph">
                Costs vary by Rotary club or district. To reduce expenses, Rotary members often provide homestay options, arrange no-cost internship or job-shadowing programs, and offer other financial assistance. 
            </p>
            <p :class="paragraph">
                <a href="">Find a Rotary club near you</a> that works with New Generations Service Exchange to find out what it would cost.
            </p>
        </div>
        <div class="mt-8">
            <h1>
                How do I apply?
            </h1>
            <p :class="paragraph">
                University students and professionals up to age 30 — including current and former Rotaractors and former Interactors, Rotary Youth Leadership Awards participants, and Youth Exchange students — are encouraged to apply. You don’t have to be a member of Rotary to participate in an exchange.
            </p>
            <p :class="paragraph">
                Although each Rotary club determines its own eligibility criteria, all participants should demonstrate a strong commitment to service and the <a href="">ideals</a> of Rotary. <a href="">Contact your local Rotary club</a> to see what exchange opportunities are available and what the application process involves.
            </p>
        </div>
        </div>
        <hr class="mt-12 mb-12">
        <div>
            <h1 class="font-weight-regular">
                Already involved in New Generations Service Exchange?
            </h1>
            <p :class="paragraph">
                Find <a href="">tips</a> and <a href="">ideas</a>
            </p>
        </div>
        <hr class="mt-12 mb-12">
        <!-- person's cards starts -->
          <v-flex class="text-left"
          v-for="(card,i) in cards" :key='i'
          >
            <v-layout row>
                <v-flex md4>
                    <div style="height:200px;width:200px">
                    <v-img
                    height="100%"
                    width="100%"
                    :src="card.img"
                    >
                    </v-img>
                    </div>
                </v-flex>
                <v-flex md8>
                    <div :class='paragraph'>
                    <p>
                    {{card.content}}
                </p>
                
                </div>
                </v-flex>
            <hr class="mt-12 mb-12" style="width:100%">
            </v-layout>
            
            </v-flex>
          <!-- person's cards ends -->
      </v-flex>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      paragraph: "title font-weight-light",
       cards:[
          {
            img:'https://www.rotary.org/sites/default/files/styles/w_400/public/jenkins%20400x400.jpg?itok=itD5jtb0 400w',
            content:'“The same emotions I felt for my family in the U.S. I felt for my family in Brazil. Yes, we were culturally different. But there was so much in common.” Todd Jenkins spent three months in Brazil learning how Brazilian university administrators work with students while pursuing his doctorate.',
          },
          {
            img:' https://www.rotary.org/sites/default/files/styles/w_400/public/Higgins%20400x400.jpg?itok=gDNjUMbG 400w',
            content:'“When we travel, this amazing thing happens. We let down our guard. You’re constantly exposed to new experiences and new people. I’m so grateful for Rotary for allowing me to experience that.” Tara Higgins spent eight weeks in Ireland visiting a number of classrooms to improve her skills as a teacher.',
          },
          {
            img:'https://www.rotary.org/sites/default/files/styles/w_400/public/Kolasinski%20400x400%20teen.jpg?itok=fh_mg1iG 400w',
            content:'“The experience was beyond what I could have ever hoped for: Not only was the breadth of work experience completely unexpected, the hospitality I experienced was second to none.” James Kolasinski spent a month in Texas, USA, as a medical student in order to better understand international health care systems.',
          },
      ],
    };
  }
};
</script>

<style scoped>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/new%20gen%20hero%202800x1800.jpg?itok=1wSlirgh);
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