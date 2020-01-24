<template>
  <div>
    <h1 class="mt-10" style="opacity:0.0;">a</h1>

    <v-layout>
      <v-flex md7 class="mx-auto">
        <v-card class="pa-4">
          <v-layout row>
            <v-flex md5 class="mx-auto">
              <h1 style=" color: #00246C;line-height: 1; font-size: 2.25em;">Sign In</h1>
              <hr class="mt-3" />
              <p
                class="mt-4"
                style="color: #000000;
                    cursor: default;
                    
                    margin-bottom: 0.1em;"
              >
                <b>Sign-in Email *</b>
              </p>

              <v-text-field
                label="Email"
                class="pa-0 ma-0"
                single-line
                outlined
                hint="example@example.com"
              ></v-text-field>
              <p
                style="color: #000000;
                    cursor: default;
                    font-size: 0.875em;
                    margin-bottom: 0.2143em;"
              >
                Forgot email?
                <v-icon @click="forgetEmail = !forgetEmail">mdi-comment-question-outline</v-icon>
              </p>
              <p
                v-if="forgetEmail"
                class="grey pa-3"
              >To retrieve your sign-in email, please contact us by email or phone.</p>
              <p
                class="mt-4"
                style="color: #000000;
                    cursor: default;
                     
                    margin-bottom: 0.1em;"
              >
                <b>Password*</b>
              </p>

              <v-text-field label="Password" single-line outlined></v-text-field>
              <a href="/" style="display:block;">Forgot Password?</a>
               <v-checkbox v-model="checkbox"  label="  Remember Me"></v-checkbox>
              <v-btn class="yellow " block style=" color: #00246C;   ">Log In</v-btn>
            </v-flex>
            <v-flex md5 class="mx-auto">
              <h1 style=" color: #00246C;line-height: 1; font-size: 2.25em;">Why Create An Account?</h1>
              <hr class="mt-3" />
              <p
                class="mt-4"
                style="color: #000000;
                    cursor: default;
                     
                    margin-bottom: 0.1em;"
              >
                Signing in to My Rotary gives you a customized experience and easier access to tools and information that are relevant to you.
                <br />Anyone can create an account and sign in. Existing Member Access users can re-register with their current user ID. For tips on registering and using the site, see our website resources. For assistance, contact us.
              </p>
              <v-btn
                class="mt-5"
                style=" color: #00246C;line-height: 1;  "
                outlined
              >Create an account</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
        checkbox:false,
      forgetEmail: false,
      forgetPassword: false
    };
  }
};
</script>

<style scoped>
</style>