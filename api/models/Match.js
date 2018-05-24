/**
 * Match.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        duree: {
            type: 'number',
            isInteger: true,
            defaultsTo: 10
        },
        termine: {
            type: "boolean",
            defaultsTo: false
        },
        en_cours:{
            type:"boolean",
            defaultsTo: false
        },
        red_score:{
            type: "number",
            isInteger: true,
            defaultsTo: 0
        },
        blue_score:{
            type: "number",
            isInteger: true,
            defaultsTo: 0
        },
        red_players:{
            collection: "user",
        },
        blue_players:{
            collection: "user",
        },

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

        babyfoot: {
            model: "babyfoot",
            required: true
        },

        users:{
            collection: "userMatch",
            via: "match"
        }


    },

};

