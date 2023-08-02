const Skill = require('../models/skill');

module.exports = {
  index,
  getOne: show,

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