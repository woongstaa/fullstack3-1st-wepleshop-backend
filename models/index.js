const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;

const productDetailDao = require('./product_detail_dao');
const productSortDao = require('./product_sort_dao'); 

module.exports = { productDetailDao, productSortDao };
