# react and browserify placeholder application

    touch package.json

    npm install --save compression
    npm install --save express
    npm install --save morgan

    npm install --save browserify
    npm install --save react
    npm install --save coffeeify
    npm install --save uglify-js

    browserify -t coffeeify --extension=".coffee" src/main.coffee > public/scripts.js
    browserify -t coffeeify --extension=".coffee" src/main.coffee | uglify -cm > public/scripts.js

    npm start
    open http://localhost:5000
