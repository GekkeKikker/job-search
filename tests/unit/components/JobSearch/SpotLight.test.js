import { render, screen } from "@testing-library/vue";
import { describe, it, expect, vi } from "vitest";
import axios from "axios";

import SpotLight from "@/components/JobSearch/SpotLight.vue";

vi.mock("axios");

describe("SpotLight", () => {
  const mockSpotLightsResponse = (spotLight = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: "Some image",
          title: "Some title",
          description: "Some description",
          ...spotLight,
        },
      ],
    });
  };

  it("provides image to parent component", async () => {
    const spotlight = { img: "Other image" };
    mockSpotLightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
            <h1>{{ slotProps.img }}</h1>
            </template>`,
      },
    });
    const text = await screen.findByText("Other image");
    expect(text).toBeInTheDocument();
  });

  it("provides title to parent component", async () => {
    const spotlight = { title: "Other title" };
    mockSpotLightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
            <h1>{{ slotProps.title }}</h1>
            </template>`,
      },
    });
    const text = await screen.findByText("Other title");
    expect(text).toBeInTheDocument();
  });

  it("provides description to parent component", async () => {
    const spotlight = { description: "Other description" };
    mockSpotLightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
            <h1>{{ slotProps.description }}</h1>
            </template>`,
      },
    });
    const text = await screen.findByText("Other description");
    expect(text).toBeInTheDocument();
  });
});
