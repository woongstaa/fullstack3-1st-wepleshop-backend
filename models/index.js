const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;

const productListDao = require('./product_list_dao');
const slideDao = require('./slide_dao');

module.exports = { productDetailDao, productSortDao };
