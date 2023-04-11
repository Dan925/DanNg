import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: 'https://danng.netlify.app',
    integrations: [tailwind(), image({
        serviceEntryPoint: '@astrojs/image/sharp'
    }), sitemap()]
});
