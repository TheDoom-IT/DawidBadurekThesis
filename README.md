# Thesis
Computer Science Engineering Thesis at Warsaw University of Technology

## Title
Creation of Three.js-React.js integration component for real time scientific visualisations.

## Description
Prepare a npm package with React component capable to display WebGL or Three.js visualisations of online published data. Preparing an example application which uses such component using CERN ALICE example data.

Component should be cross-platform, although development should be done under Linux.

## Repository
This is a monorepo containing two projects:
- `/package` - package called `react-three-component` adding React components that uses Three.js to render 3D graphics. 
- `/app` - app using `react-three-component` package. It is designed to display CERN ALICE scientific data.

## How to run?
To run both projects a Node.js version **16.17.1** is required.
It can be installed directly from the [Node.js](https://nodejs.org/en) website or with the 
usage of tools like [nvm](https://github.com/nvm-sh/nvm) or [rtx](https://crates.io/crates/rtx-cli).
### Package
Install dependencies:
```
npm i
```
Local development (package will be built after every code change):
```
npm run watch
```
Build:
```
npm run build
```
Tests:
```
npm run test
```
#### Publishing the package
```bash
npm run build
# Before publishing make sure you are logged in to the registry.
# It can be done with `npm login`
npm publish
```

### App
Install dependencies:
```
npm i
```
#### Development with the react-three-component version from NPM registry:
Run local server:
```
npm run dev
```
#### Development with the local react-three-component:
By default, app uses package published to the NPM registry. It is also possible to develop the package locally
and simultaneously use it in the app. 
To do that remove the `react-three-component` dependency from the app `package.json`, build the package (`npm run build`)
and then run the following command:
```
npm run link
```
Now, the local `react-three-component` will be used to run the application. Finally, start a local server:
```
npm run dev
```

To undo this process and use the package version directly from the registry:
```
npm i react-three-component
```
Now the app will use the package from the registry.

#### Build:
```
npm run build
```