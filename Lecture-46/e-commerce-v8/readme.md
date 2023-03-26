# Steps to setup a NodeJS project  🔨 .

## Steps to setup babel with NodeJS
1. Create a package.json file use `npm init`
2. Setup babel to compile the latest ES6 code to backward version 

3. Install babel packages as dev dependencies using `npm install -D @babel/core @babel/node @babel/preset-env @babel/cli` 

4. Create `.babelrc` file in your root directory and paste the below code inside it

```
{
    "presets": [
    ["@babel/env", {
        "targets": {
            "node": "current"
        }
    }]
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread"
    ]
}
```

5. Add babel scripts to your package.json file 

```
"scripts": {
        "build": "babel ./src --out-dir ./build",
        "start": "node build/server.js",
        "dev": "nodemon --exec babel-node src/server.js",
        "lint": "npx eslint .",
        "lint:fix": "npx eslint --fix .",
        "test": "echo \"Error: no test specified\" && exit 1"
}
```

6. Install `express, mongoose, ejs` etc. using `npm` 

7. Create `src` and `tests` folder inside root directory.

8. Create `app.js and server.js` files inside `src` folder.

9. Add simple server code as given in the project in the respective files and run the project using `npm run dev`.

## Steps to add ESLint to your project

1. Install eslint to your project as dev dependency using `npm i -D eslint`

2. Run the command to setup eslint configuration `npm eslint --init`

3. Add script as specified above to lint the project `"lint": "npx eslint ."` in package.json file.

4. Add eslint script to fix the errors `"lint:fix": "npx eslint --fix ."`

## Shopping cart deployed heroku link  👇 
[https://obscure-temple-39637.herokuapp.com](https://obscure-temple-39637.herokuapp.com)

    