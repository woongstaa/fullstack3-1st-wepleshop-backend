const prisma = require('./index');
const bcrypt = require('bcrypt');

function hashing(password) {
  const hashed = bcrypt.hashSync(password, 10);
  return hashed;
}

const getUserByEmail = async (email) => {
  const [user] = await prisma.$queryRaw`
    SELECT 
      email, password 
    FROM 
      users WHERE email = ${email}
    `;
  console.log('user in dao: ', user);
  return user;
};

const createUser = async (name, email, password) => {
  password = hashing(password);
  const createData = await prisma.$queryRaw`
        INSERT INTO 
          users (name, email, password ) 
        VALUES 
          (${name}, ${email}, ${password})
        `;

  return createData;
};

module.exports = { getUserByEmail, createUser };
