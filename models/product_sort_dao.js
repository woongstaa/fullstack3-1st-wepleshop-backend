const prisma = require('./index');

const getSortedList = async (productList) => {
    const sortedList = await prisma.$queryRaw``;
    return sortedList; 
  }

module.exports = getSortedList; 