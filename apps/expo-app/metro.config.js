// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

const extraNodeModules = {
  "@me/app-ui": path.resolve(workspaceRoot, "packages", "app-ui"),
};

// Remove my packages/*/node_modules to prevent conflict collision with my expo app node_modules
// Example : I need react-native in my package and my expo app. Without removing myPackage/node_modules, expo app can't boot on ios/android
config.resolver.blockList = [
  ...Object.values(extraNodeModules).map(
    (modulePath) =>
      new RegExp(`^${escape(path.resolve(modulePath, "node_modules"))}\\/.*$`)
  ),
];

// copy all my local packages/* (referenced in my expo app package.json dependencies) to my expo app node_modules
config.resolver.extraNodeModules = new Proxy(extraNodeModules, {
  get: (target, name) => {
    //redirects dependencies referenced in extraNodeModules to local node_modules, if match.
    return name in target
      ? target[name]
      : path.join(process.cwd(), `node_modules/${name}`);
  },
});

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages, and in what order
config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

module.exports = config;
