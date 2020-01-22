<template>
  <div class="text-center mt-12">
    <v-container>
      <v-card flat tile>
        <h1 class="text-left pa-4" style="color:#00246C">Profile</h1>
        <div class="text-left pa-4">
          <a class="pr-4 font-weight-bold tabs" href="#">Profile</a>
          <a class="pr-4 font-weight-bold tabs" href>Account Settings</a>
          <a class="pr-4 font-weight-bold tabs" href>Donor Self-Service</a>
        </div>
        <div
          class="mt-4 text-left"
          style="background-color:#edf0ee;border-top:1px solid #b3b2b1; border-bottom:1px solid #b3b2b1"
        >
          <div class="pt-2">
            <v-divider vertical class="mx-4 mr-2"></v-divider>
            <a href style="color:#00246C">View your public profile</a>
          </div>
          <div class="pa-4">
            <p>
              Your privacy is important to Rotary. You can control what data is viewable and searchable by other members of the My Rotary community by clicking on the lock icon by each section. Rotary’s privacy policy can be found at
              <a
                href
                class="blue--text"
              >https://my.rotary.org/en/privacy-policy</a>.
              You may object to the use of your personal data at any time by sending a message to
              <a href class="blue--text">RotarySupportCenter@rotary.org</a>.
            </p>
          </div>
        </div>
        <!-- profile info section started -->
        <div style="border-bottom:1px solid #b3b2b1">
        <v-layout row >
          <v-flex md4 class="text-left pb-4"
          style="border-right:1px solid #b3b2b1"
          >
            <h2 class="grey--text ml-6 mt-4">Profile Picture</h2>
            <v-icon
            size="300px" 
            >
            mdi-account
            </v-icon>
            <br>
            <v-btn
            class="ml-12 btn"
            color="#FEBD11"
            >
           <b> ADD</b>
            </v-btn>
          </v-flex>
          <v-flex md4 class="text-left pl-6">
              <br>
              <a href="" class="blue--text font-weight-bold">Individual Contribution Form</a> <br><br>
              <a href="" class="blue--text font-weight-bold"> Rotary Workgroups</a> <br><br>
              <a href="" class="blue--text font-weight-bold"> Recommendations</a> <br><br>

          </v-flex>
          <v-flex md4 class="text-left pl-6">
              <br>
              <a href="" class="blue--text font-weight-bold">My Invitations</a> <br><br>
              <a href="" class="blue--text font-weight-bold"> Credit card opt-out (U.S. & Canada)</a> <br><br>
              <a href="" class="blue--text font-weight-bold"> Donor History Report</a> <br><br>
          </v-flex>
        </v-layout>
        </div>
        <!-- profile info section ended -->
        <!-- contact info started -->
        <div style="border-bottom:1px solid #b3b2b1" class="pb-4">
                <h2 class="pl-5 text-left pt-4">Contact Information</h2>
        <v-layout row>
            <v-flex md4 class="text-left mt-4">
                <div class="pl-8">
                    <h3 class="pt-4 pb-4 heading">
                    Addresses
                </h3>
                <p class="font-weight-bold">
                    Home-primary
                </p>
                <p>
                    No Address Available
                </p>
                <p>
                    Kathmandu, 44600
                </p>
                <p>
                    United States
                </p>
                <a href=""><b>Edit</b></a><br><br>
                <v-btn color="#FEBD11">
                   <b> ADD </b>
                </v-btn>
                </div>
            </v-flex>
            <v-flex md4 class="text-left mt-4">
                <h3 class="heading pt-4">
                    Phones
                </h3>
                <v-btn color="#FEBD11">
                   <b> ADD</b>
                </v-btn>
            </v-flex>
            <v-flex md4 class="text-left mt-4">
                <h3 class="heading pt-4 mb-4">
                    Email
                </h3>
                <p class="font-weight-bold">
                    business-primary
                </p>
                <p>
                    rockbrett03@gmail.com
                </p>
                <br>
                <a href=""><b>Edit</b></a><br><br>
                <v-btn color="#FEBD11">
                   <b> ADD</b>
                </v-btn>
            </v-flex>
        </v-layout>
        </div>
        <!-- contact info ended -->
        <!-- rotary resume started -->
        <div style="border-bottom:1px solid #b3b2b1">
            <h2 class="pl-5 text-left pt-4">Rotary Resume</h2>
            <v-layout row>
            <v-flex md4 class="text-left mt-4">
                <div class="pl-8">
                    <h3 class="pt-4 pb-4 heading">
                    Basic Information
                </h3>
                <p>
                    <span style="color:grey">
                   <b> Club Name</b>
                    </span> <br>
                    <span style="color:grey">None Entered</span>
                </p>
                <p>
                    <span style="color:grey">
                   <b> District</b>
                    </span> <br>
                    <span style="color:grey">None Entered</span>
                </p>
                <p>
                    <span style="color:grey">
                   <b> Current Rotary Role </b>
                    </span> <br>
                    <span style="color:grey">None Entered</span>
                </p>
                </div>
            </v-flex>
            <v-flex md4 class="text-left mt-4">
                <h3 class="heading pt-4">
                    Rotary Foundation Recongnition
                </h3>
                <p style="color:grey">
                    None Entered
                </p>
            </v-flex>
            <v-flex md4 class="text-left mt-4">
                <h3 class="heading pt-4 mb-4">
                    Sponsorship History
                </h3>
            </v-flex>
        </v-layout>
        </div>
        <!-- rotary resume ended -->
        <!-- Professional info started -->
        <div style="border-bottom:1px solid #b3b2b1" class="pb-4">
             <h2 class="pl-5 text-left pt-4">Professional</h2>
            <v-layout row>
            <v-flex md4 class="text-left mt-4">
                <div class="pl-8">
                    <h3 class="pt-4 heading" style="opacity:0.5">
                    Occupation
                </h3>
                <p style="color:grey">
                None Entered
                </p>
                <v-btn color="#FEBD11">
                   <b> ADD</b>
                </v-btn>
            </div>
            </v-flex>
            <v-flex md4 class="text-left mt-4">
                <h3 class="heading pt-4" style="opacity:0.5">
                    Employer Name
                </h3>
                <p style="color:grey">
                    None Entered
                </p>
            </v-flex>
            <v-flex md4 class="text-left mt-4">
                <h3 class="heading pt-4" style="opacity:0.5">
                    Current Position
                </h3>
                <p style="color:grey">
                    None Entered
                </p>
            </v-flex>
        </v-layout>
        </div>
        <!-- Professional info ended -->
        <!-- Programs section started -->
        <div class="text-left pb-4" style="border-bottom:1px solid #b3b2b1">
            <div class="ml-5">
            <h2 class="pt-4 pb-2">
                Programs
            </h2>
            <p>
                Expand your My Rotary profile by showing your participation in different Rotary programs. Please only include programs you directly participated in; do not include programs where you served as a Rotarian adviser, counselor, sponsor, chair, or host.
            </p>
            <p>
                None Entered
            </p>
            <v-btn color="#FEBD11">
                   <b> ADD</b>
                </v-btn>
            </div>
        </div>
        <!-- Programs section ended -->
        <!-- Skills and interests section started -->
        <div class="text-left pb-4" style="border-bottom:1px solid #b3b2b1">
            <div class="ml-5">
            <h2 class="pt-4 pb-2">
                Skills and Interests
            </h2>
            <p>
                Share this information and let others with similar skills and interests connect with you.
            </p>
            <p>
                None Entered
            </p>
            <v-btn color="#FEBD11">
                   <b> ADD</b>
                </v-btn>
            </div>
        </div>
        <!-- Skills and interests section ended -->
        <!-- Personal section started -->
         <div class="pb-4">
            <h2 class="pl-5 text-left pt-4">Personal</h2>
            <v-layout row>
            <v-flex md4 class="text-left mt-4">
                <div class="pl-8">
                    <h3 class="pt-4 pb-4 heading">
                    Name
                </h3>
                <p>
                    Ashish Bista
                </p>
                <h3>
                    Gender
                </h3>
                <p>
                    Male
                </p>
                <v-btn class="white--text" color="#00246c">
                    Edit
                </v-btn>
                </div>
            </v-flex>
            <v-flex md4 class="text-left mt-4">
                <h3 class="heading pt-4">
                    About Me
                </h3>
                <v-btn class="white--text" color="#00246c">
                   <b> EDIT</b>
                </v-btn>
            </v-flex>
            <v-flex md4 class="text-left mt-4">
                <h3 class="heading pt-4" style="opacity:0.5">
                    Date of Birth
                </h3>
                <p style="opacity:0.5">
                    None entered
                </p>
                <v-btn class="white--text" color="#00246c">
                    <b>EDIT</b>
                </v-btn>
            </v-flex>
        </v-layout>
         </div>
        <!-- Personal section ended -->
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs {
  color: grey;
}
.tabs:hover {
  color: #00246c;
  background-color: unset;
}
.heading{
    color:#00246c
}
</style>