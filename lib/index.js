
var gd     = require('gd');
var merge  = require('merge-recursive');

exports.conf = {
	imageMagick: false,
	cache: 'memory',  // "memory", "file", or "none"
};

exports.generate = function(conf) {
	conf = merge({ }, exports.conf, conf || { });
	var img = conf.imageMagick ? gd.subClass({ imageMagick: true }) : gd;

};





// ----------------------------------------------------------
