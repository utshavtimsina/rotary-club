<template>
  <v-container>
    <v-layout row>
      <v-flex xs0 sm0 md2>

      </v-flex>
      <v-flex  xs5 sm5 md3 class="mx-2">
        <v-hover v-slot:default="{ hover }">
          <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out" flat>
            <v-img
              src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/home-causes-peace,w_360.jpg"
            >
              <v-overlay :opacity="hover ? 0:0.3" :absolute="absolute" :value="overlay">
                <v-flex
                  class="title transition-fast-in-fast-out"
                  :class="hover ? 'center-bottom':'default'"
                >Custom Text</v-flex>
              </v-overlay>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs5 sm5  md3 class="mx-2">
        <v-hover v-slot:default="{ hover }">
          <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out" flat>
            <v-img
              src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/home-causes-disease,w_360.jpg"
            >
              <v-overlay :opacity="hover ? 0:0.3" :absolute="absolute" :value="overlay">
                <v-flex
                  class="title transition-fast-in-fast-out"
                  :class="hover ? 'center-bottom':'default'"
                >Custom Text</v-flex>
              </v-overlay>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex  xs5 sm5  md3 class="mx-2">
        <v-hover v-slot:default="{ hover }">
          <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out" flat>
            <v-img
              src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/home-causes-water,w_360.jpg"
            >
              <v-overlay :opacity="hover ? 0:0.3" :absolute="absolute" :value="overlay">
                <v-flex
                  class="title transition-fast-in-fast-out"
                  :class="hover ? 'center-bottom':'default'"
                >Custom Text</v-flex>
              </v-overlay>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
     <v-flex xs1 sm1 md2> </v-flex>
     <v-flex   xs5 sm5  md3 class="mx-2">
        <v-hover v-slot:default="{ hover }">
          <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out" flat>
            <v-img
              src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/home-causes-children,w_360.jpg"
            >
              <v-overlay :opacity="hover ? 0:0.3" :absolute="absolute" :value="overlay">
                <v-flex
                  class="title transition-fast-in-fast-out"
                  :class="hover ? 'center-bottom':'default'"
                >Custom Text</v-flex>
              </v-overlay>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex  xs5 sm5  md3 class="mx-2">
        <v-hover v-slot:default="{ hover }">
          <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out" flat>
            <v-img
              src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/home-causes-education,w_360.jpg"
            >
              <v-overlay :opacity="hover ? 0:0.3" :absolute="absolute" :value="overlay">
                <v-flex
                  class="title transition-fast-in-fast-out"
                  :class="hover ? 'center-bottom':'default'"
                >Custom Text</v-flex>
              </v-overlay>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex  xs5 sm5  md3 class="mx-2">
        <v-hover v-slot:default="{ hover }">
          <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out" flat>
            <v-img
              src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/home-causes-economies,w_360.jpg"
            >
              <v-overlay :opacity="hover ? 0:0.3" :absolute="absolute" :value="overlay">
                <v-flex
                  class="title transition-fast-in-fast-out"
                  :class="hover ? 'center-bottom':'default'"
                >Custom Text</v-flex>
              </v-overlay>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      absolute: true,
      overlay: true
    };
  }
};
</script>

<style>
.center-bottom {
  margin-top: 150%;
}
</style>