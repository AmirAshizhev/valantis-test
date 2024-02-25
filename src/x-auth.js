const md5 = require('md5');

function generateXAuth(password) {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const xAuthValue = md5(`${password}_${timestamp}`); 
  console.log(`${timestamp}_${password}`)
  return xAuthValue;
}

const password = 'Valantis';
export const xAuth = generateXAuth(password);
console.log(xAuth)


export const URL = 'http://api.valantis.store:40000/'