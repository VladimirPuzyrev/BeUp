function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Authorization, x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
}

module.exports = cors