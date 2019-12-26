<template>
<div class="navbar">
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
            <v-card  class="menu-card caption px-9 py-2" color="grey  lighten-4">
            
                        <v-container class="hover ">
                        <v-layout row >
                         
                         <v-flex >
                                    <div class=" " style="display:inline-block;">
                                             <Span >
                                                About Rotary
                                            </Span>
                                             
                                            <div  class="content caption ">
                                                <v-list flat color ="grey lighten-4"
                                                class=" caption">
                                                    <v-list-item>
                                                        <v-list-item-title  >
                                                            <router-link to="/overview">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption">
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
                                                               <router-link to="/history">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                   History
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            <router-link to="/our-structure">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn class="caption"  depressed flat >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                  Our Structure
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            <router-link to="/rotary-foundation">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                 Our Foundation
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link> 
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/our-leaders">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                 Our Leaders
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                     <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/diversity-equity-and-inclusion">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption" >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                Diversity, Equity, and Inclusion
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                             <router-link to="/financials">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                  Financials
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Partners
                                                        </v-list-item-title >
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                        </div>
                                        <div class=" " style="display:inline-block;">
                                             <Span >
                                                About Rotary
                                            </Span>
                                             
                                            <div  class="content caption ">
                                                <v-list flat color ="grey lighten-4"
                                                class=" caption">
                                                    <v-list-item>
                                                        <v-list-item-title  >
                                                            <router-link to="/overview">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption">
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
                                                               <router-link to="/history">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                   History
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            <router-link to="/our-structure">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn class="caption"  depressed flat >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                  Our Structure
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/our-leaders">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                 Our Leaders
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                     <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/diversity-equity-and-inclusion">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption" >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                Diversity, Equity, and Inclusion
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Partners
                                                        </v-list-item-title >
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                        </div>
                                        <div class=" " style="display:inline-block;">
                                             <Span >
                                                About Rotary
                                            </Span>
                                             
                                            <div  class="content caption ">
                                                <v-list flat color ="grey lighten-4"
                                                class=" caption">
                                                    <v-list-item>
                                                        <v-list-item-title  >
                                                            <router-link to="/overview">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption">
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
                                                               <router-link to="/history">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                   History
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            <router-link to="/our-structure">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn class="caption"  depressed flat >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                  Our Structure
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/our-leaders">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                 Our Leaders
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                     <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/diversity-equity-and-inclusion">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption" >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                Diversity, Equity, and Inclusion
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Partners
                                                        </v-list-item-title >
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                        </div>
                                        <div class=" " style="display:inline-block;">
                                             <Span >
                                                About Rotary
                                            </Span>
                                             
                                            <div  class="content caption ">
                                                <v-list flat color ="grey lighten-4"
                                                class=" caption">
                                                    <v-list-item>
                                                        <v-list-item-title  >
                                                            <router-link to="/overview">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption">
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
                                                               <router-link to="/history">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                   History
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            <router-link to="/our-structure">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn class="caption"  depressed flat >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                  Our Structure
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/our-leaders">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                 Our Leaders
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                     <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/diversity-equity-and-inclusion">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption" >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                Diversity, Equity, and Inclusion
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Partners
                                                        </v-list-item-title >
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                        </div>
                                        <div class=" " style="display:inline-block;">
                                             <Span >
                                                About Rotary
                                            </Span>
                                             
                                            <div  class="content caption ">
                                                <v-list flat color ="grey lighten-4"
                                                class=" caption">
                                                    <v-list-item>
                                                        <v-list-item-title  >
                                                            <router-link to="/overview">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption">
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
                                                               <router-link to="/history">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                   History
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            <router-link to="/our-structure">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn class="caption"  depressed flat >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                  Our Structure
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/our-leaders">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                 Our Leaders
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                     <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/diversity-equity-and-inclusion">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption" >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                Diversity, Equity, and Inclusion
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Partners
                                                        </v-list-item-title >
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Careers
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </div>
                                        </div>
                                        <div class=" " style="display:inline-block;">
                                             <Span >
                                                About Rotary
                                            </Span>
                                             
                                            <div  class="content caption ">
                                                <v-list flat color ="grey lighten-4"
                                                class=" caption">
                                                    <v-list-item>
                                                        <v-list-item-title  >
                                                            <router-link to="/overview">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption">
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
                                                               <router-link to="/history">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                   History
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                            <router-link to="/our-structure">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn class="caption"  depressed flat >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                  Our Structure
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Our Foundation
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/our-leaders">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat  class="caption">
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                 Our Leaders
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                     <v-list-item>
                                                        <v-list-item-title>
                                                             <router-link to="/diversity-equity-and-inclusion">
                                                                <v-hover v-slot:default="{ hover }">
                                                                    <v-btn   depressed flat class="caption" >
                                                                        <v-icon v-if="hover" class="title transition-fast-in-fast-out"> 
                                                                            mdi-arrow-right-drop-circle-outline
                                                                        </v-icon>
                                                                        <v-icon  class="title white--text " v-else >
                                                                          mdi-check-circle-outline
                                                                        </v-icon>
                                                                Diversity, Equity, and Inclusion
                                                                </v-btn>
                                                                </v-hover>
                                                            </router-link>
                                                            
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Financials
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Partners
                                                        </v-list-item-title >
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
                                                            Membership
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item>
                                                        <v-list-item-title class="caption">
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
import ResizeText from 'vue-resize-text'
export default {
    directives: {
        ResizeText
 },
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
.navbar{
     z-index: 4;
}
.content{
    opacity: 0;
}
.menu-card:not(hover){
    transition:height 200ms;
    height:55px;
    overflow: hidden;
    z-index: 4;
    position: absolute;
    width: 100%;
}



.menu-card:hover{
    transition: height 400ms linear;
    height:530px;

}
.menu-card:hover .content {
     transition: opacity 800ms ease-in;
    /* /z-index: 1; */
   
    opacity: 1;
}
</style>