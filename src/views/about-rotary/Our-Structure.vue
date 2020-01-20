<template>
  <div>

      <v-card flat  class="structure" >
          <v-container>
              <v-layout justify-center="true" > 
                  <p class="display-3 white--text text-center" style="margin-top:10%;">
                      Our Structure
                  </p>
              </v-layout>
          </v-container>
      </v-card>
      
        <v-flex md10 class="mx-auto"> 
        <h1 class="font-weight-light my-5">
            Rotary is made up of three parts: our clubs, Rotary International, and The Rotary Foundation. Together, we work to make lasting change in our communities and around the world.
            
        </h1>
        
        </v-flex>
        <div class="images">
           <v-flex md10 class="mx-auto">

            
            <v-layout row>
                <v-flex sm6 md4>
                    <v-hover v-slot:default="{hover}">
                    <v-card
                    :elevation="hover ? '21':'0'"
                    :class="hover? 'my-2':'my-5'"
                    class="mx-3"
                    >
                    <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_350/public/about%20structure%20clubs%20700x500.JPG?itok=IibYIPt9 350w, https://www.rotary.org/sites/default/files/styles/w_700/public/about%20structure%20clubs%20700x500.JPG?itok=xJVm6A7V 700w"
                    height="300px"
                    dark
                    >
                    </v-img>
                    <v-list >
                        <v-list-item >
                            <v-list-item-content>
                            <v-list-item-title>
                                <h1 class="text-center font-weight-light">
                                    Rotary clubs
                                </h1>
                            </v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                    </v-list>
                        <p class="pa-3 title font-weight-light">
                        Rotary clubs unite dedicated people to exchange ideas, build relationships, and take action.
                        </p>
                     </v-card>
                    </v-hover>
                </v-flex>
                    <v-flex sm6 md4>
                    <v-hover v-slot:default="{hover}">
                    <v-card
                    :elevation="hover ? '21':'0'"
                    :class="hover? 'my-2':'my-5'"
                    class="mx-3 "
                    >
                    <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_350/public/about%20structure%20RI%202%20700x500.jpg?itok=7cY9mPix 350w, https://www.rotary.org/sites/default/files/styles/w_700/public/about%20structure%20RI%202%20700x500.jpg?itok=bZsBPonS 700w"
                    height="300px"
                    dark
                    >
                    </v-img>
                    <v-list >
                        <v-list-item >
                            <v-list-item-content>
                            <v-list-item-title>
                                <h1 class="text-center font-weight-light">
                                    Rotary clubs
                                </h1>
                            </v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                    </v-list>
                        <p class="pa-3 title font-weight-light">
                        Rotary clubs unite dedicated people to exchange ideas, build relationships, and take action.
                        </p>
                     </v-card>
                    </v-hover>
                </v-flex>
                     <v-flex sm6 md4>
                    <v-hover v-slot:default="{hover}">
                    <v-card
                    :elevation="hover ? '21':'0'"
                    :class="hover? 'my-2':'my-5'"
                    class="mx-3 "
                    >
                    <v-img
                    src=" https://www.rotary.org/sites/default/files/styles/w_350/public/about%20structure%20foundation%20700x500.jpg?itok=xlVp0516 350w, https://www.rotary.org/sites/default/files/styles/w_700/public/about%20structure%20foundation%20700x500.jpg?itok=oZfIcmhz 700w"
                    height="300px"
                    dark
                    >
                    </v-img>
                    <v-list >
                        <v-list-item >
                            <v-list-item-content>
                            <v-list-item-title>
                                <h1 class="text-center font-weight-light">
                                    Rotary clubs
                                </h1>
                            </v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                    </v-list>
                        <p class="pa-3 title font-weight-light">
                        Rotary clubs unite dedicated people to exchange ideas, build relationships, and take action.
                        </p>
                     </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
             </v-flex>
        </div>
        <v-container>
            <v-layout column>
             <h1 class="text-center my-8 font-weight-light">
                Learn about our leadership
            </h1>
             <v-btn 
                class="pa-7 blue"
                dark
                outlined
                style="margin:0% 25%;"
            >
                Directors
            </v-btn>
              <v-btn 
                class="pa-7 blue"
                dark
                outlined
                style="margin:1% 25%;"
            >
                Trustees
            </v-btn>
               <v-btn 
                class="pa-7 blue"
                dark
                outlined
                style="margin:0% 25%;"
            >
               Executive Staff
            </v-btn>
         
            </v-layout>
             
        </v-container>
    <pagefooter/>
  </div>

</template>

<script>
import pagefooter from '@/components/footer.vue';
export default {
    components:{
        pagefooter,
    }
}
</script>

<style scoped>

.structure{
    background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-darkblue.png);
    width: 100%;
    margin: auto;
    height: 400px;
}
.images{
   
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg) 50% 0;
}
</style>
