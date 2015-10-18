# Phaser Project Template
## What is the Phaser Project Template?

This is a simple project template I created to help add structure and automation to your next [Phaser](http://phaser.io/) game. It includes the following things:

*   A **package.json** for installing npm dependencies
*   **GruntFile.js** for automating build tasks and compiling your game
*   **src** folder where you can put your game code.
*   **deploy** folder where all code gets compiled to and you can push to a server

To get started all you need to do is copy of this template, install the latest version of [Phaser](http://phaser.io/), [NodeJS](http://nodejs.org) and [Grunt](http://gruntjs.com/).

## Installing NodeJS and Grunt

You can get a copy of NodeJS on its site [here](http://nodejs.org) and install it. 
After installing it you will want to install grunt from the command line.
Now you can install Grunt's command line tools by typing out the following:

    npm install -g grunt-cli

## Setting up the Template's Dependencies

Via the command line, navigate into the template directory's root and run the following command:

     npm install

After that you can simply run the following:

    grunt

You can start building a game with Phaser, simply modify the main.js file inside of the src/game directory. As long as you have the Grunt task running, your project will automatically recompile every time you make a change to any JavaScript file inside of the src directory. Once the project is recompiled, simply refresh your browser to see the changes. Also make sure you disable your browser's cache.