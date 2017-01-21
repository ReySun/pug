const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('index.pug');

// Render a set of data
console.log(compiledFunction({
    name: 'LLY'
}));
console.log(pug.renderFile('index.pug', {
    name: 'Timothy'
}));
pug.render('p Hello world!');