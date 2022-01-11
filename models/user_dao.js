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

const likeAndUnlike = async (user_id, product_id) => {
  const [likeExist] = await prisma.$queryRaw`
    SELECT 
      user_id,product_id
    FROM
      users_isLikes
    WHERE
      user_id=${user_id} and product_id=${product_id}
  `;

  if (!likeExist) {
    await prisma.$queryRaw`
    INSERT INTO
      users_isLikes (user_id, product_id)
    VALUES
      (${user_id}, ${product_id});
    `;
    return '좋아요 버튼을 누르셨습니다.';
  } else {
    await prisma.$queryRaw`
    DELETE FROM
      users_isLikes
    WHERE
      user_id=${user_id} and product_id=${product_id}
    `;
    return '좋아요를 취소하셨습니다.';
  }
};

const getUserIdByEmail = async (email) => {
  const [userId] = await prisma.$queryRaw`
    SELECT 
      id 
    FROM 
      users 
    WHERE 
      email = ${email};
    `;
  return userId;
};

module.exports = {
  getUserByEmail,
  createUser,
  likeAndUnlike,
  getUserIdByEmail,
};
