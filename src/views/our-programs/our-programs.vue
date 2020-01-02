<template>
  <div class="main-div mb-12">
    <v-card flat>
      <v-img
        height="350px"
        src="https://www.rotary.org/sites/default/files/styles/w_2800/public/programs%20overview%20hero%20short.jpg?itok=rUZ_zoyh"
      >
        <p
          class="display-3 white--text text-center"
          style="position: absolute;top:50%;left:50%;transform:translate(-50%,-50%)"
        >Rotaract Clubs</p>
      </v-img>
    </v-card>
    <v-card flat class="seamless">
      <v-flex
        md7
        class="mx-auto display-1 font-weight-light pt-8 pb-8"
      >Rotary’s programs are developing the next generation of leaders, providing funding to make the world a better place, and making peace a priority. And our programs are not just for club members. Learn how you can make a difference in your community through Rotary.</v-flex>
      <div style="width:88%" class="mx-auto">
        <!-- tile cards started from here -->
        <v-layout row>
          <v-flex md4 class="pa-2">
            <v-hover v-slot:default="{hover}">
              <v-card tile flat class="card-tile" :elevation="hover?'24':'0'">
                <v-img
                  src="https://www.rotary.org/sites/default/files/styles/w_700/public/programs%20peace%20700x500.JPG?itok=-VN2IR8j 700w"
                ></v-img>
                <p class="title pt-4 pr-8 pl-8">Rotary Peace Fellowships</p>
                <p
                  class="pr-8 pl-8"
                >Each year, Rotary selects up to 100 professionals from around the world to receive fully funded academic fellowships at our Rotary Peace Centers.</p>
                <p class="pt-4">
                  <a href="#">Learn more></a>
                </p>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex md4 class="pa-2">
            <v-hover v-slot:default="{hover}">
              <v-card tile flat class="card-tile" :elevation="hover?'24':'0'">
                <v-img
                  src="https://www.rotary.org/sites/default/files/styles/w_700/public/porgrams%20%20RCC%20700x500.JPG?itok=NQt7oWl9 700w"
                ></v-img>
                <p class="title pt-4 pr-8 pl-8">Rotary Community Corps</p>
                <p
                  class="pr-8 pl-8"
                >Finding community solutions to community challenges, Rotary Community Corps unites Rotary members with nonmembers to make a positive difference.</p>
                <p class="pt-4">
                  <a href="#">Learn more></a>
                </p>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex md4 class="pa-2">
            <v-hover v-slot:default="{hover}">
              <v-card tile flat class="card-tile" :elevation="hover?'24':''">
                <v-img
                  src="https://www.rotary.org/sites/default/files/styles/w_700/public/prgrams%20RYLA%20700x500.jpg?itok=pv22mcIv 700w"
                ></v-img>
                <p class="title pt-4 pr-8 pl-8">Rotary Youth Leadership Awards (RYLA)</p>
                <p
                  class="pr-8 pl-8"
                >RYLA is a leadership development program for young people who want to learn new skills, build their confidence, and have fun. Events range from one-day seminars to weeklong camps.</p>
                <p class="pt-4">
                  <a href="#">Learn more></a>
                </p>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex md4 class="pa-2">
            <v-hover v-slot:default="{hover}">
              <v-card tile flat class="card-tile" :elevation="hover?'24':'0'">
                <v-img
                  src="https://www.rotary.org/sites/default/files/styles/w_700/public/programs%20YE%20700x500.jpg?itok=02EufCjd 700w"
                ></v-img>
                <p class="title pt-4 pr-8 pl-8">Rotary Youth Exchange</p>
                <p
                  class="pr-8 pl-8"
                >Rotary Youth Exchange builds peace one young person at a time. Students learn a new language, discover another culture, and truly become global citizens.</p>
                <p class="pt-4">
                  <a href="#">Learn more></a>
                </p>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex md4 class="pa-2">
            <v-hover v-slot:default="{hover}">
              <v-card tile flat class="card-tile" :elevation="hover?'24':'0'">
                <v-img
                  src="https://www.rotary.org/sites/default/files/styles/w_700/public/New%20Gen%20Service%20Exchange%20700x500.jpg?itok=uEB7DHR1 700w"
                ></v-img>
                <p class="title pt-4 pr-8 pl-8">New Generations Service Exchange</p>
                <p
                  class="pr-8 pl-8"
                >New Generations Service Exchange is a short-term, customizable program for university students and young professionals up to age 30. Participants can design exchanges that combine their professional goals with a humanitarian project.</p>
                <p class="pt-4">
                  <a href="#">Learn more></a>
                </p>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex md4 class="pa-2">
            <v-hover v-slot:default="{hover}">
              <v-card tile flat class="card-tile" :elevation="hover?'24':'0'">
                <v-img
                  src="https://www.rotary.org/sites/default/files/styles/w_700/public/Programs%20grants%20700x500.jpg?itok=DYSlgedN 700w"
                ></v-img>
                <p class="title pt-4 pr-8 pl-8">Grants</p>
                <p
                  class="pr-8 pl-8"
                >For 100 years, The Rotary Foundation has been turning project ideas into reality. Our clubs receive funding to support humanitarian projects, scholarships, and international exchanges.</p>
                <p class="pt-4">
                  <a href="#">Learn more></a>
                </p>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex md4 class="pa-2 mb-8 mx-auto">
            <v-hover v-slot:default="{hover}">
              <v-card tile flat class="card-tile" :elevation="hover?'24':'0'">
                <v-img
                  src="https://www.rotary.org/sites/default/files/styles/w_700/public/programs%20scholarship%20700x500.jpg?itok=jCVxVf_y 700w"
                ></v-img>
                <p class="title pt-4 pr-8 pl-8">Scholarships</p>
                <p
                  class="pr-8 pl-8"
                >Rotary invests more than $7 million a year in our future leaders and philanthropists by funding scholarships for undergraduate and graduate study.</p>
                <p class="pt-4">
                  <a href="#">Learn more></a>
                </p>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
        <!-- tile cards section ends here -->
      </div>
      <!-- <div class="mydiv mx-auto mb-12">
      <v-img
          class="img mb-12 mx-auto"
          width="100%"
          src="https://www.rotary.org/sites/default/files/styles/w_700/public/programs%20scholarship%20700x500.jpg?itok=jCVxVf_y 700w">
      </v-img>
      </div>-->
    </v-card>
    <div style="width:88%;" class="mx-auto mt-12 text-left white--text">
        <v-layout row>
        <v-flex md6>
          <v-img
          height="100%"
          src="https://www.rotary.org/sites/default/files/styles/w_600/public/20150604_BR_102_1200x800.jpg?itok=JUpe3751"
          >

          </v-img>
        </v-flex>
        <v-flex md6 
        style="background:url('https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-red.png')"
        class="pa-12"
        >
        <h1>
          Help us create the next generation of peacemakers
        </h1>
        <p class="title font-weight-light">
          In just over 10 years, the Rotary Foundation has trained more than 1000 fellows at our Peace Centers. Many of them have gone on to serve as leaders at international organizations like the United Nations and World Bank or to form their own foundations.
        </p>
          <h3>
              <a href="#" class="white--text" style="text-decoration:underline">
                Donate to Rotary Peace Centers
              </a>
          </h3>
        
        </v-flex>
        </v-layout>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-div {
  margin-top: 56px;
  text-align: center;
}
.seamless {
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg)
    50% 0;
}
.card-tile {
  height: 100%;
}
.img {
  transition: height 0.3s;
  height: 400px;
}
.img:hover {
  transition: height 0.3s;
  height: 500px;
}
.mydiv {
  height: 200px;
  width: 400px;
  overflow: hidden;
}
</style>