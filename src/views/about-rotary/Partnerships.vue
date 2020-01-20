<template>
  <div>
          <v-card flat  class="structure" >
          <v-container style="text-align: center;vertical-align: middle;">
              <v-layout column  > 
                  <p class="display-3 white--text text-center mx-auto" style="position:absolute;left:50%;top:50%; transform: translate(-50%,-50%);">
                    Partnerships
                  </p>
              </v-layout>
          </v-container>
      </v-card>
        <v-flex sm12 md10 class="mx-auto mt-10">
      <h1 class="font-weight-light my-5">
              When you partner with Rotary, our 1.2 million members amplify your impact, elevate your brand, advance important causes, improve communities, and gain access to global connections.
          </h1>
      </v-flex>
       <div class="images">
           <v-flex md10 sm12 xs12 class="mx-auto">
            <v-layout row>
                    <v-flex sm6 md4>
                    <v-hover v-slot:default="{hover}">
                    <v-card
                    :elevation="hover ? '21':'0'"
                    :class="hover? 'my-2':'my-5'"
                    class="mx-3 "
                    >
                    <v-img
                    src=" https://www.rotary.org/sites/default/files/styles/w_700/public/new%20shelterbox.jpg?itok=t5DyoLyZ 700w"
                    height="300px"
                    dark
                    >
                    </v-img>
                    <v-list >
                        <v-list-item >
                            <v-list-item-content>
                            <v-list-item-title>
                                <h1 class="text-center font-weight-light">
                                    Disaster relief
                                </h1>
                            </v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                    </v-list>
                        <p class="pa-3 title font-weight-light">
                     Rotary and ShelterBox collaborate to provide emergency shelter and vital supplies to stabilize, protect, and support communities affected by disasters and humanitarian crises.
                        </p>
                     </v-card>
                    </v-hover>
                </v-flex>
                   <v-flex sm6 md4>
                    <v-hover v-slot:default="{hover}">
                    <v-card
                    :elevation="hover ? '21':'0'"
                    :class="hover? 'my-2':'my-5'"
                    class="mx-3"
                    >
                    <v-img
                    src="https://www.rotary.org/sites/default/files/styles/w_700/public/new%20gates.jpg?itok=hWtsrVSf 700w"
                    height="300px"
                    dark
                    >
                    </v-img>
                    <v-list >
                        <v-list-item >
                            <v-list-item-content>
                            <v-list-item-title>
                                <h1 class="text-center font-weight-light">
                                    Polio
                                </h1>
                            </v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                    </v-list>
                        <p class="pa-3 title font-weight-light">
                        Rotary is a leading partner in the Global Polio Eradication Initiative. With help from our partners, the Bill & Melinda Gates Foundation, the World Health Organization, the U.S. Centers for Disease Control and Prevention, and UNICEF, we’ve made the world 99.9 percent polio-free.
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
                    src=" https://www.rotary.org/sites/default/files/styles/w_700/public/partners%20wash%20700x500.jpg?itok=f6o91gPl 700w"
                    height="300px"
                    dark
                    >
                    </v-img>
                    <v-list >
                        <v-list-item >
                            <v-list-item-content>
                            <v-list-item-title>
                                <h1 class="text-center font-weight-light">
                                   Clean water, sanitation, and hygiene
                                </h1>
                            </v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>
                    </v-list>
                        <p class="pa-3 title font-weight-light">
                            To support water and sanitation projects, Rotary collaborates with the U.S. Agency for International Development. Rotary also works with UNICEF to provide technical guidance in the development and implementation of our WASH in Schools Target Challenge.
                        </p>
                     </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
            </v-flex>
        </div>
         <v-card flat  class="structure" style="height:100%; width:100%;" >
             <v-flex md10 class="mx-auto" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">
              <v-layout column style="height:100%; width:100%;" >
                  <v-flex class=" pa-2 ">
                     <p class="text-center white--text font-weight-light">
                         Are you an organization looking to explore a relationship with Rotary?
                     </p>
                     <v-btn outlined class="my-9 " dark style="margin-left:20%;padding:0% 20%">
                         Get Started
                     </v-btn>
                  </v-flex>
                  <v-flex  class=" pa-2"> 
                      <p class="text-center white--text font-weight-light">
                         Are you a Rotary club looking for a partner for a service project?
                     </p> 
                      <v-btn outlined class="my-9" dark style="margin-left:20%;padding:0% 20%">
                         Learn More
                     </v-btn>
                  </v-flex>
              </v-layout>
           </v-flex>
         </v-card>
         <v-flex md10 sm12 xs12 class="mx-auto">
          
            <h1>
                 How you can work with us
             </h1>
               <p class="pa-3 title font-weight-light">
                We offer a variety of partnerships so we can make a bigger difference in the world. 
               </p>
                <h2>
                  Strategic partnerships
                </h2>
                 <p class="pa-3 title font-weight-light">
                 Work with Rotary to design and implement international projects that have measurable impact on the causes we work on and are sustainable for the long term. Learn more

                 </p>
                    <h2>
                  Corporate and foundation partnerships
                </h2>
                 <p class="pa-3 title font-weight-light">
                 Collaborate with us on service projects around the globe or help us find sustainable solutions to significant problems by supporting a Rotary project that matches your organization’s philanthropic mission. Learn more.

                 </p>
                    <h2>
                  Service partnerships
                </h2>
                 <p class="pa-3 title font-weight-light">
                 Help us take on a variety of service projects to increase our impact. Our service partners join us on specific projects that support our causes. Learn more.
                 </p>
                   <h2>
                  Project partnerships
                </h2>
                 <p class="pa-3 title font-weight-light">
                 Was your organization started by a Rotary member, or is it run by one? Rotary works with such organizations to give Rotary and Rotaract clubs project options that help global communities.

                 </p>
                    <h2>
                  Sponsorship opportunities
                </h2>
                 <p class="pa-3 title font-weight-light">
                 Engage with tens of thousands of Rotary members who gather from around the world each year for the Rotary International Convention. We offer sponsorship options that will help you reach our service-focused community leaders. Learn more.
                 </p>
                    <h2>
                 Cause-related marketing
                </h2>
                 <p class="pa-3 title font-weight-light">
                    Customize your cause-related marketing programs to involve your consumers in Rotary’s efforts. We work to establish purchase-triggered donations, point-of-sale campaigns, and other marketing campaigns. To get started on your customized campaign, write to sponsorships@rotary.org or read Cause Marketing Information and Guidelines.
                 </p>
                     <h2>
                  Employee matching gifts
                </h2>
                 <p class="pa-3 title font-weight-light">
                 Reward your employees’ philanthropic interests by matching their donations to The Rotary Foundation so that we can help even more people. Learn more.
                 </p>
                    <h2>
                  Rotary Global Rewards
                </h2>
                 <p class="pa-3 title font-weight-light">
                     Increase your profits while giving back to The Rotary Foundation through our member benefits program. Learn more.
                 </p>
                  <p class="pa-3 title font-weight-light">
                    In addition to Rotary’s partners, clubs and districts have their own relationships at the local level. For entities that have an extensive history of working with Rotarians or Rotaractors, Rotary has a special relationship designation known as collaborating organizations.

                 </p>
                    <h2>
                Collaborating organizations
                </h2>
                 <p class="pa-3 title font-weight-light">
                    Has your organization worked with Rotary members on projects and activities? We want to recognize your work by offering you our collaborating organization designation. This designation is reserved for organizations that have proven experience working with Rotarians and Rotaractors on local or international projects. Learn more.                 </p>
                <v-btn class="primary  " style="margin:0% 40%; padding:3% 5%;">
                    Get Started
                </v-btn>
        </v-flex>
         <v-card flat   style="height:100%; position:relative; overflow:hidden;" class="structure mt-9" >
                <v-layout row style="postion:absolute;" class="mx-auto" >
                    <v-flex></v-flex>
                    <v-flex  md2 sm6 xs6 >
                        <img  width="100%" src="https://www.rotary.org/sites/default/files/styles/w_400/public/Proof-Charity-Navigator_EN.png?itok=aZEU0eYY 400w, https://www.rotary.org/sites/default/files/styles/w_600/public/Proof-Charity-Navigator_EN.png?itok=Gx7gMrsh 600w, https://www.rotary.org/sites/default/files/styles/w_800/public/Proof-Charity-Navigator_EN.png?itok=iZZ5haB6 800w, https://www.rotary.org/sites/default/files/styles/w_1000/public/Proof-Charity-Navigator_EN.png?itok=cIFSxRo5 1000w, https://www.rotary.org/sites/default/files/styles/w_1200/public/Proof-Charity-Navigator_EN.png?itok=II_kVrsB 1200w, https://www.rotary.org/sites/default/files/styles/w_1400/public/Proof-Charity-Navigator_EN.png?itok=B_PZpqJe 1400w, https://www.rotary.org/sites/default/files/styles/w_1600/public/Proof-Charity-Navigator_EN.png?itok=xsN7Et7w 1600w, https://www.rotary.org/sites/default/files/styles/w_1800/public/Proof-Charity-Navigator_EN.png?itok=3HdMwtqu 1800w, https://www.rotary.org/sites/default/files/styles/w_2000/public/Proof-Charity-Navigator_EN.png?itok=5jUQz08z 2000w, https://www.rotary.org/sites/default/files/styles/w_2200/public/Proof-Charity-Navigator_EN.png?itok=4ox-aemj 2200w, https://www.rotary.org/sites/default/files/styles/w_2400/public/Proof-Charity-Navigator_EN.png?itok=qTDxJeXL 2400w" alt="">
                    </v-flex>
                    <v-flex md2 sm6 xs6  >
                        <img  width="100%" src="https://www.rotary.org/sites/default/files/styles/w_400/public/TRF-percentage-spent_EN.png?itok=EJ4Z56zV 400w, https://www.rotary.org/sites/default/files/styles/w_600/public/TRF-percentage-spent_EN.png?itok=iKCWs_la 600w, https://www.rotary.org/sites/default/files/styles/w_800/public/TRF-percentage-spent_EN.png?itok=85HV2IL6 800w, https://www.rotary.org/sites/default/files/styles/w_1000/public/TRF-percentage-spent_EN.png?itok=su9JWIUx 1000w, https://www.rotary.org/sites/default/files/styles/w_1200/public/TRF-percentage-spent_EN.png?itok=HEyTuU49 1200w, https://www.rotary.org/sites/default/files/styles/w_1400/public/TRF-percentage-spent_EN.png?itok=c4abt5VY 1400w, https://www.rotary.org/sites/default/files/styles/w_1600/public/TRF-percentage-spent_EN.png?itok=OfuC3la4 1600w, https://www.rotary.org/sites/default/files/styles/w_1800/public/TRF-percentage-spent_EN.png?itok=t5xa1MHn 1800w, https://www.rotary.org/sites/default/files/styles/w_2000/public/TRF-percentage-spent_EN.png?itok=SInygBI6 2000w, https://www.rotary.org/sites/default/files/styles/w_2200/public/TRF-percentage-spent_EN.png?itok=cKJ-70oP 2200w, https://www.rotary.org/sites/default/files/styles/w_2400/public/TRF-percentage-spent_EN.png?itok=oBSBw8co 2400w" alt="">
                    </v-flex>
                     <v-flex></v-flex>
                </v-layout>
                    <v-layout row class="mx-auto" style="postion:absolute; ">
                    <v-flex md4 sm4 xs4 >
                        <img width="100%" src="https://www.rotary.org/sites/default/files/styles/w_400/public/Partners-CNBC_EN.png?itok=STOguONz 400w, https://www.rotary.org/sites/default/files/styles/w_600/public/Partners-CNBC_EN.png?itok=f8vhZzGz 600w, https://www.rotary.org/sites/default/files/styles/w_800/public/Partners-CNBC_EN.png?itok=ydNK1HgF 800w, https://www.rotary.org/sites/default/files/styles/w_1000/public/Partners-CNBC_EN.png?itok=BItB18wW 1000w, https://www.rotary.org/sites/default/files/styles/w_1200/public/Partners-CNBC_EN.png?itok=9RJdPX72 1200w, https://www.rotary.org/sites/default/files/styles/w_1400/public/Partners-CNBC_EN.png?itok=t5tLOHPO 1400w, https://www.rotary.org/sites/default/files/styles/w_1600/public/Partners-CNBC_EN.png?itok=z-SrOiMh 1600w, https://www.rotary.org/sites/default/files/styles/w_1800/public/Partners-CNBC_EN.png?itok=bSDcrrMt 1800w, https://www.rotary.org/sites/default/files/styles/w_2000/public/Partners-CNBC_EN.png?itok=Xd4uNUIA 2000w, https://www.rotary.org/sites/default/files/styles/w_2200/public/Partners-CNBC_EN.png?itok=c49W9VhR 2200w, https://www.rotary.org/sites/default/files/styles/w_2400/public/Partners-CNBC_EN.png?itok=EwLRQyTs 2400w" alt="">
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                        <img width="100%" src="https://www.rotary.org/sites/default/files/styles/w_400/public/Partners-CharityWatch.png?itok=JqJMxGdx 400w, https://www.rotary.org/sites/default/files/styles/w_600/public/Partners-CharityWatch.png?itok=KSjeCYCd 600w, https://www.rotary.org/sites/default/files/styles/w_800/public/Partners-CharityWatch.png?itok=wdTrXgmi 800w, https://www.rotary.org/sites/default/files/styles/w_1000/public/Partners-CharityWatch.png?itok=iTgYxZF_ 1000w, https://www.rotary.org/sites/default/files/styles/w_1200/public/Partners-CharityWatch.png?itok=1IWR4EDp 1200w, https://www.rotary.org/sites/default/files/styles/w_1400/public/Partners-CharityWatch.png?itok=xNaSYgxw 1400w, https://www.rotary.org/sites/default/files/styles/w_1600/public/Partners-CharityWatch.png?itok=_5s6gEbH 1600w, https://www.rotary.org/sites/default/files/styles/w_1800/public/Partners-CharityWatch.png?itok=4yECFqao 1800w, https://www.rotary.org/sites/default/files/styles/w_2000/public/Partners-CharityWatch.png?itok=JvrEisaF 2000w, https://www.rotary.org/sites/default/files/styles/w_2200/public/Partners-CharityWatch.png?itok=7__xoeWH 2200w, https://www.rotary.org/sites/default/files/styles/w_2400/public/Partners-CharityWatch.png?itok=4HbOvuXV 2400w" alt="">
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                        <img width="100%" src="https://www.rotary.org/sites/default/files/styles/w_400/public/Partners-BBB_EN.png?itok=-CbhPRga 400w, https://www.rotary.org/sites/default/files/styles/w_600/public/Partners-BBB_EN.png?itok=NE_gxpXT 600w, https://www.rotary.org/sites/default/files/styles/w_800/public/Partners-BBB_EN.png?itok=7Q8303pr 800w, https://www.rotary.org/sites/default/files/styles/w_1000/public/Partners-BBB_EN.png?itok=gO3Z6HSp 1000w, https://www.rotary.org/sites/default/files/styles/w_1200/public/Partners-BBB_EN.png?itok=0kYWI2GE 1200w, https://www.rotary.org/sites/default/files/styles/w_1400/public/Partners-BBB_EN.png?itok=-OC63CGc 1400w, https://www.rotary.org/sites/default/files/styles/w_1600/public/Partners-BBB_EN.png?itok=AMv1-mxN 1600w, https://www.rotary.org/sites/default/files/styles/w_1800/public/Partners-BBB_EN.png?itok=N8kOJ9VF 1800w, https://www.rotary.org/sites/default/files/styles/w_2000/public/Partners-BBB_EN.png?itok=XkczrsIl 2000w, https://www.rotary.org/sites/default/files/styles/w_2200/public/Partners-BBB_EN.png?itok=ZSlDOiPD 2200w, https://www.rotary.org/sites/default/files/styles/w_2400/public/Partners-BBB_EN.png?itok=Rhc01p2L 2400w" alt="">
                    </v-flex>
                </v-layout>
        </v-card>
        <v-flex  md10 xs12 sm12 class="mx-auto">
            <h1>
                Our current partners
            </h1>
            <div style="margin:6% 20%;" class="text-center">
                <v-layout  class="ma-4">
                    <v-flex md6>
                         <img  style="display:inline-block" src="https://www.rotary.org/sites/default/files/styles/w_200/public/list-image_AmazonSmile_170px-w_0.png?itok=yotyfbYX 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/list-image_AmazonSmile_170px-w_0.png?itok=cL8RhOBF 400w" alt="">
               
                    </v-flex>
                    <v-flex md56>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> AmazonSmile</p>
                    </v-flex>
                </v-layout >
                  <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src="https://www.rotary.org/sites/default/files/styles/w_200/public/ashoka_0.png?itok=Ib7enfgG 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/ashoka_0.png?itok=fwaqQ5iz 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> Ashoka</p>
                    </v-flex>
                </v-layout>
                      <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src="https://www.rotary.org/sites/default/files/styles/w_200/public/list-image_B%26M-Gates-Foundation_170px-w_0.png?itok=A6d9CCza 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/list-image_B%26M-Gates-Foundation_170px-w_0.png?itok=ZcvG9TXr 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> Bill & Melinda Gates Foundation</p>
                    </v-flex>
                </v-layout>
                      <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src="https://www.rotary.org/sites/default/files/styles/w_200/public/list-image_DollarDays_130px-w.png?itok=RJxwu-hv 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/list-image_DollarDays_130px-w.png?itok=SbO8W0L5 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> DollarDays</p>
                    </v-flex>
                </v-layout>
                      <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src="https://www.rotary.org/sites/default/files/styles/w_200/public/list-image_GiantMicrobes_130px-w.png?itok=U93SP6W_ 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/list-image_GiantMicrobes_130px-w.png?itok=9JwAOdJZ 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> Giantmicrobes</p>
                    </v-flex>
                </v-layout><!--  -->
                 <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src="https://www.rotary.org/sites/default/files/styles/w_200/public/partner%20habitat.jpg?itok=gLCB5iCP 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/partner%20habitat.jpg?itok=MF0FgGAX 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> Habitat for Humanity International</p>
                    </v-flex>
                </v-layout>
                      <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src="https://www.rotary.org/sites/default/files/styles/w_200/public/Partnership%20_Rotary_IEP_lockup_0.jpg?itok=bBdD5NVH 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/Partnership%20_Rotary_IEP_lockup_0.jpg?itok=ThgcckU5 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> Institutes for Economics and Peace</p>
                    </v-flex>
                </v-layout>
                      <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src="https://www.rotary.org/sites/default/files/styles/w_200/public/partner_Mediators-Beyond-Borders.png?itok=0d3mko8X 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/partner_Mediators-Beyond-Borders.png?itok=ULwWSO-q 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> Mediators Beyond Borders International</p>
                    </v-flex>
                </v-layout><!--  -->
                  <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src="https://www.rotary.org/sites/default/files/styles/w_200/public/list-image_Peace-Corps_170px-w_0.png?itok=6iJFARGw 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/list-image_Peace-Corps_170px-w_0.png?itok=UOYS7UNY 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> Peace Corps</p>
                    </v-flex>
                </v-layout>
                      <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src=" https://www.rotary.org/sites/default/files/styles/w_200/public/partner_Shelterbox.png?itok=WGovmAan 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/partner_Shelterbox.png?itok=7JB1ODf_ 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> ShelterBox</p>
                    </v-flex>
                </v-layout>
                      <v-layout class="ma-4" >
                    <v-flex md6>
                         <img  style="display:inline-block" src=" https://www.rotary.org/sites/default/files/styles/w_200/public/list-image_Unicef_170px-w_0.png?itok=Mq89O-iS 200w, https://www.rotary.org/sites/default/files/styles/w_400/public/list-image_Unicef_170px-w_0.png?itok=0uweKARi 400w" alt="">
               
                    </v-flex>
                    <v-flex md6>
                         <p class="pa-3  title font-weight-light" style="display:inline-block"> UNICEF</p>
                    </v-flex>
                </v-layout><!--  -->
                
               
            </div>
            <h1>
                Our current supporters
            </h1>
            <ul class="pa-9">
                <li class="pa-3  title font-weight-light">The Blane Foundation</li>
                <li class="pa-3  title font-weight-light">Fondation Coup de Cœur</li>
                <li class="pa-3  title font-weight-light">Goodeve Foundation</li>
            </ul>
        </v-flex>
        <pagefooter/>
  </div>
</template>

<script>
import pagefooter from '@/components/footer.vue';
export default {
    components:{
        pagefooter,
    },
}
</script>

<style scoped>
    .structure{
    background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-darkblue.png);
    width: 100%;
    padding: 5% 3%;
    position: relative;
    min-height:400px ;
    max-height: 600px;
}
.images{
  background: url(https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg) 50% 0;
}
</style>