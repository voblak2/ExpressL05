'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "default_price" to table "category"
 *
 **/

var info = {
    "revision": 2,
    "name": "category_model_default_price",
    "created": "2019-09-08T01:57:18.104Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "category",
        "default_price",
        {
            "type": Sequelize.INTEGER,
            "field": "default_price",
            "allowNull": true
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
