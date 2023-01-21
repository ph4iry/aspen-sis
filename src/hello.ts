import Client from './Client.js';

const aspen = new Client();
(async () => {
  await aspen.login('336770', 'Musician3');
  const a = await aspen.getClassDetails('courseName', 'alg');
  console.log(a);
})();