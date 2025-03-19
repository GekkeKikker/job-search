import { createPinia, setActivePinia } from "pinia";
import { useJobsStore } from "@/stores/jobs";
import { describe, it, expect, beforeEach } from "vitest";

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("stores jobs listings", () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});
