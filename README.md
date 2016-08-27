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
mongod
sails lift

Your app will be running on http://localhost:1337
```

## What it does

- Modern web standards (done)
- Development mode and prod mode not just prod files (done)
- File generators (done)
- Local database and production database support (done)
- Self contained project (done)
- Bower used for front end dependencies (done)
- AngularJs for the front end (done)
- SailsJs for the back end (done)
- No reliance on any of the Library-sdk code (done)
- No reliance on any other projects that we built (done)
- Grunt and not Make (done)
- Mongo database (done)
- Passport is used to manage oauth (done)
- Its hosted on private github and not behind a vpn model (done)
- JSCS and JShint (done)
- Easier workflow (done)
- Grunt ng-annotate (done)
- Less (done)
- File names in camelCase (done)
- Variables in camelCase (done)
- Clean up the HTML and css (done but could be better)
- grunt check my code (done)
- Unit and integration tests (done)
- Watch task to auto build on changes (done)
- Populate Index.html automatically (done)

## Full list of what techs we use?

- Mongo, SailsJs, Anguar, Ui-Router, Grunt, Underscore.js
- Passport oauth setup = https://www.youtube.com/watch?v=WXNsNchK74M
- Have a look in the package.json and bower.json file for more.
