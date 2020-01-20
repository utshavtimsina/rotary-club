<template>
    <v-card class="first-element text-center" tile flat>
      <p class="white--text display-4 centered-para">{{PageName}}</p>
    </v-card>
  
</template>

<script>
export default {
  props: {
    PageName: String
  }
};
</script>

<style>
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
</style>