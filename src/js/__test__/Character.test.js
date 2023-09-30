// import Bowman from '../class/Bowman';
import Daemon from '../class/Daemon';

test('checking the operation of the parent class and methods', () => {
  const newHero = new Daemon('name');
  expect(newHero).toEqual(newHero);
  newHero.levelUp();
  newHero.damage(10);
  expect(() => new Daemon('name', 'Masfafer')).toThrow('Такого типа не существует!');
  expect(() => new Daemon('Aksmfxvoeasfmrascxzd')).toThrow('Имя должно содержать от 2 до 10 символов!');
  newHero.damage(3000);
  expect(() => { newHero.levelUp(); }).toThrow('Нельзя повысить уровень умершего!');
  expect(() => { newHero.damage(300); }).toThrow('Персонаж мертв!');
});
