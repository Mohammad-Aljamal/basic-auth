function notFoundHandler (req, res, next){
    res.status(404).send({
        cose: 404,
        route: req.path,
        Message: 'page not found',
    })

}

module.exports = notFoundHandler;