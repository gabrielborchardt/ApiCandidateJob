const jsonwebtoken = require('jsonwebtoken');

const jwt = {
    Verify: function(req, res, next){
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            console.log('bearerToken: '+bearerToken)
            console.log('process.env.SECRET: '+process.env.SECRET)

            jsonwebtoken.verify(bearerToken, process.env.SECRET, function(err, decoded) {
                if (err) return res.status(500).send({ auth: false, message: 'Falha ao autenticar o token.' });
                req.userId = decoded.id;
                next();
            });
        } else {
            return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        }        
    },
    Sign: function(id){
        const token = jsonwebtoken.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
          })
        return token
    }
};

module.exports = jwt;  