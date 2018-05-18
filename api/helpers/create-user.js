var bcrypt = require('bcryptjs')

module.exports = {


    friendlyName: 'Create user',


    description: '',



    //le helper doit connaitre les champs quil utilise

    inputs: {
        email: {
            type: 'string'
        },
        name: {
          type: 'string'
        },
        password: {
            type: 'string'
        }

    },


    exits: {
        invalid: {
            responseType:'badRequest',
            description: "Email and/or password invalid"
        },
        EmailAlreadyInUse: {
            statusCode: 409,
            description: "Email already in use"
        },
    },


    fn: async function (inputs, exits) {
        console.log('************')
        console.log(inputs)
        var attr = {
            email: inputs.email.toLowerCase(),
            name: inputs.name,
            password: inputs.password
        };

        if(inputs.password){
            inputs.password = await bcrypt.hash(inputs.password, 10)
            let user = await User.create(attr)
                .intercept('E_UNIQUE', () => 'EmailAlreadyInUse')
                .intercept({name: 'UsageError'}, () => 'Invalid')
                .fetch()

            return exits.success(user);
        } else {
            return exits.invalid("Missing password")
        }

    }
};
