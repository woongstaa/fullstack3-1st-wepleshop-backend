const prisma = require('./index');

const getUserByEmail = async (email) => {
  const [user] = await prisma.$queryRaw`
    SELECT 
      email, password 
    FROM 
      users 
    WHERE 
      email = ${email};
    `;
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
