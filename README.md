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
### Package
Local development:
```
npm i
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

### App
#### Local development:
```
npm i
npm run dev
```
#### Local development with the package:

By default, app uses package published to the NPM registry. It is also possible to develop the package and simultaneously use it in the app. To do that run the following command before starting the app(`npm run dev`):
```
npm run link
```
To undo this process run again:
```
npm i
```
Now the app should use the package from the registry.

#### Build:
```
npm run build
```

#### Publish:
```
npm publish
```
