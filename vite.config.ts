import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { URL, fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      core: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
