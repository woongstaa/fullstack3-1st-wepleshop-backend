const prisma = require('./index');

const slide = async () => {
  const slider = await prisma.$queryRaw`
  SELECT
    slides.id,
    slides.title,
    slides.description,
    slides.img_url,
  FROM
    slides
  `;
  return slider;
};

module.exports = { slide };
