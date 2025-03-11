<template>
  <h1 class="text-6xl font-bold">Job Results page</h1>
  <button @click="goToHome" class="bg-brand-gray-1">Go to Home Page</button>
</template>

<script>
export default {
  name: "JobsResultView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
