const productModule = require("../modules/product.module");
const { push } = require("../routs/Route");

const createProduct = (req, res) => {
  const { name, categories, wight } = req.body;
  // const name = req.body.name
  // categories = req.body.categories
  // wight = req.body.wight

  productModule
    .create({
      name,
      // name: name
      categories,
      wight,
    })
    .then((p) => {
      res.status(200).json({ message: "Done", product: p });
    });
};

const getProductCategories = async (req, res) => {
  const allProducts = await productModule.find();

  var categories = [];
  allProducts.forEach((product) => {
    categories.push(...product.categories);
  });

  const categirySet = new Set(categories);
  categories = Array.from(categirySet);

  res.status(200).json(categories);
};

const deleteProducte = (req , res) => {
    productModule.deleteOne({name:req.body.name})
    .then(delRes => {
        res.status(200).json(delRes)
    })
}

module.exports = {
  createProduct,
  getProductCategories,
  deleteProducte
};
