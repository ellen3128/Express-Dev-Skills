const Skill = require('../models/skill');

module.exports = {
  index,
  getOne: show,
  new: newSkill,
  create: createSkill,
  delete: deleteOne
}

function index(req,res) {
    const contextObject = {
        title: 'All Skills',
        skills: Skill.getAll()
    }
    res.render('skills/index', contextObject)
}

function show(req, res) {
    const id = req.params.id
    const contextObject = {
        title: 'Show Page',
        skill: Skill.getOne(id)
    }
    res.render('skills/show', contextObject)
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' })
}

function createSkill(req, res) {
    Skill.create(req.body);
    console.log('req.body', req.body)
    res.redirect('/skills');
}

function deleteOne(req, res){
    const id = Number(req.params.id)
    Skill.destroy(id)
    res.redirect('/skills')
}