<template>
  <div class="user">
      <v-card class="title red">
          this is title
      </v-card>
      <v-card class="main blue">
         this is main
      </v-card>
      <v-card class="footer purple">
          this is footer
      </v-card>
       <v-card class="header grey">
           this is header
      </v-card>
       <v-card class="sidebar black">
            this is sidebar
      </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .user{
        margin-top: 20%;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-rows: auto 1fr 2fr;
        grid-template-areas: 
        "title title header"
        "main  sidebar header"
        "main footer footer";
        
    }
    .title{
        grid-area: title;
        
    }
     .header{
        grid-area: header;
    }
     .sidebar{
        grid-area: sidebar;
    }
     .footer{
        grid-area: footer;
    }
    .main{
        grid-area: main;
    }
   @media only screen and (max-width: 600px){
       .user{
       
       
        grid-template-rows: auto 4fr 2fr 4fr;
        grid-template-areas: 
       "header header header"
        "main main main"
        "title title sidebar"
        "footer footer footer";
       }  
    
    }
</style>