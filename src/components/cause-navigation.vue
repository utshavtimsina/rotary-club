<template>
   <div style="position:relative;">
            <div style="width:16.6%;height:100px;display:inline-block;position:relative;">
              <v-hover v-slot:default="{ hover }">
                <v-card :class="hover ? 'ma-1':''">
                  <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-peace-3.jpg?itok=jhkFSLne"
                  >
                    <v-overlay :value="overlay" style="position:absolute">Promoting Peace</v-overlay>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <div style="width:16.6%;height:100px;display:inline-block;position:relative;">
              <v-hover v-slot:default="{ hover }">
                <v-card :class="hover ? 'ma-1':''">
                  <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-water-3.jpg?itok=OnzuhnzZ"
                  >
                    <v-overlay :value="overlay" style="position:absolute">Providing Clean Water</v-overlay>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <div style="width:16.6%;height:100px;display:inline-block;position:relative;">
              <v-hover v-slot:default="{ hover }">
                <v-card :class="hover ? 'ma-1':''">
                  <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-mothers-3.jpg?itok=-7-LYlq7"
                  >
                    <v-overlay :value="overlay" style="position:absolute">Saving Mothers & Children</v-overlay>
                  </v-img>
                </v-card>
              </v-hover>
            </div>

            <div style="width:16.6%;height:100px;display:inline-block;position:relative;">
              <v-hover v-slot:default="{ hover }">
                <v-card :class="hover ? 'ma-1':''">
                  <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-education-3.jpg?itok=8yY1H8VK"
                  >
                    <v-overlay :value="overlay" style="position:absolute">Supporting Education</v-overlay>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <div style="width:16.6%;height:100px;display:inline-block;position:relative;">
              <v-hover v-slot:default="{ hover }">
                <v-card :class="hover ? 'ma-1':''">
                  <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-economies-3.jpg?itok=CgIc6V2F"
                  >
                    <v-overlay :value="overlay" style="position:absolute">Growing Local Communities</v-overlay>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <div style="width:16.6%;height:100px;display:inline-block;position:relative;">
              <v-hover v-slot:default="{ hover }">
                <v-card :class="hover ? 'ma-1':''">
                  <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-disease-3.jpg?itok=26lNK9Tj"
                  >
                    <v-overlay :value="overlay" style="position:absolute">Fighting Disease</v-overlay>
                  </v-img>
                </v-card>
              </v-hover>
              
            </div>
   </div>
</template>

<script>
export default {
  data:function(){
    return{
      overlay:true,
      absolute:true,
    };
  }
};
</script>

<style>

</style>