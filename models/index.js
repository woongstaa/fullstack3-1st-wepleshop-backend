const { PrismaClient } = require('@prisma/client');
<<<<<<< HEAD

const prisma = new PrismaClient();

module.exports = prisma; 
=======
const prisma = new PrismaClient();

module.exports = prisma;

const productDetailDao = require('./product_deatil_dao');

module.exports = { productDetailDao };
>>>>>>> d3b43957478d8fb3ad70cb98e2f6b081fbe6e4a1
