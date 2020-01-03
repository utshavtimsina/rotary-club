<template>
  <div style="background:white" class="mb-8 text-center">
    <v-card flat class="structure">
      <v-container style="text-align: center;">
        <v-layout column>
          <p
            class="display-3 my-8 white--text text-center"
            style="width:100%;position: absolute;bottom:8%;left:50%;transform:translate(-50%,-50%);"
          >
            Grants
            <br />
            <v-icon color="white" size="60px" class="chevron">mdi-chevron-down</v-icon>
          </p>
        </v-layout>
      </v-container>
    </v-card>
    <div class="mt-12">
        <v-flex md7 class="mx-auto">
            <p :class="paragraph" class="text-left">
                Rotary members contribute their skills, expertise, and resources to help solve some of the world’s toughest problems. From providing clean water to promoting peace worldwide, <a href="">Rotary Foundation</a> grants bring service project ideas to life.
            </p>
            <div class="mt-8">
                <h1 class="text-left">
                    Are you interested in applying for a grant? You must be a member of a Rotary club to be eligible.
                </h1>
                <div :class="paragraph" class="text-left mt-4">
                <p>
                    <b>Steps to apply for a grant</b>
                </p>
                <ul>
                    <li>
                        Learn about our <a href="">global</a> and district <a href="">grants</a>.
                    </li>
                    <li>
                        Get <a href="">qualified</a>.
                    </li>
                    <li>
                        Start and manage your application at the <a href="">Rotary Grant Center</a> 
                    </li>
                </ul>
                <p :class="paragraph" class="mt-12">
                    In fiscal year 2018, The <a href="">Rotary Foundation</a> provided more than $86 million in grants.
                </p>
                <div class="font-weight-light text-center mt-8" :class="paragraph">
                <p class="mt-8" style="color:#872175">
                   <strong class="display-1"> $10.9mil</strong> <br> in grants given for education and literacy projects
                </p>
                <p class="mt-8" style="color: #018d8d;">
                   <strong class="display-1"> $35.6mil</strong> <br> in grants given for disease prevention and treatment
                </p>
                <p class="mt-8" style="color: #9b1238;">
                    <strong class="display-1">$10.5mil</strong> <br> in grants given for growing local economies
                </p>
                <p class="mt-8" style="color: #0050a2;">
                    <strong class="display-1">$18.7mil</strong> <br> in grants given to water and sanitation projects
                </p>
                </div>
                </div>
            </div>
        </v-flex>
    </div>
  </div>
</template>

<script>
export default {
    data:function()
    {
        return{
      paragraph: "title font-weight-light",
        };
    }
};
</script>

<style>
.structure {
  background-image: url(https://www.rotary.org/sites/default/files/styles/w_2800/public/grant%20hero%202800x1800.jpg?itok=9qx1Mu62);
  background-attachment: fixed;
  background-position: center; /* Center the image */
  background-size: cover; /*Resize the background image to cover the entire container*/
  width: 100%;
  padding: 5% 3%;
  height: 600px;
}
a:hover {
  background-color: #ccf1ff;
}

@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-15px);
  }
}
.chevron {
  animation: bounce 0.8s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
</style>