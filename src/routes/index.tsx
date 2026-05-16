import { createFileRoute } from "@tanstack/react-router";
import KhokharSite from "@/components/site/KhokharSite";

export const Route = createFileRoute("/")({
  component: KhokharSite,
  head: () => ({
    meta: [
      {
        title: "Khokhar Engineering Services · Civil, Electrical & Mechanical · Karachi",
      },
      {
        name: "description",
        content:
          "Khokhar Engineering Services — multi-disciplinary civil, electrical, and mechanical engineering and maintenance across Karachi. Roads, buildings, and industrial systems.",
      },
    ],
  }),
});
