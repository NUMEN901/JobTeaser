const bcrypt = require('bcryptjs');

(async () => {
  const adminPassword = 'admin';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  console.log('Hashed password:', hashedPassword);
})();