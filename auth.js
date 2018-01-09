var key = 'knock knock'
module.exports = {checkKey: function()=> {
  if(req.body.pass == key) {
    next();
  }else{
    res.status(401).send('Not Authorized');
  }
}};
