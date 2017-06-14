var fs = require('fs');
var htmlNavbar = fs.readFileSync(__dirname + '/templates/navbar.html', 'utf8');
var htmlModal = fs.readFileSync(__dirname + '/templates/modal.html', 'utf8');

function runAtBegin($templateCache) {
  $templateCache.put('navbar.html', htmlNavbar);
  $templateCache.put('modal.html', htmlModal);
}

module.exports = runAtBegin