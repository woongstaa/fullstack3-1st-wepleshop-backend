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
  const createData = await prisma.$queryRaw`
        INSERT INTO 
          users (name, email, password ) 
        VALUES 
          (${name}, ${email}, ${password})
        `;

  return createData;
};

const like = async (user_id, product_id) => {
  const like = await prisma.$queryRaw`
    INSERT INTO
      likes (product_id, user_id)
    VALUES
      (${product_id}, ${user_id});
    `;
  return like;
};

const unLike = async (user_id, product_id) => {
  const unLike = await prisma.$queryRaw`
    DELETE FROM
      likes
    WHERE
      product_id=${product_id} and user_id=${user_id}
    `;
  return unLike;
};

const likeExist = async (user_id, product_id) => {
  const [likeExist] = await prisma.$queryRaw`
    SELECT 
      user_id,product_id
    FROM
      likes
    WHERE
      user_id=${user_id} and product_id=${product_id}
  `;
  return likeExist;
};

module.exports = { getUserByEmail, createUser, like, unLike, likeExist };
