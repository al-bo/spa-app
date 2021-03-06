/**
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

var app     = require('../core'),
    console = window.console;
    /*,buffer  = {
        log:   [],
        info:  [],
        warn:  [],
        error: []
    }*/

// public
module.exports = {
    log: console.log.bind(console),

    info: function ( data, config ) {
        //console.log(data);
        if ( app.develop.wamp ) {
            app.develop.wamp.call('sendMessage', {data: data, config: config});
        }
    },

    assert: function ( /*data, config*/ ) {
        //console.log(data);
    }
};
