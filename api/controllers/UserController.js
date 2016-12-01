'use strict';

module.exports = {

    find: function(req, res) {
        const Client = require('node-rest-client').Client;
        const client = new Client();

        let args = {
            headers: {
                'Appid': 'df8c9d65dae717db86119ff87f2e5126',
                'Token': '9d6c090c'
            }
        };

        client.get('http://api.wdna.com.br/api/v1/user', args, function(data, response){
            return res.view({users: data});
        });
    }

};
