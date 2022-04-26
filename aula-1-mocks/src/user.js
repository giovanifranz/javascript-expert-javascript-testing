class User {
  constructor({ id, name, profession, age }) {
    this.id = parseInt(id);
    this.name = name;
    this.profession = profession;
    this.birthDate = new Date().getFullYear() - age;
  }
}

module.exports = User;
