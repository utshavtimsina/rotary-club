<template>
  <div>
    <v-card tile flat>
      <div>
        <v-layout>
          <div style="width:16.67%;height:100px;">
            <v-hover
            v-slot:default="{ hover }"
            >
            <v-card   
            :class="hover ? 'ma-1':''"
            >
            <v-img
            src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-peace-3.jpg?itok=jhkFSLne"
            >
            <v-overlay
            :value="overlay"
            :absolute="absolute"
            >
              Promoting Peace
            </v-overlay>
            </v-img>
            
            </v-card>
            </v-hover>
          </div>
          <div style="width:16.67%;height:100px">
             <v-hover
            v-slot:default="{ hover }"
            >
            <v-card
            :class="hover ? 'ma-1':''"
            
            >
            <v-img
            src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-water-3.jpg?itok=OnzuhnzZ"
            >
            <v-overlay
            :value="overlay"
            :absolute="absolute"
            >
              Providing Clean Water
            </v-overlay>
            </v-img>
            </v-card>
             </v-hover>
          </div>
          <div style="width:16.67%;height:100px">
             <v-hover
            v-slot:default="{ hover }"
            >
            <v-card
            :class="hover ? 'ma-1':''"
            
            >
            <v-img
          src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-mothers-3.jpg?itok=-7-LYlq7"
          >
          <v-overlay
            :value="overlay"
            :absolute="absolute"
            >
              Saving Mothers & Children
            </v-overlay>
          </v-img>
          </v-card>
             </v-hover>
          </div>
          
          <div style="width:16.67%;height:100px">
             <v-hover
            v-slot:default="{ hover }"
            >
            <v-card
            :class="hover ? 'ma-1':''"
            
            >
            <v-img
            src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-education-3.jpg?itok=8yY1H8VK"
            >
            <v-overlay
            :value="overlay"
            :absolute="absolute"
            >
              Supporting Education
            </v-overlay>
            </v-img>
            </v-card>
             </v-hover>
          </div>
          <div style="width:16.67%;height:100px">
            <v-hover
            v-slot:default="{ hover }"
            >
            <v-card
            :class="hover ? 'ma-1':''"
            
            >
            <v-img
            src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-economies-3.jpg?itok=CgIc6V2F"
            >
            <v-overlay
            :value="overlay"
            :absolute="absolute"
            >
              Growing Local Communities
            </v-overlay>
            </v-img>
            </v-card>
            </v-hover>
          </div>
          <div style="width:16.67%;height:100px">
            <v-hover
            v-slot:default="{ hover }"
            >
            <v-card
            :class="hover ? 'ma-1':''"
            
            >

            <v-img
            src="https://www.rotary.org/sites/default/files/styles/w_700/public/other-causes-disease-3.jpg?itok=26lNK9Tj"
            >
            <v-overlay
            :value="overlay"
            :absolute="absolute"
            >
              Fighting Disease
            </v-overlay>
            </v-img>
            </v-card>
            </v-hover>
          </div>
          </v-layout>
      </div>
    </v-card>
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