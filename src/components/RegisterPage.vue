<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="#c8e6c9" elevate-on-scroll sticky style="z-index: 20">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-icon size="24" color="green">mdi-leaf</v-icon>
          <span
            class="font-weight-bold"
            style="
              color: #3e4e3a;
              margin-left: 8px;
              font-size: 0.9rem;
              white-space: normal;
              overflow: visible;
            "
          >
            Campus Nourish
          </span>
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- Hamburger menu for mobile view -->
      <v-btn icon @click="drawer = !drawer" class="d-lg-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <!-- Desktop Navigation Buttons -->
      <v-btn text to="/" class="d-none d-lg-flex">Home</v-btn>
      <v-btn text to="/about" class="d-none d-lg-flex">About</v-btn>
      <v-btn text to="/login" class="d-none d-lg-flex">Login</v-btn>
      <v-btn text to="/register" class="d-none d-lg-flex">Signup</v-btn>
    </v-app-bar>

    <!-- Sidebar Navigation -->
    <v-navigation-drawer app v-model="drawer" class="d-lg-none" color="#c8e6c9">
      <v-list>
        <v-list-item link to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/register">
          <v-list-item-title>Signup</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="d-flex align-center justify-center min-vh-100">
        <v-row>
          <v-col cols="12" class="text-center mb-5">
            <!-- Logo and Title -->
            <v-icon size="48" color="green">mdi-leaf</v-icon>
            <h1 class="text-h4 font-weight-bold" style="color: #3e4e3a">
              Welcome to Campus Nourish
            </h1>
          </v-col>

          <v-row class="d-flex justify-center align-center">
            <v-col cols="12" sm="8" md="6" lg="4">
              <v-card
                class="py-4 mx-auto"
                style="
                  background-color: #ffffff;
                  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                "
              >
                <v-card-title
                  class="text-h5 d-flex justify-center"
                  style="color: #3e4e3a"
                >
                  Register
                </v-card-title>

                <v-card-text>
                  <v-form @submit.prevent="register">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      type="email"
                      required
                      outlined
                      color="green"
                    ></v-text-field>
                    <v-text-field
                      v-model="username"
                      label="Full Name"
                      required
                      outlined
                      color="green"
                    ></v-text-field>
                    <v-text-field
                      v-model="phone_number"
                      label="Phone Number"
                      type="tel"
                      required
                      outlined
                      color="green"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                      required
                      outlined
                      color="green"
                    ></v-text-field>
                    <v-text-field
                      v-model="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      required
                      outlined
                      color="green"
                    ></v-text-field>

                    <v-btn type="submit" color="green darken-2" block rounded>
                      Register
                    </v-btn>
                  </v-form>
                  <v-btn text to="/login" class="mt-5">
                    Already have an account? Login back!
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { supabase } from "@/supabase";

export default {
  name: "RegisterPage",
  data() {
    return {
      drawer: false, // Controls the visibility of the sidebar
      email: "",
      username: "", // Now labeled as "Full Name" in the form
      phone_number: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        // Step 1: Sign up the user in auth.users
        const { data, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password,
        });

        if (error) throw error;

        const userId = data.user.id; // Get the newly created user's ID

        // Step 2: Insert additional user details into users_info
        const { error: userInfoError } = await supabase.from("users_info").insert({
          fullname: this.username, // Using the username as "fullname"
          email: this.email,
          phone_number: this.phone_number,
          user_id: userId, // Foreign key linking to auth.users.id
        });

        if (userInfoError) throw userInfoError;

        alert("Registration successful!");

        // Redirect to login page
        this.$router.push("/login");
      } catch (error) {
        console.error("Error during registration:", error.message);
        alert("Registration failed: " + error.message);
      }
    },
  },
};
</script>
