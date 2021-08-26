const { model } = require('mongoose');
const Task = require('../models/task');
module.exports.home = function(req,res){
    Task.find({} , function(err, tasks){
        if(err){
            console.log("Error in fetching contacts");
            return;
        }

        return res.render('home',{
            title : 'TODO List',
            task : tasks
        });
    });
};

module.exports.create_task=function(req,res){
    Task.create({
        description: req.body.description,
        date: req.body.date,
        category: req.body.category
    },function(err,newTask){
        if(err){
            console.log("Error in creating contact" + err);
            return;
        }
        return res.redirect('back');
    });
};


module.exports.delete_task=function(req,res){
    let id=req.query.id;
    var xy = JSON.parse(id);
    xy.forEach(idno => {
        Task.findByIdAndDelete(idno,function(err){
            if(err){
                console.log('Error in deleting an object from database');
                return;
            }
        });
    });
    return res.redirect('back');
};