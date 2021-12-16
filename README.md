# Expo, Next.js & shared packages Monorepo Example

This is an example showing how to create Expo and Next.js apps in a monorepo.

___

## Architecture

### root package.json

I choose to use workspace `nohoist` because Expo and Next.JS crash on startup, due to different `react-*` versions.

Hoisting creates package resolution errors.

In this demo, every project has their own `node_modules`. The disk space lost is minor.

___

### packages

> Code shared between Expo and Next.js

**You can create all custom packages you want**

Here an example : 

`cd packages/app-ui`

**BONUS** : you can add devDependencies to your shared packages. Metro and Webpack config will take care of it.

/!\ you have to add these dependencies in your apps package.json. This is why I duplicate them in peerDependencies 

(Yes, I read my console warnings :D )

___

### apps

#### Expo

`cd apps/expo-app`

`yarn start-expo` to start expo-app from root directory


#### Next.js

`cd apps/next-app`

`yarn start-next` to start next-app from root directory


## Tips

### Root package.json

- Add common dev dependencies (prettier, eslint)

### apps/expo-app package.json

- Add all your Expo dependencies
- Run all your Expo Cli commands from here or create a script entry in root package.json

### apps/next-app package.json

- Add all your Next.js dependencies
- Run all your Next.js Cli commands from here or create a script entry in root package.json

## License

MIT
