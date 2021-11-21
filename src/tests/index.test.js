import checkHealth from '../index';

test.each([
  [{
    name: 'strong',
    health: 55,
  }, 'healthy'],
  [{
    name: 'silver',
    health: 40,
  }, 'wounded'],
  [{
    name: 'weak',
    health: 8,
  }, 'critical'],
])(('Проверка функции checkHealth'), (obj, exp) => {
  expect(checkHealth(obj)).toBe(exp);
});
