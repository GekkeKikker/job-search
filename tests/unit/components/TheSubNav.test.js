import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";

import TheSubNav from "@/components/TheSubNav.vue";

describe("TheSubNav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = screen.getByText("1653");

      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("when user is not on jobs page", () => {
    it("displays job count", () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = screen.queryByText("1653");

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
