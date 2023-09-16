const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

rl.question('Enter your personal information: ', (userInformation) => {
  // Create a random portion of the ID
  const randomPortion = generateRandomString(3);

  // Calculate an MD5 hash of the anonymized user information
  const anonymizedInformation = crypto.createHash('md5').update(userInformation).digest('hex').slice(0, 7);

  // Combine the random portion and hash to create a 10-character unique ID
  const uniqueId = anonymizedInformation + randomPortion;

  console.log('Unique ID:', uniqueId);

  rl.close();
});
