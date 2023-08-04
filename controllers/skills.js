const Skill = require('../models/skill');

module.exports = {
  index,
  getOne: show,
  new: newSkill,
  create: createSkill,
  delete: deleteOne,
  edit,
  update 
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
    // console.log('req.body', req.body)
    res.redirect('/skills');
}

function deleteOne(req, res){
    const id = Number(req.params.id)
    Skill.destroy(id)
    res.redirect('/skills')
}

function edit(req, res) {
    const id = req.params.id;
    // res.send(Skill.getOne(id));
    // console.log(Skill.getOne(id));
    res.render("skills/edit", {title: "Skill Edit", skill: Skill.getOne(id)});
    // console.log(Skill.getOne(id));
}

function update (req, res) {
    const id = Number(req.params.id)
    req.body.id = id
    // console.log(id)
    Skill.update(id, req.body)
    // console.log(req.body)
    res.redirect(`/skills/${id}`)
}