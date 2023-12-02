import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const cherryPickedKeys = ["REACT_APP_SERVER_URL"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnv = {};
  cherryPickedKeys.forEach(key => (processEnv[key] = env[key]));

  return {
    define: {
      "process.env": processEnv,
    },
    plugins: [react(), tsconfigPaths()],
  };
});
