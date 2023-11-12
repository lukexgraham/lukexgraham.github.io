import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react()],
    manifest: {
        name: "Lucas Graham - Software Developer",
        short_name: "Lucas Graham",
        theme_color: "#42776a",
        icons: [
            {
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png",
            },
            {
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png",
            },
            {
                type: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png",
            },
        ],
    },
});
