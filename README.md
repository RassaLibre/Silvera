#SILVERA
A very simple development stack to get you up and running with:

1. TypeScript
2. React
3. Redux
4. ImmutableJS
5. Webpack
6. SASS with Autoprefixer

SILVERA is inspired by my other [repo](https://github.com/RassaLibre/react-seed) which is a fork from [badsyntax's](https://github.com/badsyntax) [react-seed](https://github.com/badsyntax/react-seed). The goal is to provide a very simple development stack which is enough to let you write amazing apps + it is easy to extend.

##What do you need?
You need Webpack, TypeScript, TSLint and Typings. It is good to have them as globals:  

	npm install webpack -g
	npm install typescript -g
	npm install tslint -g
	npm install typings -g
	
Once you clone the repo, run:
	
	typings install
	
and then:

	npm install
	
and if everything works just fine, type:

	npm start
	
to run the app. To build the app, simply run:

	npm run build
	

##Recommended reading
If you think that Webpack is scary (and lets be honest, it is!) try reading this:

[Beginners Guide to Webpack](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.7nmamgvac)
