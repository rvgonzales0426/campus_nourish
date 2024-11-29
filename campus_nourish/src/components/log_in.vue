<template>
  <v-container class="gradient-background">
    <v-row justify="center">
      <!-- Login Form -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h5 font-weight-bold justify-center">
            Login Form
          </v-card-title>
          <v-card-text>
            <v-form ref="loginForm" lazy-validation>
              <!-- Avatar -->
              <div class="text-center mb-4">
                <v-avatar size="100">
                  <img src="img_avatar2.png" alt="Avatar" />
                </v-avatar>
              </div>

              <!-- Username -->
              <v-text-field
                v-model="username"
                label="Username"
                outlined
                required
              ></v-text-field>

              <!-- Password -->
              <v-text-field
                v-model="password"
                label="Password"
                outlined
                type="password"
                required
              ></v-text-field>

              <!-- Remember Me -->
              <v-checkbox
                v-model="rememberMe"
                label="Remember Me"
                class="mt-3"
              ></v-checkbox>

              <!-- Login Button -->
              <v-btn block color="primary" class="mt-4" @click="submitLogin">
                Login
              </v-btn>
            </v-form>
          </v-card-text>

          <v-card-actions class="justify-space-between">
            <!-- Cancel Button -->
            <v-btn text color="red" @click="cancelLogin"> Cancel </v-btn>
            <!-- Forgot Password -->
            <v-btn text color="secondary" @click="forgotPassword">
              Forgot Password?
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "", // Username input
      password: "", // Password input
      rememberMe: true, // Remember Me checkbox
    };
  },
  methods: {
    submitLogin() {
      if (this.username && this.password) {
        alert(`Logging in as ${this.username}`); // Placeholder for login logic
        this.username = "";
        this.password = "";
      } else {
        alert("Please fill in both fields.");
      }
    },
    cancelLogin() {
      this.username = "";
      this.password = "";
      alert("Login canceled.");
    },
    forgotPassword() {
      alert("Redirecting to password recovery...");
    },
  },
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(
    135deg,
    #0f460f,
    #00ced1
  ); /* Gradient background */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
node
