export default function checkHealth(object) {
  let result = object.health > 50 ? 'healthy' : 'wounded';

  if (object.health < 15) {
    result = 'critical';
  }

  return result;
}
