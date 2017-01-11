var
  Haiku = require('../models/Haiku.js');

module.exports = {
  index: (req, res) => {
    Haiku.find({}, (err, haikus) => {
      // respond here
      // The second arguments
      res.render("haikus/index", {title:"All the haikus", haikus});
    })
  },

  show: (req, res) => {
    Haiku.findById(req.params.id, (err, haiku) => {
      // respond here
      res.render("haikus/show", {haiku})
    })
  },

  new: (req,res) => {
    res.render("haikus/new");
  },

  edit: (req,res)=>{
    Haiku.findById(req.params.id, (err, haiku)=>{
      if(err) throw err;
      res.render("haikus/edit", {haiku});
    })
  },

  create: (req, res) => {
    console.log(req.body);
    Haiku.create(req.body, (err, haiku) => {
      if(err){
        console.log(err);
        res.redirect("/haikus/new");
      }
      else{
        res.redirect("/haikus/show");
      }
    })
  },

  update: (req, res) => {
    Haiku.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, haiku) => {
      if (err) throw err;
      res.render("haikus/show", {haiku});
    })
  },

  destroy: (req, res) => {
    Haiku.findByIdAndRemove(req.params.id, (err, haiku) => {
      // respond here
    })
  }
}
