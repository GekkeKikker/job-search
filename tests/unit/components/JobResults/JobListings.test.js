import { render, screen } from "@testing-library/vue";
import { describe, it, expect, vi } from "vitest";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import JobListings from "@/components/JobResults/JobListings.vue";
import { useJobsStore } from "@/stores/jobs";

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const renderJobListings = ($route) => {
    const penia = createTestingPinia();

    render(JobListings, {
      global: {
        plugins: [penia],
        mocks: {
          $route,
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("fetches jobs", () => {
    const $route = createRoute();

    renderJobListings($route);

    const jobStore = useJobsStore();
    expect(jobStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("displays maximum of 10 jobs", async () => {
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);

    renderJobListings($route);
    const jobStore = useJobsStore();
    jobStore.jobs = Array(15).fill({});

    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });

  describe("when params exlude page number", () => {
    it("displays page number 1", () => {
      const queryParams = {
        page: undefined,
      };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      expect(screen.getByText("Page 1")).toBeInTheDocument();
    });
  });

  describe("when params include page number", () => {
    it("displays page number", () => {
      const queryParams = { page: "3" };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      expect(screen.getByText("Page 3")).toBeInTheDocument();
    });
  });

  describe("when user is on first page", () => {
    it("does not show link to previous page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);

      renderJobListings($route);
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const previousLink = screen.queryByRole("link", { name: /previous/i });
      expect(previousLink).not.toBeInTheDocument();
    });

    it("shows link to next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);

      renderJobListings($route);
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /next/i });
      expect(nextLink).toBeInTheDocument();
    });
  });

  describe("when user is on last page", () => {
    it("does not show link to next page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);

      renderJobListings($route);
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /next/i });
      expect(nextLink).not.toBeInTheDocument();
    });

    it("shows link to previous page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);

      renderJobListings($route);
      const jobStore = useJobsStore();
      jobStore.jobs = Array(15).fill({});

      await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /previous/i });
      expect(nextLink).toBeInTheDocument();
    });
  });
});
