# React-Typescript boilerplate

This is a base architecture app with React, Typescript, SCSS and Webpack, fully updated with latest dependacies. This base is without react-cli and fully build based on webpack itself for full customizability.

## Tech stack

This base application contain:

* Yarn base (why not?)
* React 17+
* Global state with multi reducers via React Context
* Typescript
* Webpack 5+
* Code splitting
* Mock Services with API simulations
* SASS styling with encapsulated modules
* Multiple build configuration for webpack
* Universal http loader based on any number of API calls.
* Web manifest for installing the app as PWA
* Supports .env file for env variables at compile time
* Support envriable varibles at runtime in express server via configs api
* Support imports SVGs as components via svgr
* Multi langauge supprot via i18next standard
* Unit testing and coverage setup
* Express server to run the production app
* TS-linting with official eslint
* Prettier

## Requirements

This application requires:

* `node 8.10.0` or above
* `npm 5.7.1` or above
* `yarn 1.2.*` or above
* To compile SCSS files, you need to `install python (2.7,3 or above)`

## Installation

Type `yarn install` in your root directory to install the dependacies.

## Development

To run the app in development use: `yarn start`
Application will run on `http://localhost:3000` by default.

## Production Build

For production you need to run: `yarn build`

## Testing via Jest

You can run the tests via: `yarn test`
`yarn test:ci` (to use the test without watching file changes)

## Coverage

You can run the tests via: `yarn coverage`
`yarn coverage:ci` (to use the coverage without watching file changes)

## Run express server:

`yarn serverDependencies` to install the express server dependacies
`yarn server` then listen to port 8080

## Swagger sample template

You can use `yarn swagger` to generate a set of sample APIs using my custom template inside api/generated folder,
you can find my custom typescript/axios based swagger template at root direcory insite template folder.

## Nswag sample template

You can use `yarn nswag` to generate a set of sample APIs using my custom template inside api/generated folder,
you can find my custom typescript/axios based swagger template at root direcory insite template folder.
