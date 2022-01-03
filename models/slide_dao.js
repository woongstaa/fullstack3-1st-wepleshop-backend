const prisma = require('./index');

const productList = async (id) => {
  const slide = await prisma.$query`
  SELECT
    slides.id
  `;
};
