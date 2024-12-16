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

    <!-- Page Content -->
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-toolbar-title class="text-center" style="width: 100%">
              <div class="d-flex justify-center align-center" style="line-height: 1.2">
                <v-icon size="30" color="green" style="margin-right: 8px"
                  >mdi-leaf</v-icon
                >
                <span
                  class="font-weight-bold"
                  style="
                    color: #3e4e3a;
                    margin-left: 8px;
                    font-size: 2.5rem;
                    line-height: 1.2;
                    white-space: nowrap;
                  "
                >
                  Campus Nourish
                </span>
              </div>
            </v-toolbar-title>

            <h1 class="text-center font-weight-bold mb-6" style="color: #3e4e3a">
              Discover Campus Nourish: Eat Smart, Live Better!
            </h1>
            <p class="text-center mb-10" style="font-size: 1.2rem; color: #5d6f61">
              Say goodbye to the stress of meal planning and finding affordable, healthy
              recipes! Campus Nourish is here to revolutionize how students and busy
              individuals approach food. Whether you're prepping for a hectic week or
              looking for quick, budget-friendly meals, Campus Nourish offers personalized
              meal plans, easy recipes, and a vibrant community to share and discover
              culinary inspiration!
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-card outlined class="mb-6">
              <v-card-title class="font-weight-bold"
                >Personalized Meal Plans</v-card-title
              >
              <v-card-text
                >Discover tailored recommendations designed to match your unique dietary
                preferences, budget, and lifestyle. Our platform allows you to create and
                customize weekly meal plans that not only align with your schedule but
                also cater to your specific nutritional needs. Whether you're looking to
                save time, eat healthier, or explore new cuisines, we provide personalized
                solutions that simplify meal planning and ensure every dish is perfectly
                suited to your tastes and goals.</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card outlined class="mb-6">
              <v-card-title class="font-weight-bold"
                >Budget-Friendly Recipes</v-card-title
              >
              <v-card-text
                >Explore a wide variety of easy-to-make recipes specifically crafted to
                suit the busy lifestyle of students. Each recipe is thoughtfully
                categorized by preparation time, difficulty level, and dietary
                requirements, ensuring you can find the perfect dish for any occasion.
                Whether you're looking for quick meals between classes, beginner-friendly
                recipes to build your cooking confidence, or options tailored to specific
                dietary needs such as vegan, vegetarian, or gluten-free, our collection
                has you covered. With step-by-step instructions and accessible
                ingredients, you'll discover how simple and enjoyable cooking can
                be.</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-card outlined class="mb-6">
              <v-card-title class="font-weight-bold">Share & Discover</v-card-title>
              <v-card-text
                >Share your culinary creativity by uploading your favorite recipes and
                dive into an ever-growing collection of dishes shared by others in the
                community. Discover new ideas, save recipes that inspire you, and engage
                with fellow food enthusiasts through likes, comments, and discussions.
                Connect with others who share your passion for cooking and create a fun,
                interactive experience where you can exchange tips, learn new techniques,
                and celebrate the joy of food together.</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card outlined class="mb-6">
              <v-card-title class="font-weight-bold">Nutritional Insights</v-card-title>
              <v-card-text
                >Gain deeper insights into your diet with detailed nutritional breakdowns
                for every recipe and meal plan. Easily track key metrics such as calories,
                proteins, carbohydrates, and fats to ensure your meals align with your
                health and fitness goals. Whether you're focused on weight management,
                muscle building, or simply maintaining a balanced diet, our comprehensive
                nutritional data empowers you to make informed choices and stay on top of
                your nutritional needs.</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card outlined class="mb-6">
              <v-card-title class="font-weight-bold">Save Your Favorites</v-card-title>
              <v-card-text
                >Found a recipe that caught your eye? Save it effortlessly with just one
                click and keep it securely stored in your Favorites List. Whether it’s a
                dish you want to try later or a go-to recipe you can’t get enough of, your
                Favorites List ensures easy access anytime, making meal planning and
                cooking more convenient than ever.</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card outlined>
              <v-card-title class="font-weight-bold"
                >Track Your Meal History</v-card-title
              >
              <v-card-text
                >Maintain a detailed log of your past meal plans and favorite recipes,
                making it easy to revisit the meals that worked best for you. Whether
                you're tracking your culinary successes, refining your dietary habits, or
                simply looking for inspiration from past favorites, your personalized log
                ensures you’ll always have a record of what you’ve enjoyed and what fits
                your lifestyle.</v-card-text
              >
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-8">
          <v-col cols="12" class="text-center">
            <p style="font-size: 1.1rem; color: #5d6f61">
              Campus Nourish is here to simplify meal planning and create a vibrant
              community around healthy eating. It’s more than a tool—it’s your partner in
              living smarter, eating better, and connecting with others. Dive in, explore,
              and make meal planning a breeze with Campus Nourish!
            </p>
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
      drawer: false, // Controls the sidebar drawer visibility
    };
  },
};
</script>

<style scoped>
.font-weight-bold {
  font-size: 0.9rem;
}
.text-center {
  text-align: center;
}
</style>
