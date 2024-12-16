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
      <!-- Show buttons for larger screens -->
      <div class="d-none d-md-flex">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Signup</v-btn>
      </div>
      <!-- Hamburger menu for smaller screens -->
      <v-btn icon class="d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sidebar Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary color="#c8e6c9" left>
      <v-list>
        <v-list-item to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item to="/login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item to="/register">
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
              Welcome Back to Campus Nourish
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
                  Login
                </v-card-title>

                <v-card-text>
                  <v-form @submit.prevent="login">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      type="email"
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

                    <v-btn type="submit" color="green darken-2" block rounded>
                      Login
                    </v-btn>
                  </v-form>
                  <v-btn text to="/register" class="mt-5"
                    >Don't have an account? Signup now!
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
  name: "LoginPage",
  data() {
    return {
      drawer: false, // Controls the sidebar visibility
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        // Log in the user with Supabase
        const { error } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password,
        });

        if (error) throw error;

        alert("Login successful!");

        // Redirect to home page
        this.$router.push("/home");
      } catch (error) {
        console.error("Error during login:", error.message);
        alert("Login failed: " + error.message);
      }
    },
  },
};
</script>

<style>
/* Add any additional styles here if necessary */
</style>
