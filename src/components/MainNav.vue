<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-9 h-full first:ml-0 last:font-orange-700"
            >
              <a href="" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" @click="loginUser" />
        </div>
      </div>

      <the-sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import TheSubNav from "@/components/TheSubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubNav,
  },
  data() {
    return {
      company: "Bobo Careers",
      url: "https://careers.google.com",
      menuItems: ["Themes", "Locations", "Life at Bobo Corp", "How we hire", "Students", "Jobs"],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
