# Component library & playground

#### Dark mode

<p align="center">
    <img alt="Dark theme components preview"  src="https://github.com/Amber-Williams/component-library/blob/main/assets/Dark.png" width="500"/>
</p>

#### Light mode

<p align="center">
    <img alt="Light theme components preview"  src="https://github.com/Amber-Williams/component-library/blob/main/assets/Light.png" width="500"/>
</p>

### Component library

This library extends MUI's material library which a React wrapper built on Google's Material UI component library. It transpiles down to raw JavaScript so should be able to be used with any React projects, _potentially_ Web Components and other JavaScript frameworks as well.

- install dependencies - `pnpm install`
- compile the library - `pnpm build`

### Playground

This is an ease of use playground using Vite that can plug into the local component library's build files used to test before publishing

- install dependencies `cd playground && pnpm install`

There isn't hot reloading _currently_ so you will need to uninstall the component library package, to ensure package caching doesn't get in the way the best way to do this is to remove all packages before reinstalling and rerunning

- _recommended_ manual reload - `cd playground && rm -rf node_modules/@amber/component-library/ && pnpm install && pnpm dev`
