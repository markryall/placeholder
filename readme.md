# react and browserify placeholder application

    touch package.json

    npm install --save compression
    npm install --save express
    npm install --save morgan

    npm install --save browserify
    npm install --save react
    npm install --save coffeeify
    npm install --save uglifyjs

    browserify -t coffeeify --extension=".coffee" src/main.coffee -o scripts.js
    browserify -t coffeeify --extension=".coffee" -t reactify src/main.coffee | uglify -c > scripts.js

    npm start
    open http://localhost:5000
