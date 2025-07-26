# Satori Compat

[![npm version](https://badge.fury.io/js/satori-multi.svg)](https://badge.fury.io/js/satori-multi)

A simple re-compiled version of the [satori](https://github.com/vercel/satori) library for use in CommonJS or ESM environments.

## Installation

```bash
yarn add satori-multi
```

## Usage

Use `satori-multi` just like you would use `satori`. Here's a basic example:

```typescript
import satori from "satori-multi"

const svg = await satori(<div style={{ color: "black" }}>hello, world</div>, {
  width: 600,
  height: 400,
  fonts: [
    {
      name: "Roboto",
      data: robotoArrayBuffer,
      weight: 400,
      style: "normal",
    },
  ],
})
```
