module.exports = function (req,res,proceed){
    //headers
    //chercher objet authorization
    //split authorization et prendre ce dont on a besoin
    //check if 401
    //renvoyer une reponse avec un code 401 il ny a pas de token
    //sinon ca s'est bien passé en checkant jsonwebtoken.verify
    //


    module.exports = function(req, res, next) {
        var token;

        if ( req.headers && req.headers.authorization ) {
            var parts = req.headers.authorization.split(' ');
            if ( parts.length == 2 ) {
                var scheme = parts[0],
                    credentials = parts[1];

                if ( /^Bearer$/i.test(scheme) ) {
                    token = credentials;
                }
            } else {
                return res.json( 401, { err: { status: 'danger', message: res.i18n('auth.policy.wrongFormat') }});
            }
        } else if ( req.param('token') ) {
            token = req.param('token');
            // We delete the token from param to not mess with blueprints
            delete req.query.token;
        } else {
            return res.json( 401, { err: { status: 'danger', message: res.i18n('auth.policy.noAuthorizationHeaderFound') }});
        }


        jwt.verify(token, sails.config.jwt.jwtSecret, function(err, decodedToken) {
            if ( err ) return res.json( 401, { err: { status: 'danger', message: res.i18n('auth.policy.invalidToken'), detail: err }});

            req.token = decodedToken.sub;

            next();
        });
    };
}