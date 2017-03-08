var express = require('express');
var User = require('../models/users');
var router = express.Router();


//
router.route('/')
      .post(function(req, res) {
        var user = new User();
        user.username = req.body.name;
        user.password = req.body.pwd;

        user.save(function(err){
          if(err)
            res.send(err);
          res.json({msg:'User Create Success'});
        })
      })
      .get(function(req,res){
        User.find(function(err,user){
          if(err) res.send(err)
          res.json(user);
        })
      })

router.route('/:id')
      .get(function(req,res){
        User.findById(req.params.id,function(err,user){
          if(err) res.send(err)
          res.json(user);
        })
      })
      .put(function(req,res){
        User.findById(req.params.id,function(err,user){
          console.log(req.body);
          if(err) res.send(err)

          //Update 的字段
           user.name = req.body.name || user.name;
           user.pwd = req.body.pwd || user.pwd;
           //save the User
           user.save(function(err){
             if(err) res.send(err)
             res.json({msg:'User Updated Success'});
           })
        })
      })
      .delete(function(req,res){
        User.remove({_id:req.params.id},function(err,user){
          if(err) res.send(err);
          res.json({msg:'User Delete Success'});
        })

      })

module.exports = router;
