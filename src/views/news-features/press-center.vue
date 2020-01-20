<template>
  <div style="margin-top:56px" class="mb-12">
    <firstelement PageName="Press Center">
    </firstelement> 
    <div class="text-center mt-12">
        <p>
            <strong>MEDIA INQUIRIES</strong>
        </p>
        <div class="mt-12">
        <p>
            Chanele Williams
        </p>
        <p>
            +1-847-866-3466
        </p>
        <a href="">chanele.williams@rotary.org</a>
        </div>
        <v-card class="mt-12 page-content pt-12 pb-12" flat tile>
            <v-layout row >
                <v-flex></v-flex>
                <v-flex class="mx-auto mr-3" md3>
                    <v-hover
                    v-slot:default="{hover}"
                    >
                    <v-card tile flat style="height:100%" class="pb-4 img-card"
                    :elevation="hover? '12':'0'"
                    >
                        <v-img
                        src="https://www.rotary.org/sites/default/files/styles/w_700/public/rotary%20fact%20sheet_700x500.jpg?itok=v4152OOH 700w"
                        >
                        </v-img>
                        <div class="pa-4">
                        <p class="title">
                            Rotary fact sheet
                        </p>
                        <p class="title font-weight-light">
                            Basic information on who we are and what we do.
                        </p>
                        <a href="">Learn More></a>
                        </div>
                    </v-card>
                    </v-hover>
                </v-flex>
                <v-flex mx-auto md3 class="ml-3">
                    <v-hover
                    v-slot:default="{hover}"
                    >
                    <v-card tile flat style="height:100%" class="pb-4 img-card"
                    :elevation="hover? '12':'0'"
                    >
                        <v-img
                        src="https://www.rotary.org/sites/default/files/styles/w_700/public/polio%20fact%20sheet_700x500.jpg?itok=NXct0YFq 700w"
                        >
                        </v-img>
                        <div class="pa-4">
                        <p class="title">
                            Rotary and polio fact sheet
                        </p>
                        <p class="title font-weight-light">
                            Eradicating polio remains our No. 1 priority.
                        </p>
                        <a href="">Learn More></a>
                        </div>
                    </v-card>
                    </v-hover>
                </v-flex>
                <v-flex></v-flex>
            </v-layout>
            <v-layout row class="mt-12 text-left">
                <v-flex></v-flex>
                <v-flex md3 class="mx-auto mr-3 press-release">
                    <v-hover
                    v-slot:default="{hover}"
                    >
                <v-card flat 
                tile 
                class="img-card pa-4" 
                style="height:100%;border-top: 2px solid #018D8D;"
                :elevation="hover? '12':'0'"
                >
                    <p class="subtitle-2 title-press-release">
                        <strong>PRESS RELEASE</strong>
                    </p>
                    <h3 class="font-weight-light">
                        Rotary provides millions in polio funding as wild poliovirus type 3 is eradicated
                    </h3>
                    <p class="mt-8 font-weight-light">
                        Press Release | 30-Oct-2019
                    </p>
                </v-card>
                    </v-hover>
                </v-flex>
                <v-flex md3 class="mx-auto ml-3 mr-3 press-release">
                <v-hover
                    v-slot:default="{hover}"
                    >
                <v-card flat 
                    tile 
                    class="img-card pa-4" 
                    style="height:100%;border-top: 2px solid #018D8D;"
                    :elevation="hover? '12':'0'"
                >
                    <p class="subtitle-2 title-press-release">
                        <strong>PRESS RELEASE</strong>
                    </p>
                    <h3 class="font-weight-light">
                        Rotary and ShelterBox celebrate the power of partnership
                    </h3>
                    <p class="mt-8 font-weight-light">
                        Press Release | 20-Jun-2019
                    </p>
                </v-card>
                </v-hover>
                </v-flex>
                <v-flex md3 class="mx-auto mr-3 ml-3 press-release">
                <v-hover
                    v-slot:default="{hover}"
                    >
                <v-card flat 
                    tile 
                    class="img-card pa-4" 
                    style="height:100%;border-top: 2px solid #018D8D;"
                    :elevation="hover? '12':'0'"
                >
                    <p class="subtitle-2 title-press-release">
                        <strong>PRESS RELEASE</strong>
                    </p>
                    <h3 class="font-weight-light">
                        Rotary’s 110th annual convention concludes
                    </h3>
                    <p class="mt-8 font-weight-light">
                        Press Release | 07-Jun-2019
                    </p>
                </v-card>
                </v-hover>
                </v-flex>
                <v-flex></v-flex>
               </v-layout>
        <v-layout row>
            <v-flex md9 class="mx-auto">
            <div class="mt-4 text-right">
                <strong>
                    <a href="">More press releases</a>
                </strong>
            </div>
            </v-flex>
            </v-layout>
         
        </v-card>
    </div>
  </div>
</template>

<script>
import firstelement from "@/components/first-element.vue"
export default {    
components: {
    firstelement,
}
}
</script>

<style scoped>
.first-element {
  background: url("https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/geo-darkblue.png");
  height: 300px;
}
.centered-para {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.page-content{
    background: url('https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg') 50% 0;
}

.img-card:hover{
    transform:translateY(-5px);
}

.title-press-release{
    color:#018D8D;
}
</style>