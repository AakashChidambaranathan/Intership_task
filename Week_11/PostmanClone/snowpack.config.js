// Snowpack Configuration File
// https://www.snowpack.dev/reference/configuration

export default {
  mount: {
    public: "/",
    src: "/dist",
  },

  packageOptions: {
    // Prevent Snowpack from trying to bundle Node-only modules
    external: ["fs", "path"],
  },
};
