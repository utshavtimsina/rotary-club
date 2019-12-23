<template>
<div>
      <v-card  raised     >
          <v-toolbar md12 >
          <v-spacer></v-spacer>
           <v-app-bar-nav-icon>
            <v-img 
                contain 
                src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/rotary-logo-color-2019-simplified.svg"
                max-width="8rem"
            ></v-img>
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
            <v-card class="" color="grey lighten-4">
            
                    <v-container class="hover" color="#5e717d">
                        <v-layout row class="pa-2 ">
                            <v-flex md2>

                            </v-flex>
                         <v-flex  md8 class=" ">
                                <v-container class="green--text">
                                    <v-layout >
                                        <v-flex md2>
                                             <Span>
                                                About Rotary
                                                
                                            </Span>
                                            
                                            <div  width="100%" class=" content ">
                                                <v-list flat color ="grey lighten-4"
                                                class="text-no-wrap ">
                                                    <v-list-item>
                                                        <v-list-item-title >
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
                                        </v-flex>
                                        <v-flex md2>
                                             <Span>
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
                                        </v-flex>
                                        <v-flex md2>
                                             <Span>
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
                                        </v-flex>
                                        <v-flex md2>
                                             <Span>
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
                                        </v-flex>
                                        <v-flex md2>
                                             <Span>
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
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                               
                                
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
.content{
    transition-property: width;
    transition-delay: 1s;
    display: none;
     
}
.hover:hover .content{
    display :block;
}
</style>