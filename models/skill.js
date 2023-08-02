const skills = [
    { id: 1, name: 'HTML', proficiency: 'Expert' },
    { id: 2, name: 'CSS', proficiency: 'Intermediate' },
    { id: 3, name: 'Javascript', proficiency: 'Intermediate' },
    { id: 4, name: 'Express', proficiency: 'Beginner' }
  ];

module.exports = {
    getAll, 
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = Number(id)
    return skills.find(skill => skill.id === id)
}

