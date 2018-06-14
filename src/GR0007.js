require('./current_file').file(__filename);

/*
* [GR:0007:alpha]
* Simple SQLi
*/

var id = 10;
var query = 'SELECT * from user where id=' + id + ';'
