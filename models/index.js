const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;

const productDetailDao = require('./product_deatil_dao');

module.exports = { productDetailDao };
