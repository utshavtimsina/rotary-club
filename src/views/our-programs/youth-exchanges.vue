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
    <div class="mt-12" >
      <v-flex md7 class="mx-auto">
        <h1
          class="font-weight-regular"
        >Rotary Youth Exchange builds peace one young person at a time.</h1>
        <p
          :class="paragraph"
          class="text-left mt-4"
        >Students learn a new language, discover another culture, and truly become global citizens. Exchanges for students ages 15-19 are sponsored by Rotary clubs in more than 100 countries.</p>
        <div class="text-left mt-8">
          <h1>What are the benefits?</h1>
          <div class="mt-4">
            <p :class="paragraph">Exchange students unlock their true potential to:</p>
            <ul :class="paragraph">
              <li>Develop lifelong leadership skills</li>
              <li>Learn a new language and culture</li>
              <li>Build lasting friendships with young people from around the world</li>
              <li>Become a global citizen</li>
            </ul>
          </div>
          <h1 class="mt-4">How long do exchanges last?</h1>
          <div class="mt-4">
              <p :class='paragraph'>
                  Long-term exchanges last a full academic year, and students attend local schools and live with multiple host families.
              </p>
              <p :class='paragraph'>
                  Short-term exchanges last from several days to three months and are often structured as camps, tours, or homestays that take place when school is not in session.
              </p>
          </div>
          <div class="mt-4">
            <h1>What are the costs?</h1>
            <div class="mt-4">
            <p :class="paragraph">
                Room and board are provided, as well as any school fees. Each program varies, but students are usually responsible for:
            </p>
            <ul :class="paragraph">
                <li>
                    Round-trip airfare
                </li>
                <li>
                    Travel insurance
                </li>
                <li>
                    Travel documents (such as passports and visas)
                </li>
                <li>
                    Spending money and any additional travel or tours
                </li>
            </ul>
            </div>
            <div class="mt-12">
                <h1>
                    How can I apply?
                </h1>
                <p :class='paragraph' class="mt-8">
                    Candidates are ages 15-19 and are leaders in their schools and communities. <a href="">Contact your local Rotary club</a> to see what exchange opportunities are available and what the application process involves.
                </p>
            </div>
          </div>
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
                <a href="">{{card.link}}</a>
                </div>
                </v-flex>
            <hr class="mt-12 mb-12" style="width:100%">
            </v-layout>
            
            </v-flex>
          <!-- person's cards ends -->
      </v-flex>
      <div class="mb-12">
      <h1 class="font-weight-regular">
          Already involved in Youth Exchange?
      </h1>
      <p :class='paragraph'>
          Find tips and ideas for your club.
      </p>
      </div>
          <div style="display:inline-block">
      <related 
      :flex="flex" 
      :length="flex.length"
      img_height="272px"
      img_width="272px"
      ></related>
    </div>

    </div>
  </div>
</template>

<script>
    import related from "@/components/related.vue"
export default {
    components:{
        related,
    },
  data: function() {
    return {
      paragraph: "title font-weight-light",
      cards:[
          {
            img:'https://www.rotary.org/sites/default/files/styles/w_400/public/Joel%20Jackson%20700x700_0.jpg?itok=v4Ep0sTd 400w',
            content:'“During my year in Brazil, I was a representative of Australia, of my family, and of Rotary. Doing something bigger than yourself, it humbles you.”',
            link:'Joel Jackson, former Youth Exchange student from Australia'
          },
          {
            img:' https://www.rotary.org/sites/default/files/styles/w_400/public/Varda%20Shah%20700x700%20front%20row%20left.jpg?itok=APX_peFh 400w',
            content:'“Before, I would never be able to make a conversation with a person I didn’t know. Now, I can proudly say it isn’t like that anymore. I can go up to people. I have become more open, more mature.”',
            link:'Varda Shah, former Youth Exchange student from India'
          },
          {
            img:'https://www.rotary.org/sites/default/files/styles/w_400/public/YOKO2%20700x700.png?itok=0gSTXeC2 400w',
            content:'“To meet up with my classmates and host families after 50 years has been simply amazing. Through Rotary Youth Exchange I had such a precious chance and a fabulous experience. Thank you.”',
            link:'Yoko Sekimoto, the first Youth Exchange student from Japan'
          },
      ],
      flex: [
        {
          topic: "RELATED STORIES",
          img:
            "https://www.rotary.org/sites/default/files/styles/w_600/public/RS_youth%20exchage_crop.jpg?itok=5gU0Rz6Z 600w",
          src: ["650 students broaden horizons through Rotary exchange program"]
        },
      ],
    };
  }
};
</script>

<style>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/YE%20%20hero%202800x1800.jpg?itok=3NZNiUQR);
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