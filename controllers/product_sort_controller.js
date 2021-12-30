const productService = require("../services/product_sort_service");

const getSortedList = async (req, res) => {
    try {
        // category API를 통해 지정된 카테고리의 총 상품리스트를 req를 통해 받음
        const { productList } = req.body; 

        const sortedProducts = await productService.getSortedList(productList);
  
        return res.status(200).json({ data: sortedProducts });
      } catch (err) {
          console.log(err);
          return res.status(500).json({message: err.message});
      }
}

module.exports = { getSortedList }