<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="#c8e6c9" elevate-on-scroll sticky style="z-index: 20">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-icon size="24" color="green">mdi-leaf</v-icon>
          <span
            class="font-weight-bold"
            style="color: #3e4e3a; margin-left: 8px; font-size: 0.9rem"
          >
            Campus Nourish
          </span>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
        <v-btn text to="/home">Home</v-btn>
        <v-btn text to="/profile">Profile</v-btn>
        <v-btn text to="/share">Share</v-btn>
      </div>
      <v-btn icon class="d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sidebar Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary color="#c8e6c9" left>
      <v-list>
        <v-list-item to="/home">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/profile">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item to="/share">
          <v-list-item-title>Share</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <v-row dense align="center" class="mb-4">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="searchQuery"
              label="Search Recipes"
              outlined
              clearable
              dense
              hide-details
            >
              <template #prepend>
                <v-icon color="green">mdi-magnify</v-icon>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="prepTimeFilter"
              :items="prepTimeOptions"
              label="Preparation Time"
              outlined
              dense
              hide-details
            ></v-select>
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="costFilter"
              :items="costOptions"
              label="Cost"
              outlined
              dense
              hide-details
            ></v-select>
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="ingredientsFilter"
              :items="ingredientsOptions"
              label="Ingredients Count"
              outlined
              dense
              hide-details
            ></v-select>
          </v-col>
          <v-btn color="primary" @click="resetFilters"> Reset Filters </v-btn>
        </v-row>

        <!-- Recipe Cards Section -->
        <v-row dense>
          <v-col
            v-for="recipe in filteredRecipes"
            :key="recipe.id"
            cols="12"
            md="10"
            lg="4"
          >
            <v-card class="pa-4" outlined>
              <v-card-title
                class="font-weight-bold d-flex align-center justify-space-between"
              >
                <span>Made by: {{ recipe.userName }}</span>
              </v-card-title>
              <hr />
              <v-card-title class="font-weight-bold">{{
                recipe.title
              }}</v-card-title>
              <v-card-subtitle>{{ recipe.description }}</v-card-subtitle>
              <v-card-text>
                <div><strong>Ingredients:</strong></div>
                <ul>
                  <li
                    v-for="(ingredient, index) in recipe.ingredients"
                    :key="index"
                  >
                    {{ ingredient }}
                  </li>
                </ul>
                <div><strong>Steps:</strong></div>
                <ol>
                  <li v-for="(step, index) in recipe.steps" :key="index">
                    {{ step }}
                  </li>
                </ol>
                <div>
                  <strong>Preparation Time:</strong> {{ recipe.prep_time }}
                </div>
                <div><strong>Cost:</strong> ${{ recipe.cost }}</div>
              </v-card-text>
              <div class="d-flex justify-space-evenly mt-4">
                <v-btn color="green" dark @click="openModal(recipe)">
                  View Reviews
                </v-btn>
                <v-btn color="blue" dark @click="openAddReviewModal(recipe)">
                  Add Review
                </v-btn>
              </div>
            </v-card>
          </v-col>

          <!-- Modal for reviews -->
          <v-dialog v-model="isModalOpen" max-width="600px">
            <v-card>
              <v-card-title class="font-weight-bold">
                Reviews for {{ selectedRecipe?.title }}
              </v-card-title>
              <v-card-text>
                <v-row dense>
                  <v-col
                    v-for="review in selectedRecipe?.reviews || []"
                    :key="review.id"
                    cols="12"
                  >
                    <div class="mb-2">
                      <strong>{{ review.userName }}</strong>
                    </div>
                    <v-row>
                      <v-col cols="12"
                        ><strong>Type:</strong> {{ review.type }}</v-col
                      >
                      <v-col cols="12"
                        ><strong>Tag:</strong> {{ review.tag_name }}</v-col
                      >
                      <v-col cols="12" class="mt-2">
                        <strong>Comment:</strong> {{ review.comment_text }}
                      </v-col>
                      <v-btn
                        color="red mx-3"
                        dark
                        small
                        @click="deleteReview(review)"
                      >
                        Delete
                      </v-btn>
                    </v-row>
                    <v-divider class="mt-4"></v-divider>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="red" @click="isModalOpen = false"
                  >Close</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- Modal for adding a review -->
          <v-dialog v-model="isAddReviewModalOpen" max-width="600px">
            <v-card>
              <v-card-title class="font-weight-bold">
                Add Review for {{ selectedRecipe?.title }}
              </v-card-title>
              <v-card-text>
                <v-form ref="addReviewForm">
                  <v-text-field
                    v-model="newReview.type"
                    label="Type"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    v-model="newReview.comment_text"
                    label="Comment"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    v-model="newReview.tag_name"
                    :rules="[rules.required]"
                    label="Tag"
                    outlined
                    dense
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="green" text @click="submitReview"> Submit </v-btn>
                <v-spacer></v-spacer>
                <v-btn text color="red" @click="isAddReviewModalOpen = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { supabase } from "@/supabase";
export default {
  name: "HomePage",
  data() {
    return {
      rules: {
        required: (value) => !!value || "This field is required.",
      },
      drawer: false,
      isModalOpen: false,
      isAddReviewModalOpen: false,
      selectedRecipe: null,
      newReview: { type: "", comment_text: "", tag_name: "" },
      recipes: [],
      searchQuery: "",
      prepTimeFilter: null,
      costFilter: null,
      ingredientsFilter: null,
      prepTimeOptions: ["< 15 mins", "15-30 mins", "> 30 mins"],
      costOptions: ["< ₱100", "₱100-₱200", "> ₱200"],
      ingredientsOptions: [
        "< 5 Ingredients",
        "5-15 Ingredients",
        " 20 Ingredients",
      ],
    };
  },

  computed: {
    filteredRecipes() {
      return this.recipes.filter((recipe) => {
        const matchesSearchQuery =
          this.searchQuery.trim() === "" ||
          recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          recipe.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());

        const matchesPrepTime =
          !this.prepTimeFilter ||
          (this.prepTimeFilter === "< 15 mins" &&
            parseInt(recipe.prep_time) < 15) ||
          (this.prepTimeFilter === "15-30 mins" &&
            parseInt(recipe.prep_time) >= 15 &&
            parseInt(recipe.prep_time) <= 30) ||
          (this.prepTimeFilter === "> 30 mins" &&
            parseInt(recipe.prep_time) > 30);

        const matchesCost =
          !this.costFilter ||
          (this.costFilter === "< ₱100" && recipe.cost < 100) ||
          (this.costFilter === "₱100-₱200" &&
            recipe.cost >= 100 &&
            recipe.cost <= 200) ||
          (this.costFilter === "> ₱200" && recipe.cost > 200);

        const matchesIngredients =
          !this.ingredientsFilter ||
          (this.ingredientsFilter === "< 5 Ingredients" &&
            recipe.ingredients.length < 5) ||
          (this.ingredientsFilter === "5-10 Ingredients" &&
            recipe.ingredients.length >= 5 &&
            recipe.ingredients.length <= 10) ||
          (this.ingredientsFilter === " 20 Ingredients" &&
            recipe.ingredients.length == 20);

        return (
          matchesSearchQuery &&
          matchesPrepTime &&
          matchesCost &&
          matchesIngredients
        );
      });
    },
  },

  mounted() {
    this.fetchRecipes();
  },

  methods: {
    resetFilters() {
      this.prepTimeFilter = "";
      this.costFilter = "";
      this.ingredientsFilter = "";
    },
    async deleteReview(review) {
      try {
        // Log review ID for debugging
        console.log("Deleting review with ID:", review.id);

        // Direct deletion query
        const { error: deleteError } = await supabase
          .from("user_ratings")
          .delete()
          .eq("id", review.id); // Match the primary key (id)

        if (deleteError) {
          console.error("Error deleting review:", deleteError);
          alert("Failed to delete review from database.");
        } else {
          // Update the local state after successful deletion
          this.selectedRecipe.reviews = this.selectedRecipe.reviews.filter(
            (r) => r.id !== review.id
          );
          alert("Review deleted successfully.");
        }
      } catch (err) {
        console.error("Error deleting review:", err.message);
        alert(err.message || "Failed to delete review.");
      }
    },
    async fetchRecipes() {
      try {
        // Step 1: Get the logged-in user's ID from `auth.users`
        const { data: userData, error: userError } =
          await supabase.auth.getUser();
        if (userError) throw userError;

        const userId = userData.user.id;

        // Step 2: Fetch `users_info.id` associated with the logged-in user
        const { data: userInfo, error: userInfoError } = await supabase
          .from("users_info")
          .select("id")
          .eq("user_id", userId)
          .single();

        if (userInfoError) throw userInfoError;

        const usersInfoId = userInfo.id;

        // Step 3: Fetch recipes where `users_info_id` matches the logged-in user's `users_info.id`
        const { data: recipes, error: recipesError } = await supabase
          .from("recipes")
          .select(
            `
        id,
        title,
        description,
        ingredients,
        steps,
        prep_time,
        cost,
        users_info (fullname)
      `
          )
          .eq("users_info_id", usersInfoId); // Filter by the logged-in user's `users_info_id`

        if (recipesError) throw recipesError;

        // Step 4: Map the data to include the user's name
        this.recipes = recipes.map((recipe) => ({
          ...recipe,
          userName: recipe.users_info
            ? recipe.users_info.fullname
            : "Unknown User",
        }));
      } catch (error) {
        console.error("Error fetching recipes:", error.message);
        alert("Failed to fetch recipes. Please try again.");
      }
    },
    openModal(recipe) {
      this.selectedRecipe = recipe;
      this.fetchReviews(recipe.id);
      this.isModalOpen = true;
    },

    async fetchReviews(recipeId) {
      try {
        const { data, error } = await supabase
          .from("user_ratings")
          .select(
            `
        id,
        created_at,
        ratings_id (
          type,
          comment_text,
          tag_name
        ),
        recipe_id (
          users_info (
            fullname
          )
        )
      `
          )
          .eq("recipe_id", recipeId);

        if (error) throw error;

        // Map the fetched data
        this.selectedRecipe.reviews = data.map((review) => ({
          id: review.id,
          created_at: review.created_at,
          type: review.ratings_id ? review.ratings_id.type : null,
          comment_text: review.ratings_id
            ? review.ratings_id.comment_text
            : null,
          tag_name: review.ratings_id ? review.ratings_id.tag_name : null,
          userName: review.recipe_id?.users_info?.fullname || "Unknown User",
        }));
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
        alert("Failed to fetch reviews. Please try again.");
      }
    },
    openAddReviewModal(recipe) {
      this.selectedRecipe = recipe;
      this.isAddReviewModalOpen = true;
    },

    async submitReview() {
      if (this.$refs.addReviewForm.validate()) {
        try {
          const { data, error } = await supabase
            .from("ratings")
            .insert({
              type: this.newReview.type,
              comment_text: this.newReview.comment_text,
              tag_name: this.newReview.tag_name,
            })
            .select("id")
            .single();

          if (error) throw error;

          await supabase.from("user_ratings").insert({
            ratings_id: data.id,
            recipe_id: this.selectedRecipe.id,
          });
          alert("Added ratings successfully.");
          this.newReview = { type: "", comment_text: "", tag_name: "" };
          this.isAddReviewModalOpen = false;
          this.fetchReviews(this.selectedRecipe.id);
        } catch (error) {
          console.error("Error adding review:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
.font-weight-bold {
  font-size: 0.9rem;
}
</style>
