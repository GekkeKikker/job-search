import { render, screen } from "@testing-library/vue";
import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { useRoute } from "vue-router";
vi.mock("vue-router");

import TheSubNav from "@/components/Navigation/TheSubNav.vue";
import { useJobsStore } from "@/stores/jobs";

describe("TheSubNav", () => {
  const renderTheSubNav = () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();

    render(TheSubNav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
    return { jobsStore };
  };

  describe("when user is on jobs page", () => {
    it("displays job count", async () => {
      useRoute.mockReturnValue({ name: "JobResults" });

      const { jobsStore } = renderTheSubNav();
      const numberOfJobs = 16;
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({});

      const jobCount = await screen.findByText(numberOfJobs);
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("displays job count", () => {
      useRoute.mockReturnValue({ name: "Home" });

      const { jobsStore } = renderTheSubNav();
      const numberOfJobs = 16;
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({});

      const jobCount = screen.queryByText(numberOfJobs);
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
