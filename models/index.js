const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const product_detail_dao = require('./product_deatil_dao');

module.exports = { product_detail_dao, prisma };
