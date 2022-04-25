const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [profName, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(profName, github), err => {
    if (err) throw new Error(err);
    console.log("Portfolio complete")
})