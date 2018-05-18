/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


        email: {
            type: 'string',
            unique: true,
            required: true,
            isEmail: true,
            maxLength: 250,
            example: "fianso@gmail.com"
        },
        name: {
            type: 'string',
            maxLength: 250,
            example: "Chalair"
        },
        firstName:{
            type: 'string',
            maxLength: 250,
            example: "Guy"
        },
        dateOfBirth:{
            type: 'number',
            isBefore: new Date()
        },
        sex:{
            type: "string",
            isIn: ['male','female']
        },
        password:{
            type: "string",
            encrypt: true,
            required: true
        },

        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

        team: {
            model: "team"
        },
        user_match:{
            model: "userMatch"
        },
        reserve:{
          collection: "reservation",
          via:"user"
        }
    },

};

