# Vue + Tailwind Boilerplate for FiveM

A NUI / frontend development boilerplate for FiveM using Vue 3, Vue Router, Pinia, and TailwindCSS.

## Features

* Full boilerplate for FiveM with stores, event handling, etc.
* "Hot reloading" using RCON to restart the resource automatically.
* Dead simple build system using Laravel Mix.
* NuiProxy service for listening to events, and sending callbacks.

## What's included?

* Vue 3
* Vue Router with two pages.
* Pinia with two stores.
* TailwindCSS with SCSS, SFC, and inline examples.
* Axios for sending NUI callbacks.
* Mix for webpack support.
* RCON and Dotenv for easier development lifecycle.

## Usage

`ch-fivem-vue-boilerplate` is a full resource, so just drop it into your resources folder. Inside, the `nui` folder contains the Vue project (and a `dist` folder for built assets.) Run `npm install` in this folder to install dependencies, then `npm run dev` to kick off your first asset build.

The folder structure and files are laid out pretty intuitively and according to best practicess. `services/NuiProxy.js` contains some simple helper utilities for sending NUI callbacks (you can see this in use in the Pinia store actions) and for receiving events from the client (this is registered in `App.vue`.)

Several Node.js build commands are included;

* `npm run dev` runs a one-off dev build.
* `npm run watch` runs a watcher that rebuilds each time your files change.
* `npm run prod` runs a production build with tree shaking, minification, etc.

### Hot Reloading

This resource contains a "hot reloading" feature that allows your resource to automatically restart each time a build is triggered (either by `npm run dev` or more ideally `npm run watch`.)

To utilize hot reloading, you will need to enable RCON on your development FiveM server, then copy `nui/.env.example` to `nui/.env` and enter the RCON connection details. Additionally, be sure to update the resource name in `.env` so the build system knows which resource to restart.

## Support

Questions? I'm happy to try and help in my Discord. Join today at https://discord.gg/charleshacks.

## License

See [LICENSE.md](LICENSE.md).
