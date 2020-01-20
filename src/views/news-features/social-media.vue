<template>
  <div class="main-div">
    <firstelement PageName="Social Media"></firstelement>
    <div class="mb-12" id="page-content">
      <v-container>
        <div class="pt-12">
          <h2>Follow Us</h2>

          <v-layout row v-for="(media,i) in medias" :key="i" class="mt-12 ml-12 text-left">
            <v-flex md2>
              <v-img :src="media.img" height="130px" width="130px" class="ml-12"></v-img>
            </v-flex>
            <v-flex md7>
              <h2>{{media.title}}</h2>
              <div class="pt-4 title font-weight-regular">
                <ul style="list-style:none;padding:0">
                  <li v-for="(links,j) in media.src" :key="j">
                    <a href>{{links}}</a>
                  </li>
                </ul>
              </div>
              <div v-if="i===3">
                <hr class="mt-8 mb-8" />
                <p
                  class="title font-weight-regular"
                >Note: By posting content on Rotary International's social media pages, you consent to its use by Rl.</p>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </div>
    <v-container>
      <div class="social-media-posts">
        <p class="title">Social media posts from Rotary International</p>
        <iframe
          src="https://embed.miappi.com/embed/rotaryinternational"
          id="miappi-iframe"
          seamless="true"
          allowtransparency="true"
          allow="autoplay"
          style="border-width: 0px; padding: 0px; overflow: hidden; width: 100%; height: 2845px; display: block;"
        ></iframe>
      </div>
    </v-container>

    <div class="wrapper">
      <div
        class="grid-test"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore consequuntur adipisci harum. Laboriosam laborum aliquid numquam enim beatae repellat perferendis. Molestiae perspiciatis dolore vel similique obcaecati beatae facere at inventore optio distinctio accusantium, vero minima itaque laudantium molestias impedit nulla! Recusandae excepturi earum tempore voluptas molestias dolor in temporibus.</div>
      <div class="overlap">this is a grid overlap test</div>
    </div>
  </div>
</template>

<script>
import firstelement from "@/components/first-element.vue";
export default {
  components: {
    firstelement
  },
  data: function() {
    return {
      medias: [
        {
          img:
            "https://www.rotary.org/sites/default/files/styles/w_400/public/circle-facebook-130x130-019FCB.png?itok=lJ-7rZ8U 400w",
          title: "Facebook",
          src: [
            "Rotary International",
            "End Polio Now",
            "Rotaract",
            "Interact",
            "Rotary Peace Centers",
            "Rotary International President",
            "Rl General Secretary John Hewko"
          ]
        },
        {
          img:
            "https://www.rotary.org/sites/default/files/styles/w_400/public/circle-twitter-130x130-019FCB.png?itok=S7xFaJUU 400w",
          title: "Twitter",
          src: [
            "Rotary International",
            "End Polio Now",
            "Rotaract",
            "Rl General Secretary John Hewko"
          ]
        },
        {
          img:
            "https://www.rotary.org/sites/default/files/styles/w_400/public/circle-linkedin-130x130-019FCB.png?itok=VZc9YN16 400w",
          title: "LinkedIn",
          src: [
            "Rotary International",
            "Official Rotary Group",
            "Rotary Reconnect Group",
            "Rotary Peace Fellowships Group",
            "Rotary Youth Exchange Group"
          ]
        },
        {
          img: "",
          title: "Other Social Sites",
          src: [
            "Instagram",
            "YouTube",
            "Snapchat",
            "SlideShare",
            "Vimeo",
            "Miappi"
          ]
        }
      ],
      startIndex: 0,
      endIndex: 3,
      noOfCards: 3,
      noOfFlex: 1,
      postsFlex: [],
      itemIndex: 0,
      news_features: [
        {
          title: "Feature1",
          content: "Hoops on the Hudson",
          date: "01-Nov-2019"
        },
        {
          title: "Press Release2",
          content:
            "Toastmasters and Rotary partner to help members grow professionally and make a difference in their communities",
          date: "07-Jan-2019"
        },
        {
          title: "News3",
          content: "Join us for Rotary’s World Polio Day Online Global Update",
          date: "14-Oct-2019"
        },
        {
          title: "Feature4",
          content: "Hoops on the Hudson",
          date: "01-Nov-2019"
        },
        {
          title: "Press Release5",
          content:
            "Toastmasters and Rotary partner to help members grow professionally and make a difference in their communities",
          date: "07-Jan-2019"
        },
        {
          title: "News6",
          content: "Join us for Rotary’s World Polio Day Online Global Update",
          date: "14-Oct-2019"
        },
        {
          title: "Feature7",
          content: "Hoops on the Hudson",
          date: "01-Nov-2019"
        },
        {
          title: "Press Release8",
          content:
            "Toastmasters and Rotary partner to help members grow professionally and make a difference in their communities",
          date: "07-Jan-2019"
        },
        {
          title: "News9",
          content: "Join us for Rotary’s World Polio Day Online Global Update",
          date: "14-Oct-2019"
        },
        {
          title: "Feature10",
          content: "Hoops on the Hudson",
          date: "01-Nov-2019"
        },
        {
          title: "Press Release11",
          content:
            "Toastmasters and Rotary partner to help members grow professionally and make a difference in their communities",
          date: "07-Jan-2019"
        },
        {
          title: "News12",
          content: "Join us for Rotary’s World Polio Day Online Global Update",
          date: "14-Oct-2019"
        }
      ]
    };
  },
  methods: {
    incrementIndex: function(k) {
      if (k === 2 && this.noOfFlex < 4) {
        ++this.noOfFlex;
        // alert("flex="+this.noOfFlex);
      }
    },
    getList: function() {
      //alert("called");
      if (this.endIndex < this.news_features.length) {
        this.postsFlex = this.news_features.slice(
          this.startIndex,
          this.endIndex
        );
        // console.log(this.postsFlex[0]);
        this.startIndex += 3;
        this.endIndex += 3;
        alert(this.startIndex + " " + this.endIndex);
      }
    }
  }
};
</script>

<style scoped>
.main-div {
  margin-top: 56px;
  text-align: center;
}
#page-content {
  background: url("https://www.rotary.org/sites/all/themes/rotary_rotaryorg/images/concrete_seamless.jpg");
}

.wrapper {
  margin: auto;
  display: grid;
  padding: 1em;
  width: 60%;
  word-wrap: break-word;
  align-self: auto;
  grid-template-columns: 1fr,1fr;
  background-color: antiquewhite;
}
.grid-test {  
  background-color: cadetblue;
   grid-column: 1/12; 
  grid-row: 1/4; 
  word-wrap: break-word;
  /* grid-template-columns: 0.5fr; */
}
.overlap {
  background: black;
  word-wrap: break-word;
  opacity: 0.5;
  color: white;
   grid-column: 1/12; 
   grid-row: 3/4; 
  justify-content: center;
}
</style>
