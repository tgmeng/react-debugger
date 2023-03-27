import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { flowPlugin, esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __DEV__: true,
    __EXPERIMENTAL__: false,
    __PROFILE__: false,
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()],
    },
  },
  resolve: {
    alias: {
      "react-reconciler/src/ReactFiberHostConfig": path.join(
        __dirname,
        "./react/packages/react-reconciler/src/forks/ReactFiberHostConfig.dom-browser"
      ),
      "shared/ReactSharedInternals": path.join(
        __dirname,
        "./react/packages/react/src/ReactSharedInternals.js"
      ),
      shared: path.join(__dirname, "./react/packages/shared"),
      react: path.join(__dirname, "./react/packages/react"),
      "react-dom": path.join(__dirname, "./react/packages/react-dom"),
      "react-dom-bindings": path.join(
        __dirname,
        "./react/packages/react-dom-bindings"
      ),
      "react-reconciler": path.join(
        __dirname,
        "./react/packages/react-reconciler"
      ),
    },
  },
  plugins: [flowPlugin(), react()],
});
