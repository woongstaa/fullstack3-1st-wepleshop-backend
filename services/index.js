const productListService = require('./product_list_service');
const slideService = require('./slide_service');
const productDetailService = require('./product_detail_service');
const userService = require('./user_service');
const productCategoryService = require('./product_category_service');
const productCartService = require('./product_cart_service');

module.exports = {
  productDetailService,
  productCategoryService,
  userService,
  productListService,
  slideService,
  productCartService,
};
