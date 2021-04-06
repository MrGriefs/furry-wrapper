<h2 align="center"><a href="https://npmjs.com/package/yiff">Yiff</a> Rewrite</h2>

<p align="center">
<a href="https://patreon.com/yeen"><img alt="Patreon" src="https://img.shields.io/badge/patreon-donate?color=F77F6F&labelColor=F96854&logo=patreon&logoColor=ffffff"></a>
<a href="https://discord.gg/eazpsZNrRk"><img alt="Discord" src="https://img.shields.io/discord/368557500884189186?color=7389D8&labelColor=6A7EC2&logo=discord&logoColor=ffffff"></a>
<img alt="Travis (.org)" src="https://img.shields.io/travis/MrGriefs/furry-wrapper">
<img alt="David" src="https://img.shields.io/david/MrGriefs/furry-wrapper">
<img alt="node-current" src="https://img.shields.io/node/v/furry-wrapper">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/MrGriefs/furry-wrapper">
<a href="https://npm.runkit.com/furry-wrapper"><img alt="RunKit" src="https://img.shields.io/badge/Run-Kit-red"></a>
</p>
<p align="center">An extended wrapper based on <a href="https://github.com/hokkqi/yiff">Hokkqi's furry API wrapper</a>.</p>

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Included APIs](#included-apis)
  - [e621/e926](#e621-and-e926)
  - [FurryBot](#furrybot)
  - [Fox](#fox)
  - [Shibe](#shibe)
  - [Sheri Blossom](#sheri)
  - [API Options](#api-options)

## Introduction

Furry Wrapper allows you to easily interact with an abundance of web APIs with the aid of [axios](https://npmjs.org/package/axios) and ECMAScript 2017's [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await).

## Installation

With npm:  

```bash
$ npm install furry-wrapper
```

With yarn:  

```bash
$ yarn add furry-wrapper
```

## Usage

Try me on [RunKit](https://npm.runkit.com/furry-wrapper)  
<a href="https://discord.gg/eazpsZNrRk" target="_blank"><img alt="Discord" src="https://img.shields.io/discord/368557500884189186?color=7389D8&labelColor=6A7EC2&logo=discord&logoColor=ffffff"></a>  

Simply import the library and use whatever API directly:

```javascript
const wrapper = require('furry-wrapper') // CommonJS
import * as wrapper from "furry-wrapper" // ES6

wrapper.E6([query][, options]).then(r => /* do something */)
```

## Included APIs

| API                                    |   |
|----------------------------------------|---|
| [e621](https://e621.net)               | ✔️ |
| [e926](https://e926.net)               | ✔️ |
| [Furry Bot](https://yiff.rest)         | ✔️ |
| [Sheri Blossom](https://sheri.bot/api) | ✔️ |
| Extras                                 | ✔️ |

### e621 and e926

To make a request to e621.net:

```javascript
const { E6 } = require('furry-wrapper') // CommonJS
import E6 from "furry-wrapper"          // ES6

var query = ['score:>100', 'fox'] // Query can be a
var query = 'sunset rating:safe'  // string or array
// Check out the below link for valid query parameters
// https://e926.net/help/cheatsheet

var options // Optional library options

// Request e621 for a post abiding to our query
E6(query, options).then(post => console.log(post))

E6.nsfw(query, options) // The same as E6(query, options)
E6.sfw(query, options)  // Uses e926. Will only respond with SFW posts
```

The E6 module has its own custom options, allowing you to pass in `noCub` and `overrideTags` in the API options.

```javascript
E6.nsfw(query, {
    // Filters out underage characters
    noCub: true,
    // Appends additional tags which overide previos tag
    overrideTags: 'moon'
})
```

### FurryBot

Request the [Furry Bot API](https://yiff.rest) for images:

```javascript
const { FurryBot } = require('furry-wrapper') // CommonJS
import FurryBot from "furry-wrapper"          // ES6

var options

// Returns any random SFW image
FurryBot(options).then(r => console.log(r))

/*          Animals          */
// Returns any random animal image
FurryBot.animals(options).then(r => console.log(r))
// Returns a random image of a bird
FurryBot.animals.bird(options).then(r => console.log(r))
// Returns a random image of a "blep"
FurryBot.animals.blep(options).then(r => console.log(r))
// Returns a random image of a cheeta
FurryBot.animals.cheeta(options).then(r => console.log(r))
// Returns a random image of a fox
FurryBot.animals.fox(options).then(r => console.log(r))
// Returns a random image of a lynx
FurryBot.animals.lynx(options).then(r => console.log(r))
// Returns a random image of a tiger
FurryBot.animals.wolf(options).then(r => console.log(r))

/*          Furry          */
// Returns any random furry image
FurryBot.furry(options).then(r => console.log(r))
// Returns any random furry yiff image
FurryBot.furry.yiff(options).then(r => console.log(r))
// Returns a random image of a boop
FurryBot.furry.boop(options).then(r => console.log(r))
// Returns a random image of a cudd;e
FurryBot.furry.cuddle(options).then(r => console.log(r))
// Returns a random image of a flop
FurryBot.furry.flop(options).then(r => console.log(r))
// Returns a random image of a fursuit
FurryBot.furry.fursuit(options).then(r => console.log(r))
// Returns a random image of a hold
FurryBot.furry.hold(options).then(r => console.log(r))
// Returns a random image of a howl
FurryBot.furry.howl(options).then(r => console.log(r))
// Returns a random image of a hug
FurryBot.furry.hug(options).then(r => console.log(r))
// Returns a random image of a kiss
FurryBot.furry.kiss(options).then(r => console.log(r))
// Returns a random image of a lick
FurryBot.furry.lick(options).then(r => console.log(r))
// Returns a random image of a proposal
FurryBot.furry.propose(options).then(r => console.log(r))
// Returns a random image of a bulge
FurryBot.furry.bulge(options).then(r => console.log(r))

/*          Yiff          */
// Returns any random furry yiff image
FurryBot.yiff(options).then(r => console.log(r))
// Returns a random image of gay yiff
FurryBot.yiff.gay(options).then(r => console.log(r))
// Returns a random image of straight yiff
FurryBot.yiff.straight(options).then(r => console.log(r))
// Returns a random image of lesbian yiff
FurryBot.yiff.lesbian(options).then(r => console.log(r))
// Returns a random image of gynomorph yiff
FurryBot.yiff.gynomorph(options).then(r => console.log(r))
```

### Fox

Gives a random image of a fox

```javascript
const { Fox } = require('furry-wrapper') // CommonJS
import Fox from "furry-wrapper"          // ES6

Fox(options).then(r => console.log(r)) // Link to the image
```

### Shibe

Even more cute animal pictures:

```javascript
const { Shibe } = require('furry-wrapper') // CommonJS
import Shibe from "furry-wrapper"          // ES6

// A picture of a shibe
Shibe(options).then(r => console.log(r))
// The exact same
Shibe.shibe(options).then(r => console.log(r))
// A picture of a cat
Shibe.cat(options).then(r => console.log(r))
// A picture of a bird
Shibe.bird(options).then(r => console.log(r))
```

### Sheri

Allows you to easily interact with the [Sheri API](https://sheri.bot/api).
Sheri has too many endpoints to interact with in an optimised profession, so you will have the use the name of the endpoint.
You can find all endpoints [here](https://sheri.bot/api/urls)

```javascript
const { Sheri } = require('furry-wrapper') // CommonJS
import Sheri from "furry-wrapper"          // ES6

var endpoint = 'husky' // You can view all endpoints at https://sheri.bot/api/urls

Sheri(endpoint, options).then(r => console.log(r)) // Returns the response
```

### API Options

Additionally, each module allows you to pass in API options to customise your experience a tad more.

```javascript
var options = {
    // Allows you to pass in a token through the authorization header
    token: "OGhZVFNVRms6OGhZVFNVRms=",
    // The exact same as `token`
    auth,
    // Use your own custom user agent. User agent will always default to your Node.js version and OS name if no agent is provided
    agent: 'My Progamme, contact@example.com',
    // Allows you to apply your own axios options whenever axios is used.
    axiosOptions: {
        // Sets a specific amount of time in milliseconds that axios will wait until the requested server responds.
        timeout: 1000 
        // You can find other axios options at https://github.com/axios/axios#request-config
    }
}
```
