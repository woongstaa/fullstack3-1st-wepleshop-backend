const prisma = require('./index');

const slide = async () => {
  const slider = await prisma.$queryRaw`
  SELECT
    id,
    title,
    description,
    img_url
  FROM
    slides;
  `;
  return slider;
};

module.exports = { slide };
