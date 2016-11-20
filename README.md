# Sails Angular Starter

a [Sails](http://sailsjs.org) application

For more details, see the README.md in each root folder.

## Get started

Install homebrew. http://brew.sh/
```
brew update
brew install mongodb
```
Create a file called local.js in /config

There is a sample one at /config/local.example

```
npm i -g sails bower
npm i
bower install
sails lift

Your app will be running on http://localhost:1337
```

If using Mongo, run this in another terminal window...

```
mongod &
```

## What it does

- Development mode and prod mode not just prod files
- File generators
- Local database and production database support
- Bower used for front end dependencies
- NPM for back end dependencies
- AngularJs 1.x for the front end
- SailsJs for the back end
- Grunt
- Passport is used to manage oauth
- JSCS and JShint
- Grunt ng-annotate
- Less
- Clean up the HTML and css
- Unit and integration tests
- Watch task to auto build on changes
- Populate Index.html automatically

## Full list of what techs we use?

- Mongo, SailsJs, Anguar, Ui-Router, Grunt, Underscore.js
- Passport oauth setup = https://www.youtube.com/watch?v=WXNsNchK74M
- Have a look in the package.json and bower.json file for more.
