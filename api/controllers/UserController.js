/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

module.exports = {

    login: async function (req, res) {
        var user = await User.findOne({
            email: req.body.email,
            name: req.body.name
        })
        if (!user) return res.notFound()

        console.log("_____");
        console.log(req.body.password);
        console.log(user);

        await bcrypt.compare(req.body.password, user.password);

        let token = jwt.sign({user: user.id}, sails.config.jwt.jwtSecret, {expiresIn: sails.config.jwt.jwtExpiresIn})

        return res.ok({
            token: token,
            user: {
                email: user.email,
                name: user.name,
                team: user.team,
                id: user.id
            }
        });

    },
    logout: function (req, res) {

    },
    register: async function (req, res) {
        if (_.isUndefined(req.body.email)) {
            return res.badRequest('mail manquant')
        }
        if (_.isUndefined(req.body.password)) {
            return res.badRequest('met un mdp')
        }
        if (req.body.email.length < 2) {
            return res.badRequest('mdp de merde')
        }

        console.log('***')
        console.log(req.body.email)

        let user = await
            sails.helpers.createUser.with({
                    email: req.body.email,
                    name: req.body.name,
                    password: req.body.password
                }
            )

        let token = jwt.sign({user: user.id}, sails.config.jwt.jwtSecret, {expiresIn: sails.config.jwt.jwtExpiresIn})

        return res.ok({
            token: token,
            user: {
                email: user.email,
                name: user.name
            }
        });

    },

}