<template>
  <div style="background:white" class="mb-8 text-center">
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column>
          <p
            class="display-3 my-8 white--text text-center"
            style="width:100%;position: absolute;bottom:8%;left:50%;transform:translate(-50%,-50%);"
          >
            Friendship Exchange
            <br />
            <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
          </p>
        </v-layout>
      </v-container>
    </v-card>
    <div class="mt-12">
      <v-flex md10 class="mx-auto">
        <div>
          <h1>Experience different cultures and build international friendships through Rotary Friendship Exchange</h1>
          <div class="mt-8 text-left">
            <v-layout>
              <!-- left flex -->
              <v-flex md8>
                <h1>What is Friendship Exchange?</h1>
                <p
                  :class="paragraph"
                >Friendship Exchange is an international exchange program for Rotary members and friends that allows participants to take turns hosting one another in their homes and clubs.</p>
                <p
                  :class="paragraph"
                >Participants may travel as individuals, couples, families, or groups, and may be Rotary members or not.</p>
                <div class="mt-8">
                  <h1>Benefits of an exchange</h1>
                  <ul :class="paragraph">
                    <li>Broaden international understanding</li>
                    <li>Explore a profession or job in a different context</li>
                    <li>Build enduring friendships</li>
                    <li>Establish a foundation for peace and service</li>
                    <li>Gain opportunities for active project involvement and support</li>
                    <li>Learn about a region’s people, food, languages, customs, and history</li>
                    <li>Find partners for grants</li>
                  </ul>
                </div>
                <div class="mt-8">
                  <h1>Choose a destination</h1>
                  <p
                    :class="paragraph"
                  >Explore our Exchange Finder Map to view current exchange locations and the districts that serve them. Connect with the district’s Rotary Friendship Exchange chair for help finding potential international hosts and planning your itinerary.</p>
                </div>
                <div class="mt-8">
                  <h1>Define your purpose</h1>
                  <p
                    :class="paragraph"
                  >Friendship exchanges are organized around at least one of three themes: culture, service, and vocation.</p>
                </div>
                <div class="mt-8">
                  <h1>Fund your exchange</h1>
                  <p
                    :class="paragraph"
                  >All exchanges are paid for by the participants or their districts. Hosts are not expected to assume a significant financial burden. Club or district funds may be available to offset the costs of exchanges that have a vocational emphasis.</p>
                </div>
                <div class="mt-8">
                  <h1>Share your story</h1>
                  <p :class="paragraph">
                    After your trip, submit a report to your district, as well as to
                    <a href>rotary.service@rotary.org</a>. It’s your chance to tell us about your experience, make suggestions, and share what you learned.
                  </p>
                </div>
              </v-flex>
              <!-- right flex -->
              <v-flex md4 class="pl-8">
                <div>
                  <h3>EXCHANGE FINDER MAP</h3>
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=10YbKaunVw0dWP_K2gP_g71YVvmszVF-7"
                    width="350"
                    height="300"
                  ></iframe>
                </div>
                <div class="mt-8">
                  <p :class="paragraph">See our current exchanges around the world</p>
                </div>
                <div class="mt-8">
                  <h3>Exchange discussion group</h3>
                  <p :class="paragraph">
                    Trade
                    <a href>ideas</a> or find partners
                  </p>
                </div>
                <div class="mt-8">
                  <h3>Rotary Service Blog</h3>
                  <p :class="paragraph">
                    <a href>Read stories</a> from Friendship Exchange participants
                  </p>
                </div>
                <div class="mt-8">
                  <h3>Contact us</h3>
                  <p :class="paragraph">
                    <a href>Email us</a> with your questions
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </div>
        </div>
        <div class="mt-12 text-left">
          <h1>Types of exchanges</h1>
          <!-- carousel starts -->
          <div class="pt-8 pb-8 mt-12" style="height:640px">
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
        </div>
        <!-- pagefooter -->
        <div style="margin:0% 10%" class="mt-12">
          <related :flex="flex" 
          :length="flex.length"
          img_height="272px"
          img_width="272px"
          ></related>
        </div>
      </v-flex>
    </div>
  </div>
</template>

<script>
import related from "@/components/related.vue";

export default {
  components: {
    related
  },
  data: function() {
    return {
      paragraph: "title font-weight-light",
      items: [
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/fe_carousel_culture.jpg?itok=62ZNVP__ 700w",
          ribbon: "CULTURE",
          color: "#019fcb",
          content:
            "   When Rotarians from Malaysia visited the United Kingdom, they broadened their international understanding through cultural immersion and meetings with leaders."
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/fe_carousel_fellowship.jpg?itok=-Uvny9C5 700w",
          ribbon: "FELLOWSHIP",
          color: "#018d8d",
          content:
            "Rotarians from Latvia visited historic sites and enjoyed traditional food and dancing in Mexico."
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/fe_carousel_service.jpg?itok=lXjba12y 700w",
          ribbon: "SERVICE",
          color: "#9b1238",
          content:
            "When Rotarians from Romania and Moldova visited the United States, they experienced the strength of working with a community while building homes for low-income families."
        },
        {
          src:
            "https://www.rotary.org/sites/default/files/styles/w_700/public/fe_carousel_vocation.jpg?itok=TF0iC7Rz 700w",
          ribbon: "VOCATIONS",
          color: "#872175",
          content:
            "In Lhuwhawha, Uganda, Rotarians from England helped at a medical clinic and delivered clothes, medicine, mosquito nets, boots, and latex gloves."
        }
      ],
      flex: [
        {
          topic: "RESOURCES",
          img:
            "https://www.rotary.org/sites/default/files/styles/w_600/public/friendship%20exchange%20resources.jpg?itok=Z_Cc-JCo 600w",
          src: ""
        },
        {
          topic: "",
          img: "",
          src: [
            "Download a Rotary Friendship Exchange promotional postcard",
            "Download a presentation about Rotary Friendship Exchange to share with your club",
            "Trade ideas and find partners in the Rotary Friendship Exchange Discussion Group"
          ],
        }
      ],
    };
  }
};
</script>

<style>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/friendship%20exchange%20hero.jpg?itok=71fze6R2);
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
  animation: bounce 0.6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
</style>