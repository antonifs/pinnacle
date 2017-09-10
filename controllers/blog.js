exports.list = function(req, res, next){
    res.render(
        '../views/pages/blog_list'
    );
}

exports.post = function(req, res, next){
    res.render(
        '../views/pages/blog_post'
    );
}