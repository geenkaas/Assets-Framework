# BASE assets and default HTML structure for GEENKAAS Wordpress sites
In order to make front-end development and mostly maintenance easier this is a base for some default setup for basic HTML, CSS and JS assets.

The main idea of this setup is a solid base to work from and expand where they see fit for each project. Using this base will ensure that working on a new or existing project is smooth and does not need a lot of effort to figure out how the previous website was set it up. It will also give other developers easy to use examples to set up and extend existing code blocks.

It is not a design document and any styling elements are optional and opionated examples which can be changed.

## Preparation and compatibility
* nvm

Make sure you are running correct version of Node (^8.11.2) (if not, remove lockfile and NPM Packages and reinstall)
```
$ nvm ls
$ nvm install v8.11.2
```

## Setup
Download this repo
```
$ git clone ssh://git@source.sanoma.com:7999/trans/assets-structure.git
```

From assets folder:
```
$ cd assets
```

Install all required NPM packages
```
$ npm install
```

Install webpack
```
$ npm install --global webpack
```

## Development run
Run webpack
```
$ npm run dev
```

Load the [Local development server](localhost:8080 "Local development address") in your browser.

## Todo
* Write example and usage of forms
* Add a sticky sidebar example
* Add Font-awesome 5
* Add a default slider

## Done
* Write a README
* Basic JS setup
* Update webpack (inject CSS styling)
