<template>
  <v-container class="gradient-background">
    <!-- App Bar -->
    <v-app-bar app dense>
      <v-toolbar-title class="font-weight-bold">Campus Nourish</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="mx-2" @click="toggleHomeForm">Home</v-btn>
      <v-btn text class="mx-2" @click="toggleAboutForm">About</v-btn>
      <v-btn text class="mx-2" @click="toggleLoginForm">Login</v-btn>
      <v-btn text class="mx-2" @click="toggleRegisterForm">Register</v-btn>
    </v-app-bar>

    <!-- Centered Content -->
    <v-row
      class="text-center"
      justify="center"
      align="center"
      style="min-height: 80vh"
    >
      <!-- Welcome Message -->
      <v-col cols="12" v-if="!showLoginForm && !showRegisterForm">
        <h1 class="display-2 font-weight-bold text-shadow">
          Welcome to Campus Nourish
        </h1>
      </v-col>

      <!-- Login Form -->
      <v-col cols="12" v-if="showLoginForm">
        <h2 class="font-weight-bold mb-5 text-shadow">You need to log in</h2>
        <v-form ref="loginForm" lazy-validation>
          <v-text-field
            v-model="username"
            label="Username"
            outlined
            required
            class="mb-3"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            outlined
            type="password"
            required
            class="mb-3"
          ></v-text-field>
          <v-btn color="primary" large class="mx-3" @click="submitLogin">
            Login
          </v-btn>
          <v-btn text class="mx-3" color="secondary" @click="forgotPassword">
            Forgot Password?
          </v-btn>
        </v-form>
      </v-col>

      <!-- Register Form -->
      <v-col cols="12" v-if="showRegisterForm">
        <h2 class="font-weight-bold mb-5 text-shadow">Register</h2>
        <v-form ref="registerForm" lazy-validation>
          <v-text-field
            v-model="email"
            label="Email"
            outlined
            type="email"
            required
            class="mb-3"
          ></v-text-field>
          <v-text-field
            v-model="username"
            label="Preferred Username"
            outlined
            required
            class="mb-3"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Desired Password"
            outlined
            type="password"
            required
            class="mb-3"
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            label="Re-enter Password"
            outlined
            type="password"
            required
            class="mb-3"
          ></v-text-field>
          <v-btn color="primary" large class="mx-3" @click="submitRegister">
            Register
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MYWEBBAPP",
  data() {
    return {
      showLoginForm: false, // Toggles login form visibility
      showRegisterForm: false, // Toggles register form visibility
      username: "", // Holds the username input
      password: "", // Holds the password input
      email: "", // Holds the email input for registration
      confirmPassword: "", // Holds the confirmation password
    };
  },
  methods: {
    toggleLoginForm() {
      this.showLoginForm = true;
      this.showRegisterForm = false; // Hide register form if showing login
    },
    toggleRegisterForm() {
      this.showRegisterForm = true;
      this.showLoginForm = false; // Hide login form if showing register
    },
    submitLogin() {
      if (this.username && this.password) {
        alert(`Logging in as ${this.username}`); // Placeholder action
        this.username = ""; // Clear fields after login
        this.password = "";
      } else {
        alert("Please fill in both fields.");
      }
    },
    submitRegister() {
      if (
        !this.email ||
        !this.username ||
        !this.password ||
        !this.confirmPassword
      ) {
        alert("All fields are required.");
      } else if (this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
      } else {
        alert(`Registered successfully as ${this.username}`); // Placeholder action
        // Clear fields after registration
        this.email = "";
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.toggleLoginForm(); // Redirect to login form after registration
      }
    },
    forgotPassword() {
      alert("Redirecting to password recovery..."); // Placeholder action
    },
  },
};
</script>

<style scoped>
/* Gradient background */
.gradient-background {
  background: linear-gradient(
    135deg,
    #0f460f,
    #00ced1
  ); /* Lime green to teal gradient */
  min-height: 100vh; /* Full height for the background */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Add text shadow for better visibility */
.text-shadow {
  color: white; /* White text to stand out */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
}

/* Form field styling */
.v-text-field {
  max-width: 400px;
}

/* Button hover effects */
.v-btn:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}
</style>
