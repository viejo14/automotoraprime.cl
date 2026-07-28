import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Automotora Prime",
    short_name: "Prime",
    description:
      "Automotora en Puerto Montt con atención personalizada y vehículos seleccionados.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f2ed",
    theme_color: "#061f2b",
    lang: "es-CL",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
