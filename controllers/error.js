exports.get404 = (req,res,next)=>{
    res.render('404',{
        pageTitle: 'Page Is Not Found',
    path: '/404'})
};