const withPlugins = require("next-compose-plugins");
const path = require("path");
const withTM = require("next-transpile-modules")(["@me/web-ui"]);
const nextConfig = { reactStrictMode: true };

const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;
module.exports = withPlugins(
  [
    withTM({
      webpack: (config) => {
        // if (options.isServer) {
        //   config.externals = ["react", ...config.externals];
        // }

        config.resolve.modules = [
          path.resolve(projectRoot, "node_modules"),
          path.resolve(workspaceRoot, "node_modules"),
        ];

        return config;
      },
    }),
  ],
  nextConfig
);
