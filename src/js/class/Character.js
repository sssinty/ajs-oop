export default class Character {
  constructor(name, type) {
    const typeObject = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов!');
    } else {
      this.name = name;
    }

    if (!typeObject.includes(type)) {
      throw new Error('Такого типа не существует!');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего!');
    } else {
      this.level += 1;
      this.attack += this.attack + ((this.attack * 20) / 100);
      this.defence += this.defence + ((this.defence * 20) / 100);
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('Персонаж мертв!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
