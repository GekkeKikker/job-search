import { defineStore } from "pinia";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    isLoggedIn: false,
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
});
