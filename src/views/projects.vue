<template>
  <div style="margin:56px;text-align:center">
      <v-card>
          <div style="width:60%;display:inline-block">
          <p class="display-1 mx-auto">
              Are you looking for a way to make a difference in your community or communities around the world? There’s a project happening that needs you.
          </p>
          <p class="text-left title">
              We use our knowledge of local issues to identify areas of need, then apply our expertise and diverse perspectives to find a solution. Rotary members likely are working in your community right now to feed the hungry, tutor disadvantaged children, maintain parks and playgrounds, and much more. You can help.
          </p>
          </div>
      <!-- Carousel -->
    <v-carousel style="width:31%;" class="mx-auto" hide-delimiters height="100%">
      <v-carousel-item v-for="(item,i) in items" :key="i">
        <v-sheet height="100%" width="100%" color="white">
            <div>
                <v-img
                width="100%"
                height="40%"
                :src=item.src
                >
                </v-img>  
            </div>
          <v-sheet :color=item.color tile class="text-center pa-2">
              {{item.ribbon}}
          </v-sheet>
          <v-sheet tile class="text-left black--text pa-6 subtitle-1" color="white">
              {{item.content}}
          </v-sheet>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    </v-card>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items:[
          {
          src:'https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20projects%20Navajo%20700x700_1.JPG?itok=c7d64EE9 700w',
          ribbon:'LIGHTING THE WAY TO A BETTER LIFE',
          content:'Since the installation of more than 175 solar lights, families living on the Navajo Reservation in Arizona, USA, can now read, work, and study long after the sun sets.',
          color:'#019fcb',
          },
          {
          src:'https://www.rotary.org/sites/default/files/styles/w_700/public/the-rotarian-upfront-may-2016_700x700.jpg?itok=lLyzeWDD 700w',
          ribbon:'TEACHING STUDENTS INDEPENDENCE',
          content:'A mentoring project at the Andong Yeongmyeong School in Korea is preparing students with autism and intellectual and emotional disabilities for careers in horticulture.',
          color:'#018d8d'
          },
          {
          src:'https://www.rotary.org/sites/default/files/styles/w_700/public/GI%20projects%20Ghana%20700x700%20-%20Copy.jpg?itok=yjPqXr75 700w',
          ribbon:'A PIPELINE TO CLEAN WATER',
          content:'Working with local community leaders, Rotary clubs piped clean water to remote villages in Ghana, freeing women and children from spending hours searching for and fetching water.',
          color:'#9b1238'
          }
      ]
    };
  }
};
</script>

<style>
</style>