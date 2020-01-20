<template>
  <div class="navbar" style="width:100%;position:relative;">
    <v-card raised>
      <v-toolbar >
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon>
          <router-link to="/" flat>
            <v-img
              src="https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/rotary-logo-color-2019-simplified.svg"
              max-width="8rem"
            ></v-img>
          </router-link>
        </v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-icon class="body-2">mdi-home-outline</v-icon>
        <span class="body-2" color="#39424a">My Rotary</span>
        <v-divider class="mx-2" vertical inset></v-divider>
        <v-icon class="body-2">mdi-map-marker-multiple</v-icon>
        <span class="body-2" color="#39424a">Club Finder</span>
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
        <a href="#" class="body-1">DONATE</a>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <hr />
      <v-card
        class="menu-card caption px-9 py-2"
        @mouseenter="updateHoverState(true)"
        @mouseleave="updateHoverState(false)"
        :style="styleObject"
        color="grey  lighten-4"
      >
        <v-layout class="text-center my-2" row>
          <v-flex>
            <div style="display:inline-block;">
              <Span>About Rotary</Span>
              <div class="content caption">
                <v-list
                  dense
                  shaped
                  color="grey lighten-4 text-wrap"
                  style="max-width:15rem;"
                >
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/overview">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title" v-else>mdi-check-circle-outline</v-icon>Overview
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/history">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed class="overline" @click="btnClicked"
                          style="text-transform:none"
                          >
                            <v-icon
                            
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>History
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/our-structure">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn class="overline" depressed @click="btnClicked">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Our Structure
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/rotary-foundation">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Our Foundation
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/our-leaders">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Our Leaders
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/diversity-equity-and-inclusion">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Diversity, Equity,
                            <br />and Inclusion
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption">
                      <router-link to="/financials">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Financials
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption">
                      <router-link to="/partnerships">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Partners
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="overline">
                      <router-link to="/membership">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Memberships
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption">
                      <router-link to="/careers">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Careers
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </div>
            <!-- Get involved -->
            <div style="display:inline-block;">
              <Span>Get Involved</Span>
              <div class="content caption">
                <v-list
                  dense
                  shaped
                  color="grey lighten-4 text-wrap"
                  style="max-width:15rem;text-transform: lowercase;"
                >
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/get-involved/overview">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Overview
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/join">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed class="overline" @click="btnClicked">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Join
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/get-involved/rotary-clubs">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn class="overline" depressed @click="btnClicked">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Rotary Clubs
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/get-involved/interact-clubs">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Interact Clubs
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/get-involved/rotaract-clubs">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Rotaract club
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/projects">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Projects
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption">
                      <router-link to="/partnerships">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Partnerships
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="overline"></v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
              <!-- next navbar item -->
            </div>
            <div style="display:inline-block;">
              <Span>Our Cause</Span>
              <div class="content caption">
                <v-list
                  dense
                  shaped
                  color="grey lighten-4 text-wrap"
                  style="max-width:15rem;text-transform: lowercase;"
                >
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/our-cause/overview">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Overview
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/our-cause/ending-polio">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed class="overline" @click="btnClicked">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Ending Polio
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/our-cause/promoting-peace">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn class="overline" depressed @click="btnClicked">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Promoting peace
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/our-cause/fighting-disease">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Fighting disease
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/our-cause/providing-clean-water">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Providing clean water
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/our-cause/supporting-education">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Supporting Education
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption">
                      <router-link to="/our-cause/saving-mothers-and-children">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Saving Mothers
                            <br />and-children
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption">
                      <router-link to="/our-cause/growing-local-economies">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Growing local economies
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="overline">
                      <router-link to="/our-cause/disaster-response">
                        <v-hover v-slot:default="{ hover }">
                          <v-btn depressed @click="btnClicked" class="overline">
                            <v-icon
                              v-if="hover"
                              class="title transition-fast-in-fast-out"
                            >mdi-arrow-right-drop-circle-outline</v-icon>
                            <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Disaster response
                          </v-btn>
                        </v-hover>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                  
                </v-list>
              </div>
            </div>
            <!-- our programs -->
            <div style="display:inline-block;">
              <Span>Our Programs</Span>
              <div class="content caption">
                <v-list
                  dense
                  shaped
                  color="grey lighten-4 text-wrap"
                  style="max-width:15rem;text-transform: lowercase;"
                >
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/our-programs">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Overview
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/our-programs/youth-programs">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Youth programs
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/our-programs/rotary-youth-leadership-awards">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Rotary youth <br> leadership-awards
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/our-programs/youth-exchanges">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Youth exchanges
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption">
                      <router-link to="/our-programs/peace-fellowships">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Peace fellowships
                            </v-btn>
                          </v-hover>
                        </router-link>
                    </v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption">
                          <router-link to="/our-programs/rotary-community-corps">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Rotary community corps
                            </v-btn>
                          </v-hover>
                        </router-link>
                    </v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption">
                          <router-link to="/our-programs/grants">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>grants
                            </v-btn>
                          </v-hover>
                        </router-link>
                    </v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption">
                          <router-link to="/our-programs/new-generations-service-exchange">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>new generations <br> service exchange
                            </v-btn>
                          </v-hover>
                        </router-link>
                    </v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption">
                          <router-link to="/our-programs/scholarships">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>scholarships
                            </v-btn>
                          </v-hover>
                        </router-link>
                    </v-list-item-title>
                  </v-list-item>
                     <v-list-item>
                    <v-list-item-title class="caption">
                          <router-link to="/our-programs/friendship-exchange">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon> friendship exchange
                            </v-btn>
                          </v-hover>
                        </router-link>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </div>
            <!-- News & Features -->
            <div style="display:inline-block;">
              <Span>News & Features</Span>
              <div class="content caption">
                <v-list
                  dense
                  shaped
                  color="grey lighten-4 text-wrap"
                  style="max-width:15rem;text-transform: lowercase;"
                >
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/news-features">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>All News & Features
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/news-features/press-center">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Press Center
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/news-features/social-media">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Social Media
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/news-features/virtual-reality">
                          <v-hover v-slot:default="{ hover }">
                            <v-btn depressed class="overline" @click="btnClicked">
                              <v-icon
                                v-if="hover"
                                class="title transition-fast-in-fast-out"
                              >mdi-arrow-right-drop-circle-outline</v-icon>
                              <v-icon class="title white--text" v-else>mdi-check-circle-outline</v-icon>Virtual Reality
                            </v-btn>
                          </v-hover>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                    <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="caption"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      button: {
        transition: "height 400ms",
        height: "55px",
        transitionHover: "height 1s",
        heightHover: "500px"
      },
      hoverState: false
    };
  },
  methods: {
    btnClicked() {
      this.hoverState = false;
    },
    updateHoverState(isHover) {
      this.hoverState = isHover;
    }
  },
  computed: {
    styleObject() {
      var modifier = "";
      if (this.hoverState) modifier = "Hover";

      return {
        transition: this.button["transition" + modifier],
        height: this.button["height" + modifier]
      };
    }
  }
};
/*  $(".menu-card").hover(function(){
        alert("hoverd");
    
    }); */
</script>

<style>
a {
  text-decoration: none;
}
.navbar {
  z-index: 4;
}
.content {
  transition: opacity 800ms ease-out;
  opacity: 0;
}
.menu-card:not(hover) {
  transition: height 1s;
  overflow: hidden;
  z-index: 4;
  position: absolute;
  width: 100%;
}
.menu-card:hover .content {
  transition: opacity 800ms ease-in;
  /* /z-index: 1; */

  opacity: 1;
}
v-btn{
  text-transform:capitalize;
  background-color: red;
}
</style>