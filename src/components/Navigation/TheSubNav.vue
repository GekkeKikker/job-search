<template>
  <div class="w-full h-16 border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="mr-3" />
        <span
          ><span class="text-brand-green-1">{{ FILTERED_JOBS_BY_ORGANIZATIONS.length }}</span> jobs
          matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";

import { useJobsStore, FILTERED_JOBS_BY_ORGANIZATIONS } from "@/stores/jobs";

export default {
  name: "TheSubNav",
  computed: {
    ...mapState(useJobsStore, [FILTERED_JOBS_BY_ORGANIZATIONS]),
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
