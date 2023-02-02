(function() {

var md = require('markdown-it')({html: true, breaks: true});

md.use(require('./index.js'));
console.log(md.render(`# je suis un test

## humm 

<strong>HTML DEJA IMPLANTER</strong>

heheh
heheh
heheh

\\pagebreak

\\test


`));

})();