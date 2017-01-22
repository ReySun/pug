const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('test.jade');

// Render a set of data
console.log(compiledFunction({
    name: 'LLY'
}));
console.log(pug.renderFile('test.jade', {
    name: 'Timothy'
}));
pug.render('p Hello world!');