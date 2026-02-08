import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Wstrzykuje Google Analytics przy buildzie (nie w index.html – przetrwa pull z zewn. repo).
// ID ustaw w .env: VITE_GA_ID=G-XXXXXXXX
function injectGoogleAnalytics() {
  const gaId = process.env.VITE_GA_ID;
  if (!gaId) return null;
  return {
    name: "inject-google-analytics",
    transformIndexHtml(html: string) {
      const snippet = `
    <!-- Google tag (gtag.js) – wstrzyknięte przy buildzie -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    </script>`;
      return html.replace("</head>", `${snippet}\n  </head>`);
    },
  };
}

// https://vitejs.dev/config/
// VITE_BASE_PATH ustawiane przy deployu na OVH (np. /portfolio/)
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE_PATH || "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), injectGoogleAnalytics()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
