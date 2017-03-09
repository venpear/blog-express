var express = require('express');
var User = require('../models/users');
var router = express.Router();

router.route('/')
      .post(function(req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.save(function(err){
          if(err)
            res.send(err);
          res.json({code:0,msg:'User Create Success'});
        })
      })
      .get(function(req,res){
        User.find(function(err,user){
          if(err) res.send(err)
          res.json({code:0,msg:user});
        })
      })

router.route('/:id')
      .get(function(req,res){
        User.findById(req.params.id,function(err,user){
          if(err) res.send(err)
          res.json({code:0,msg:user});
        })
      })
      .put(function(req,res){
        User.findById(req.params.id,function(err,user){
          if(err) res.send(err)
          //Update 的字段
           user.username = req.body.username || user.username;
           user.password = req.body.password || user.password;
           //save the User
           user.save(function(err){
             if(err) res.send(err)
             res.json({code:0,msg:'User Updated Success'});
           })
        })
      })
      .delete(function(req,res){
        User.remove({_id:req.params.id},function(err,user){
          if(err) res.send(err);
          res.json({code:0,msg:'User Delete Success'});
        })

      })
router.route('/sigin')
      .post(function(req,res){
        let wherestr ={"username":req.body.username,"password":req.body.password}
        User.find(wherestr,function(err,user){
            if(err)  res.send(err)
            if(user.length > 0){
              res.json({code:0,msg:user});
            }else{
              res.json({code:2,msg:"用户名或密码不存在！"});
            }
          })
      })

module.exports = router;
