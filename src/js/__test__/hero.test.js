import Character from '../hero';

test('checking the operation of the parent class and methods', () => {
  const arrTestHero = [
    { name: 'afjangnaogago', type: 'Magician' }, { name: 'name', type: 'Maaagician' }, { name: 'name', type: 'Magician' },
  ];
  const newHero = new Character(arrTestHero[2].name, arrTestHero[2].type);
  expect(newHero).toEqual(newHero);
  newHero.levelUp();
  newHero.damage(10);
  expect(() => new Character(arrTestHero[1].name, arrTestHero[1].type)).toThrow('Ошибка!');
  expect(() => new Character(arrTestHero[0].name, arrTestHero[0].type)).toThrow('Ошибка!');
  newHero.damage(300);
  expect(() => { newHero.levelUp(); }).toThrow('Нельзя повысить уровень умершего!');
  expect(() => { newHero.damage(300); }).toThrow('Персонаж мертв!');
});
