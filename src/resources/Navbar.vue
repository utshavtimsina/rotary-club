<template>
<div style="z-index:4;">
      <v-card  raised     >
          <v-toolbar md12 >
          <v-spacer></v-spacer>
           <v-app-bar-nav-icon>
               <router-link to="/" flat>
                <v-img 
                    contain 
                    src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/rotary-logo-color-2019-simplified.svg"
                    max-width="8rem"
                ></v-img>
            </router-link>
            </v-app-bar-nav-icon>
         
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
               
              <v-icon  class="body-2">mdi-home-outline</v-icon>
                <span class="body-2" color="#39424a">My Rotary</span>
                <v-divider class="mx-2" vertical inset></v-divider>
                <v-icon  class="body-2" >mdi-map-marker-multiple</v-icon>
                <span  class="body-2" color="#39424a"> Club Finder</span>
                <v-text-field
                    style="width:10px;"
                    height="10"
                    class="ma-2"
                    append-icon="mdi-microphone-outline"
                    flat
                    hide-details
                    label="Search"
                    prepend-inner-icon="mdi-account-search"
                    outlined
                ></v-text-field>
                <a href="#" class="body-1">JOIN</a>
                <v-divider class="ma-2" vertical></v-divider>
                <a href="#" class="body-1"> DONATE</a>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
            </v-toolbar>
            <hr>
            <v-card class="menu-card" color="grey lighten-4">
            
                        <v-container class="hover text-center">
                        <v-layout align-center="true" row class="pa-2">
                         
                         <v-flex>
                                    <div class="" style="display:inline-block;">
                                             <Span>
                                                About Rotary
                                               
                                            </Span>
                                             
                                            <div  class=" content ">
                                                <v-list flat color ="grey lighten-4"
                                                class="text-no-wrap">
                                                    <v-list-item>
                                                        <v-list-item-title  >
                                                            <router-link to="/overview">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                    Overview
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            History
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Structure
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Leaders
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Partners
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                        </div>
                                        <div class=" "  style="display:inline-block;">
                                             <Span  class="ma-9">
                                                About Rotary
                                                
                                            </Span>
                                            
                                            <div  class=" content ">
                                                <v-list flat color ="grey lighten-4"
                                                class="text-no-wrap ">
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Overview
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            History
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Structure
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Leaders
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Partners
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                        </div>
                                        <div class=" "  style="display:inline-block;">
                                             <Span  class="ma-9">
                                                About Rotary
                                                
                                            </Span>
                                            
                                            <div  width="100%" class=" content ">
                                                <v-list flat color ="grey lighten-4"
                                                class="text-no-wrap ">
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Overview
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            History
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Structure
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Leaders
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Partners
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                        </div>
                                       <div class=" "  style="display:inline-block;">
                                             <Span  class="ma-9">
                                                About Rotary
                                                
                                            </Span>
                                            
                                            <div   class=" content ">
                                                <v-list flat color ="grey lighten-4"
                                                class="text-no-wrap ">
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Overview
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            History
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Structure
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Leaders
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Partners
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                       </div>
                                        <div   style="display:inline-block;">
                                             <Span class="ma-9"> 
                                                About Rotary
                                                
                                            </Span>
                                            
                                            <div  width="100%" class=" content ">
                                                <v-list flat color ="grey lighten-4"
                                                class="text-no-wrap ">
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Overview
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            History
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Structure
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Our Leaders
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Partners
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                        </div>
                            </v-flex>
                           
                        </v-layout>
                        </v-container>
                  </v-card>
                </v-card>
         
       
</div>
</template>

<script>
export default {

}
</script>

<style>
a{
    text-decoration: none;
}
/* .hover:hover .content{
    transition:height 400ms;
    height:500px;
    display :block;
} */
.content{
    z-index: 1;
    visibility: hidden;
}
.menu-card:not(hover){
    transition:height 200ms;
    height:55px;
    z-index: 1;
}



.menu-card:hover{
    transition: height 400ms;
    height:500px;

}
.menu-card:hover .content {
    z-index: 1;
    visibility: visible;
}
</style>