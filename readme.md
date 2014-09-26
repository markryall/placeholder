# react and browserify placeholder application

- created package.json
- npm install --save browserify
- npm install --save react
- npm install --save coffeeify
- npm install --save uglifyjs
- browserify -t coffeeify --extension=".coffee" src/main.coffee -o scripts.js
- browserify -t coffeeify --extension=".coffee" -t reactify src/main.coffee | uglify -c > scripts.js
- python -m SimpleHTTPServer
- [open](http://localhost:8000)
