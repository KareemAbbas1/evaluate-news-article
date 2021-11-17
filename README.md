# Evaluate News Article 
(Sentiment Analyzer)
<br /><br /><br />

## Table of Content
<hr>

* Description 
* Functionality

* Technologies
* Installation
* Development Strategy
<hr>

### Description

* Evaluate News Article is a web tool that runs sentiment analysis on articles and blogs using an article or a blog's URL. The tool utilizes NLP (Natural language processing) by consuming a third party API, Meaning Cloud API.
<hr>

### Functionality
* The tool works by passing to it a URL for an article or a blog, and it runs sentiment analysis on that article or blog and return a brief analysis containing:
    * The tone of the text:
       - Agreement >> Agreement or Disagreement
       - Confidence >> Confident or Unconfident
       - Irony >> Serious or Sarcastic<br /> <br />
    * Subjectivity >>  Subjective (opinion based) or Objective (fact based).
    * Polarity >> Positive, Neutral, or Negative.
<hr>

### Technologies
#### Frontend:
* HTML
* CSS
* JavaScript
* Webpack
* Meaning Cloud API
#### Backend:
* Node.js (runtime environment)
* Express (backend framework)
#### Testing:
* Jest (testing framework)
<hr>

### Installation
* Clone or download the repo to your local machine using  <pre> git clone --repo URL--/ to clone the repo
or download the zip folder and extract files on your machine
* Open the project folder in your text editor. Inside your text editor, open the integrated terminal and run <pre> npm install /or/ yarn install
to install the project dependencies 
* After installing the dependencies, split your integrated terminal because you're going to run two servers, the backend server and the project development server.
* In the first terminal tab run <pre> npm start /or/ yarn start
* In the second terminal tab run <pre> npm build-dev /or/ yarn build-dev
* Finally, open your browser and navigate to the URL (http://localhost:8080)
note that the backend server is running on port 8081 and the development server is running on port 8080, so don't get distracted. The actual project is running on port 8080.

* The last script incase you want to actually build the project is <pre> npm build-prod /or/ yarn build-prod 
but in this case, after you build the project, you need to only run 
npm start /or/ yarn start
and navigate to (http://localhost:8081) where the production version of the project is located.

### Development Strategy
* The project has one HTML file, one CSS file, and the JS code is distributed in    multiple modules that are bundled by webpack using the loaders:
  - babel/core, @babel/preset-env, babel-loader for JS files.
  - style-loader, node-sass, css-loader, sass-loader for CSS files.
* After bundling, webpack uses multiple plugins that run processes on the final bundle:
  * clean-webpack-plugin to clean the build folder
  * html-webpack-plugin to generate an HTML file for the build folder
  * mini-css-extract-plugin to minify the CSS code for production
  * optimize-css-assets-webpack-plugin terser-webpack-plugin to optimize the project assets like logos and pictures. Eventually, all of these plugins are used to enhance the performance after pushing to production.
* The backend development strategy:
  - Setup Node.js & Express environment.
  - Setup a server and route data through the app.
  - Integrate an external API into the app and data routes.
  - Use HTTP POST & GET requests to create persistent data in the app.
  - Use Axios fetch API to update the UI based on HTML input forms and external API data.
