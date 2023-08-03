const skills = [
    { id: 1, name: 'HTML', proficiency: 'Intermediate' },
    { id: 2, name: 'CSS', proficiency: 'Intermediate' },
    { id: 3, name: 'Javascript', proficiency: 'Intermediate' },
    { id: 4, name: 'Express', proficiency: 'Beginner' }
  ];

module.exports = {
    getAll, 
    getOne, 
    create
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = Number(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    console.log(skill.id) 
    skill.proficiency = 'Beginner'
    skill.name = skill.skill
    skills.push(skill)
}