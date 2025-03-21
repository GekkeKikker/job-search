import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";

import TheSubNav from "@/components/Navigation/TheSubNav.vue";

describe("TheSubNav", () => {
  const renderTheSubNav = (routeName) => {
    render(TheSubNav, {
      global: {
        mocks: {
          $route: {
            name: routeName,
          },
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
  };
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";

      renderTheSubNav(routeName);

      const jobCount = screen.getByText("1653");
      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("when user is not on jobs page", () => {
    it("displays job count", () => {
      const routeName = "Home";

      renderTheSubNav(routeName);

      const jobCount = screen.queryByText("1653");
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
