export default class Character {
  constructor(name, type) {
    const typeObject = {
      Bowman: { name: 'Bowman', attack: 25, defence: 25 },
      Swordsman: { name: 'Swordsman', attack: 40, defence: 10 },
      Magician: { name: 'Magician', attack: 10, defence: 40 },
      Undead: { name: 'Undead', attack: 25, defence: 25 },
      Zombie: { name: 'Zombie', attack: 40, defence: 10 },
      Daemon: { name: 'Daemon', attack: 10, defence: 40 },
    };

    if (name.length < 2 || name.length > 10 || typeObject[type] === undefined) {
      throw new Error('Ошибка!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = typeObject[type].attack;
    this.defence = typeObject[type].defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего!');
    }

    this.level += 1;
    this.attack += this.attack + ((this.attack * 20) / 100);
    this.defence += this.defence + ((this.defence * 20) / 100);
    this.health = 100;
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('Персонаж мертв!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
