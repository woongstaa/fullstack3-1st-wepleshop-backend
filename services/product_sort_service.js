const productDao = require("../models/product_sort_dao");

const getSortedList = async (productList) => {
  const [ sortedList ] = await productDao.getSortedList(productList); 
  return sortedList; 
}
module.exports = getSortedList;