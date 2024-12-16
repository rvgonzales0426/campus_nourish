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

      <div class="d-none d-md-flex">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Signup</v-btn>
      </div>

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

    <!-- Page Content -->
    <v-main>
      <v-container>
        <!-- Hero Section -->
        <v-row justify="center" align="center" class="my-10">
          <v-col cols="12" md="8" class="text-center">
            <h1
              class="display-1 font-weight-bold"
              style="color: #3e4e3a; font-size: 2.5rem"
            >
              Welcome to Campus Nourish
              <v-icon size="30" color="green" style="margin-right: 8px">mdi-leaf</v-icon>
            </h1>
            <p class="subtitle-1" style="color: #5d6c5d">
              Empowering sustainable living through community-driven initiatives.
            </p>
          </v-col>
        </v-row>

        <!-- Features Section -->
        <v-row class="my-10">
          <v-col cols="12" md="4" class="text-center">
            <v-icon size="48" color="green">mdi-food-apple</v-icon>
            <h3 class="my-3">Fresh Produce</h3>
            <p>Access locally grown, organic fruits and vegetables.</p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-icon size="48" color="green">mdi-earth</v-icon>
            <h3 class="my-3">Sustainable Practices</h3>
            <p>Learn and adopt eco-friendly living habits.</p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-icon size="48" color="green">mdi-account-group</v-icon>
            <h3 class="my-3">Community Support</h3>
            <p>Join a network of like-minded individuals.</p>
          </v-col>
        </v-row>

        <!-- Testimonials Section -->
        <v-row justify="center" class="my-10">
          <v-col cols="12" md="8">
            <h2 class="text-center my-5">What Our Users Say</h2>
            <div class="testimonial-wrapper position-relative">
              <!-- Prev Button -->
              <v-btn icon class="prev-btn" @click="prevTestimonial">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>

              <!-- Testimonial Content -->
              <v-card outlined class="text-center testimonial-card">
                <v-card-text>
                  <p>"{{ testimonials[currentTestimonial].message }}"</p>
                  <p class="text-right font-italic">
                    - {{ testimonials[currentTestimonial].author }}
                  </p>
                </v-card-text>
              </v-card>

              <!-- Next Button -->
              <v-btn icon class="next-btn" @click="nextTestimonial">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!-- Call-to-Action Section -->
        <v-row justify="center" align="center" class="my-10">
          <v-col cols="12" md="8" class="text-center">
            <h2>Ready to Join?</h2>
            <p>Sign up today and start making a difference!</p>
            <v-btn color="green" dark large to="/register"> Create Account </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer color="#3e4e3a" app>
      <v-container>
        <v-row justify="space-between" align="center">
          <v-col cols="12" md="4" class="text-white text-center text-md-left">
            <p>
              &copy; {{ new Date().getFullYear() }} Campus Nourish. All Rights Reserved.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-icon color="white">mdi-facebook</v-icon>
            <v-icon color="white" class="mx-3">mdi-twitter</v-icon>
            <v-icon color="white">mdi-instagram</v-icon>
          </v-col>
          <v-col cols="12" md="4" class="text-white text-center text-md-right">
            <p>Privacy Policy | Terms of Service</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      currentTestimonial: 0, // Index of the currently displayed testimonial
      testimonials: [
        {
          message: "This is a great platform for sustainable living!",
          author: "Richard Vincent Gonzales",
        },
        {
          message: "I love the fresh produce and community support.",
          author: "Alexa Jerrel Jongko",
        },
        {
          message: "Campus Nourish has changed my perspective on eco-friendly living.",
          author: "Richard Gonzales",
        },
      ],
    };
  },
  methods: {
    prevTestimonial() {
      // Navigate to the previous testimonial
      if (this.currentTestimonial === 0) {
        this.currentTestimonial = this.testimonials.length - 1;
      } else {
        this.currentTestimonial -= 1;
      }
    },
    nextTestimonial() {
      // Navigate to the next testimonial
      if (this.currentTestimonial === this.testimonials.length - 1) {
        this.currentTestimonial = 0;
      } else {
        this.currentTestimonial += 1;
      }
    },
  },
};
</script>

<style scoped>
.font-weight-bold {
  font-size: 0.9rem;
}

.subtitle-1 {
  font-size: 1.2rem;
  line-height: 1.6;
}

.v-footer {
  padding: 16px 0;
}

.testimonial-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.testimonial-card {
  flex: 1;
  margin: 0 48px;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}
</style>
