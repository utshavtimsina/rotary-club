<template>
  <v-container>
    <v-layout row>
      <v-flex md4>
        <v-hover v-slot:default="{ hover }">
          <v-card :class="hover ? 'pa-0':'pa-2'" class="title transition-fast-in-fast-out" flat>
            <v-img
              src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/boko_cause_tile.jpg"
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
      <v-flex md4>
        <v-card class>
          <v-hover v-slot:default="{ hover }">
            <v-card class="pa-2">
              <v-img
                :class="hover ? 'pa-2':'pa-4'"
                src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/boko_cause_tile.jpg"
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
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class>
          <v-hover v-slot:default="{ hover }">
            <v-card class="pa-2">
              <v-img
                :class="hover ? 'pa-0':'pa-4'"
                src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/home/boko_cause_tile.jpg"
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
        </v-card>
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
  margin-top: 250px;
}
</style>